// components/Footer.js - Larger Logo Dimensions
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className='footer-container'>
      <div className='footer-main'>
        {/* Logo & Description */}
        <div className='footer-brand'>
          <Link to='/' className='footer-logo-link'>
            <OptimizedImage
              src="images/Watt-Events.png"
              alt="Watt Events Casino Rentals Bakersfield Logo"
              className='footer-logo-img'
              width={220}
              height={140}
              loading="lazy"
              sizes="220px"
            />
          </Link>
          <p className='footer-tagline'>
            Bringing Vegas-style excitement to Bakersfield & Kern County since 2020
          </p>
          <div className='footer-social'>
            <a href="https://facebook.com/wattevents" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://instagram.com/wattevents" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className='footer-section'>
          <h3>Quick Links</h3>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about-us'>About Us</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/products'>Casino Games</Link></li>
            <li><Link to='/booking'>Get Free Quote</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>

        {/* Casino Games */}
        <div className='footer-section'>
          <h3>Casino Games</h3>
          <ul>
            <li><Link to='/poker'>Poker Tables</Link></li>
            <li><Link to='/blackjack'>Blackjack Tables</Link></li>
            <li><Link to='/roulette'>Roulette Wheels</Link></li>
            <li><Link to='/craps'>Craps Tables</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className='footer-section footer-contact'>
          <h3>Contact Us</h3>
          <div className='contact-item'>
            <FaPhone />
            <a href="tel:661-302-0115">(661) 302-0115</a>
          </div>
          <div className='contact-item'>
            <FaEnvelope />
            <a href="mailto:contact@wattevent.com">contact@wattevent.com</a>
          </div>
          <div className='contact-item'>
            <FaMapMarkerAlt />
            <span>Bakersfield, California</span>
          </div>
          <p className='service-areas-footer'>
            Serving: Bakersfield, Delano, Shafter, Wasco, McFarland, Tehachapi & all of Kern County
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='footer-bottom'>
        <div className='footer-bottom-content'>
          <p className='copyright'>
            © {currentYear} Watt Events. All rights reserved.
          </p>
          <div className='footer-legal'>
            <Link to='/terms-of-service'>Terms of Service</Link>
            <span>|</span>
            <Link to='/privacy-policy'>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;