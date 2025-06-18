// src/components/Navbar.js
import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
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

  // Close mobile menu on route change
  useEffect(() => {
    return history.listen(() => {
      closeMobileMenu();
    });
  }, [history]);

  return (
    <nav className='navbar' ref={navRef}>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img 
            src="images/Watt-Events.png" 
            alt="Watt Events Logo"
            className="nav-logo"
          />
        </Link>
        
        <div className='menu-icon' onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faTimes : faBars} />
        </div>
        
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
              Services
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
              Products
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/booking' className='nav-links' onClick={closeMobileMenu}>
              Get Quote
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;