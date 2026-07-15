# AGENTS.md

## Cursor Cloud specific instructions

### Master source of truth
- **The committed source at the repository root is the single master source.** The app (a Vite + React 18 + TypeScript SPA, Figma Make export) lives directly at the repo root: `package.json`, `vite.config.ts`, `index.html`, `src/`, `public/`, etc. Edit and commit these files normally.
- There is no zip bundle and no `app/` working directory anymore — earlier revisions shipped the code as a committed zip that was unpacked into a git-ignored `app/`. That model is retired; **do not reintroduce the zip or an `app/` copy.** If you find a stray `app/` directory, it is a leftover artifact and can be deleted.
- Design source of truth is **Figma Make** (see `guidelines/FIGMA_SOURCE_OF_TRUTH_AND_CHECKLIST.md`). Treat the linked Figma file as canonical for colors, spacing, and layout; the repo-root code is the canonical implementation of it.
- The sibling `Portfolio` repo in this environment is empty (README only); there is nothing to run there.

### Running / building (all commands from the repo root)
- Dev server: `npm run dev` → Vite serves at `http://localhost:5173/`. It is a client-side-routed SPA (`react-router`); routes like `/work`, `/services`, `/about` are handled in-app.
- Production build: `npm run build` → `vite build` then copies `dist/index.html` to `dist/404.html`. The `404.html` copy is intentional: it makes GitHub Pages serve the SPA for deep links (e.g. `/work/casa-lica`) that would otherwise 404. This build is also the closest thing to a compile check.

### Lint / tests
- There is **no lint or automated test tooling** — `package.json` only defines `dev` and `build`, and there is no `tsconfig`/ESLint/Prettier/test config. Do not expect `npm test`/`npm run lint` to exist. Use `npm run build` as the correctness check.

### Non-obvious notes
- `vite.config.ts` defines a custom `figma:asset/*` resolver mapping to `src/assets`, and aliases `@` to `src/app`. The React and Tailwind Vite plugins are both required by Make and must not be removed.
- Deploy: `.github/workflows/deploy-pages.yml` builds on Node 20 with `npm ci` → `npm run build` and publishes `dist/` to GitHub Pages; the custom domain is set via `CNAME` (`cristian-co.com`). The app also builds/runs fine on the Node 22 present in this environment.
- Extra developer docs live under `guidelines/` and `src/app/*.md` (setup guides, workflow, case-study format).
