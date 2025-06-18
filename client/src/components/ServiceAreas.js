// client/src/components/ServiceAreas.js
import React from 'react';
import './ServiceAreas.css';

const ServiceAreas = () => {
  const serviceAreas = [
    {
      city: 'Bakersfield',
      description: 'Our home base - Premier casino rentals in Bakersfield, CA',
      zipCodes: '93301, 93304, 93305, 93306, 93307, 93308, 93309, 93311, 93312, 93313, 93314'
    },
    {
      city: 'Delano', 
      description: 'Professional casino party equipment delivered to Delano',
      zipCodes: '93215, 93216'
    },
    {
      city: 'Shafter',
      description: 'Casino table rentals and dealers for Shafter events',
      zipCodes: '93263'
    },
    {
      city: 'Wasco',
      description: 'Full-service casino parties in Wasco, California',
      zipCodes: '93280'
    },
    {
      city: 'McFarland',
      description: 'Casino equipment rental services for McFarland',
      zipCodes: '93250'
    },
    {
      city: 'Arvin',
      description: 'Casino night entertainment for Arvin communities',
      zipCodes: '93203'
    },
    {
      city: 'Lamont',
      description: 'Professional casino rentals delivered to Lamont',
      zipCodes: '93241'
    },
    {
      city: 'Tehachapi',
      description: 'Casino party rentals for Tehachapi and surrounding areas',
      zipCodes: '93561'
    }
  ];

  return (
    <section className="service-areas">
      <div className="container">
        <h2>Casino Rental Service Areas in Kern County, California</h2>
        <p className="service-areas-intro">
          Watt Events proudly serves casino party rentals throughout Bakersfield and all of Kern County. 
          We deliver professional poker tables, blackjack tables, roulette wheels, and craps tables to your venue.
        </p>
        <div className="areas-grid">
          {serviceAreas.map((area, index) => (
            <div key={index} className="area-item">
              <h3>Casino Rentals {area.city}, CA</h3>
              <p>{area.description}</p>
              <small>Serving zip codes: {area.zipCodes}</small>
            </div>
          ))}
        </div>
        <div className="service-promise">
          <h3>Why Choose Watt Events for Casino Rentals in Bakersfield?</h3>
          <ul>
            <li>✓ Professional, trained casino dealers</li>
            <li>✓ High-quality, authentic casino equipment</li>
            <li>✓ Free delivery and setup in Bakersfield metro area</li>
            <li>✓ Full-service event planning support</li>
            <li>✓ Competitive pricing with no hidden fees</li>
            <li>✓ Available 7 days a week, including holidays</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

// client/src/components/LocalReviews.js
import React from 'react';
import './LocalReviews.css';

const LocalReviews = () => {
  const reviews = [
    {
      name: "Jennifer Martinez",
      business: "Kern County Chamber of Commerce",
      rating: 5,
      text: "Watt Events provided exceptional casino tables for our annual fundraiser in Bakersfield. The dealers were professional and the equipment was top-notch. Highly recommend for any corporate event in the area!",
      date: "2024-10-15"
    },
    {
      name: "David Chen", 
      business: "Chen Wedding Planning",
      rating: 5,
      text: "As a wedding planner in Bakersfield, I've worked with many vendors. Watt Events stands out for their reliability and quality. Their casino nights add such a fun element to receptions!",
      date: "2024-09-22"
    },
    {
      name: "Maria Rodriguez",
      business: "Delano Community Center", 
      rating: 5,
      text: "Our charity casino night in Delano was a huge success thanks to Watt Events. They handled everything from setup to breakdown. Professional service at great prices!",
      date: "2024-11-01"
    },
    {
      name: "Robert Thompson",
      business: "Bakersfield Country Club",
      rating: 5,
      text: "We've used Watt Events for multiple corporate events at our club. Their poker and blackjack tables are always a hit with our members. Excellent service every time!",
      date: "2024-08-18"
    }
  ];

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <section className="local-reviews">
      <div className="container">
        <h2>What Bakersfield Says About Our Casino Rentals</h2>
        <p className="reviews-intro">
          See why businesses and individuals throughout Kern County choose Watt Events 
          for their casino party rental needs.
        </p>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-header">
                <div className="reviewer-info">
                  <h4>{review.name}</h4>
                  <p className="business">{review.business}</p>
                </div>
                <div className="rating">
                  <span className="stars">{renderStars(review.rating)}</span>
                  <span className="rating-number">({review.rating}/5)</span>
                </div>
              </div>
              <blockquote className="review-text">
                "{review.text}"
              </blockquote>
              <div className="review-date">
                {new Date(review.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="reviews-cta">
          <h3>Ready to Plan Your Casino Event in Bakersfield?</h3>
          <p>Join our satisfied customers and make your next event unforgettable!</p>
          <a href="/booking" className="cta-button">Get Free Quote</a>
          <p className="phone-cta">Or call us directly: <a href="tel:661-302-0115">(661) 302-0115</a></p>
        </div>
      </div>
    </section>
  );
};

export { ServiceAreas, LocalReviews };