# 📋 File Download Checklist

Use this checklist to ensure you've downloaded all files from Figma Make to your local environment.

---

## ✅ Configuration Files (Already Created)
- [x] package.json
- [x] vite.config.ts
- [x] tsconfig.json
- [x] postcss.config.js
- [x] index.html
- [x] main.tsx
- [x] .gitignore
- [x] .env.example
- [x] README.md
- [x] SETUP_GUIDE.md

---

## 📄 Core Files to Copy

### Root Level
- [ ] `/App.tsx` - Main app component with routing

### Styles
- [ ] `/styles/globals.css` - Tailwind configuration and theme

### Utils
- [ ] `/utils/supabase/info.tsx` - Supabase credentials
- [ ] `/utils/supabase/info-local.tsx` (optional - for env variables)

---

## 🧩 Components to Copy

### Main Components
- [ ] `/components/AnimatedHeader.tsx`
- [ ] `/components/CompanyLogos.tsx`
- [ ] `/components/Footer.tsx`
- [ ] `/components/Head.tsx`
- [ ] `/components/Logo.tsx`
- [ ] `/components/Navigation.tsx`
- [ ] `/components/PageWrapper.tsx`

### Figma Components
- [ ] `/components/figma/ImageWithFallback.tsx`

### UI Components (Copy entire `/components/ui/` folder)
- [ ] `/components/ui/accordion.tsx`
- [ ] `/components/ui/alert-dialog.tsx`
- [ ] `/components/ui/alert.tsx`
- [ ] `/components/ui/aspect-ratio.tsx`
- [ ] `/components/ui/avatar.tsx`
- [ ] `/components/ui/badge.tsx`
- [ ] `/components/ui/breadcrumb.tsx`
- [ ] `/components/ui/button.tsx`
- [ ] `/components/ui/calendar.tsx`
- [ ] `/components/ui/card.tsx`
- [ ] `/components/ui/carousel.tsx`
- [ ] `/components/ui/chart.tsx`
- [ ] `/components/ui/checkbox.tsx`
- [ ] `/components/ui/collapsible.tsx`
- [ ] `/components/ui/command.tsx`
- [ ] `/components/ui/context-menu.tsx`
- [ ] `/components/ui/dialog.tsx`
- [ ] `/components/ui/drawer.tsx`
- [ ] `/components/ui/dropdown-menu.tsx`
- [ ] `/components/ui/form.tsx`
- [ ] `/components/ui/hover-card.tsx`
- [ ] `/components/ui/input-otp.tsx`
- [ ] `/components/ui/input.tsx`
- [ ] `/components/ui/label.tsx`
- [ ] `/components/ui/menubar.tsx`
- [ ] `/components/ui/navigation-menu.tsx`
- [ ] `/components/ui/pagination.tsx`
- [ ] `/components/ui/popover.tsx`
- [ ] `/components/ui/progress.tsx`
- [ ] `/components/ui/radio-group.tsx`
- [ ] `/components/ui/resizable.tsx`
- [ ] `/components/ui/scroll-area.tsx`
- [ ] `/components/ui/select.tsx`
- [ ] `/components/ui/separator.tsx`
- [ ] `/components/ui/sheet.tsx`
- [ ] `/components/ui/sidebar.tsx`
- [ ] `/components/ui/skeleton.tsx`
- [ ] `/components/ui/slider.tsx`
- [ ] `/components/ui/sonner.tsx`
- [ ] `/components/ui/switch.tsx`
- [ ] `/components/ui/table.tsx`
- [ ] `/components/ui/tabs.tsx`
- [ ] `/components/ui/textarea.tsx`
- [ ] `/components/ui/toggle-group.tsx`
- [ ] `/components/ui/toggle.tsx`
- [ ] `/components/ui/tooltip.tsx`
- [ ] `/components/ui/use-mobile.ts`
- [ ] `/components/ui/utils.ts`

---

## 📄 Pages to Copy

### Main Pages
- [ ] `/pages/Landing.tsx` ⚠️ Contains image imports to fix
- [ ] `/pages/Work.tsx` ⚠️ Contains image imports to fix
- [ ] `/pages/Services.tsx`
- [ ] `/pages/Perspective.tsx`
- [ ] `/pages/About.tsx`
- [ ] `/pages/Contact.tsx`

### Work Detail Pages
- [ ] `/pages/work/BookletDesign.tsx` ⚠️ Contains image imports to fix
- [ ] `/pages/work/DeepFaked.tsx` ⚠️ Contains image imports to fix
- [ ] `/pages/work/ExploringSynth.tsx` ⚠️ Contains image imports to fix
- [ ] `/pages/work/FKAExperimental.tsx` ⚠️ Contains image imports to fix
- [ ] `/pages/work/PunkPoster.tsx` ⚠️ Contains image imports to fix
- [ ] `/pages/work/SpeechAnimation.tsx` ⚠️ Contains image imports to fix

---

## 🖼️ Images & Assets

### Create This Folder Structure
```
/public/
  /images/
    (place all downloaded images here)
  favicon.svg (or favicon.ico)
  og-image.jpg (for social media preview)
```

### Images to Download
Check each page file for `figma:asset` imports and download those images.

**Landing.tsx uses:**
- image_9cf8e81592317c3ffc09cfed1a2736b7227dc6b8.png
- image_f1cd33ec8e9345bd0f679a276e7ecf94cd459301.jpg
- deepfaked image (020630d6...)
- synth game image (89493c58...)
- motion design image (7d82fa16...)
- image_35251037ff9722f551eca4dcb04cedb9c9c68ddb.png
- image_c7723b203e235a05b5e68bab55f6be65327e4963.png

**Work detail pages use additional images** - check each file.

### SVG Imports
If you have `/imports/` folder with SVGs, copy the entire folder.

---

## 🔧 Backend Files (Supabase)

- [ ] `/supabase/functions/server/index.tsx` - Main server
- [ ] `/supabase/functions/server/kv_store.tsx` - Database utilities

---

## 📚 Optional Documentation

- [ ] `/guidelines/Guidelines.md`
- [ ] `/Attributions.md`
- [ ] `/DOMAIN_SETUP_GUIDE.md`

---

## 🔄 After Copying All Files

### 1. Fix Image Imports (Important!)

Search for `figma:asset` in your project:
```bash
# In VS Code: Cmd+Shift+F (Mac) or Ctrl+Shift+F (Windows)
# Search for: figma:asset
```

Replace each instance:
```tsx
// FROM:
import img from 'figma:asset/abc123.png';

// TO:
import img from '/images/my-descriptive-name.png';
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create .env File
```bash
cp .env.example .env
# Edit .env with your credentials
```

### 4. Start Development
```bash
npm run dev
```

---

## 🎯 Quick Copy Commands

If you have all files in a zip/folder from Figma Make:

```bash
# Navigate to your project folder
cd cristian-portfolio

# Copy all tsx/ts files (adjust path as needed)
cp -r /path/to/figma-export/* .

# Keep our config files
# (They're already created, so overwrite if needed)
```

---

## ✨ Final Verification

Before running `npm run dev`, verify:
- [ ] All `.tsx` and `.ts` files are in correct folders
- [ ] `/styles/globals.css` exists
- [ ] `/components/` folder has all subfolders
- [ ] `/pages/` folder has all pages
- [ ] `package.json` exists
- [ ] `.env` file created from `.env.example`
- [ ] Images downloaded to `/public/images/`
- [ ] `figma:asset` imports replaced with `/images/` paths

---

## 💡 Pro Tip

Use VS Code's file explorer:
1. Right-click folders → "New File"
2. Paste file name exactly as shown
3. Copy content from Figma Make
4. Paste into new file
5. Save (Cmd+S / Ctrl+S)

Repeat for each file!

---

**Once complete, you're ready to run: `npm install` then `npm run dev`** 🚀
