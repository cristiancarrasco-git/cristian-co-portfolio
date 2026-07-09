# AGENTS.md

## Cursor Cloud specific instructions

### What this repo is
- `cristian-co-portfolio` is the deployable source for the site at `cristian-co.com` (see `CNAME`).
- The actual application is a **Figma Make export**: a Vite + React 18 + TypeScript single-page app. It ships committed as a single zip (`Portfolio-Website-Prototype-github-upload-25mb-final.zip`) rather than as loose files.
- The sibling `Portfolio` repo in this environment is empty (README only); there is nothing to run there.

### Where the app lives after setup
- The startup/update script unpacks the zip into `app/` (which is git-ignored). The real project files (`package.json`, `vite.config.ts`, `src/`, etc.) live under `app/`.
- Unpacking is idempotent: it only re-extracts when `app/package.json` is missing, so edits under `app/` survive VM restarts.
- Because `app/` is git-ignored, changes there are NOT tracked by git. To change the site's source in a committable way you must update it inside the zip bundle (the repo's chosen distribution format), not just edit `app/`.

### Running / building (all commands run from `app/`)
- Dev server: `npm run dev` → Vite serves at `http://localhost:5173/`. It is a client-side-routed SPA (`react-router`); routes like `/work`, `/services`, `/about` are handled in-app.
- Production build: `npm run build` (outputs `app/dist/`). This is also the closest thing to a compile/type check.

### Lint / tests
- There is **no lint or automated test tooling** — `package.json` only defines `dev` and `build`. Do not expect `npm test`/`npm run lint` to exist. Use `npm run build` as the correctness check.

### Non-obvious notes
- `src/main.tsx` contains a leftover debug block (`__debugLog`) that POSTs to `http://127.0.0.1:7266`; it is wrapped in `.catch(() => {})` and is harmless when nothing listens there.
- CI (`app/.github/workflows/deploy-pages.yml`) uses Node 20 and `npm ci` → `npm run build`; the app also builds/runs fine on the Node 22 present in this environment.
- `vite.config.ts` defines a custom `figma:asset/*` resolver mapping to `src/assets`, and `@` aliased to `src/app`.
