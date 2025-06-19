// components/Footer.js - Updated with OptimizedImage
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-logo'>
        <Link to='/' className='social-logo'>
          <OptimizedImage
            src='../images/Wattenbarger-Events.png'
            alt="Watt Events Casino Rentals Bakersfield Footer Logo"
            className='footerlogo'
            width={200}
            height={120}
            loading="lazy" // Footer logo can be lazy loaded
            sizes="200px"
          />
        </Link>
      </section>

      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/about-us'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/terms-of-service'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/contact'>Contact</Link>
            <Link to='/contact'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <small className='website-rights'>Watt Events © 2020</small>
    </div>
  );
}

export default Footer;