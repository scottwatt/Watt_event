// components/HeroSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video 
        src='/videos/hero.mp4' // Path relative to the public folder
        autoPlay
        loop
        muted
      />
      <div className='hero-content'>
        <h1>Watt Events</h1>
        <p>Your Casino. Your Venue. Bakersfield's Best Bet!</p>
        <div className='hero-btns'>
          <Link to="/booking" className="booking-button">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;