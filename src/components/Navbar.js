import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [click, setClick] = useState(false);
  const navRef = useRef();
  const [isAnimating, setIsAnimating] = useState(false);

  const closeMobileMenu = () => setClick(false);

  const openMenu = () => {
    if (!click) {
      setIsAnimating(true);
    }
  };

  // Use this function to close the menu without the chip animation
  const closeMenu = () => {
    if (click) {
      setClick(false);
    }
  };

  // const handleChipAnimation = () => {
  //   setIsAnimating(true);
  // };

  const onPokerChipAnimationEnd = () => {
    setIsAnimating(false); // End the chip animation
    // Delay setting the menu to active by the same duration as the animation-delay in CSS
    setTimeout(() => {
      setClick(!click);
    }, 1000); // This should match the CSS delay
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
        <Link to='/' className='navbar-logo' onClick={closeMenu}>
          <img src="images/Watt Events.png" id='logo' alt="Watt Events logo" />
        </Link>
        <div className='menu-icon' onClick={click ? closeMenu : openMenu}>          <FontAwesomeIcon icon={click ? faTimes : faBars} />
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
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
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
            <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;