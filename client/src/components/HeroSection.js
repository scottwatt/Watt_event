// components/HeroSection.js - Fixed Scroll Indicator
import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className='hero-container' aria-label="Casino Rentals Bakersfield Hero">
      {/* Background Overlay */}
      <div className="hero-overlay"></div>
      
      {/* Decorative Elements */}
      <div className="hero-decoration">
        <span className="floating-chip chip-1">🎰</span>
        <span className="floating-chip chip-2">🃏</span>
        <span className="floating-chip chip-3">🎲</span>
      </div>
      
      <div className='hero-content'>
        {/* Trust Badge */}
        <div className="hero-badge">
          <span className="badge-stars">★★★★★</span>
          <span className="badge-text">#1 Rated in Bakersfield</span>
        </div>
        
        <h1>Casino Rentals Bakersfield</h1>
        <h2 className='hero-subtitle'>
          Professional Casino Party Equipment & Dealers
        </h2>
        
        <p className="hero-description">
          Transform any event into an unforgettable Vegas-style experience! 
          Professional poker, blackjack, roulette & craps tables delivered 
          and staffed by trained dealers throughout Kern County.
        </p>
        
        <div className='hero-features'>
          <div className='feature-item'>
            <span className='feature-icon' role="img" aria-label="Professional dealers">👨‍💼</span>
            <span>Professional Dealers</span>
          </div>
          <div className='feature-item'>
            <span className='feature-icon' role="img" aria-label="Free delivery">🚚</span>
            <span>Free Local Delivery</span>
          </div>
          <div className='feature-item'>
            <span className='feature-icon' role="img" aria-label="Top rated">⭐</span>
            <span>5-Star Reviews</span>
          </div>
          <div className='feature-item'>
            <span className='feature-icon' role="img" aria-label="Availability">📅</span>
            <span>7 Days a Week</span>
          </div>
        </div>
        
        <div className='hero-btns'>
          <Link to="/booking" className="hero-btn primary">
            <span>Get Free Quote</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
          <a href="tel:661-302-0115" className="hero-btn secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            <span>(661) 302-0115</span>
          </a>
        </div>
        
        <div className='hero-trust'>
          <p className="trust-locations">
            <strong>Serving:</strong> Bakersfield • Delano • Shafter • Wasco • All of Kern County
          </p>
          <div className="trust-badges">
            <span className="trust-item">✓ Licensed</span>
            <span className="trust-item">✓ Insured</span>
            <span className="trust-item">✓ 100+ Events</span>
          </div>
        </div>
        
        {/* Scroll Indicator - Now inside hero-content for proper flow */}
        <div className="scroll-indicator">
          <span>Explore Our Games</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;