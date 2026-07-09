# 💻 Command Reference Sheet

Quick reference for all terminal commands you'll need.

---

## 📦 NPM Commands (Package Management)

### Installation
```bash
# Install all dependencies from package.json
npm install

# Install a specific package
npm install package-name

# Install a specific version
npm install package-name@1.2.3

# Install as dev dependency
npm install --save-dev package-name
```

### Running Scripts
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter (check code quality)
npm run lint
```

### Package Info
```bash
# Check npm version
npm --version

# List installed packages
npm list

# Check for outdated packages
npm outdated

# Update packages
npm update
```

---

## 📁 File System Commands

### Navigation
```bash
# Show current directory
pwd

# List files in current directory
ls

# List all files (including hidden)
ls -la

# Change directory
cd folder-name

# Go up one level
cd ..

# Go to home directory
cd ~

# Go to root of drive
cd /
```

### File Operations
```bash
# Create new directory
mkdir folder-name

# Create nested directories
mkdir -p path/to/folder

# Create empty file
touch filename.txt

# Copy file
cp source.txt destination.txt

# Copy folder
cp -r source-folder destination-folder

# Move/rename file
mv oldname.txt newname.txt

# Delete file
rm filename.txt

# Delete folder and contents
rm -rf folder-name
```

### File Viewing
```bash
# Display file contents
cat filename.txt

# Display first 10 lines
head filename.txt

# Display last 10 lines
tail filename.txt

# View file with pagination
less filename.txt
```

---

## 🔧 Git Commands (Version Control)

### Setup
```bash
# Initialize git repository
git init

# Set your name
git config --global user.name "Your Name"

# Set your email
git config --global user.email "your@email.com"

# Check config
git config --list
```

### Basic Workflow
```bash
# Check status
git status

# Add all changes
git add .

# Add specific file
git add filename.txt

# Commit changes
git commit -m "Describe your changes"

# View commit history
git log

# View short history
git log --oneline
```

### Branching
```bash
# List branches
git branch

# Create new branch
git branch branch-name

# Switch to branch
git checkout branch-name

# Create and switch to new branch
git checkout -b branch-name

# Merge branch into current branch
git merge branch-name

# Delete branch
git branch -d branch-name
```

### Remote Repository
```bash
# Add remote repository
git remote add origin https://github.com/username/repo.git

# View remotes
git remote -v

# Push to remote
git push origin main

# Pull from remote
git pull origin main

# Clone repository
git clone https://github.com/username/repo.git
```

---

## 🖥️ VS Code Commands

### Opening
```bash
# Open current folder
code .

# Open specific folder
code /path/to/folder

# Open specific file
code filename.txt
```

### Terminal in VS Code
```
Ctrl + ` (backtick)     → Toggle terminal
Cmd/Ctrl + Shift + `    → New terminal
Cmd/Ctrl + Shift + 5    → Split terminal
```

### Useful Shortcuts
```
Cmd/Ctrl + S           → Save file
Cmd/Ctrl + P           → Quick file open
Cmd/Ctrl + Shift + P   → Command palette
Cmd/Ctrl + B           → Toggle sidebar
Cmd/Ctrl + /           → Comment line
Cmd/Ctrl + F           → Find in file
Cmd/Ctrl + Shift + F   → Find in project
Cmd/Ctrl + D           → Select next match
Cmd/Ctrl + Shift + L   → Select all matches
Alt + Up/Down          → Move line up/down
Shift + Alt + Up/Down  → Copy line up/down
```

---

## 🌐 Node & NPM Troubleshooting

### Clear Cache
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Check Versions
```bash
# Node version
node --version

# NPM version
npm --version

# Check package version
npm list package-name

# List globally installed packages
npm list -g --depth=0
```

### Process Management
```bash
# Find process using port 5173
lsof -ti:5173

# Kill process on port
lsof -ti:5173 | xargs kill -9

# Kill all node processes (careful!)
killall node
```

---

## 🔍 Project-Specific Commands

### Initial Setup
```bash
# 1. Navigate to project
cd cristian-portfolio

# 2. Install dependencies
npm install

# 3. Copy environment file
cp .env.example .env

# 4. Edit .env (use your editor)
code .env

# 5. Start development
npm run dev
```

### Daily Development
```bash
# Start working
cd cristian-portfolio
npm run dev

# Stop server (in terminal)
Ctrl + C

# Check for errors
npm run lint

# Build for production
npm run build
```

### Updating Dependencies
```bash
# Check for updates
npm outdated

# Update all packages
npm update

# Update specific package
npm update package-name

# Install latest version (breaking changes possible)
npm install package-name@latest
```

---

## 🐛 Debug Commands

### Check Installation
```bash
# Verify Node.js
node --version
# Should show: v18.x.x or higher

# Verify npm
npm --version
# Should show: 9.x.x or higher

# Verify project dependencies
npm list
# Should show dependency tree
```

### Check Running Processes
```bash
# See all node processes
ps aux | grep node

# Kill specific process
kill -9 <process-id>

# See what's using port 5173
lsof -i:5173
```

### Environment Variables
```bash
# Print environment variable (Mac/Linux)
echo $VITE_SUPABASE_URL

# Print all environment variables
env

# Run command with environment variable
VITE_DEBUG=true npm run dev
```

---

## 📊 Useful Analysis Commands

### Project Stats
```bash
# Count lines of code
find . -name '*.tsx' | xargs wc -l

# Count files
find . -name '*.tsx' | wc -l

# Find large files
find . -type f -size +1M

# Disk usage
du -sh *
```

### Search Commands
```bash
# Find files by name
find . -name "*.tsx"

# Find files containing text
grep -r "search term" .

# Find and replace (be careful!)
find . -name "*.tsx" -exec sed -i '' 's/old/new/g' {} +
```

---

## 🚀 Deployment Commands

### Build
```bash
# Production build
npm run build

# Check build size
du -sh dist

# Preview build locally
npm run preview
```

### Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

---

## 🔒 Security Commands

### Check for Vulnerabilities
```bash
# Audit dependencies
npm audit

# Fix automatically (if possible)
npm audit fix

# Force fix (may cause breaking changes)
npm audit fix --force
```

### Environment Variables
```bash
# NEVER commit .env file
# Check if .env is in .gitignore
cat .gitignore | grep .env

# Should show:
# .env
# .env.local
# .env.production
```

---

## 💡 Pro Tips

### Aliases (Add to ~/.bashrc or ~/.zshrc)
```bash
# Quick shortcuts
alias ni="npm install"
alias nid="npm install --save-dev"
alias nr="npm run"
alias nrd="npm run dev"
alias nrb="npm run build"

# Git shortcuts
alias gs="git status"
alias ga="git add ."
alias gc="git commit -m"
alias gp="git push"

# Navigation
alias ..="cd .."
alias ...="cd ../.."
alias ll="ls -la"
```

### Command History
```bash
# Search command history
Ctrl + R

# Then type to search
# Press Ctrl + R again to cycle through matches

# View history
history

# Run previous command
!!

# Run command from history by number
!123
```

### Chaining Commands
```bash
# Run commands in sequence
npm install && npm run dev

# Run command only if previous succeeds
npm run build && npm run preview

# Run commands in background
npm run dev &

# Run multiple commands in parallel
npm run dev & npm run lint
```

---

## 📖 Getting Help

### Command Help
```bash
# npm help
npm help

# Specific command help
npm help install

# Git help
git --help
git help commit

# Man pages (manual)
man ls
man grep
```

### Quick Reference
```bash
# Command options
npm install --help

# Version info
node --version
npm --version
git --version
```

---

## 🎯 Common Workflows

### Start Fresh Development Session
```bash
cd cristian-portfolio
code .
npm run dev
# Browser opens automatically
```

### Add New Feature
```bash
git checkout -b feature-name
# Make changes...
git add .
git commit -m "Add feature description"
npm run build  # Test build
git checkout main
git merge feature-name
```

### Deploy to Production
```bash
npm run build
npm run preview  # Test locally
git add .
git commit -m "Production ready"
git push origin main
vercel --prod  # or netlify deploy --prod
```

---

## 🆘 Emergency Commands

### Something Broke
```bash
# 1. Stop everything
Ctrl + C

# 2. Clean install
rm -rf node_modules package-lock.json
npm install

# 3. Restart
npm run dev
```

### Lost Changes
```bash
# See what changed
git diff

# Undo all local changes
git checkout .

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1
```

---

**Bookmark this page for quick reference!** 🔖

_Pro tip: Keep this terminal open in VS Code for easy access_
