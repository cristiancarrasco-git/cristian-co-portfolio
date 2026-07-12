# Next task: Pictures & subpages

**Status:** Ready to start  
**Goal:** Replace placeholder covers with real project imagery and finish each work subpage with case-study photos, copy, and navigation.

---

## Current state

| Area | Status |
|------|--------|
| Routes / subpages | ✅ All 10 case-study routes exist in `src/app/App.tsx` |
| Featured project covers (Landing + Work) | ⚠️ **Placeholder SVGs** for Pokey, Nature, CLA, Blunit |
| Other project covers | ✅ Real images from `src/assets/` |
| Case study body content | ⚠️ Varies — some pages rich (DeepFaked, Booklet), others thin (Nature, Blunit) |

### Placeholder covers to replace first

These use `WorkCoverPlaceholder` instead of photos:

1. **Pokey Battle Predictors** → `/work/pokey-battle-predictors`
2. **Nature Conservatory** → `/work/nature-conservatory`
3. **Casa Lica (CLA)** → `/work/casa-lica`
4. **Blunit Final** → `/work/blunit-final`

---

## Step 1 — Gather source images

Export or copy hero/cover images from your project archives (see `guidelines/project-artifacts.md`):

| Project | Source archive |
|---------|----------------|
| Pokey Battle Predictors | `/Users/crissy/Downloads/UX Design Case Pokemon -20260506T234835Z-3-001.zip` |
| Casa Lica | `/Users/crissy/Downloads/CLA - Share with Cristian-20260506T234925Z-3-001.zip` |
| Blunit Final | `/Users/crissy/Downloads/project 3 group 3-20260507T072019Z-3-001.zip` |
| Nature Conservatory | Figma Make / local exports |

**Naming:** Save into `src/assets/` with descriptive names, e.g. `cover-pokey-battle.png`.

---

## Step 2 — Wire cover images

Update **`src/app/pages/Landing.tsx`** and **`src/app/pages/Work.tsx`**:

```tsx
// Before (placeholder)
{ cover: 'pokey', link: '/work/pokey-battle-predictors' }

// After (real image)
import coverPokey from 'figma:asset/cover-pokey-battle.png';
{ image: coverPokey, link: '/work/pokey-battle-predictors' }
```

Remove `cover: 'cla' | 'pokey' | ...` entries once each has an `image` import.

---

## Step 3 — Build out subpages

For each case study under `src/app/pages/work/`:

- [ ] **Hero / cover image** at top of page
- [ ] **2–4 section images** (process, UI, final)
- [ ] **Pull quotes** and outcome metrics where available
- [ ] **Prev / next project** links at bottom (optional)
- [ ] Match structure in `guidelines/work-project-case-study-format.md`

### Priority order

1. Pokey Battle Predictors (featured, hiring story)
2. Casa Lica (featured, client work)
3. Nature Conservatory (featured, brand)
4. Blunit Final (featured, UX case study)
5. Remaining pages — add gallery sections where missing

---

## Step 4 — Verify after deploy

- [ ] Landing carousel shows real photos (not arch/grid placeholders)
- [ ] `/work` grid matches Landing
- [ ] Each `/work/*` URL loads directly (refresh test — needs `404.html` SPA fallback)
- [ ] Images load over **https://** (no mixed content warnings)
- [ ] Mobile: images crop correctly in cards

---

## Files to touch

| File | Change |
|------|--------|
| `src/assets/*` | Add cover + case-study images |
| `src/app/pages/Landing.tsx` | Swap placeholders → images |
| `src/app/pages/Work.tsx` | Swap placeholders → images |
| `src/app/pages/work/*.tsx` | Add image sections per project |
| `src/app/components/WorkCoverPlaceholder.tsx` | Delete when no longer used |

---

## Done when

- Zero `WorkCoverPlaceholder` usage on Landing and Work
- Each featured project subpage has at least one hero image + two content images
- All `/work/*` routes pass direct-load refresh test on cristian-co.com
