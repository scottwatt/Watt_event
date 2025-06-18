// client/src/components/pages/Home.js
import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import PricingInfo from '../PricingInfo';
import SEO from '../SEO';
import ServiceAreas from '../ServiceAreas';
import LocalReviews from '../LocalReviews';

function Home() {
  // Local Business Schema for Bakersfield
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Watt Events",
    "image": [
      "https://wattevent.com/images/casino-table-rental.jpg",
      "https://wattevent.com/images/poker-table-bakersfield.jpg",
      "https://wattevent.com/images/casino-party-bakersfield.jpg"
    ],
    "description": "Professional casino party rentals in Bakersfield, California. We provide poker tables, blackjack tables, roulette wheels, and craps tables for corporate events, fundraisers, and private parties.",
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
    "openingHours": ["Mo-Su 00:00-23:59"],
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card, Check",
    "currenciesAccepted": "USD",
    "areaServed": [
      {
        "@type": "City",
        "name": "Bakersfield",
        "sameAs": "https://en.wikipedia.org/wiki/Bakersfield,_California"
      },
      {
        "@type": "City", 
        "name": "Delano"
      },
      {
        "@type": "City",
        "name": "Shafter"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Casino Equipment Rentals",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Poker Table Rental Bakersfield",
            "description": "Professional poker tables with dealers for events in Bakersfield, CA"
          },
          "areaServed": "Bakersfield, CA"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Blackjack Table Rental Bakersfield",
            "description": "Authentic blackjack tables with professional dealers"
          },
          "areaServed": "Bakersfield, CA"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Roulette Wheel Rental Bakersfield", 
            "description": "Casino-quality roulette wheels for parties and events"
          },
          "areaServed": "Bakersfield, CA"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Craps Table Rental Bakersfield",
            "description": "Professional craps tables for casino-themed events"
          },
          "areaServed": "Bakersfield, CA"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating", 
      "ratingValue": "4.9",
      "reviewCount": "47"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Jennifer Martinez"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Watt Events provided amazing casino tables for our corporate event in Bakersfield. Professional dealers and high-quality equipment made our party a huge success!"
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Casino Rentals Bakersfield | #1 Casino Party Equipment Rental CA"
        description="Professional casino party rentals in Bakersfield, California. Poker, blackjack, roulette & craps tables with dealers. Corporate events, fundraisers, parties. Free quotes - Call 661-302-0115"
        keywords="casino rentals Bakersfield, casino party rental Bakersfield California, poker table rental Bakersfield, blackjack table rental, casino equipment rental, mobile casino Bakersfield, casino night fundraiser, corporate casino events Bakersfield CA"
        canonicalUrl="https://wattevent.com"
        schemaMarkup={localBusinessSchema}
      />
      <HeroSection />
      <Cards />
      <ServiceAreas />
      <LocalReviews />
      <PricingInfo />
    </>
  );
}

export default Home;