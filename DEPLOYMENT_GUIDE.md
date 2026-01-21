# Deployment Guide

## Step 1: Push to GitHub

After creating your repository on GitHub, run these commands:

```bash
git remote add origin https://github.com/aahantrikha/portfolio-website.git
git branch -M main
git push -u origin main
```

Replace `portfolio-website` with your actual repository name if different.

## Step 2: Deploy to Vercel (Recommended - Easiest)

### Option A: Using Vercel Website (Easiest)

1. Go to https://vercel.com
2. Click "Sign Up" and choose "Continue with GitHub"
3. Authorize Vercel to access your GitHub
4. Click "Import Project"
5. Import your `portfolio-website` repository
6. Configure:
   - Framework Preset: **Create React App**
   - Root Directory: `portfolio-app`
   - Build Command: `npm run build`
   - Output Directory: `build`
7. Click "Deploy"
8. Wait 2-3 minutes - Done! You'll get a live URL like `https://your-portfolio.vercel.app`

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to your app folder
cd portfolio-app

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? portfolio-website
# - Directory? ./
# - Override settings? No

# For production deployment
vercel --prod
```

## Step 3: Alternative - Deploy to Netlify

### Using Netlify Website

1. Go to https://app.netlify.com
2. Click "Sign Up" with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub and select your repository
5. Configure:
   - Base directory: `portfolio-app`
   - Build command: `npm run build`
   - Publish directory: `portfolio-app/build`
6. Click "Deploy site"
7. Your site will be live at `https://random-name.netlify.app`
8. You can change the domain in Site settings

### Using Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Navigate to your app folder
cd portfolio-app

# Build your app
npm run build

# Deploy
netlify deploy

# For production
netlify deploy --prod
```

## Step 4: Alternative - Deploy to GitHub Pages

1. Install gh-pages package:
```bash
cd portfolio-app
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://aahantrikha.github.io/portfolio-website",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

4. Enable GitHub Pages:
   - Go to your repository settings
   - Scroll to "Pages"
   - Source: Deploy from branch `gh-pages`
   - Save

## Recommended: Vercel

**Why Vercel?**
- ✅ Automatic deployments on every push
- ✅ Free SSL certificate
- ✅ Global CDN
- ✅ Zero configuration
- ✅ Preview deployments for every commit
- ✅ Custom domain support (free)

## Custom Domain (Optional)

After deployment, you can add a custom domain:

### Vercel:
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

### Netlify:
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS records

## Environment Variables

If you need environment variables:

### Vercel:
- Go to Project Settings → Environment Variables
- Add variables (they must start with `REACT_APP_`)

### Netlify:
- Go to Site Settings → Build & Deploy → Environment
- Add variables

## Continuous Deployment

Both Vercel and Netlify automatically redeploy when you push to GitHub:

```bash
# Make changes
git add .
git commit -m "Update portfolio"
git push

# Your site automatically rebuilds and deploys!
```

## Troubleshooting

### Build fails on Vercel/Netlify
- Check that `portfolio-app` is set as root directory
- Verify Node version (add `.nvmrc` file with `18` or `20`)
- Check build logs for errors

### Images not loading
- Make sure images are in `public` folder
- Use relative paths: `/image.jpg` not `./image.jpg`

### 404 on refresh
- For Vercel: Automatically handled
- For Netlify: Add `_redirects` file in `public`:
  ```
  /*    /index.html   200
  ```

## Your Live URLs

After deployment, you'll have:
- **Vercel**: `https://portfolio-website-aahantrikha.vercel.app`
- **Netlify**: `https://aahan-portfolio.netlify.app`
- **GitHub Pages**: `https://aahantrikha.github.io/portfolio-website`

You can customize these domains or add your own!
