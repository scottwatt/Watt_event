// client/src/components/SEO.js
import React, { useEffect } from 'react';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl,
  ogImage = '/images/watt-events-og.jpg',
  schemaMarkup,
  noindex = false 
}) => {
  const siteTitle = "Watt Events - Casino Rentals Bakersfield";
  const defaultDescription = "Professional casino party rentals in Bakersfield, California. Poker, Blackjack, Roulette & Craps tables for corporate events, parties & fundraisers. Call 661-302-0115";
  const baseUrl = "https://wattevent.com";
  
  useEffect(() => {
    // Update document title
    document.title = title ? `${title} | ${siteTitle}` : siteTitle;
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description || defaultDescription;
    
    // Update or create meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.content = keywords;
    }
    
    // Update or create canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl || baseUrl;
    
    // Add schema markup if provided
    if (schemaMarkup) {
      let schemaScript = document.querySelector('#schema-script');
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'schema-script';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schemaMarkup);
    }
    
    // Open Graph meta tags
    const ogTags = [
      { property: 'og:title', content: title || siteTitle },
      { property: 'og:description', content: description || defaultDescription },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: canonicalUrl || baseUrl },
      { property: 'og:image', content: `${baseUrl}${ogImage}` },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:site_name', content: 'Watt Events' }
    ];
    
    ogTags.forEach(tag => {
      let ogMeta = document.querySelector(`meta[property="${tag.property}"]`);
      if (!ogMeta) {
        ogMeta = document.createElement('meta');
        ogMeta.setAttribute('property', tag.property);
        document.head.appendChild(ogMeta);
      }
      ogMeta.content = tag.content;
    });
    
    // Twitter Card meta tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title || siteTitle },
      { name: 'twitter:description', content: description || defaultDescription },
      { name: 'twitter:image', content: `${baseUrl}${ogImage}` }
    ];
    
    twitterTags.forEach(tag => {
      let twitterMeta = document.querySelector(`meta[name="${tag.name}"]`);
      if (!twitterMeta) {
        twitterMeta = document.createElement('meta');
        twitterMeta.name = tag.name;
        document.head.appendChild(twitterMeta);
      }
      twitterMeta.content = tag.content;
    });
    
  }, [title, description, keywords, canonicalUrl, ogImage, schemaMarkup, siteTitle, defaultDescription, baseUrl]);
  
  return null; // This component doesn't render anything
};

export default SEO;