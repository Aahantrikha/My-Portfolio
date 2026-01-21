# GitHub Setup Guide

Follow these steps to upload your portfolio to GitHub.

## 📋 Prerequisites

- Git installed on your computer
- GitHub account created
- Terminal/Command Prompt access

## 🚀 Step-by-Step Instructions

### 1. Initialize Git Repository

Open terminal in your project root directory and run:

```bash
git init
```

### 2. Add All Files

```bash
git add .
```

### 3. Create Initial Commit

```bash
git commit -m "Initial commit: Portfolio website with React and TypeScript"
```

### 4. Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the **+** icon in the top right
3. Select **New repository**
4. Name it: `portfolio` (or any name you prefer)
5. **Do NOT** initialize with README (we already have one)
6. Click **Create repository**

### 5. Connect Local Repository to GitHub

Replace `YOUR_USERNAME` with your GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
```

For example:
```bash
git remote add origin https://github.com/aahantrikha/portfolio.git
```

### 6. Push to GitHub

```bash
git branch -M main
git push -u origin main
```

### 7. Verify Upload

Visit your repository URL:
```
https://github.com/YOUR_USERNAME/portfolio
```

You should see all your files uploaded!

## 🌐 Deploy Your Portfolio

### Option 1: Vercel (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click **New Project**
4. Import your portfolio repository
5. Configure:
   - Framework Preset: Create React App
   - Root Directory: `portfolio-app`
6. Click **Deploy**

Your site will be live at: `https://your-project.vercel.app`

### Option 2: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click **Add new site** → **Import an existing project**
4. Choose your repository
5. Configure:
   - Base directory: `portfolio-app`
   - Build command: `npm run build`
   - Publish directory: `portfolio-app/build`
6. Click **Deploy**

### Option 3: GitHub Pages

1. In `portfolio-app/package.json`, add:
```json
"homepage": "https://YOUR_USERNAME.github.io/portfolio"
```

2. Install gh-pages:
```bash
cd portfolio-app
npm install --save-dev gh-pages
```

3. Add scripts to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  ...
}
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages:
   - Go to repository Settings
   - Navigate to Pages
   - Source: Deploy from branch
   - Branch: gh-pages
   - Click Save

## 📝 Update Your Portfolio

After making changes:

```bash
git add .
git commit -m "Update: description of changes"
git push
```

If deployed on Vercel/Netlify, it will auto-deploy!

## 🔧 Troubleshooting

### Authentication Issues

If you get authentication errors, use a Personal Access Token:

1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Select scopes: `repo`
4. Copy the token
5. Use it as password when pushing

### Large Files Warning

If you see warnings about large files:
- The `node_modules` folder is already in `.gitignore`
- Make sure you didn't accidentally add it

### Push Rejected

If push is rejected:
```bash
git pull origin main --rebase
git push origin main
```

## 📧 Need Help?

Contact me:
- Email: aahantrikha19@gmail.com
- LinkedIn: [Aahan Trikha](https://www.linkedin.com/in/aahan-trikha-090a7a220)

---

**Good luck with your portfolio! 🚀**
