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

  // useEffect(() => {
  //   console.log("click state updated:", click);
  // }, [click]);
  

  const toggleMenu = () => {
      if (firstOpen) {
      console.log("First open, starting animation and delaying toggle");
      setIsAnimating(true);
      setTimeout(() => {
        setClick(currentClick =>!currentClick);
      }, 1000);
      setFirstOpen(false); 
    } else {
      console.log("Not first open, toggling click state immediately");
      setClick(currentClick => !currentClick);
    }
  };
  
  

  const onPokerChipAnimationEnd = () => {
    setIsAnimating(false);
  };

  const menuIconRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      console.log("Outside click handler called");
      if (navRef.current && !navRef.current.contains(event.target) && !menuIconRef.current.contains(event.target)) {
        console.log("Outside navRef, setting click to false");
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
        <div className='menu-icon' onClick={toggleMenu} ref={menuIconRef}>
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
