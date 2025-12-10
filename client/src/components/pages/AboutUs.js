// components/pages/AboutUs.js - Professional Redesign
import React from 'react';
import { Link } from 'react-router-dom';
import OptimizedImage from '../OptimizedImage';
import './AboutUs.css';

const AboutUs = () => {
  const values = [
    {
      icon: '🎯',
      title: 'Customer Focus',
      description: 'Your enjoyment is our success. Every event is tailored to meet your unique desires.'
    },
    {
      icon: '🤝',
      title: 'Integrity',
      description: 'We operate with honesty and transparency. Trust is the foundation of our relationships.'
    },
    {
      icon: '⭐',
      title: 'Quality',
      description: 'From professional equipment to trained staff, we deliver nothing but the best.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Always looking for new ways to enhance your experience and bring fresh ideas.'
    }
  ];

  const whyChoose = [
    {
      icon: '🎰',
      title: 'Authentic Equipment',
      description: 'Casino-grade tables and equipment for an authentic Vegas experience.'
    },
    {
      icon: '👨‍💼',
      title: 'Professional Dealers',
      description: 'Trained, friendly dealers who know the games inside and out.'
    },
    {
      icon: '🚚',
      title: 'Full Service',
      description: 'We handle delivery, setup, and breakdown - you just enjoy the party.'
    },
    {
      icon: '📅',
      title: 'Always Available',
      description: 'Open 7 days a week, including holidays and special occasions.'
    },
    {
      icon: '💰',
      title: 'Fair Pricing',
      description: 'Competitive rates with no hidden fees. What we quote is what you pay.'
    },
    {
      icon: '🏆',
      title: 'Proven Track Record',
      description: 'Over 100 successful events and counting with 5-star reviews.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-hero-badge">About Us</span>
          <h1>Bringing Vegas to Bakersfield</h1>
          <p>
            We're passionate about creating unforgettable casino experiences 
            for events of all sizes throughout Kern County.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="about-story-container">
          <div className="about-story-image">
            <OptimizedImage
              src="images/WEtables.jpg"
              alt="Watt Events casino tables at a Bakersfield event"
              width={600}
              height={500}
              loading="eager"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="experience-badge">
              <span className="number">100+</span>
              <span className="text">Events Hosted</span>
            </div>
          </div>
          <div className="about-story-content">
            <h2>Our Story</h2>
            <p>
              At Watt Events, we believe that every event is an opportunity to create 
              unforgettable memories. Founded in Bakersfield, California, our journey 
              began with a simple idea: to bring the thrill and sophistication of a 
              casino experience to any gathering.
            </p>
            <p>
              Whether it's a corporate event, a birthday celebration, or just a night 
              out with friends, our goal is to deliver a slice of Vegas-style entertainment 
              right to your doorstep. We've grown from a small operation to Kern County's 
              premier casino party rental service.
            </p>
            <p>
              What sets us apart is our commitment to quality and customer satisfaction. 
              Every table, every chip, and every dealer reflects our dedication to 
              creating an authentic casino atmosphere.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="about-values-container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <span className="value-icon">{value.icon}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission">
        <div className="about-mission-container">
          <div className="mission-card">
            <h3><span>🎯</span> Our Mission</h3>
            <p>
              To provide an immersive, high-quality casino experience with games like 
              Poker, Blackjack, Roulette, and Craps, catered to your preferences. We 
              ensure that your event, big or small, resonates with the excitement of 
              a night at the casino — without any of the risks but all of the fun.
            </p>
          </div>
          <div className="mission-card">
            <h3><span>🔭</span> Our Vision</h3>
            <p>
              We envision a world where every milestone and gathering is celebrated 
              with joy, excitement, and a touch of class. Watt Events strives to be 
              the premier choice for casino-themed entertainment across California, 
              recognized for our unwavering commitment to customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-why">
        <div className="about-why-container">
          <div className="section-header">
            <h2>Why Choose Watt Events?</h2>
            <p>Here's what makes us Bakersfield's favorite casino rental company</p>
          </div>
          <div className="why-grid">
            {whyChoose.map((item, index) => (
              <div key={index} className="why-item">
                <span className="why-icon">{item.icon}</span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="about-cta-container">
          <h2>Ready to Plan Your Event?</h2>
          <p>
            Let's create an unforgettable casino experience for your next gathering.
          </p>
          <div className="cta-buttons">
            <Link to="/booking" className="cta-btn primary">
              Get Free Quote
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <a href="tel:661-302-0115" className="cta-btn secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              (661) 302-0115
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;