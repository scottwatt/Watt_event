// client/src/components/SEO.js
import React from 'react';
import { Helmet } from 'react-helmet-async';

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
  
  return (
    <Helmet>
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl || baseUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl || baseUrl} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Watt Events" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />
      
      {/* Local Business Info */}
      <meta name="geo.region" content="US-CA" />
      <meta name="geo.placename" content="Bakersfield" />
      <meta name="geo.position" content="35.3733;-119.0187" />
      <meta name="ICBM" content="35.3733, -119.0187" />
      
      {/* Schema Markup */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
      
      {noindex && <meta name="robots" content="noindex,nofollow" />}
    </Helmet>
  );
};

export default SEO;