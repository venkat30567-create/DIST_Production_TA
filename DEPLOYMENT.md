# Deployment Guide - TAPEL PWA

## 🚀 Production Deployment

### Pre-Deployment Checklist
- [ ] All features tested locally (`npm start`)
- [ ] Production build passes (`npm run build`)
- [ ] Service Worker registered and caching works
- [ ] PWA installable on test devices
- [ ] Contact form backend configured
- [ ] All images and assets optimized
- [ ] HTTPS certificate ready
- [ ] Domain name configured

---

## 📋 Deployment Methods

### 1. **Vercel Deployment (Recommended for PWA)**

**Pros:** Easy setup, automatic HTTPS, PWA support, fast CDN

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

**Configuration (vercel.json):**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm start",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

### 2. **Netlify Deployment**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

**netlify.toml:**
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### 3. **Docker Deployment**

#### Development
```bash
docker-compose up
# Visit http://localhost:3000
```

#### Production
```bash
# Build image
docker build -f Dockerfile.prod -t tapel-pwa:latest .

# Run container
docker run -p 80:80 tapel-pwa:latest
# Visit http://localhost
```

#### Deploy to Cloud (AWS, Google Cloud, Azure)
```bash
# Push to registry
docker tag tapel-pwa:latest your-registry/tapel-pwa:latest
docker push your-registry/tapel-pwa:latest

# Deploy using orchestration:
# - AWS Elastic Container Service (ECS)
# - Google Cloud Run
# - Azure Container Instances (ACI)
```

---

### 4. **Traditional Hosting (cPanel, Shared Hosting)**

1. **Build locally:**
```bash
npm run build
```

2. **Upload files:**
- Use FTP/SFTP to upload contents of `dist/` folder to public_html

3. **Configure Server:**
- Create `.htaccess` in public_html:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

### 5. **AWS S3 + CloudFront Deployment**

```bash
# Configure AWS CLI
aws configure

# Build
npm run build

# Create S3 bucket
aws s3 mb s3://tapel-pwa --region us-east-1

# Upload files
aws s3 sync dist/ s3://tapel-pwa --delete

# Set as static website
aws s3 website s3://tapel-pwa --index-document index.html --error-document index.html

# Create CloudFront distribution (via AWS Console)
# - Link to S3 bucket
# - Add custom domain (via Route 53)
# - Enable SSL certificate (ACM)
```

---

### 6. **GitHub Pages**

1. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/tapel-pwa"
}
```

2. Create GitHub Actions workflow (`.github/workflows/deploy.yml`):
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## 🔒 SSL/HTTPS Setup

### Automatic (Recommended)
- Vercel, Netlify, GitHub Pages - automatic HTTPS
- AWS Certificate Manager (ACM) - free certificates
- Let's Encrypt - free SSL certificates

### Manual Certificate
```bash
# Using Let's Encrypt with Certbot
sudo certbot certonly --standalone -d tapel.com -d www.tapel.com
```

---

## ⚡ Performance Optimization

### Nginx Configuration
See `nginx.conf` for optimized settings including:
- Gzip compression
- Browser caching
- Security headers

### CDN Setup
1. CloudFront (AWS)
2. Cloudflare
3. AWS Amplify
4. Vercel Edge Network (included)

---

## 📊 Monitoring & Maintenance

### Health Checks
```bash
# Test PWA
curl https://tapel.com

# Test Service Worker
curl -I https://tapel.com/service-worker.js

# Test manifest
curl https://tapel.com/manifest.json
```

### Logs
- Check deployment logs in your platform dashboard
- Monitor browser console for JavaScript errors
- Track Service Worker issues in DevTools

### Updates
```bash
# New version deployment
npm run build
# Re-deploy to your platform
```

---

## 🚨 Troubleshooting Deployment

### Issue: "Cannot find module"
```bash
rm -rf node_modules dist
npm install
npm run build
```

### Issue: Service Worker not updating
```bash
# Increment version in package.json
# Clear browser cache
# Re-deploy
```

### Issue: HTTPS not working
- Ensure SSL certificate is valid
- Check Certificate Authority (CA) bundle
- Verify domain DNS records

### Issue: Offline mode not working
- Check Service Worker in DevTools
- Verify caching strategies
- Test in Chrome DevTools Network tab

---

## 🔄 Continuous Deployment (CI/CD)

### GitHub Actions + Vercel
```yaml
name: Deploy PWA

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm run build
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## 📱 Post-Deployment Testing

### Desktop
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Mobile
- [ ] Android Chrome (test PWA install)
- [ ] iOS Safari (test home screen)
- [ ] Android Firefox

### Features
- [ ] Service Worker offline
- [ ] Push notifications
- [ ] Installable prompt
- [ ] Responsive design
- [ ] Contact form

---

## 💡 Best Practices

1. **Always use HTTPS** - Required for PWA
2. **Enable compression** - Reduce file sizes
3. **Set cache headers** - Improve load times
4. **Monitor performance** - Use Lighthouse
5. **Update regularly** - Keep dependencies current
6. **Backup database** - If using backend
7. **Monitor uptime** - Use monitoring service

---

## 📞 Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **AWS Docs:** https://aws.amazon.com/documentation
- **Docker Docs:** https://docs.docker.com
- **PWA Guide:** https://web.dev/progressive-web-apps

---

## 🎯 Next Steps

1. Choose deployment platform
2. Set up SSL/HTTPS
3. Configure custom domain
4. Deploy and test
5. Monitor performance
6. Set up CI/CD if needed

Good luck with your deployment! 🚀
