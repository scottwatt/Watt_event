// client/src/components/pages/CasinoRentalBakersfield.js
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';
import OptimizedImage from '../OptimizedImage';
import './CasinoRentalBakersfield.css';

const CasinoRentalBakersfield = () => {
  // Schema markup for the landing page
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Casino Rental Bakersfield",
    "description": "Professional casino equipment rental in Bakersfield, California. Poker tables, blackjack tables, roulette wheels, and craps tables with dealers for corporate events, fundraisers, and private parties.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Watt Events",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bakersfield",
        "addressRegion": "CA",
        "addressCountry": "US"
      },
      "telephone": "661-302-0115",
      "url": "https://wattevent.com"
    },
    "areaServed": [
      "Bakersfield, CA",
      "Delano, CA", 
      "Shafter, CA",
      "Kern County, CA"
    ],
    "serviceType": "Casino Equipment Rental",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceRange": "$$",
      "areaServed": "Bakersfield, CA"
    }
  };

  const services = [
    {
      name: "Poker Table Rental",
      description: "Professional poker tables with chips, cards, and trained dealers",
      image: "/images/poker.jpg",
      features: ["Texas Hold'em", "Omaha", "7-Card Stud", "Professional Dealers"]
    },
    {
      name: "Blackjack Table Rental", 
      description: "Authentic casino blackjack tables with dealers and equipment",
      image: "/images/blackjack.jpg",
      features: ["Multiple Tables", "Professional Dealers", "Casino Chips", "Authentic Experience"]
    },
    {
      name: "Roulette Wheel Rental",
      description: "Casino-quality roulette wheels and tables for your event",
      image: "/images/rouletteChips.jpg", 
      features: ["American Roulette", "European Roulette", "Professional Croupiers", "Betting Layout"]
    },
    {
      name: "Craps Table Rental",
      description: "Exciting craps tables with dice and experienced dealers",
      image: "/images/craps.jpg",
      features: ["Full-size Tables", "Dice Sets", "Betting Layout", "Expert Dealers"]
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      business: "Kern County Chamber",
      text: "Watt Events provided exceptional casino tables for our Bakersfield fundraiser. The dealers were professional and the equipment was top-notch!",
      rating: 5
    },
    {
      name: "David Chen",
      business: "Chen Wedding Planning",
      text: "Best casino rental company in Bakersfield! Their poker and blackjack tables are always a hit at our events.",
      rating: 5
    },
    {
      name: "Maria Rodriguez", 
      business: "Delano Community Center",
      text: "Professional service and great prices for casino equipment rental. Highly recommend for Kern County events!",
      rating: 5
    }
  ];

  const serviceAreas = [
    "Bakersfield", "Delano", "Shafter", "Wasco", "McFarland", 
    "Arvin", "Lamont", "Tehachapi", "Oildale", "Rosedale"
  ];

  const renderStars = (rating) => {
    return "★".repeat(rating);
  };

  return (
    <>
      <SEO 
        title="Casino Rental Bakersfield | #1 Casino Equipment Rental CA"
        description="Professional casino rental in Bakersfield, CA. Poker tables, blackjack, roulette & craps with dealers. Corporate events, fundraisers, parties. Free quotes - Call 661-302-0115"
        keywords="casino rental Bakersfield, casino equipment rental Bakersfield California, poker table rental Bakersfield, blackjack table rental Bakersfield, casino party rental Bakersfield, mobile casino Bakersfield"
        canonicalUrl="https://wattevent.com/casino-rental-bakersfield"
        schemaMarkup={serviceSchema}
      />

      <div className="casino-rental-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Casino Rental Bakersfield</h1>
            <h2>Professional Casino Equipment Rental in Bakersfield, California</h2>
            <p className="hero-description">
              Bring Vegas-style excitement to your Bakersfield event! Professional poker tables, 
              blackjack, roulette, and craps tables with trained dealers. Perfect for corporate 
              events, fundraisers, and private parties throughout Kern County.
            </p>
            <div className="hero-features">
              <div className="feature">
                <span className="icon">🎰</span>
                <span>Professional Dealers</span>
              </div>
              <div className="feature">
                <span className="icon">🚚</span>
                <span>Free Delivery Bakersfield</span>
              </div>
              <div className="feature">
                <span className="icon">⭐</span>
                <span>5-Star Local Reviews</span>
              </div>
            </div>
            <div className="hero-buttons">
              <Link to="/booking" className="cta-button primary">
                Get Free Quote Today
              </Link>
              <a href="tel:661-302-0115" className="cta-button secondary">
                Call (661) 302-0115
              </a>
            </div>
          </div>
          <div className="hero-image">
            <OptimizedImage
              src="/images/casino-background.jpg"
              alt="Casino equipment rental Bakersfield - Watt Events"
              width={600}
              height={400}
              priority={true}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <div className="container">
            <h2>Casino Equipment Rental Services in Bakersfield</h2>
            <p className="section-description">
              We provide the highest quality casino equipment rentals in Bakersfield, California. 
              Our professional-grade tables and experienced dealers ensure your event is unforgettable.
            </p>
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <OptimizedImage
                    src={service.image}
                    alt={`${service.name} Bakersfield - Watt Events`}
                    width={400}
                    height={250}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="service-content">
                    <h3>{service.name} Bakersfield</h3>
                    <p>{service.description}</p>
                    <ul className="service-features">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>✓ {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-choose-section">
          <div className="container">
            <h2>Why Choose Watt Events for Casino Rental in Bakersfield?</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <h3>🏆 #1 Casino Rental Company in Bakersfield</h3>
                <p>Over 100 successful events throughout Kern County with 5-star reviews from satisfied customers.</p>
              </div>
              <div className="benefit-item">
                <h3>🎲 Professional Casino Equipment</h3>
                <p>Authentic, casino-quality tables and equipment - the same used in Las Vegas casinos.</p>
              </div>
              <div className="benefit-item">
                <h3>👨‍💼 Trained Professional Dealers</h3>
                <p>Experienced dealers who know the games inside and out, ensuring smooth gameplay all night.</p>
              </div>
              <div className="benefit-item">
                <h3>🚚 Free Delivery & Setup in Bakersfield</h3>
                <p>Complete delivery, setup, and breakdown service throughout Bakersfield and Kern County.</p>
              </div>
              <div className="benefit-item">
                <h3>💰 Competitive Pricing</h3>
                <p>Best casino rental prices in Bakersfield with transparent pricing and no hidden fees.</p>
              </div>
              <div className="benefit-item">
                <h3>📞 Available 7 Days a Week</h3>
                <p>Weekend, evening, and holiday events welcome. We're here when you need us.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Event Types Section */}
        <section className="event-types-section">
          <div className="container">
            <h2>Perfect for Any Event in Bakersfield</h2>
            <div className="event-types-grid">
              <div className="event-type">
                <h3>Corporate Events Bakersfield</h3>
                <p>Team building, client entertainment, holiday parties, and corporate fundraisers.</p>
              </div>
              <div className="event-type">
                <h3>Fundraising Events</h3>
                <p>Charity casino nights, school fundraisers, and nonprofit organization events.</p>
              </div>
              <div className="event-type">
                <h3>Private Parties</h3>
                <p>Birthday parties, anniversary celebrations, bachelor/bachelorette parties.</p>
              </div>
              <div className="event-type">
                <h3>Wedding Receptions</h3>
                <p>Add excitement to your wedding reception with casino entertainment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="service-areas-section">
          <div className="container">
            <h2>Casino Rental Service Areas</h2>
            <p>We proudly serve casino equipment rentals throughout Kern County, California:</p>
            <div className="areas-list">
              {serviceAreas.map((area, index) => (
                <span key={index} className="area-tag">
                  Casino Rental {area}, CA
                </span>
              ))}
            </div>
            <p className="delivery-note">
              <strong>Free delivery and setup</strong> within 25 miles of Bakersfield. 
              Extended delivery available throughout Central California.
            </p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="container">
            <h2>What Bakersfield Says About Our Casino Rentals</h2>
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="reviewer-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.business}</p>
                    </div>
                    <div className="rating">
                      <span className="stars">{renderStars(testimonial.rating)}</span>
                    </div>
                  </div>
                  <blockquote>"{testimonial.text}"</blockquote>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="container">
            <h2>Frequently Asked Questions - Casino Rental Bakersfield</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>How much does casino rental cost in Bakersfield?</h3>
                <p>Pricing varies based on number of tables, dealers, and event duration. Contact us for a free personalized quote for your Bakersfield event.</p>
              </div>
              <div className="faq-item">
                <h3>Do you provide dealers with the casino equipment?</h3>
                <p>Yes! All our casino rentals in Bakersfield include professional, trained dealers who manage the games throughout your event.</p>
              </div>
              <div className="faq-item">
                <h3>How far in advance should I book casino rental in Bakersfield?</h3>
                <p>We recommend booking 2-4 weeks in advance, especially for weekend events. However, we can often accommodate last-minute requests.</p>
              </div>
              <div className="faq-item">
                <h3>What areas do you serve for casino rentals?</h3>
                <p>We serve all of Bakersfield and Kern County, including Delano, Shafter, Wasco, and surrounding areas with free delivery and setup.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="final-cta-section">
          <div className="container">
            <h2>Ready to Book Your Casino Rental in Bakersfield?</h2>
            <p>Get a free quote for your casino party rental today! Call now or request a quote online.</p>
            <div className="cta-buttons">
              <a href="tel:661-302-0115" className="cta-button primary large">
                📞 Call (661) 302-0115 Now
              </a>
              <Link to="/booking" className="cta-button secondary large">
                Get Free Quote Online
              </Link>
            </div>
            <div className="contact-info">
              <p><strong>Watt Events - Bakersfield's Premier Casino Rental Company</strong></p>
              <p>📧 contact@wattevent.com | 📞 (661) 302-0115</p>
              <p>Serving Bakersfield, Delano, Shafter, and all of Kern County, California</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CasinoRentalBakersfield;