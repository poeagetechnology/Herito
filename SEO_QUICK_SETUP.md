# Herito Wellness SEO Configuration Guide

## 🎯 Quick Start - 5 Steps to Deploy

### Step 1: Add Verification Codes (5 minutes)

**File**: `public/index.html`

Find these lines and replace with your codes:
```html
<!-- Line ~48-49 -->
<meta name="google-site-verification" content="ADD_YOUR_GOOGLE_VERIFICATION_CODE_HERE" />
<meta name="msvalidate.01" content="ADD_YOUR_BING_VERIFICATION_CODE_HERE" />
```

How to get codes:
1. Go to https://search.google.com/search-console
2. Click "Add property"
3. Enter: https://www.heritowellness.com
4. Choose "URL prefix"
5. Choose "HTML tag" verification method
6. Copy the content value

For Bing: https://www.bing.com/webmaster

---

### Step 2: Upload OG & Favicon Images (10 minutes)

Create/design these images and upload to `/public` folder:

| Image | Size | Purpose |
|-------|------|---------|
| og-image.jpg | 1200x630px | Facebook, LinkedIn sharing |
| twitter-image.jpg | 1024x512px | Twitter sharing |
| apple-touch-icon.png | 192x192px | Apple home screen |
| favicon-32x32.png | 32x32px | Browser tab |
| favicon-16x16.png | 16x16px | Browser tab |
| favicon.ico | 16x16px | Browser compatibility |

---

### Step 3: Update Contact Information (5 minutes)

**File**: `src/seoUtils.js` (lines 14-25)

```javascript
export const seoConfig = {
  siteName: "Herito Wellness",
  companyName: "Herito Wellness Private Limited",
  domain: "https://www.heritowellness.com",
  description: "Premium functional beverages...",
  defaultImage: "https://www.heritowellness.com/og-image.jpg",
  twitterHandle: "@heritowellness",
  address: {
    streetAddress: "123 Your Street",  // ← UPDATE
    addressLocality: "Mumbai",           // ← UPDATE
    addressRegion: "Maharashtra",        // ← UPDATE
    postalCode: "400001",               // ← UPDATE
    addressCountry: "India"
  },
  contact: {
    email: "contact@heritowellness.com",  // ← UPDATE
    phone: "+91-XXXX-XXXX-XX"            // ← UPDATE
  }
};
```

---

### Step 4: Setup Google Analytics (10 minutes)

**File**: `public/index.html` (before closing `</head>`)

```html
<!-- Get your ID from https://analytics.google.com -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

How to get ID:
1. Go to https://analytics.google.com
2. Click "Create Property"
3. Enter: heritowellness.com
4. Create data stream
5. Copy Measurement ID (G-XXXXXXXXXX)

---

### Step 5: Submit Sitemaps (5 minutes)

**In Google Search Console**:

1. Go to Search Console dashboard
2. Select heritowellness.com property
3. Left menu → "Sitemaps"
4. Submit these URLs:
   - https://www.heritowellness.com/sitemap.xml
   - https://www.heritowellness.com/sitemap-products.xml
5. Check status after 24 hours

---

## 🔧 ADVANCED CONFIGURATION

### Google Tag Manager Setup (Optional but Recommended)

**Why?** Better tag management, event tracking without code changes

Steps:
1. Go to https://tagmanager.google.com
2. Create new container for "Web"
3. Get Container ID: GTM-XXXXXX
4. Add to `public/index.html` (in `<head>`):

```html
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXX');</script>
```

And in `<body>` (before any other body content):
```html
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
```

---

### Setup Social Media Links

**File**: `public/index.html` (in structured data, line ~90)

Update in the `sameAs` array:
```json
"sameAs": [
  "https://www.facebook.com/heritowellness",
  "https://www.instagram.com/heritowellness",
  "https://www.linkedin.com/company/heritowellness",
  "https://www.twitter.com/heritowellness"
]
```

---

### Custom Domain Configuration

**For .htaccess (Apache)**:
```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Redirect to www version
RewriteCond %{HTTP_HOST} ^heritowellness.com [NC]
RewriteRule ^(.*)$ https://www.heritowellness.com/$1 [L,R=301]
```

**For nginx**:
```nginx
# Redirect to www version
server {
    server_name heritowellness.com;
    return 301 https://www.heritowellness.com$request_uri;
}

# HTTPS server block
server {
    server_name www.heritowellness.com;
    listen 443 ssl http2;
    
    # Your SSL certificate configuration
    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;
}
```

---

## 📊 ANALYTICS INTEGRATION

### Key Events to Track

**File**: `src/analytics.js`

```javascript
// Track Product View
trackProductView('Product Name', 'category')

// Track Button Clicks
trackButtonClick('Explore Products', 'home_hero')

// Track Form Submission
trackFormSubmission('contact_form', formData)

// Track Purchases
trackPurchase({
  orderId: '12345',
  total: 500,
  items: [...]
})
```

### E-Commerce Tracking (if applicable)

In components where products are viewed/purchased:

```jsx
import { trackProductView, trackPurchase } from './analytics'

// Product page
useEffect(() => {
  trackProductView('Grape Hydration Drink', 'Beverages')
}, [])

// Checkout page
const handlePurchase = (order) => {
  trackPurchase({
    orderId: order.id,
    total: order.total,
    items: order.items
  })
}
```

---

## 🎨 CUSTOMIZATION

### Change Brand Colors

**File**: `public/index.html`

```html
<!-- Change primary color -->
<meta name="theme-color" content="#2b133d" />  <!-- Purple -->
<meta name="msapplication-TileColor" content="#2b133d" />
```

**File**: `src/Commit/Home.jsx` and other component files

Search and replace color codes:
- `#2b133d` → Your primary color
- `#6a1b9a` → Your accent color

---

### Add Custom Keywords

**File**: `src/seoUtils.js`

```javascript
export const seoKeywords = {
  custom_category: [
    "keyword 1",
    "keyword 2",
    "keyword 3"
  ]
}
```

Then use in pages:
```jsx
import { seoKeywords } from '../seoUtils'

const pageSEO = {
  keywords: [
    ...seoKeywords.general,
    ...seoKeywords.custom_category
  ]
}
```

---

## 🧪 TESTING & VALIDATION

### Test SEO Setup

1. **Mobile Compatibility**
   - Go to https://search.google.com/test/mobile-friendly
   - Enter: https://www.heritowellness.com
   - Should pass all tests

2. **Structured Data**
   - Go to https://schema.org/validate
   - Paste your HTML
   - Should show valid schema

3. **Page Speed**
   - Go to https://pagespeed.web.dev
   - Enter URL
   - Target: 90+ score

4. **Open Graph Tags**
   - Go to https://www.opengraph.xyz
   - Enter URL
   - Verify image/title/description

5. **Rich Results**
   - Go to https://search.google.com/test/rich-results
   - Enter URL
   - Check for rich results eligibility

---

## 🚀 DEPLOYMENT CHECKLIST

Before deploying to production:

- [ ] All verification codes added
- [ ] Contact information updated
- [ ] OG images uploaded
- [ ] Google Analytics ID added
- [ ] Sitemaps verified in GSC
- [ ] robots.txt accessible
- [ ] Mobile friendly test passed
- [ ] Page speed > 80
- [ ] No console errors
- [ ] All links working
- [ ] 404 page configured
- [ ] SSL/HTTPS enabled

---

## 📈 ONGOING MAINTENANCE

### Week 1
- Submit sitemaps
- Verify in GSC
- Check for indexing errors

### Month 1
- Monitor analytics
- Check ranking positions
- Review search queries
- Fix any crawl errors

### Month 2-3
- Analyze traffic patterns
- Update underperforming content
- Add new keywords
- Build backlinks

### Month 6
- Comprehensive SEO audit
- Strategy review
- Content gap analysis
- Competitor benchmarking

---

## 🔗 USEFUL LINKS

- Google Search Console: https://search.google.com/search-console
- Google Analytics: https://analytics.google.com
- Google My Business: https://www.google.com/business
- Bing Webmaster: https://www.bing.com/webmaster
- Schema.org Validator: https://schema.org/validate
- Mobile Friendly Test: https://search.google.com/test/mobile-friendly
- PageSpeed Insights: https://pagespeed.web.dev

---

## ❓ FAQ

**Q: How long until SEO results?**
A: 3-6 months for initial results, 6-12 months for significant improvements

**Q: Do I need to pay for SEO?**
A: No, organic SEO is free. PPC ads are optional for faster traffic

**Q: How often to update content?**
A: Update key pages monthly, blog posts regularly (weekly recommended)

**Q: Is mobile SEO important?**
A: Yes! Google uses mobile-first indexing since 2018

**Q: Do backlinks matter?**
A: Yes, quality backlinks are important for authority and rankings

---

## 📞 SUPPORT

For questions or issues:
- Email: contact@heritowellness.com
- Documentation: SEO_IMPLEMENTATION_GUIDE.md
- Checklist: SEO_COMPLETE_CHECKLIST.md

---

**Setup Date**: January 27, 2026  
**Status**: ✅ Ready for Production  
**Version**: 1.0
