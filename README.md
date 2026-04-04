# TAPEL PWA - Thiruannamalaiyar Engineers

A modern Progressive Web Application (PWA) for Thiruannamalaiyar Engineers OPC Private Limited, built with Webpack and vanilla JavaScript.

## 🚀 Features

### Progressive Web App (PWA)
- **Offline Support**: Service Worker caching for reliable offline functionality
- **Installable**: Users can install the app on their home screen
- **Fast Loading**: Optimized assets and caching strategies
- **Push Notifications**: Ready for push notification integration
- **Responsive Design**: Works seamlessly on all devices

### Technical Features
- **Webpack Bundling**: Optimized production builds
- **Code Splitting**: Automatic chunk optimization
- **Asset Optimization**: Image and font optimization
- **Babel Transpilation**: ES6+ support for all browsers
- **Production Ready**: Minified and optimized builds

### UI/UX Features
- **Modern Design**: Based on company branding from design mockup
- **Dark Theme**: Professional dark interface with golden accents
- **Smooth Animations**: Elegant transitions and hover effects
- **Mobile First**: Fully responsive design
- **Accessibility**: WCAG compliant

## 📁 Project Structure

```
tapel-pwa/
├── public/
│   ├── index.html          # Main HTML template
│   ├── manifest.json       # PWA manifest
│   └── favicon.png         # App icon
├── src/
│   ├── components/
│   │   ├── app.js          # Main app initialization
│   │   ├── header.js       # Navigation header
│   │   ├── hero.js         # Hero section
│   │   ├── about.js        # About section
│   │   ├── services.js     # Services section
│   │   ├── contact.js      # Contact section
│   │   └── footer.js       # Footer
│   ├── styles/
│   │   └── main.css        # Main stylesheet
│   ├── utils/
│   │   └── pwa-utils.js    # PWA utilities
│   ├── service-worker.js   # Service Worker
│   └── index.js            # Entry point
├── webpack.config.js       # Webpack configuration
├── .babelrc               # Babel configuration
├── package.json           # Project dependencies
└── README.md             # This file
```

## 🛠️ Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

1. **Install dependencies**
```bash
npm install
```

2. **Start development server**
```bash
npm start
```
The app will run at `http://localhost:3000`

3. **Build for production**
```bash
npm run build
```

4. **Watch mode for development**
```bash
npm run watch
```

## 📦 Build Output

The production build creates:
- Minified and optimized JavaScript bundles
- Service Worker with precaching
- Static assets in `dist/` directory
- Ready for deployment

## 🌐 Deployment

### Static Hosting (Vercel, Netlify, etc.)
```bash
npm run build
# Deploy the contents of 'dist/' folder
```

### Docker Support
Create a Dockerfile for containerized deployment.

### HTTPS Required
PWA features (Service Worker, Push Notifications) require HTTPS in production.

## 🎨 Customization

### Colors
Edit CSS variables in [src/styles/main.css](src/styles/main.css):
```css
:root {
  --primary-color: #f39c12;
  --secondary-color: #1a1a2e;
  /* ... more variables */
}
```

### Content
- Update [public/manifest.json](public/manifest.json) with your app details
- Modify components in `src/components/` folder
- Update company information in respective sections

### Icons
Replace placeholder icons in `public/` folder:
- `icon-192.png` - 192x192 icon
- `icon-512.png` - 512x512 icon
- `favicon.png` - Favicon
- `apple-touch-icon.png` - iOS icon

## 📱 PWA Features

### Service Worker Caching
The app uses different caching strategies:
- **HTML**: NetworkFirst (always try network first)
- **CSS/JS**: CacheFirst (use cache when available)
- **Images**: CacheFirst with 60-day expiration
- **API**: StaleWhileRevalidate (serve cache while updating)

### Installation Prompt
Users will see an "Install App" button to add the PWA to their home screen.

### Push Notifications
Push notification support is ready. Implement backend integration as needed.

## 🚀 Performance

- **Lazy Loading**: Components load on demand
- **Code Splitting**: Automatic chunk separation
- **Asset Compression**: Gzip compression enabled
- **Cache Optimization**: Efficient caching strategies

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Reduced motion support

## 📞 Contact Information

**Thiruannamalaiyar Engineers (OPC) Private Limited**
- Phone: +91 9045900037
- Email: thiruannamalaiyar_epl@outlook.com
- Website: tapel.com
- Address: SF No 169/28T Main Road, Vepamaneri, Vellore - 632201, Tamil Nadu, India

## 📄 License

MIT License - See LICENSE file for details

## 🙏 Support

For issues or questions, please contact the development team or visit tapel.com

---

Built with ❤️ using Webpack and JavaScript
