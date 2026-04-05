/**
 * SEO Utilities - Herito Wellness
 * Provides helper functions and meta tag generators for SEO
 */

export const seoConfig = {
  siteName: "Herito Wellness",
  companyName: "Herito Wellness Private Limited",
  domain: "https://www.heritowellness.com",
  description: "Premium functional beverages and nutrition products for hydration, energy, sports nutrition, and immunity. Science-driven wellness for modern healthy living.",
  defaultImage: "https://www.heritowellness.com/og-image.jpg",
  twitterHandle: "@heritowellness",
  address: {
    streetAddress: "Your Address Here",
    addressLocality: "Your City",
    addressRegion: "Your State",
    postalCode: "Your Postal Code",
    addressCountry: "India"
  },
  contact: {
    email: "contact@heritowellness.com",
    phone: "+91-XXXX-XXXX-XX"
  }
};

/**
 * Generate SEO meta tags for each page
 * @param {Object} config - Page specific configuration
 * @returns {Object} - Meta tag configuration
 */
export const generatePageSEO = (config) => {
  return {
    title: config.title || "Herito Wellness",
    description: config.description || seoConfig.description,
    keywords: config.keywords || [],
    canonical: config.canonical || seoConfig.domain,
    ogTitle: config.ogTitle || config.title,
    ogDescription: config.ogDescription || config.description,
    ogImage: config.ogImage || seoConfig.defaultImage,
    ogUrl: config.ogUrl || seoConfig.domain,
    twitterTitle: config.twitterTitle || config.title,
    twitterDescription: config.twitterDescription || config.description,
    twitterImage: config.twitterImage || seoConfig.defaultImage
  };
};

/**
 * Generate structured data for different content types
 */
export const generateStructuredData = (type, data) => {
  const baseContext = {
    "@context": "https://schema.org",
    "@type": type
  };

  const types = {
    Product: {
      ...baseContext,
      name: data.name,
      description: data.description,
      image: data.image,
      brand: {
        "@type": "Brand",
        name: "Herito Wellness"
      },
      offers: {
        "@type": "Offer",
        url: data.url,
        priceCurrency: data.currency || "INR",
        price: data.price,
        availability: "https://schema.org/InStock"
      },
      aggregateRating: data.rating ? {
        "@type": "AggregateRating",
        ratingValue: data.rating.value,
        reviewCount: data.rating.count
      } : undefined
    },
    Article: {
      ...baseContext,
      headline: data.headline,
      description: data.description,
      image: data.image,
      datePublished: data.datePublished,
      dateModified: data.dateModified,
      author: {
        "@type": "Organization",
        name: "Herito Wellness"
      }
    },
    LocalBusiness: {
      ...baseContext,
      name: "Herito Wellness Private Limited",
      image: seoConfig.defaultImage,
      description: seoConfig.description,
      url: seoConfig.domain,
      telephone: seoConfig.contact.phone,
      email: seoConfig.contact.email,
      address: {
        "@type": "PostalAddress",
        ...seoConfig.address
      }
    }
  };

  return types[type] || baseContext;
};

/**
 * Set meta tags programmatically
 */
export const setMetaTags = (seoData) => {
  // Title
  if (seoData.title) {
    document.title = seoData.title;
  }

  // Description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', seoData.description);

  // Keywords
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.setAttribute('content', seoData.keywords.join(', '));

  // Canonical
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', seoData.canonical);

  // OG Tags
  setOGTag('og:title', seoData.ogTitle);
  setOGTag('og:description', seoData.ogDescription);
  setOGTag('og:image', seoData.ogImage);
  setOGTag('og:url', seoData.ogUrl);

  // Twitter Tags
  setMetaTag('twitter:title', seoData.twitterTitle);
  setMetaTag('twitter:description', seoData.twitterDescription);
  setMetaTag('twitter:image', seoData.twitterImage);
};

/**
 * Helper to set OG meta tags
 */
const setOGTag = (property, content) => {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

/**
 * Helper to set regular meta tags
 */
const setMetaTag = (name, content) => {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

/**
 * Add structured data to page
 */
export const addStructuredData = (data) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

/**
 * Generate breadcrumb structured data
 */
export const generateBreadcrumb = (items) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

/**
 * SEO Keywords by category
 */
export const seoKeywords = {
  hydration: [
    "hydration drinks",
    "electrolyte drinks",
    "sports hydration",
    "hydration beverages India",
    "electrolyte balance",
    "hydration supplements",
    "functional hydration"
  ],
  energy: [
    "energy drinks",
    "natural energy drinks",
    "sports energy",
    "energy beverages",
    "clean energy drinks",
    "functional energy"
  ],
  nutrition: [
    "nutrition products",
    "functional nutrition",
    "premium nutrition",
    "nutrition supplements",
    "clean nutrition"
  ],
  immunity: [
    "immunity drinks",
    "immune system support",
    "immunity beverages",
    "wellness immunity",
    "health immunity"
  ],
  general: [
    "functional beverages",
    "wellness drinks",
    "health drinks",
    "premium beverages",
    "clean label drinks",
    "science-driven wellness",
    "modern wellness",
    "balanced nutrition"
  ]
};

/**
 * Performance optimization - Image lazy loading
 */
export const enableLazyLoading = () => {
  if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });
    images.forEach(img => imageObserver.observe(img));
  }
};

const seoExports = {
  seoConfig,
  generatePageSEO,
  generateStructuredData,
  setMetaTags,
  addStructuredData,
  generateBreadcrumb,
  seoKeywords,
  enableLazyLoading
};

export default seoExports;
