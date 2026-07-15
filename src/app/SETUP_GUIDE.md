# 🎯 Complete Setup Guide for Local Development

This guide will walk you through setting up your portfolio on your local computer, step by step.

---

## Part 1: Download & Install Software

### 1. Install Node.js
- Go to https://nodejs.org/
- Download the **LTS version** (Long Term Support)
- Run the installer
- **Verify installation**: Open Terminal/Command Prompt and type:
  ```bash
  node --version
  npm --version
  ```
  You should see version numbers (e.g., v20.x.x)

### 2. Install VS Code
- Go to https://code.visualstudio.com/
- Download and install
- Open VS Code

### 3. Install VS Code Extensions (Optional but Recommended)
In VS Code:
1. Click the Extensions icon (4 squares) in the left sidebar
2. Search and install:
   - "ES7+ React/Redux/React-Native snippets"
   - "Tailwind CSS IntelliSense"
   - "Prettier - Code formatter"
   - "ESLint"

---

## Part 2: Download Your Project from Figma Make

You have two options:

### Option A: Copy Files Manually (Easiest for Now)

1. **Create a project folder on your computer**
   ```bash
   mkdir cristian-portfolio
   cd cristian-portfolio
   ```

2. **Copy each file from Figma Make**
   - Use the file explorer in Figma Make
   - Copy the content of each file
   - Create the same file structure locally
   - Paste the content

3. **The configuration files are already created** ✅
   - package.json
   - vite.config.ts
   - tsconfig.json
   - index.html
   - main.tsx
   - postcss.config.js
   - .gitignore
   - .env.example

### Option B: Use Git (If You're Familiar)
*(Skip this if you don't know Git yet)*

---

## Part 3: Set Up Your Project

### 1. Open Project in VS Code
```bash
# Navigate to your project folder
cd cristian-portfolio

# Open in VS Code
code .
```

### 2. Install Dependencies
In VS Code, open the Terminal (View → Terminal) and run:
```bash
npm install
```
This will take 2-3 minutes. It downloads all the packages listed in package.json.

### 3. Set Up Environment Variables

**Create a .env file:**
```bash
cp .env.example .env
```

**Edit the .env file** and add your Supabase credentials:
```env
VITE_SUPABASE_URL=https://pfiuvsujamfwyhedraeq.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmaXV2c3VqYW1md3loZWRyYWVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg1MTc1MjcsImV4cCI6MjA4NDA5MzUyN30.DxxeNfgJzwXTB6WMJ2iA4PMOsyrUPFkshXJqBnMz7eE
```

---

## Part 4: Handle Figma Assets (Images)

Your project uses `figma:asset` imports which only work in Figma Make. You need to replace these:

### 1. Download Images from Figma Make
- Find all files using `figma:asset` imports
- Download each image
- Create a folder: `/public/images/`
- Save images there

### 2. Update Image Imports

**Before (Figma Make):**
```tsx
import img from 'figma:asset/abc123.png';
```

**After (Local):**
```tsx
import img from '/images/my-image.png';
```

**Files that need updating:**
- `/pages/Landing.tsx` - Multiple images
- `/pages/Work.tsx` - Project images
- All `/pages/work/*.tsx` files - Project detail images

### 3. Handle SVG Imports
SVG files imported from `/imports/` should work as-is, but verify the paths.

---

## Part 5: Start Development

### 1. Run the Development Server
```bash
npm run dev
```

You should see:
```
VITE v6.x.x  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  press h + enter to show help
```

### 2. Open in Browser
- Go to http://localhost:5173/
- Your site should load!

### 3. Test the Site
- Navigate through all pages
- Test the contact form
- Check animations
- View on mobile (use browser dev tools)

---

## Part 6: Common Issues & Solutions

### ❌ "Cannot find module 'react-router'"
**Solution:**
```bash
npm install react-router
```

### ❌ Images not loading
**Solution:** 
- Check that image paths are correct
- Make sure images are in `/public/images/`
- Restart dev server after adding images

### ❌ Supabase errors
**Solution:**
- Verify `.env` file exists and has correct values
- Check that you copied the exact keys from Figma Make
- Restart dev server after changing `.env`

### ❌ Tailwind styles not working
**Solution:**
```bash
# Make sure globals.css is imported in main.tsx
# Restart dev server
npm run dev
```

### ❌ Port already in use
**Solution:**
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Or change port in vite.config.ts:
server: {
  port: 3000,  // Change to any available port
}
```

---

## Part 7: Making Changes

### Hot Reload
When you save a file, the browser automatically refreshes! Try it:
1. Open `/pages/Landing.tsx`
2. Change some text
3. Save (Cmd+S or Ctrl+S)
4. Watch the browser update instantly

### Best Practices
- **Save often** - Changes reflect immediately
- **Check console** - Press F12, look for errors
- **Use React DevTools** - Install browser extension for debugging

---

## Part 8: Build for Production

When ready to deploy:

```bash
# Create optimized production build
npm run build

# Test the production build locally
npm run preview
```

This creates a `/dist` folder with optimized files ready for deployment.

---

## Part 9: Deploy to Internet

### Option 1: Vercel (Recommended)
1. Create account at https://vercel.com
2. Install Vercel CLI: `npm install -g vercel`
3. Run: `vercel`
4. Follow prompts
5. Add environment variables in Vercel dashboard

### Option 2: Netlify
1. Create account at https://netlify.com
2. Drag and drop your `/dist` folder
3. Add environment variables in settings
4. Done!

### Option 3: Your Own Domain
1. Build project: `npm run build`
2. Upload `/dist` folder to your hosting provider
3. Point `cristian-co.com` to your hosting
4. Configure environment variables on server

---

## 🎉 You're All Set!

You now have:
- ✅ Local development environment
- ✅ All configuration files
- ✅ Package.json with dependencies
- ✅ Understanding of the project structure

### Next Steps:
1. Download all files from Figma Make
2. Copy them to your local folder
3. Install dependencies: `npm install`
4. Fix image imports
5. Start dev server: `npm run dev`
6. Start customizing!

---

## 📚 Learning Resources

### JavaScript & React Basics
- [React Official Tutorial](https://react.dev/learn)
- [JavaScript.info](https://javascript.info/)
- [FreeCodeCamp React Course](https://www.freecodecamp.org/learn)

### Tailwind CSS
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/components)

### VS Code Tips
- Cmd/Ctrl + P - Quick file search
- Cmd/Ctrl + Shift + P - Command palette
- Cmd/Ctrl + B - Toggle sidebar
- Cmd/Ctrl + ` - Toggle terminal

---

## 💡 Tips for Beginners

1. **Don't panic if you see errors** - Read them carefully, they usually tell you what's wrong
2. **Google is your friend** - Copy error messages and search them
3. **Start small** - Make tiny changes first, see what happens
4. **Use console.log()** - Print variables to understand what's happening
5. **Ask for help** - React and Vite have huge communities

---

**Good luck! 🚀**
