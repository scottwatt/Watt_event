import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import api from '../../services/api';
import './Booking.css';

const Booking = () => {
  const [bookingDetails, setBookingDetails] = useState({
    date: '',
    time: '',
    phoneNumber: '',
    numberOfTables: 1,
    selectedGames: [],
    eventType: '',
    guestCount: '',
    specialRequests: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [dateAvailable, setDateAvailable] = useState(true);
  const { user } = useAuth();

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

  // Check date availability when date changes
  useEffect(() => {
    const checkAvailability = async () => {
      if (bookingDetails.date) {
        try {
          const response = await api.get(`/bookings/availability/${bookingDetails.date}`);
          setDateAvailable(response.data.available);
          if (!response.data.available) {
            setError('This date is fully booked. Please select another date.');
          } else {
            setError('');
          }
        } catch (err) {
          console.error('Error checking availability:', err);
        }
      }
    };

    checkAvailability();
  }, [bookingDetails.date]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'phoneNumber') {
      // Remove all non-digits
      const digits = value.replace(/\D/g, '');
      
      // Format the phone number
      let formattedNumber = '';
      if (digits.length > 0) formattedNumber += digits.slice(0, 3);
      if (digits.length > 3) formattedNumber += '-' + digits.slice(3, 6);
      if (digits.length > 6) formattedNumber += '-' + digits.slice(6, 10);
  
      // Update state with formatted number
      setBookingDetails(prev => ({
        ...prev,
        [name]: formattedNumber
      }));
    } else {
      // Handle all other inputs normally
      setBookingDetails(prev => ({
        ...prev,
        [name]: value
      }));
    }
    setError(''); // Clear any existing errors
  };

  const handleGameSelection = (e) => {
    const { checked, value } = e.target;
    setBookingDetails(prev => ({
      ...prev,
      selectedGames: checked
        ? [...prev.selectedGames, value]
        : prev.selectedGames.filter(game => game !== value)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!user) {
      setError('Please log in or sign up to complete your booking');
      return;
    }

    if (!dateAvailable) {
      setError('This date is fully booked. Please select another date.');
      return;
    }

    setError('');
    setSuccess('');
    setLoading(true);

    try {
      // Validation checks
      const requiredFields = [
        'date', 
        'time', 
        'eventType', 
        'phoneNumber', 
        'numberOfTables', 
        'guestCount'
      ];
      
      const missingFields = requiredFields.filter(field => !bookingDetails[field]);
      if (missingFields.length > 0) {
        throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
      }

      if (bookingDetails.selectedGames.length === 0) {
        throw new Error('Please select at least one game');
      }

      // Phone number validation
      const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
      if (!phoneRegex.test(bookingDetails.phoneNumber)) {
        throw new Error('Please enter a valid phone number in the format 123-456-7890');
      }

      const response = await api.post('/bookings', {
        ...bookingDetails,
        userId: user.id
      });

      if (response.data.success) {
        setSuccess('Booking request submitted! We will contact you shortly to confirm your event.');
        // Clear form
        setBookingDetails({
          date: '',
          time: '',
          phoneNumber: '',
          numberOfTables: 1,
          selectedGames: [],
          eventType: '',
          guestCount: '',
          specialRequests: ''
        });
        setTimeout(() => {
          window.location.href = '/dashboard';
        }, 3000);
      } else {
        throw new Error(response.data.message || 'Failed to create booking');
      }
    } catch (err) {
      console.error('Booking error:', err);
      setError(
        err.response?.data?.message || 
        err.message || 
        'Failed to create booking. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  const today = new Date().toISOString().split('T')[0];
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 6);
  const maxDateString = maxDate.toISOString().split('T')[0];

  return (
    <div className="booking-container">
      <h1>Book Your Casino Event</h1>
      
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label>Event Date:</label>
          <input
            type="date"
            name="date"
            value={bookingDetails.date}
            onChange={handleInputChange}
            min={today}
            max={maxDateString}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={bookingDetails.phoneNumber}
            onChange={handleInputChange}
            maxLength="12"
            placeholder="123-456-7890"
            required
          />
          <small>Format: 123-456-7890</small>
        </div>

        <div className="form-group">
          <label>Event Time:</label>
          <select
            name="time"
            value={bookingDetails.time}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a time</option>
            {timeSlots.map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Event Type:</label>
          <select
            name="eventType"
            value={bookingDetails.eventType}
            onChange={handleInputChange}
            required
          >
            <option value="">Select event type</option>
            {eventTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Number of Tables:</label>
          <input
            type="number"
            name="numberOfTables"
            value={bookingDetails.numberOfTables}
            onChange={handleInputChange}
            min="1"
            max="100"
            required
          />
        </div>

        <div className="form-group">
          <label>Expected Guest Count:</label>
          <input
            type="number"
            name="guestCount"
            value={bookingDetails.guestCount}
            onChange={handleInputChange}
            min="1"
            required
          />
        </div>

        <div className="form-group">
          <label>Select Games:</label>
          <div className="games-selection">
            {gameOptions.map(game => (
              <div key={game.id} className="game-option">
                <input
                  type="checkbox"
                  id={game.id}
                  value={game.name}
                  checked={bookingDetails.selectedGames.includes(game.name)}
                  onChange={handleGameSelection}
                />
                <label htmlFor={game.id}>{game.name}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Special Requests:</label>
          <textarea
            name="specialRequests"
            value={bookingDetails.specialRequests}
            onChange={handleInputChange}
            rows="4"
            placeholder="Any special requirements or requests for your event?"
          />
        </div>

        {user ? (
          <button 
            type="submit" 
            className={`submit-button ${loading ? 'loading' : ''}`}
            disabled={loading}
          >
            {loading ? 'Creating Booking...' : 'Book Event'}
          </button>
        ) : (
          <div className="auth-prompt">
            <p>Please log in or sign up to complete your booking</p>
            <div className="auth-buttons">
              <Link to="/login" className="auth-button login">
                Login
              </Link>
              <Link to="/register" className="auth-button register">
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Booking;