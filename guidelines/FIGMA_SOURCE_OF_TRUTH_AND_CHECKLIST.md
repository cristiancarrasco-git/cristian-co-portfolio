# Figma as source of truth — checklist for you

Use this so the next agent (or you) can finish polish without inventing a bland template.

## Locked from Figma (do not drift)

- **Color tokens** — `--primary`, `--muted`, `--accent`, etc. in `src/styles/globals.css` / `default_theme.css`
- **Spacing rhythm** — keep Tailwind scale + existing section padding (`px-4 md:px-6`, `max-w-7xl`, etc.)
- **Accent usage** — reuse existing header variants (`AnimatedHeader` `variant` prop), not new rainbow gradients ad hoc

## Allowed to evolve (already started in code)

- **Narrative** — hero on `Landing.tsx`, case study copy on `CasaLica` + `PokeyBattlePredictors`
- **Helvetica-first type** — `--font-sans` in `globals.css` + occasional **display scale** in headlines (still same family)
- **“Punk art deco”** — light geometric decoration only in `WorkCoverPlaceholder.tsx` (token colors, no new palette)

## Source files (reference)

1. **Figma Make — Portfolio Website Prototype (primary UI / layout source of truth)**  
   https://www.figma.com/make/rPxSgzr4zvfwKMeEKghOEv/Portfolio-Website-Prototype?t=b8iLnwm02s64air3-20&fullscreen=1&preview-route=%2Fwork%2Fexploring-synth  

   *Same file key as the README `figma.com/design/...` link (`rPxSgzr4zvfwKMeEKghOEv`), opened in **Make** with a preview route. Your codebase now flags **Casa Lica** and **Pokey Battle Predictors** in the first work slots—when you open Make, consider updating the preview route to `/work/casa-lica` or `/work` for parity.*

2. **Figma Board — Customer journey / user flow (narrative & journey baseline)**  
   https://www.figma.com/board/boW2IIhrFSV7eesPqDtisc/Customer-Journey-Map-and-User-Flow-Template--Community-?node-id=0-1&p=f&t=cn6mpkfRj9pHzNGm-0  

## You still need to provide

1. **Hero thumbnails** for the two flagship pieces (replace placeholders):
   - Export two frames (16:9 or 4:3) matching Figma  
   - Add under `src/assets/work/` and wire in `Work.tsx` + `Landing.tsx` by switching `cover` items to `image: importedFile` like the other projects

2. **Live Pokey URL** — documented and linked from `PokeyBattlePredictors.tsx`: https://cristiancarrasco-git.github.io/Pokebattle-v.1/ · local zips/PDF: see `guidelines/project-artifacts.md`

3. **Optional**: Replace intro video on `Landing` if you want a calmer first impression for hiring managers

## Quick QA (design vs code)

- [ ] Compare nav + footer spacing to Figma frame  
- [ ] No new hex colors outside existing CSS variables  
- [ ] Both case studies readable at 375px width  
- [ ] `/work/casa-lica` and `/work/pokey-battle-predictors` reachable from home grid and `/work` carousel
