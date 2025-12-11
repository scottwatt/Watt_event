// components/pages/Booking.js - Professional Redesign
import React, { useState } from 'react';
import './Booking.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    eventType: '',
    numberOfTables: 1,
    selectedGames: [],
    guestCount: '',
    specialRequests: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const gameOptions = [
    { id: 'poker', name: 'Poker', icon: '🃏' },
    { id: 'blackjack', name: 'Blackjack', icon: '🎴' },
    { id: 'roulette', name: 'Roulette', icon: '🎰' },
    { id: 'craps', name: 'Craps', icon: '🎲' }
  ];

  const eventTypes = [
    'Corporate Event',
    'Birthday Party',
    'Wedding',
    'Fundraiser',
    'Holiday Party',
    'Bachelor/Bachelorette',
    'Other'
  ];

  const timeSlots = [
    '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM',
    '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM',
    '8:00 PM', '9:00 PM', '10:00 PM'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const digits = value.replace(/\D/g, '');
      let formattedNumber = '';
      if (digits.length > 0) formattedNumber += digits.slice(0, 3);
      if (digits.length > 3) formattedNumber += '-' + digits.slice(3, 6);
      if (digits.length > 6) formattedNumber += '-' + digits.slice(6, 10);
      setFormData(prev => ({ ...prev, [name]: formattedNumber }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleGameSelection = (gameName) => {
    setFormData(prev => ({
      ...prev,
      selectedGames: prev.selectedGames.includes(gameName)
        ? prev.selectedGames.filter(g => g !== gameName)
        : [...prev.selectedGames, gameName]
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (formData.selectedGames.length === 0) {
      setFormStatus('error');
      setIsSubmitting(false);
      return;
    }

    const submitData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      submitData.append(key, key === 'selectedGames' ? value.join(', ') : value);
    });

    try {
      const response = await fetch("https://formspree.io/f/xknlpqbk", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: submitData,
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({
          firstName: '', lastName: '', email: '', phone: '', date: '',
          time: '', eventType: '', numberOfTables: 1, selectedGames: [],
          guestCount: '', specialRequests: ''
        });
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
    setIsSubmitting(false);
  };

  const today = new Date().toISOString().split('T')[0];
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 12);
  const maxDateString = maxDate.toISOString().split('T')[0];

  return (
    <div className="booking-page">
      {/* Hero Section */}
      <section className="booking-hero">
        <div className="booking-hero-content">
          <span className="booking-hero-badge">Free Quote</span>
          <h1>Book Your Casino Event</h1>
          <p>
            Get a personalized quote for your next event. We'll respond within 24 hours 
            with pricing and availability.
          </p>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="booking-quick-contact">
        <div className="quick-contact-inner">
          <a href="tel:661-302-0115" className="quick-contact-item">
            <span className="icon">📞</span>
            <span>Call (661) 302-0115</span>
          </a>
          <a href="mailto:contact@wattevent.com" className="quick-contact-item">
            <span className="icon">✉️</span>
            <span>contact@wattevent.com</span>
          </a>
        </div>
      </section>

      {/* Form Section */}
      <section className="booking-section">
        <div className="booking-container">
          <div className="booking-form-wrapper">
            <div className="form-header">
              <h2>Request Your Quote</h2>
              <p>Fill out the details below and we'll get back to you shortly</p>
            </div>

            {formStatus === 'success' && (
              <div className="form-message success">
                ✓ Quote request submitted! We'll contact you within 24 hours.
              </div>
            )}

            {formStatus === 'error' && (
              <div className="form-message error">
                ✕ Please select at least one game and try again.
              </div>
            )}

            <form onSubmit={onSubmit} className="booking-form">
              <div className="form-row">
                <div className="form-group">
                  <label>First Name <span className="required">*</span></label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Last Name <span className="required">*</span></label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Smith"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email Address <span className="required">*</span></label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number <span className="required">*</span></label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    maxLength="12"
                    placeholder="661-555-0123"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Event Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={today}
                    max={maxDateString}
                  />
                </div>
                <div className="form-group">
                  <label>Preferred Time</label>
                  <select name="time" value={formData.time} onChange={handleInputChange}>
                    <option value="">Select a time</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Event Type</label>
                  <select name="eventType" value={formData.eventType} onChange={handleInputChange}>
                    <option value="">Select event type</option>
                    {eventTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Expected Guests</label>
                  <input
                    type="number"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleInputChange}
                    min="1"
                    placeholder="50"
                  />
                </div>
              </div>

              <div className="games-section">
                <div className="games-section-title">
                  Select Games <span className="required">*</span>
                </div>
                <div className="games-grid">
                  {gameOptions.map(game => (
                    <div key={game.id} className="game-option">
                      <input
                        type="checkbox"
                        id={game.id}
                        checked={formData.selectedGames.includes(game.name)}
                        onChange={() => handleGameSelection(game.name)}
                      />
                      <label htmlFor={game.id}>
                        <span className="game-icon">{game.icon}</span>
                        <span className="game-name">{game.name}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>Special Requests or Questions</label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  placeholder="Tell us about your event, venue, or any special requirements..."
                />
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Request Free Quote'}
                {!isSubmitting && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                )}
              </button>

              <div className="phone-cta-section">
                <h3>Prefer to Talk?</h3>
                <p>Get immediate assistance and personalized service</p>
                <a href="tel:661-302-0115" className="phone-btn">
                  📞 (661) 302-0115
                </a>
                <p className="availability-note">Available 7 days a week</p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Why Book Section */}
      <section className="why-book-section">
        <div className="why-book-container">
          <div className="why-book-header">
            <h2>Why Book With Watt Events?</h2>
            <p>Experience the difference of working with Bakersfield's premier casino rental company</p>
          </div>
          <div className="why-book-grid">
            <div className="why-book-item">
              <span className="why-book-icon">⚡</span>
              <h3>Fast Response</h3>
              <p>Receive your personalized quote within 24 hours of submission</p>
            </div>
            <div className="why-book-item">
              <span className="why-book-icon">💰</span>
              <h3>No Hidden Fees</h3>
              <p>Transparent pricing with everything included in your quote</p>
            </div>
            <div className="why-book-item">
              <span className="why-book-icon">🎯</span>
              <h3>Customized Packages</h3>
              <p>Tailored solutions to fit your event size and budget</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;