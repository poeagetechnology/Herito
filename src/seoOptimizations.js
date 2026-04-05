/**
 * Advanced SEO & Performance Optimization for Herito Wellness
 * Implements Core Web Vitals, Image Optimization, and More
 */

/**
 * 1. LAZY LOADING IMAGES - Intersection Observer API
 * Use this to defer loading of below-the-fold images
 */
export const initializeLazyLoading = () => {
  if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-lazy]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.lazy;
          img.classList.add('lazy-loaded');
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px'
    });

    images.forEach(img => imageObserver.observe(img));
  }
};

/**
 * 2. PRELOAD CRITICAL RESOURCES
 * Adds link rel="preload" to head for critical resources
 */
export const preloadCriticalResources = () => {
  const criticalResources = [
    { href: '/fonts/main-font.woff2', as: 'font', type: 'font/woff2' },
    { href: '/css/critical.css', as: 'style' },
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    if (resource.type) link.type = resource.type;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

/**
 * 3. PERFORMANCE MONITORING
 * Track Core Web Vitals and send to analytics
 */
export const initializeWebVitals = () => {
  // Largest Contentful Paint (LCP)
  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];
    
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        'metric_lcp': lastEntry.renderTime || lastEntry.loadTime,
        'metric_lcp_element': lastEntry.element?.tagName
      });
    }
  });

  try {
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  } catch (e) {
    console.log('LCP not supported');
  }

  // Cumulative Layout Shift (CLS)
  let clsValue = 0;
  const clsObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
        if (window.gtag) {
          window.gtag('event', 'layout_shift', {
            'metric_cls': clsValue
          });
        }
      }
    }
  });

  try {
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  } catch (e) {
    console.log('CLS not supported');
  }

  // First Input Delay (FID) - via web-vitals library recommended
  const fidObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (window.gtag) {
        window.gtag('event', 'first_input_delay', {
          'metric_fid': entry.processingDuration,
          'metric_fid_delay': entry.startTime
        });
      }
    }
  });

  try {
    fidObserver.observe({ entryTypes: ['first-input'] });
  } catch (e) {
    console.log('FID not supported');
  }
};

/**
 * 4. FONT LOADING OPTIMIZATION
 * Use font-display: swap to prevent text from being hidden
 */
export const fontOptimization = `
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter.woff2') format('woff2');
  font-display: swap;
  font-weight: 400;
}

@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter-bold.woff2') format('woff2');
  font-display: swap;
  font-weight: 700;
}
`;

/**
 * 5. CRITICAL CSS INLINING
 * Inline above-the-fold CSS to improve FCP
 */
export const criticalCSSInline = `
/* Critical styles for initial render */
html, body { margin: 0; padding: 0; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
.hero { background: #f5f3f8; }
/* Add more critical styles */
`;

/**
 * 6. IMAGE OPTIMIZATION GUIDELINES
 */
export const imageOptimizationGuide = `
/* For React img tags, use: */
<img 
  src="image.jpg" 
  alt="Descriptive text for accessibility and SEO"
  loading="lazy"
  width="800"
  height="600"
  sizes="(max-width: 600px) 100vw, 800px"
  srcSet="
    image-small.jpg 600w,
    image-medium.jpg 1200w,
    image-large.jpg 2000w
  "
/>

/* Picture element for format optimization: */
<picture>
  <source srcSet="image.webp" type="image/webp" />
  <source srcSet="image.jpg" type="image/jpeg" />
  <img src="image.jpg" alt="Description" loading="lazy" />
</picture>

/* Next.js Image Component (Recommended): */
import Image from 'next/image'
<Image 
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority={false}
  loading="lazy"
/>
`;

/**
 * 7. META TAGS FOR PERFORMANCE
 * Add these to index.html head
 */
export const performanceMetaTags = `
<!-- DNS Prefetch for external domains -->
<link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
<link rel="dns-prefetch" href="//www.googletagmanager.com" />

<!-- Preconnect to important origins -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- Prefetch potential next navigation -->
<link rel="prefetch" href="/products" as="document" />
<link rel="prefetch" href="/about" as="document" />

<!-- Resource hints for performance -->
<link rel="resource-hints" href="/api/products" as="fetch" crossorigin />
`;

/**
 * 8. STRUCTURED DATA OPTIMIZATION
 * Implement additional schema types
 */
export const advancedStructuredData = {
  // AggregateOffer Schema for Products
  aggregateOfferSchema: {
    "@context": "https://schema.org",
    "@type": "AggregateOffer",
    "name": "Herito Wellness Products",
    "offers": {
      "@type": "Offer",
      "url": "https://www.heritowellness.com/products",
      "priceCurrency": "INR",
      "price": "20"
    }
  },

  // Review Schema (when you have reviews)
  reviewSchema: {
    "@context": "https://schema.org",
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.8",
      "bestRating": "5"
    },
    "reviewBody": "Amazing functional beverages!",
    "author": {
      "@type": "Person",
      "name": "Customer Name"
    }
  },

  // Event Schema (if hosting events)
  eventSchema: {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Herito Wellness Product Launch",
    "description": "Join us for an exclusive product launch event",
    "url": "https://www.heritowellness.com/event",
    "startDate": "2026-02-15T10:00:00",
    "endDate": "2026-02-15T17:00:00",
    "location": {
      "@type": "Place",
      "name": "Event Venue",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Your Address",
        "addressLocality": "City",
        "addressRegion": "State",
        "postalCode": "12345",
        "addressCountry": "IN"
      }
    }
  }
};

/**
 * 9. SECURITY HEADERS FOR SEO
 * Add to your server configuration (nginx, Apache, or .htaccess)
 */
export const securityHeaders = `
# HTTPS/SSL Configuration
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload

# X-Frame-Options
X-Frame-Options: SAMEORIGIN

# X-Content-Type-Options
X-Content-Type-Options: nosniff

# X-XSS-Protection
X-XSS-Protection: 1; mode=block

# Referrer Policy
Referrer-Policy: strict-origin-when-cross-origin

# Permissions Policy
Permissions-Policy: geolocation=(), microphone=(), camera=()

# Content Security Policy
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline';
`;

/**
 * 10. MOBILE SEO OPTIMIZATION
 */
export const mobileSEOChecklist = `
✓ Responsive Design - Mobile-first approach
✓ Viewport Meta Tag - <meta name="viewport" content="width=device-width, initial-scale=1">
✓ Touch-Friendly - Buttons ≥ 48px, spacing between elements
✓ Readable Font - Minimum 16px font size
✓ Fast Loading - Target < 3 seconds on 4G
✓ No Intrusive Interstitials - Full-screen popups on mobile bad
✓ App Indexing - App links in search results
✓ Mobile Usability - Test in Google Search Console
`;

/**
 * 11. CANONICAL URL MANAGEMENT
 */
export const canonicalURLManagement = `
/* Always include canonical tags to prevent duplicate content */

/* Root domain */
<link rel="canonical" href="https://www.heritowellness.com/" />

/* Pages */
<link rel="canonical" href="https://www.heritowellness.com/products" />
<link rel="canonical" href="https://www.heritowellness.com/about" />

/* Self-referential canonicals (best practice) */
/* Even on home page: <link rel="canonical" href="https://www.heritowellness.com/" /> */

/* Prevent parameter duplication */
/* For /products?sort=price and /products?sort=rating, set canonical to /products */
`;

/**
 * 12. ROBOTS META TAG OPTIMIZATION
 */
export const robotsMetaOptimization = `
<!-- Homepage - index and follow -->
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

<!-- Noindex for pages that shouldn't rank (admin, duplicates) -->
<meta name="robots" content="noindex, nofollow" />

<!-- Allow caching for better performance -->
<meta http-equiv="Cache-Control" content="public, max-age=604800" />
`;

/**
 * 13. INITIALIZATION FUNCTION
 * Call this on app mount
 */
export const initializeSEOOptimizations = () => {
  // Only run on client side
  if (typeof window === 'undefined') return;

  try {
    initializeLazyLoading();
    preloadCriticalResources();
    initializeWebVitals();
  } catch (error) {
    console.warn('SEO optimizations error:', error);
  }
};

export default {
  initializeSEOOptimizations,
  initializeLazyLoading,
  preloadCriticalResources,
  initializeWebVitals,
  advancedStructuredData
};
