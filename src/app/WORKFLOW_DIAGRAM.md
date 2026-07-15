# 🔄 Development Workflow Diagram

Visual guide to understanding how everything connects.

---

## 📦 Project Setup Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    FIGMA MAKE PROJECT                        │
│                                                              │
│  ✅ Your portfolio is fully built here                      │
│  ✅ ~70 component files                                     │
│  ✅ Supabase backend configured                             │
│  ✅ All animations working                                  │
└──────────────────────┬───────────────────────────────────────┘
                       │
                       │ 📥 DOWNLOAD ALL FILES
                       ↓
┌─────────────────────────────────────────────────────────────┐
│                    YOUR LOCAL COMPUTER                       │
│                                                              │
│  1. Create project folder: cristian-portfolio/              │
│  2. Copy all .tsx/.ts files from Figma Make                │
│  3. Download images → /public/images/                       │
│  4. Configuration files already created ✅                  │
└──────────────────────┬───────────────────────────────────────┘
                       │
                       │ npm install
                       ↓
┌─────────────────────────────────────────────────────────────┐
│                    NODE_MODULES FOLDER                       │
│                                                              │
│  📦 All dependencies installed (~200MB)                     │
│  - React, TypeScript, Vite, Tailwind, etc.                 │
└──────────────────────┬───────────────────────────────────────┘
                       │
                       │ npm run dev
                       ↓
┌─────────────────────────────────────────────────────────────┐
│                    DEVELOPMENT SERVER                        │
│                                                              │
│  🌐 http://localhost:5173                                   │
│  ⚡ Hot reload enabled                                      │
│  👁️  Watches for file changes                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔄 Daily Development Cycle

```
┌──────────────┐
│   VS CODE    │
│              │
│  Edit files  │
│  Save (⌘+S)  │
└──────┬───────┘
       │
       │ File change detected
       ↓
┌──────────────┐
│    VITE      │
│              │
│  Rebuilds    │
│  instantly   │
└──────┬───────┘
       │
       │ Hot Module Replacement
       ↓
┌──────────────┐
│   BROWSER    │
│              │
│  Updates     │
│  without     │
│  refresh     │
└──────────────┘
```

**Result**: Changes appear in ~100ms! ⚡

---

## 🏗️ Build Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         SOURCE CODE                          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  App.tsx                → Main app component                │
│  ├── Router            → Handles navigation                 │
│  │   ├── Landing.tsx   → Home page                         │
│  │   ├── Work.tsx      → Portfolio page                    │
│  │   ├── Services.tsx  → Services page                     │
│  │   ├── About.tsx     → About page                        │
│  │   └── Contact.tsx   → Contact form                      │
│  │                                                          │
│  ├── Navigation.tsx    → Global nav bar                    │
│  ├── Footer.tsx        → Global footer                     │
│  └── components/ui/    → Reusable components               │
│                                                              │
│  styles/globals.css    → Tailwind config                   │
│  utils/supabase/       → Backend connection                │
└──────────────┬───────────────────────────────────────────────┘
               │
               │ npm run build
               ↓
┌─────────────────────────────────────────────────────────────┐
│                      BUILD PROCESS                           │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  TypeScript  → Compiles to JavaScript                       │
│  Tailwind    → Processes CSS classes                        │
│  Vite        → Bundles everything                           │
│  React       → Transforms JSX                               │
│  Optimize    → Minifies & compresses                        │
└──────────────┬───────────────────────────────────────────────┘
               │
               ↓
┌─────────────────────────────────────────────────────────────┐
│                      DIST FOLDER                             │
│                                                              │
│  📁 index.html       → Entry point                          │
│  📁 assets/          → Optimized JS/CSS                     │
│  📁 images/          → Compressed images                    │
│                                                              │
│  Ready to deploy! 🚀                                        │
└─────────────────────────────────────────────────────────────┘
```

---

## 🌐 Frontend ↔️ Backend Flow

```
┌──────────────────────────────────────────────────────────────┐
│                         BROWSER                               │
│                                                               │
│  User fills contact form                                     │
│  ├── Name: "Cristian"                                        │
│  ├── Email: "example@email.com"                              │
│  └── Message: "Hi there!"                                    │
│                                                               │
│  Clicks "Submit" button                                      │
└────────────────────┬──────────────────────────────────────────┘
                     │
                     │ POST request
                     ↓
┌──────────────────────────────────────────────────────────────┐
│                    CONTACT.TSX (Frontend)                     │
│                                                               │
│  const response = await fetch(                               │
│    `https://${projectId}.supabase.co/                        │
│     functions/v1/make-server-8d5cb2ac/contact`,              │
│    {                                                          │
│      method: 'POST',                                          │
│      headers: {                                               │
│        'Authorization': `Bearer ${publicAnonKey}`            │
│      },                                                       │
│      body: JSON.stringify(formData)                          │
│    }                                                          │
│  )                                                            │
└────────────────────┬──────────────────────────────────────────┘
                     │
                     │ HTTP request over internet
                     ↓
┌──────────────────────────────────────────────────────────────┐
│              SUPABASE EDGE FUNCTION (Backend)                 │
│              /supabase/functions/server/index.tsx             │
│                                                               │
│  app.post('/make-server-8d5cb2ac/contact',                   │
│    async (c) => {                                             │
│      const { name, email, message } = await c.req.json()     │
│      // Store in database                                     │
│      await kv.set(`contact:${Date.now()}`, {                 │
│        name, email, message                                   │
│      })                                                       │
│      return c.json({ success: true })                        │
│    }                                                          │
│  )                                                            │
└────────────────────┬──────────────────────────────────────────┘
                     │
                     │ Stores data
                     ↓
┌──────────────────────────────────────────────────────────────┐
│                  SUPABASE DATABASE                            │
│                                                               │
│  Table: kv_store_8d5cb2ac                                    │
│  ┌────────────┬─────────────────────────────┐               │
│  │ key        │ value                        │               │
│  ├────────────┼─────────────────────────────┤               │
│  │ contact:1  │ { name: "Cristian",         │               │
│  │            │   email: "example@...",     │               │
│  │            │   message: "Hi there!" }    │               │
│  └────────────┴─────────────────────────────┘               │
└────────────────────┬──────────────────────────────────────────┘
                     │
                     │ Success response
                     ↓
┌──────────────────────────────────────────────────────────────┐
│                         BROWSER                               │
│                                                               │
│  ✅ Shows success message                                    │
│  "Thank you! Your message has been sent."                    │
│                                                               │
│  Form resets                                                 │
└──────────────────────────────────────────────────────────────┘
```

---

## 📁 How Imports Work

```
┌─────────────────────────────────────────────────────────────┐
│                      FILE: App.tsx                           │
│                                                              │
│  import { Landing } from './pages/Landing';                 │
│  import { Navigation } from './components/Navigation';      │
└──────────────────────┬───────────────────────────────────────┘
                       │
                       │ Vite resolves paths
                       ↓
┌─────────────────────────────────────────────────────────────┐
│  Looks for files:                                           │
│  ├── /pages/Landing.tsx         ✅ Found                    │
│  └── /components/Navigation.tsx ✅ Found                    │
└──────────────────────┬───────────────────────────────────────┘
                       │
                       │ Follows imports in those files
                       ↓
┌─────────────────────────────────────────────────────────────┐
│              FILE: /pages/Landing.tsx                        │
│                                                              │
│  import { motion } from 'motion/react';                     │
│  import { Navigation } from '../components/Navigation';     │
│  import img from 'figma:asset/abc.png';  ⚠️  Need to fix   │
└──────────────────────┬───────────────────────────────────────┘
                       │
                       │ Resolves packages & relative paths
                       ↓
┌─────────────────────────────────────────────────────────────┐
│  ├── motion/react              → /node_modules/motion/      │
│  ├── ../components/Navigation  → /components/Navigation.tsx │
│  └── figma:asset/abc.png       → ❌ Only works in Figma    │
│                                   Make                       │
│                                                              │
│  FIX: Change to → '/images/abc.png'                         │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎨 How Styling Works

```
┌─────────────────────────────────────────────────────────────┐
│              YOU WRITE (in component)                        │
│                                                              │
│  <div className="bg-primary text-white p-4 rounded-lg">    │
│    Hello World                                              │
│  </div>                                                     │
└──────────────────────┬───────────────────────────────────────┘
                       │
                       │ Tailwind CSS processes
                       ↓
┌─────────────────────────────────────────────────────────────┐
│                  TAILWIND CSS ENGINE                         │
│                                                              │
│  Reads: /styles/globals.css                                 │
│  ├── Custom theme variables                                 │
│  ├── --color-primary: #030213                               │
│  └── --radius-lg: 0.625rem                                  │
│                                                              │
│  Generates CSS:                                              │
│  .bg-primary { background-color: var(--color-primary); }   │
│  .text-white { color: white; }                              │
│  .p-4 { padding: 1rem; }                                    │
│  .rounded-lg { border-radius: var(--radius-lg); }          │
└──────────────────────┬───────────────────────────────────────┘
                       │
                       │ Injects into page
                       ↓
┌─────────────────────────────────────────────────────────────┐
│                  BROWSER RENDERS                             │
│                                                              │
│  ┌──────────────────────────────────┐                       │
│  │ Hello World                       │                      │
│  │ (dark bg, white text, padding,   │                      │
│  │  rounded corners)                │                      │
│  └──────────────────────────────────┘                       │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔐 Environment Variables Flow

```
┌─────────────────────────────────────────────────────────────┐
│                      .env FILE                               │
│                      (NOT committed to Git)                  │
│                                                              │
│  VITE_SUPABASE_URL=https://...supabase.co                   │
│  VITE_SUPABASE_ANON_KEY=eyJhbGci...                         │
└──────────────────────┬───────────────────────────────────────┘
                       │
                       │ Vite reads on startup
                       ↓
┌─────────────────────────────────────────────────────────────┐
│              import.meta.env OBJECT                          │
│                                                              │
│  {                                                           │
│    VITE_SUPABASE_URL: "https://...supabase.co",            │
│    VITE_SUPABASE_ANON_KEY: "eyJhbGci...",                  │
│    MODE: "development",                                      │
│    DEV: true                                                 │
│  }                                                           │
└──────────────────────┬───────────────────────────────────────┘
                       │
                       │ Available in your code
                       ↓
┌─────────────────────────────────────────────────────────────┐
│          YOUR CODE: /utils/supabase/info-local.tsx          │
│                                                              │
│  export const projectId =                                    │
│    import.meta.env.VITE_SUPABASE_URL                        │
│      .replace('https://', '')                                │
│      .replace('.supabase.co', '');                          │
│                                                              │
│  // Result: "pfiuvsujamfwyhedraeq"                          │
└─────────────────────────────────────────────────────────────┘
```

**Security Note**: 
- ✅ `.env` → Never committed to Git
- ✅ `VITE_` prefix → Safe to expose to frontend
- ❌ Never put `SUPABASE_SERVICE_ROLE_KEY` in frontend!

---

## 🚀 Deployment Flow

```
┌─────────────────────────────────────────────────────────────┐
│                   LOCAL DEVELOPMENT                          │
│                                                              │
│  npm run build                                              │
└──────────────────────┬───────────────────────────────────────┘
                       │
                       ↓
┌─────────────────────────────────────────────────────────────┐
│                    BUILD PROCESS                             │
│                                                              │
│  ✅ TypeScript → JavaScript                                 │
│  ✅ Optimize images                                         │
│  ✅ Minify CSS/JS                                           │
│  ✅ Bundle dependencies                                     │
│  ✅ Generate source maps                                    │
└──────────────────────┬───────────────────────────────────────┘
                       │
                       ↓
┌─────────────────────────────────────────────────────────────┐
│                    /dist FOLDER                              │
│                                                              │
│  📁 index.html                                              │
│  📁 assets/                                                 │
│     ├── index-a1b2c3d4.js      (optimized)                 │
│     └── index-e5f6g7h8.css     (optimized)                 │
│  📁 images/                                                 │
└──────────────────────┬───────────────────────────────────────┘
                       │
                       ↓
┌─────────────────────────────────────────────────────────────┐
│                 DEPLOY TO HOST                               │
│                                                              │
│  Option 1: Vercel                                           │
│  ├── Connect GitHub repo                                    │
│  ├── Auto-deploys on push                                   │
│  └── URL: cristian-portfolio.vercel.app                    │
│                                                              │
│  Option 2: Netlify                                          │
│  ├── Drag & drop /dist folder                              │
│  └── URL: cristian-portfolio.netlify.app                   │
│                                                              │
│  Option 3: Custom Server                                    │
│  ├── Upload /dist via FTP                                   │
│  └── Point cristian-co.com DNS                             │
└──────────────────────┬───────────────────────────────────────┘
                       │
                       ↓
┌─────────────────────────────────────────────────────────────┐
│                 LIVE ON INTERNET! 🌐                        │
│                                                              │
│  https://cristian-co.com                                    │
│  ✅ Accessible worldwide                                    │
│  ✅ Fast CDN delivery                                       │
│  ✅ HTTPS enabled                                           │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔄 Git Workflow (Optional but Recommended)

```
┌─────────────────────────────────────────────────────────────┐
│                  WORKING DIRECTORY                           │
│                                                              │
│  Modified files (red)                                       │
│  - App.tsx                                                  │
│  - Landing.tsx                                              │
└──────────────────────┬───────────────────────────────────────┘
                       │
                       │ git add .
                       ↓
┌─────────────────────────────────────────────────────────────┐
│                   STAGING AREA                               │
│                                                              │
│  Staged files (green)                                       │
│  - App.tsx                                                  │
│  - Landing.tsx                                              │
└──────────────────────┬───────────────────────────────────────┘
                       │
                       │ git commit -m "Update homepage"
                       ↓
┌─────────────────────────────────────────────────────────────┐
│                  LOCAL REPOSITORY                            │
│                                                              │
│  Commit history:                                            │
│  ├── abc123 - Update homepage                              │
│  ├── def456 - Add contact form                             │
│  └── ghi789 - Initial commit                               │
└──────────────────────┬───────────────────────────────────────┘
                       │
                       │ git push origin main
                       ↓
┌─────────────────────────────────────────────────────────────┐
│                  REMOTE (GitHub)                             │
│                                                              │
│  https://github.com/username/cristian-portfolio             │
│  - Backup of all your code                                  │
│  - Version history preserved                                │
│  - Can collaborate with others                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 💡 Understanding the Full Stack

```
┌───────────────────────────────────────────────────────────────┐
│                        YOUR PORTFOLIO                          │
├───────────────────────────────────────────────────────────────┤
│                                                                │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │                    FRONTEND (Browser)                    │ │
│  │                                                          │ │
│  │  React Components → User Interface                      │ │
│  │  Tailwind CSS → Styling                                 │ │
│  │  Motion → Animations                                    │ │
│  │  React Router → Navigation                              │ │
│  └─────────────────────────────────────────────────────────┘ │
│                           ↕                                   │
│                      HTTP Requests                            │
│                           ↕                                   │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │                  BACKEND (Supabase)                      │ │
│  │                                                          │ │
│  │  Edge Functions → API endpoints                         │ │
│  │  PostgreSQL → Database                                  │ │
│  │  Auth → User management (if needed)                     │ │
│  │  Storage → File uploads (if needed)                     │ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                                │
└───────────────────────────────────────────────────────────────┘
```

---

**Bookmark this for visual reference!** 📊

_These diagrams show how all the pieces connect together_
