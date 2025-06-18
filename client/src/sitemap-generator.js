// client/src/sitemap-generator.js
const Sitemap = require('react-router-sitemap').default;

// Define your routes for the sitemap
const routes = [
  '/',
  '/about-us',
  '/services',
  '/products', 
  '/contact',
  '/booking',
  '/blackjack',
  '/poker',
  '/craps',
  '/roulette',
  '/terms-of-service',
  '/casino-rentals-bakersfield',
  '/casino-party-rentals',
  '/poker-table-rental-bakersfield',
  '/blackjack-table-rental-bakersfield',
  '/corporate-casino-events-bakersfield',
  '/fundraiser-casino-nights-bakersfield'
];

// Create sitemap with priorities and change frequencies
const sitemap = new Sitemap(routes)
  .applyParams({
    '/': { 
      priority: 1.0, 
      changefreq: 'daily',
      lastmod: new Date().toISOString()
    },
    '/services': { 
      priority: 0.9, 
      changefreq: 'weekly',
      lastmod: new Date().toISOString()
    },
    '/booking': { 
      priority: 0.9, 
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    '/casino-rentals-bakersfield': { 
      priority: 0.8, 
      changefreq: 'weekly',
      lastmod: new Date().toISOString()
    },
    '/contact': { 
      priority: 0.7, 
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    }
  })
  .build('https://wattevent.com')
  .save('./public/sitemap.xml');

console.log('Sitemap generated successfully!');

// client/public/robots.txt
/*
User-agent: *
Allow: /

# Disallow admin and user areas
Disallow: /admin
Disallow: /dashboard
Disallow: /login
Disallow: /register

# Allow important SEO pages
Allow: /casino-rentals-bakersfield
Allow: /casino-party-rentals
Allow: /poker-table-rental-bakersfield
Allow: /blackjack-table-rental-bakersfield

# Sitemap location
Sitemap: https://wattevent.com/sitemap.xml

# Crawl delay for bots
Crawl-delay: 1
*/

// client/public/index.html - Updated version
const indexHTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    
    <!-- Basic SEO Meta Tags -->
    <meta name="description" content="Professional casino party rentals in Bakersfield, California. Poker, Blackjack, Roulette & Craps tables with dealers. Corporate events, fundraisers, parties. Call 661-302-0115" />
    <meta name="keywords" content="casino rentals Bakersfield, casino party rental, poker table rental Bakersfield, blackjack table rental, casino equipment rental Bakersfield California" />
    <meta name="author" content="Watt Events" />
    <meta name="robots" content="index, follow" />
    
    <!-- Geo Meta Tags -->
    <meta name="geo.region" content="US-CA" />
    <meta name="geo.placename" content="Bakersfield" />
    <meta name="geo.position" content="35.3733;-119.0187" />
    <meta name="ICBM" content="35.3733, -119.0187" />
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="Casino Rentals Bakersfield | Professional Casino Party Equipment" />
    <meta property="og:description" content="Professional casino party rentals in Bakersfield, California. Poker, Blackjack, Roulette & Craps tables with dealers." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://wattevent.com" />
    <meta property="og:image" content="https://wattevent.com/images/casino-party-bakersfield.jpg" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:site_name" content="Watt Events" />
    
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Casino Rentals Bakersfield | Professional Casino Party Equipment" />
    <meta name="twitter:description" content="Professional casino party rentals in Bakersfield, California. Poker, Blackjack, Roulette & Craps tables with dealers." />
    <meta name="twitter:image" content="https://wattevent.com/images/casino-party-bakersfield.jpg" />
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://wattevent.com" />
    
    <!-- Preconnect to external domains -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <!-- Apple Touch Icons -->
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    
    <!-- JSON-LD Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Watt Events",
      "image": "https://wattevent.com/images/watt-events-logo.png",
      "description": "Professional casino party rentals in Bakersfield, California",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bakersfield",
        "addressRegion": "CA",
        "postalCode": "93301",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 35.3733,
        "longitude": -119.0187
      },
      "telephone": "661-302-0115",
      "email": "wattenbargerevent@gmail.com",
      "url": "https://wattevent.com",
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "47"
      }
    }
    </script>
    
    <title>Casino Rentals Bakersfield | Professional Casino Party Equipment Rental CA</title>
    
    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
    </script>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>`;

// client/src/utils/analytics.js
import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize('YOUR-GA4-MEASUREMENT-ID');
};

export const logPageView = () => {
  ReactGA.send({ 
    hitType: "pageview", 
    page: window.location.pathname + window.location.search 
  });
};

export const logEvent = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};

// Track phone calls
export const trackPhoneCall = () => {
  logEvent('Contact', 'Phone Call', 'Header Phone Number');
};

// Track booking form submissions
export const trackBookingSubmission = () => {
  logEvent('Booking', 'Form Submission', 'Booking Request');
};

// Track quote requests
export const trackQuoteRequest = () => {
  logEvent('Lead Generation', 'Quote Request', 'Free Quote Button');
};