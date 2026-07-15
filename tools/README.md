# Static site build (framework-free)

This produces `site/` — a **plain HTML/CSS/JS** version of the portfolio with a
real HTML file per page. It has **no framework and no build step at deploy
time**, so you can upload it to any host (GoDaddy, cPanel, S3, Netlify, etc.).

The React/Figma-Make project in `src/` is kept as the **design/source document**;
`site/` is the deployable output generated from it.

## What `site/` contains

```
site/
  index.html                     # /
  work/index.html                # /work/
  work/<case-study>/index.html   # e.g. /work/casa-lica/
  services/ perspective/ about/ contact/  (each an index.html)
  404.html                       # custom not-found page
  .htaccess                      # Apache/GoDaddy: 404 + asset caching
  CNAME                          # custom domain (cristian-co.com)
  assets/                        # all images, compiled CSS, app.js, app.css
```

- Every internal link is **relative**, so the site works whether it is served
  from a domain root or a subfolder, and even when opened through a local
  static server.
- `assets/app.js` + `assets/app.css` reimplement the interactive behavior that
  used to be React: the mobile nav menu, the "Featured UX Projects" carousel,
  the one-time landing intro splash, and the contact/footer forms (which POST to
  the same Supabase endpoint the React app used).

## Deploy to GoDaddy

1. Open the `site/` folder.
2. Upload **its contents** (not the folder itself) into your hosting web root
   — typically `public_html/` — via the GoDaddy File Manager or SFTP/FTP.
   Include the hidden `.htaccess` file.
3. That's it — no Node, npm, or build required on the server.

To preview locally before uploading:

```bash
cd site
python3 -m http.server 8090   # then open http://localhost:8090/
```

## Regenerating `site/` (only when the React source changes)

Requires Node and a Chrome/Chromium binary (used headlessly to pre-render).

```bash
# from the repo root
npm install          # once, installs the React app deps
npm run build        # builds dist/

cd tools
npm install          # once, installs puppeteer-core
CHROME_PATH=/usr/bin/google-chrome-stable npm run generate
```

`tools/prerender.mjs` builds each route in a headless browser (waiting for
on-scroll animations), strips the React runtime, rewrites absolute URLs to
relative, copies all assets, and writes the static pages into `site/`.
Hand-written interactivity lives in `tools/static/app.js` and
`tools/static/app.css`.
