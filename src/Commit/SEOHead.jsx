import { useEffect } from 'react';
import { setMetaTags, addStructuredData, seoConfig } from '../seoUtils';

/**
 * SEO Head Component
 * Dynamically updates meta tags and structured data for each page
 */
const SEOHead = ({
  title = "Herito Wellness",
  description = seoConfig.description,
  keywords = [],
  canonical = `${seoConfig.domain}/`,
  ogTitle,
  ogDescription,
  ogImage = seoConfig.defaultImage,
  ogUrl,
  twitterTitle,
  twitterDescription,
  twitterImage = seoConfig.defaultImage,
  structuredData = null,
  breadcrumbs = null
}) => {
  useEffect(() => {
    // Set standard meta tags
    const seoData = {
      title: `${title} | ${seoConfig.siteName}`,
      description,
      keywords,
      canonical,
      ogTitle: ogTitle || title,
      ogDescription: ogDescription || description,
      ogImage,
      ogUrl: ogUrl || canonical,
      twitterTitle: twitterTitle || ogTitle || title,
      twitterDescription: twitterDescription || ogDescription || description,
      twitterImage
    };

    setMetaTags(seoData);

    // Add structured data if provided
    if (structuredData) {
      addStructuredData(structuredData);
    }

    // Add breadcrumb if provided
    if (breadcrumbs) {
      addStructuredData(breadcrumbs);
    }

    // Scroll to top
    window.scrollTo(0, 0);
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, ogUrl, twitterTitle, twitterDescription, twitterImage, structuredData, breadcrumbs]);

  return null;
};

export default SEOHead;
