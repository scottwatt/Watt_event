import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [click, setClick] = useState(false);
  const navRef = useRef();
  const [isAnimating, setIsAnimating] = useState(false);
  const [firstOpen, setFirstOpen] = useState(true);

  const toggleMenu = () => {
    if (firstOpen) {
      setIsAnimating(true);
      // Delay opening the menu only on the first time
      setTimeout(() => {
        setClick(currentClick => !currentClick); // Toggle the click state
      }, 1000); // Delay in milliseconds
      setFirstOpen(false); // Ensure subsequent openings are immediate
    } else {
      setClick(currentClick => !currentClick); // Toggle the click state immediately
    }
  };

  const onPokerChipAnimationEnd = () => {
    setIsAnimating(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setClick(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={toggleMenu}>
          <img src="images/Watt Events.png" id='logo' alt="Watt Events logo" />
        </Link>
        <div className='menu-icon' onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
          {isAnimating && (
            <img
              src="images/PokerChip.png"
              className="poker-chip roll-in"
              alt="Poker Chip"
              onAnimationEnd={onPokerChipAnimationEnd}
            />
          )}
        </div>
        <ul ref={navRef} className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about-us' className='nav-links' onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/services' className='nav-links' onClick={toggleMenu}>
              Services
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/products' className='nav-links' onClick={toggleMenu}>
              Products
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' className='nav-links' onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
