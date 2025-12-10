// components/Navbar.js - With Active Page Indicator
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import OptimizedImage from './OptimizedImage';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const navRef = useRef();
  const history = useHistory();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setClick(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  useEffect(() => {
    return history.listen(() => {
      closeMobileMenu();
    });
  }, [history]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960) {
        setClick(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className='navbar' ref={navRef}>
      <div className='navbar-container'>
        <NavLink to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <OptimizedImage
            src="images/Watt-Events.png"
            alt="Watt Events - Casino Rentals Bakersfield"
            className="nav-logo"
            width={280}
            height={80}
            priority={true}
            sizes="(max-width: 480px) 160px, (max-width: 960px) 200px, 280px"
            style={{
              height: 'auto',
              width: 'auto',
              maxHeight: '80px',
              maxWidth: '280px'
            }}
          />
        </NavLink>
        
        <div className='menu-icon' onClick={handleClick} aria-label="Toggle menu">
          <FontAwesomeIcon icon={click ? faTimes : faBars} />
        </div>
        
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <NavLink 
              exact 
              to='/' 
              className='nav-links' 
              activeClassName='active'
              onClick={closeMobileMenu}
            >
              <span className='nav-link-text'>Home</span>
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink 
              to='/about-us' 
              className='nav-links' 
              activeClassName='active'
              onClick={closeMobileMenu}
            >
              <span className='nav-link-text'>About</span>
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink 
              to='/services' 
              className='nav-links' 
              activeClassName='active'
              onClick={closeMobileMenu}
            >
              <span className='nav-link-text'>Services</span>
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink 
              to='/products' 
              className='nav-links' 
              activeClassName='active'
              onClick={closeMobileMenu}
            >
              <span className='nav-link-text'>Products</span>
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink 
              to='/contact' 
              className='nav-links' 
              activeClassName='active'
              onClick={closeMobileMenu}
            >
              <span className='nav-link-text'>Contact</span>
            </NavLink>
          </li>
          <li className='nav-item nav-cta'>
            <NavLink 
              to='/booking' 
              className='nav-links nav-cta-btn' 
              activeClassName='active'
              onClick={closeMobileMenu}
            >
              <span className='nav-link-text'>Get Quote</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;