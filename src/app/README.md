# Cristian Portfolio Website

A comprehensive portfolio website featuring five main pages with custom animations, Tron Legacy-style wavy headers, and Supabase backend integration.

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **VS Code** (recommended) - [Download here](https://code.visualstudio.com/)
- A Supabase account - [Sign up here](https://supabase.com/)

### Installation Steps

1. **Install Node.js dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   ```bash
   # Copy the example file
   cp .env.example .env
   
   # Then edit .env with your Supabase credentials
   ```
   
   Get your Supabase credentials from: https://app.supabase.com → Your Project → Settings → API

3. **Start the development server**
   ```bash
   npm run dev
   ```
   
   Your site will open at http://localhost:5173

## 📁 Project Structure

```
/
├── components/          # Reusable React components
│   ├── ui/             # UI library components (buttons, forms, etc.)
│   ├── Navigation.tsx  # Global navigation
│   ├── Footer.tsx      # Global footer
│   └── AnimatedHeader.tsx
├── pages/              # Page components
│   ├── Landing.tsx
│   ├── Work.tsx
│   ├── Services.tsx
│   ├── Perspective.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── styles/
│   └── globals.css     # Tailwind CSS configuration
├── supabase/
│   └── functions/server/  # Backend API routes
└── utils/
    └── supabase/       # Supabase configuration
```

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at localhost:5173 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Check code quality |

## 🎨 Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v7
- **Animation**: Motion (Framer Motion)
- **Backend**: Supabase (Database + Edge Functions)
- **UI Components**: Radix UI
- **Forms**: React Hook Form
- **Icons**: Lucide React

## ⚙️ Important Notes for Local Development

### 1. **Image Imports**
The Figma Make environment uses special `figma:asset` imports. For local development, you'll need to:
- Download your images from Figma Make
- Place them in a `/public/images` folder
- Replace imports like:
  ```tsx
  // FROM:
  import img from 'figma:asset/abc123.png';
  
  // TO:
  import img from '/images/abc123.png';
  ```

### 2. **Supabase Setup**
You're using the existing Supabase project from Figma Make:
- Project ID: `pfiuvsujamfwyhedraeq`
- The backend server is at `/supabase/functions/server/index.tsx`
- Contact form submissions go to the `/make-server-8d5cb2ac/contact` route

### 3. **Environment Variables**
Create a `.env` file in the root:
```env
VITE_SUPABASE_URL=https://pfiuvsujamfwyhedraeq.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

## 🌐 Deployment

### Option 1: Deploy to Vercel
1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

### Option 2: Deploy to Netlify
1. Push your code to GitHub
2. Import project in [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add environment variables
6. Deploy!

### Option 3: Build Manually
```bash
npm run build
# Upload the 'dist' folder to your hosting provider
```

## 📝 VS Code Recommended Extensions

Install these for the best development experience:
- **ES7+ React/Redux/React-Native snippets** - Code snippets
- **Tailwind CSS IntelliSense** - Tailwind autocomplete
- **Prettier - Code formatter** - Auto-format code
- **ESLint** - Catch errors as you type
- **Auto Rename Tag** - Rename HTML/JSX tags together

## 🐛 Troubleshooting

### "Cannot find module" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 5173 already in use
```bash
# Kill the process using the port
lsof -ti:5173 | xargs kill -9
# Or change the port in vite.config.ts
```

### Tailwind styles not applying
1. Make sure `globals.css` is imported in `main.tsx`
2. Restart the dev server

## 📞 Support

For questions about:
- **Figma Make**: Check the [Guidelines.md](./guidelines/Guidelines.md)
- **React**: Visit [react.dev](https://react.dev)
- **Vite**: Visit [vitejs.dev](https://vitejs.dev)
- **Tailwind CSS**: Visit [tailwindcss.com](https://tailwindcss.com)

## 📄 License

This project is for portfolio use.
