// client/src/components/pages/Booking.js
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

  const gameOptions = [
    { id: 'poker', name: 'Poker' },
    { id: 'blackjack', name: 'Blackjack' },
    { id: 'roulette', name: 'Roulette' },
    { id: 'craps', name: 'Craps' }
  ];

  const eventTypes = [
    'Corporate Event',
    'Birthday Party',
    'Wedding',
    'Fundraiser',
    'Holiday Party',
    'Other'
  ];

  const timeSlots = [
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
    '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM',
    '10:00 PM', '11:00 PM'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      // Remove all non-digits
      const digits = value.replace(/\D/g, '');
      
      // Format the phone number
      let formattedNumber = '';
      if (digits.length > 0) formattedNumber += digits.slice(0, 3);
      if (digits.length > 3) formattedNumber += '-' + digits.slice(3, 6);
      if (digits.length > 6) formattedNumber += '-' + digits.slice(6, 10);
  
      setFormData(prev => ({
        ...prev,
        [name]: formattedNumber
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleGameSelection = (e) => {
    const { checked, value } = e.target;
    setFormData(prev => ({
      ...prev,
      selectedGames: checked
        ? [...prev.selectedGames, value]
        : prev.selectedGames.filter(game => game !== value)
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      setFormStatus('Please fill in all required fields.');
      return;
    }

    if (formData.selectedGames.length === 0) {
      setFormStatus('Please select at least one game.');
      return;
    }

    // Create form data for Formspree or similar service
    const submitData = new FormData();
    submitData.append("firstName", formData.firstName);
    submitData.append("lastName", formData.lastName);
    submitData.append("email", formData.email);
    submitData.append("phone", formData.phone);
    submitData.append("date", formData.date);
    submitData.append("time", formData.time);
    submitData.append("eventType", formData.eventType);
    submitData.append("numberOfTables", formData.numberOfTables);
    submitData.append("selectedGames", formData.selectedGames.join(', '));
    submitData.append("guestCount", formData.guestCount);
    submitData.append("specialRequests", formData.specialRequests);

    // Submit to Formspree (replace with your Formspree endpoint)
    fetch("https://formspree.io/f/xoqopnpz", {
        method: "POST",
        headers: {
            "Accept": "application/json"
        },
        body: submitData,
    })
    .then((response) => {
        return response.json().then(data => {
            if (response.ok) {
                setFormStatus('Quote request submitted successfully! We will contact you within 24 hours.');
                // Reset form
                setFormData({
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
            } else {
                console.log(data);
                setFormStatus('Error submitting request. Please try again or call us directly.');
            }
        });
    })
    .catch(() => {
        setFormStatus('Error submitting request. Please try again or call us directly.');
    });
  };

  const today = new Date().toISOString().split('T')[0];
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 6);
  const maxDateString = maxDate.toISOString().split('T')[0];

  return (
    <div className="booking-container">
      <h1>Request Your Free Quote</h1>
      <p style={{textAlign: 'center', marginBottom: '2rem', color: '#666'}}>
        Fill out the form below for a personalized quote, or call us directly at{' '}
        <a href="tel:661-302-0115" style={{color: '#4a90e2', fontWeight: 'bold'}}>
          (661) 302-0115
        </a>
      </p>
      
      {formStatus && (
        <div className={formStatus.includes('successfully') ? "success-message" : "error-message"}>
          {formStatus}
        </div>
      )}
      
      <form onSubmit={onSubmit} className="booking-form">
        <div className="form-row" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
          <div className="form-group">
            <label>First Name: *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Last Name: *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Email Address: *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number: *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            maxLength="12"
            placeholder="123-456-7890"
            required
          />
        </div>

        <div className="form-group">
          <label>Preferred Event Date:</label>
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
          <label>Preferred Time:</label>
          <select
            name="time"
            value={formData.time}
            onChange={handleInputChange}
          >
            <option value="">Select a time (optional)</option>
            {timeSlots.map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Event Type:</label>
          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleInputChange}
          >
            <option value="">Select event type</option>
            {eventTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="form-row" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
          <div className="form-group">
            <label>Number of Tables:</label>
            <input
              type="number"
              name="numberOfTables"
              value={formData.numberOfTables}
              onChange={handleInputChange}
              min="1"
              max="100"
            />
          </div>

          <div className="form-group">
            <label>Expected Guest Count:</label>
            <input
              type="number"
              name="guestCount"
              value={formData.guestCount}
              onChange={handleInputChange}
              min="1"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Select Games: *</label>
          <div className="games-selection">
            {gameOptions.map(game => (
              <div key={game.id} className="game-option">
                <input
                  type="checkbox"
                  id={game.id}
                  value={game.name}
                  checked={formData.selectedGames.includes(game.name)}
                  onChange={handleGameSelection}
                />
                <label htmlFor={game.id}>{game.name}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Special Requests or Questions:</label>
          <textarea
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleInputChange}
            rows="4"
            placeholder="Tell us about your event, any special requirements, or questions you have..."
          />
        </div>

        <button type="submit" className="submit-button">
          Request Free Quote
        </button>

        <div style={{textAlign: 'center', marginTop: '2rem', padding: '1rem', backgroundColor: '#f9f9f9', borderRadius: '8px'}}>
          <h3 style={{margin: '0 0 1rem 0', color: '#333'}}>Prefer to Talk?</h3>
          <p style={{margin: '0 0 1rem 0', color: '#666'}}>
            Call us directly for immediate assistance and personalized service:
          </p>
          <a 
            href="tel:661-302-0115" 
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              backgroundColor: '#4a90e2',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              fontSize: '1.1rem'
            }}
          >
            📞 (661) 302-0115
          </a>
          <p style={{margin: '1rem 0 0 0', fontSize: '0.9rem', color: '#888'}}>
            Available 7 days a week for your convenience
          </p>
        </div>
      </form>
    </div>
  );
};

export default Booking;