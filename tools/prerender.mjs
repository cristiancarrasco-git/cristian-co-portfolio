// Pre-renders the built React SPA (dist/) into a framework-free, multi-page
// static site (site/): one real index.html per route, all assets copied, and a
// small vanilla-JS bundle for the mobile menu, featured carousel, and contact
// forms. The output needs no build step and no framework — just static files
// you can upload to any host (e.g. GoDaddy).

import { createServer } from 'node:http';
import { readFile, writeFile, mkdir, rm, cp, readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { extname, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO = join(__dirname, '..');
const DIST = join(REPO, 'dist');
const OUT = join(REPO, 'site');
const CHROME =
  process.env.CHROME_PATH ||
  ['/usr/bin/google-chrome-stable', '/usr/local/bin/google-chrome', '/usr/bin/chromium'].find(
    (p) => existsSync(p)
  );

const ROUTES = [
  '/',
  '/work',
  '/work/exploring-synth',
  '/work/booklet-design',
  '/work/speech-animation',
  '/work/deepfaked',
  '/work/punk-poster',
  '/work/fka-experimental',
  '/work/casa-lica',
  '/work/pokey-battle-predictors',
  '/work/nature-conservatory',
  '/work/blunit-final',
  '/services',
  '/perspective',
  '/about',
  '/contact',
];

const MIME = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

// Minimal static server for dist/ with SPA fallback to index.html.
function startServer() {
  const server = createServer(async (req, res) => {
    try {
      let p = decodeURIComponent(req.url.split('?')[0]);
      let filePath = join(DIST, p);
      if (p.endsWith('/')) filePath = join(filePath, 'index.html');
      if (!existsSync(filePath) || (await stat(filePath)).isDirectory()) {
        // SPA fallback: unknown routes serve index.html so React can render them.
        if (!extname(p)) filePath = join(DIST, 'index.html');
      }
      if (!existsSync(filePath)) {
        res.writeHead(404);
        res.end('not found');
        return;
      }
      const body = await readFile(filePath);
      res.writeHead(200, { 'Content-Type': MIME[extname(filePath)] || 'application/octet-stream' });
      res.end(body);
    } catch (e) {
      res.writeHead(500);
      res.end(String(e));
    }
  });
  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => resolve(server));
  });
}

function outPathFor(route) {
  if (route === '/') return join(OUT, 'index.html');
  return join(OUT, route.replace(/^\//, ''), 'index.html');
}

function relPrefixFor(route) {
  const depth = route === '/' ? 0 : route.replace(/^\//, '').split('/').length;
  return '../'.repeat(depth);
}

// Rewrite absolute URLs -> relative, and route links -> per-page relative dirs.
function rewrite(html, route, origin) {
  const prefix = relPrefixFor(route);
  // Absolute asset references (also strip the dev server origin if present).
  html = html.split(`${origin}/assets/`).join(`${prefix}assets/`);
  html = html.split('="/assets/').join(`="${prefix}assets/`);
  html = html.split("='/assets/").join(`='${prefix}assets/`);
  html = html.split('url(/assets/').join(`url(${prefix}assets/`);
  html = html.split(`${origin}/`).join(prefix || './');
  // Internal route links -> relative directory URLs.
  for (const r of ROUTES) {
    if (r === '/') continue;
    const target = `${prefix}${r.replace(/^\//, '')}/`;
    html = html.split(`href="${r}"`).join(`href="${target}"`);
    html = html.split(`href="${r}/"`).join(`href="${target}"`);
  }
  // Root link.
  html = html.split('href="/"').join(`href="${prefix || './'}"`);
  // Inject our stylesheet + script (placeholders already relative).
  html = html.replace('</head>', `  <link rel="stylesheet" href="${prefix}assets/app.css" />\n</head>`);
  html = html.replace('</body>', `  <script src="${prefix}assets/app.js" defer></script>\n</body>`);
  return html;
}

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let y = 0;
      const step = Math.max(200, Math.floor(window.innerHeight * 0.8));
      const timer = setInterval(() => {
        window.scrollBy(0, step);
        y += step;
        if (y >= document.body.scrollHeight + window.innerHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 120);
    });
  });
}

async function main() {
  if (!CHROME) throw new Error('No Chrome binary found. Set CHROME_PATH.');
  if (!existsSync(DIST)) throw new Error('dist/ not found. Run `npm run build` first.');

  const server = await startServer();
  const { port } = server.address();
  const origin = `http://127.0.0.1:${port}`;
  console.log(`serving dist/ at ${origin}`);

  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  await rm(OUT, { recursive: true, force: true });
  await mkdir(OUT, { recursive: true });

  for (const route of ROUTES) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
    await page.goto(`${origin}${route}`, { waitUntil: 'networkidle0', timeout: 60000 });
    await new Promise((r) => setTimeout(r, 2000)); // mount animations
    await autoScroll(page); // trigger whileInView (once:true) sections
    await new Promise((r) => setTimeout(r, 1200));

    // Strip the React runtime + preloads so the page is pure static HTML/CSS.
    await page.evaluate(() => {
      document
        .querySelectorAll('script[type="module"], link[rel="modulepreload"], link[rel="preload"][as="script"]')
        .forEach((el) => el.remove());
    });

    let html = await page.content(); // includes doctype
    html = rewrite(html, route, origin);

    const dest = outPathFor(route);
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, html, 'utf8');
    console.log(`  ${route}  ->  ${dest.replace(REPO + '/', '')}`);
    await page.close();
  }

  await browser.close();
  server.close();

  // Copy assets (minus the React JS bundle) + CNAME.
  await cp(join(DIST, 'assets'), join(OUT, 'assets'), { recursive: true });
  for (const f of await readdir(join(OUT, 'assets'))) {
    if (/^index-.*\.js$/.test(f)) await rm(join(OUT, 'assets', f));
  }
  if (existsSync(join(DIST, 'CNAME'))) await cp(join(DIST, 'CNAME'), join(OUT, 'CNAME'));

  // Copy the hand-written vanilla JS/CSS.
  await cp(join(__dirname, 'static'), join(OUT, 'assets'), { recursive: true });

  // 404 page (Apache/GoDaddy served via .htaccess).
  let notFound = await readFile(join(OUT, 'index.html'), 'utf8');
  await writeFile(join(OUT, '404.html'), notFound, 'utf8');

  // .htaccess for GoDaddy (Apache): custom 404 + long cache for hashed assets.
  const htaccess = [
    'ErrorDocument 404 /404.html',
    '',
    '<IfModule mod_expires.c>',
    '  ExpiresActive On',
    '  ExpiresByType image/png "access plus 1 year"',
    '  ExpiresByType image/jpeg "access plus 1 year"',
    '  ExpiresByType text/css "access plus 1 month"',
    '  ExpiresByType text/javascript "access plus 1 month"',
    '</IfModule>',
    '',
  ].join('\n');
  await writeFile(join(OUT, '.htaccess'), htaccess, 'utf8');

  console.log('done. static site written to site/');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
