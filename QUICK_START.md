# Quick Start Guide - TAPEL PWA

## 🚀 Get Started in 5 Minutes

### Step 1: Install Dependencies
```bash
cd tapel-pwa
npm install
```

### Step 2: Run Development Server
```bash
npm start
```
Open your browser to `http://localhost:3000`

### Step 3: Test PWA Features
- **Offline Support**: Go to DevTools → Application → Service Workers and toggle "Offline"
- **Install App**: Click "Install App" button (on supported browsers)
- **Responsive Design**: Test on different devices using DevTools

### Step 4: Build for Production
```bash
npm run build
```
Output files will be in `dist/` directory

---

## 📂 Project Contents

### Key Sections
1. **Header/Navigation** - Sticky navigation with mobile menu
2. **Hero Section** - Eye-catching landing area
3. **About Section** - Vision, Mission, and Company Info
4. **Services** - 4 main service categories
5. **Contact** - Contact form and information
6. **Footer** - Links and company details

### Design Features
- ✅ Dark theme with golden accents (#f39c12)
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth animations and transitions
- ✅ Professional gradient backgrounds
- ✅ Grid-based layout system

---

## 🔧 Available Commands

| Command | Description |
|---------|-------------|
| `npm start` | Run development server |
| `npm run build` | Build for production |
| `npm run build-dev` | Build in development mode |
| `npm run watch` | Watch mode - rebuild on changes |

---

## 📱 PWA Installation

### On Chrome/Edge (Android)
1. Visit the PWA in browser
2. Click address bar menu → "Install app"
3. Confirm installation

### On Safari (iOS)
1. Open in Safari
2. Tap Share button
3. Select "Add to Home Screen"

### On Desktop
1. Visit the PWA
2. Click pencil icon in address bar
3. Click "Install"

---

## 🎨 Customization Checklist

- [ ] Update company logo in header
- [ ] Modify colors in `src/styles/main.css` (CSS variables)
- [ ] Add company images to `src/assets/images/`
- [ ] Update manifest.json with app details
- [ ] Replace default icons (icons in `public/` folder)
- [ ] Update contact information in footer
- [ ] Add social media links
- [ ] Customize section content

---

## 🌐 Deployment Options

### Option 1: Vercel
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Option 3: Traditional Hosting
1. Run `npm run build`
2. Upload `dist/` folder to your server
3. Configure server to serve `index.html` for all routes

---

## ✅ Testing Checklist

- [ ] App loads correctly
- [ ] Navigation links work
- [ ] Form submission works
- [ ] Mobile layout is responsive
- [ ] Service Worker is registered (check DevTools)
- [ ] Can install as PWA
- [ ] Works offline
- [ ] Smooth animations

---

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
npm start -- --port 3001
```

### Build Errors
Clear cache and reinstall:
```bash
rm -rf node_modules
npm install
npm run build
```

### Service Worker Issues
- Check browser console (F12) for errors
- Clear browser cache and service worker
- Check DevTools → Application → Service Workers

### HTTPS/PWA Not Working
PWA features require HTTPS in production. Development server uses HTTP which is fine for local testing.

---

## 📊 File Size Reference

After production build, expect:
- `main.[hash].js` - ~30-50KB (gzipped)
- `vendors.[hash].js` - ~5-10KB (gzipped)
- Service Worker - ~5KB
- Total: ~40-65KB (all gzipped)

---

## 🔐 Security Notes

- No sensitive data should be hardcoded
- Use environment variables for API keys
- HTTPS required for production PWA
- Content Security Policy recommended

---

## 📞 Support

For questions or issues:
- Email: thiruannamalaiyar_epl@outlook.com
- Phone: +91 9045900037
- Website: tapel.com

---

Happy coding! 🎉
