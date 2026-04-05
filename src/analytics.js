/**
 * Google Analytics 4 Configuration for Herito Wellness
 * Add this to your index.html before closing </head> tag
 */

// Replace YOUR_GA_MEASUREMENT_ID with your actual ID from Google Analytics

const gtagScript = `
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_MEASUREMENT_ID', {
    'page_path': window.location.pathname,
    'page_title': document.title,
    'anonymize_ip': true
  });
</script>

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-YOUR_CONTAINER_ID"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
`;

/**
 * Google Tag Manager Configuration (Optional but Recommended)
 * Place this in the body section for better tag management
 */
const gtmBodyScript = `
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-YOUR_CONTAINER_ID"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
`;

/**
 * Event Tracking Examples for React Components
 */

// Example 1: Track Product View
export const trackProductView = (productName, productCategory) => {
  if (window.gtag) {
    window.gtag('event', 'view_item', {
      items: [{
        item_id: productName,
        item_name: productName,
        item_category: productCategory,
        price: '₹25', // Update with actual price
        quantity: 1
      }]
    });
  }
};

// Example 2: Track Button Clicks
export const trackButtonClick = (buttonName, buttonLocation) => {
  if (window.gtag) {
    window.gtag('event', 'button_click', {
      button_name: buttonName,
      button_location: buttonLocation,
      timestamp: new Date().toISOString()
    });
  }
};

// Example 3: Track Enquiry Form Submission
export const trackFormSubmission = (formName, formValues) => {
  if (window.gtag) {
    window.gtag('event', 'form_submit', {
      form_name: formName,
      form_fields: Object.keys(formValues),
      timestamp: new Date().toISOString()
    });
  }
};

// Example 4: Track Scroll Depth
export const trackScrollDepth = (scrollPercentage) => {
  if (window.gtag) {
    window.gtag('event', 'scroll', {
      scroll_depth_percentage: scrollPercentage
    });
  }
};

// Example 5: Track Page View (automatic with GA4)
export const trackPageView = (pagePath, pageTitle) => {
  if (window.gtag) {
    window.gtag('config', 'YOUR_GA_MEASUREMENT_ID', {
      page_path: pagePath,
      page_title: pageTitle
    });
  }
};

// Example 6: Track E-commerce Purchase
export const trackPurchase = (purchaseData) => {
  if (window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: purchaseData.orderId,
      affiliation: 'Herito Wellness',
      value: purchaseData.total,
      currency: 'INR',
      tax: purchaseData.tax || 0,
      shipping: purchaseData.shipping || 0,
      items: purchaseData.items
    });
  }
};

// Example 7: Track Custom Event
export const trackCustomEvent = (eventName, eventData) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventData);
  }
};

/**
 * Setup Instructions:
 * 
 * 1. Create Google Analytics 4 Property:
 *    - Go to https://analytics.google.com
 *    - Create new property for heritowellness.com
 *    - Get your Measurement ID (format: G-XXXXXXXXXX)
 * 
 * 2. Create Google Tag Manager Container:
 *    - Go to https://tagmanager.google.com
 *    - Create new container for Web
 *    - Get your Container ID (format: GTM-XXXXXX)
 * 
 * 3. Add to index.html:
 *    - Add GA script with your Measurement ID
 *    - Add GTM script with your Container ID
 * 
 * 4. Implement Conversions:
 *    - Create conversion goals in GA4
 *    - Track important user actions
 *    - Monitor in GA4 Real-time reports
 * 
 * 5. Set Up Data Streams:
 *    - Configure Web data stream
 *    - Enable enhanced measurement (scrolls, site search, etc.)
 *    - Set up user-ID tracking if applicable
 */

/**
 * GTM Container Configuration (Template)
 * Create these tags in Google Tag Manager:
 * 
 * Tag 1: GA4 Configuration Tag
 * - Trigger: All Pages
 * - Type: Google Analytics 4 Configuration
 * - Measurement ID: G-XXXXXXXXXX
 * 
 * Tag 2: Form Submit Event
 * - Trigger: Form Submit (CSS selector: form)
 * - Type: Google Analytics 4 Event
 * - Event Name: form_complete
 * 
 * Tag 3: CTA Button Click
 * - Trigger: Click - Just Links (matches: /products, /enquiry)
 * - Type: Google Analytics 4 Event
 * - Event Name: cta_click
 */

export default {
  gtagScript,
  gtmBodyScript,
  trackProductView,
  trackButtonClick,
  trackFormSubmission,
  trackScrollDepth,
  trackPageView,
  trackPurchase,
  trackCustomEvent
};
