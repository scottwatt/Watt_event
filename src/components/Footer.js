import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  
  return (
    <div className='footer-container'>
      <div className='footer-logo'>
        <Link to='/' className='social-logo'>
          <img src=' images/Wattenbarger Events.png' id='footerLogo' className='footerlogo' alt="logo" />
          <i className='fab fa-typo3' />
        </Link>
      </div>
      <small className='website-rights'>Watt Events © 2020</small> {/* Use 'className' instead of 'class' */}
    </div>
  );
}

export default Footer;
