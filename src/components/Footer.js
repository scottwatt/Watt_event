import React, { useState } from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  const [email, setEmail] = useState('');  // To store the email input value
  const [formStatus, setFormStatus] = useState(''); // To store the form submission status

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Prepare the email data
    const emailData = {
      email: email  // This is assuming Formspree expects the email data under the key "email"
    };
  
    fetch("https://formspree.io/f/xknlpqbk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(emailData),
    })
    .then((response) => {
      return response.json().then(data => {
        if (response.ok) {
          setFormStatus('Sent!');
          setEmail(''); // Reset the email state
        } else {
          console.log(data);  // Log the error data
          setFormStatus('Error. Try again.');
        }
      });
    });
  }
  

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          For questions and concerns, please leave your email below.
        </p>
        <p>{formStatus}</p> {/* Display the form status */}
        <div className='input-areas'>
          <form onSubmit={handleSubmit}>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
              value={email}
              onChange={e => setEmail(e.target.value)}  // Update the email state on change
            />
            <Button buttonStyle='btn--outline' type="submit">Submit</Button>
          </form>
        </div>
      </section>
      <div className='footer-logo'>
        <Link to='/' className='social-logo'>
          <img src=' images/Wattenbarger Events.png' id='logo' className='footerlogo' alt="logo" />
          <i className='fab fa-typo3' />
        </Link>
      </div>
      <small className='website-rights'>Watt Events © 2020</small> {/* Use 'className' instead of 'class' */}
    </div>
  );
}

export default Footer;
