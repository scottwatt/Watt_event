// components/HeroSection.js - Optimized Version
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container hero-image-bg'>
      {/* Preload critical background image */}
      <link
        rel="preload"
        as="image"
        href="/images/casino-background.webp"
        type="image/webp"
      />
      <link
        rel="preload"
        as="image"
        href="/images/casino-background.jpg"
        type="image/jpeg"
      />
      
      <div className='hero-content'>
        <h1>Casino Rentals Bakersfield</h1>
        <h2 className='hero-subtitle'>Professional Casino Party Equipment Rental</h2>
        <p>
          Bring Vegas-style excitement to your event in Bakersfield, California! 
          Professional poker tables, blackjack, roulette & craps with trained dealers. 
          Perfect for corporate events, fundraisers, and private parties.
        </p>
        <div className='hero-features'>
          <div className='feature-item'>
            <span className='feature-icon' aria-label="Casino games">🎰</span>
            <span>Professional Dealers</span>
          </div>
          <div className='feature-item'>
            <span className='feature-icon' aria-label="Delivery truck">🚚</span>
            <span>Free Delivery in Bakersfield</span>
          </div>
          <div className='feature-item'>
            <span className='feature-icon' aria-label="Five stars">⭐</span>
            <span>5-Star Local Reviews</span>
          </div>
        </div>
        <div className='hero-btns'>
          <Link to="/booking" className="booking-button primary">
            Get Free Quote
          </Link>
          <a href="tel:661-302-0115" className="booking-button secondary">
            Call (661) 302-0115
          </a>
        </div>
        <div className='hero-trust-signals'>
          <p>
            <strong>Serving Bakersfield, Delano, Shafter & All of Kern County</strong>
          </p>
          <p>Licensed • Insured • Available 7 Days a Week</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;