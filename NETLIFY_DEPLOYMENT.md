# Netlify Deployment Guide for Next.js 🚀

**Date:** January 2026  
**Site:** coulsycode.co.uk  
**Hosting:** Netlify (same as Astro sites)

---

## ✅ **Yes, Next.js Works on Netlify!**

Netlify has excellent support for Next.js through their **Next.js Runtime Plugin**. It's just as easy as deploying Astro sites.

---

## 🔧 **Setup Complete**

I've already created `netlify.toml` with the correct configuration. This tells Netlify:
- How to build Next.js
- Which plugin to use
- How to handle routing

---

## 📋 **Deployment Steps**

### **Option 1: Via Netlify Dashboard (Easiest)**

1. **Push to GitHub** (if not already)
   ```bash
   git add .
   git commit -m "Initial Next.js setup"
   git push origin main
   ```

2. **In Netlify Dashboard:**
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Select the `coulsycode` repository
   - Netlify will auto-detect Next.js
   - Build command: `npm run build` (auto-detected)
   - Publish directory: `.next` (auto-detected)
   - Click "Deploy site"

3. **That's it!** Netlify will:
   - Install dependencies
   - Build the Next.js app
   - Deploy it automatically

---

### **Option 2: Via Netlify CLI**

```bash
# Install Netlify CLI (if not installed)
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

---

## ⚙️ **Configuration Files**

### **`netlify.toml`** (Already Created)

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "20"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

This tells Netlify:
- Use Node.js 20
- Install the Next.js plugin automatically
- Build command and output directory

---

## 🔑 **Key Differences from Astro**

| Astro | Next.js on Netlify |
|-------|-------------------|
| `dist/` folder | `.next/` folder |
| Static site | Can be static OR dynamic |
| No plugin needed | Uses `@netlify/plugin-nextjs` |
| Simple build | Same build process |

**The process is very similar!**

---

## 🎯 **What Netlify Handles Automatically**

- ✅ **Next.js Runtime Plugin** - Installed automatically
- ✅ **API Routes** - Serverless functions work automatically
- ✅ **Static Pages** - Pre-rendered and cached
- ✅ **Dynamic Routes** - Handled by Netlify Functions
- ✅ **Image Optimization** - Next.js Image component works
- ✅ **Environment Variables** - Set in Netlify dashboard

---

## 📝 **Environment Variables**

If you need environment variables (API keys, etc.):

1. Go to Netlify Dashboard
2. Site Settings → Environment Variables
3. Add variables (e.g., `NEXT_PUBLIC_API_KEY`)
4. Redeploy

---

## 🚀 **Deployment Process**

1. **Push to GitHub** → Netlify auto-deploys
2. **Build runs** → `npm run build`
3. **Next.js plugin** → Handles routing and functions
4. **Site goes live** → Same as Astro sites!

---

## 💡 **Benefits of Netlify for Next.js**

- ✅ **Same hosting** as your Astro sites (familiar)
- ✅ **Automatic deployments** from GitHub
- ✅ **Free SSL** certificates
- ✅ **CDN** for fast global delivery
- ✅ **Serverless functions** for API routes
- ✅ **Preview deployments** for pull requests

---

## 🔄 **Comparison: Netlify vs Vercel**

| Feature | Netlify | Vercel |
|---------|---------|--------|
| **Next.js Support** | ✅ Excellent | ✅ Excellent (creators) |
| **Ease of Use** | ✅ Very Easy | ✅ Very Easy |
| **Free Tier** | ✅ Generous | ✅ Generous |
| **Your Existing Setup** | ✅ Already using | ⚠️ New platform |

**Recommendation:** Stick with Netlify since you're already using it!

---

## 📋 **Deployment Checklist**

- [x] `netlify.toml` created
- [x] `package.json` configured
- [ ] Push code to GitHub
- [ ] Connect repository in Netlify
- [ ] Set environment variables (if needed)
- [ ] Deploy!

---

## 🎯 **Summary**

**Yes, Next.js works perfectly on Netlify!**

- Same hosting platform as your Astro sites
- Same deployment process
- Just as easy to set up
- Netlify handles everything automatically

**Ready to deploy when you are!** 🚀

