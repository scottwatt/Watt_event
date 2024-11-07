import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import api from '../services/api';
import './Dashboard.css';

const Dashboard = () => {
  // State declarations
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('upcoming');
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');
  const { user } = useAuth();

  // Fetch bookings on component mount
  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await api.get('/bookings/my');
      setBookings(response.data);
    } catch (err) {
      setError('Failed to fetch your bookings');
    } finally {
      setLoading(false);
    }
  };

  // Handle password change
  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setPasswordError('');
    setPasswordSuccess('');

    // Validate passwords match
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordError('New passwords do not match');
      return;
    }

    // Validate password length
    if (passwordData.newPassword.length < 6) {
      setPasswordError('New password must be at least 6 characters');
      return;
    }

    try {
      await api.post('/auth/change-password', {
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword
      });

      setPasswordSuccess('Password changed successfully!');
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
      setTimeout(() => {
        setShowPasswordChange(false);
        setPasswordSuccess('');
      }, 2000);
    } catch (err) {
      setPasswordError(err.response?.data?.message || 'Failed to change password');
    }
  };

  // Handle booking cancellation
  const handleCancelBooking = async (bookingId) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      try {
        await api.patch(`/bookings/${bookingId}/cancel`);
        fetchBookings();
      } catch (err) {
        setError('Failed to cancel booking');
      }
    }
  };

  // Format date helper function
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Filter bookings based on tab
  const filterBookings = (status) => {
    const now = new Date();
    switch (status) {
      case 'upcoming':
        return bookings.filter(booking => 
          new Date(booking.date) > now && booking.status !== 'cancelled'
        );
      case 'past':
        return bookings.filter(booking => 
          new Date(booking.date) < now && booking.status !== 'cancelled'
        );
      case 'cancelled':
        return bookings.filter(booking => booking.status === 'cancelled');
      default:
        return bookings;
    }
  };

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="loader"></div>
        <p>Loading your bookings...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="user-welcome">
          <h1>Welcome, {user?.firstName}!</h1>
          <p>Manage your casino event bookings</p>
        </div>
        
        <div className="header-actions">
          <button 
            className="change-password-btn"
            onClick={() => setShowPasswordChange(!showPasswordChange)}
          >
            Change Password
          </button>

          <Link to="/booking" className="new-booking-btn">
            Book New Event
            <span className="btn-icon">+</span>
          </Link>
        </div>
      </div>

      {showPasswordChange && (
        <div className="password-change-section">
          <div className="password-change-form">
            <h3>Change Password</h3>
            {passwordError && <div className="error-message">{passwordError}</div>}
            {passwordSuccess && <div className="success-message">{passwordSuccess}</div>}
            
            <form onSubmit={handlePasswordChange}>
              <div className="form-group">
                <label htmlFor="currentPassword">Current Password</label>
                <input
                  type="password"
                  id="currentPassword"
                  value={passwordData.currentPassword}
                  onChange={(e) => setPasswordData({
                    ...passwordData,
                    currentPassword: e.target.value
                  })}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="newPassword">New Password</label>
                <input
                  type="password"
                  id="newPassword"
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData({
                    ...passwordData,
                    newPassword: e.target.value
                  })}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm New Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData({
                    ...passwordData,
                    confirmPassword: e.target.value
                  })}
                  required
                />
              </div>

              <div className="form-buttons">
                <button type="submit" className="save-password-btn">
                  Save New Password
                </button>
                <button 
                  type="button" 
                  className="cancel-password-btn"
                  onClick={() => {
                    setShowPasswordChange(false);
                    setPasswordData({
                      currentPassword: '',
                      newPassword: '',
                      confirmPassword: ''
                    });
                    setPasswordError('');
                    setPasswordSuccess('');
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {error && (
        <div className="dashboard-error">
          <p>{error}</p>
          <button onClick={fetchBookings}>Try Again</button>
        </div>
      )}

      <div className="dashboard-tabs">
        <button
          className={`tab ${activeTab === 'upcoming' ? 'active' : ''}`}
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming Events
        </button>
        <button
          className={`tab ${activeTab === 'past' ? 'active' : ''}`}
          onClick={() => setActiveTab('past')}
        >
          Past Events
        </button>
        <button
          className={`tab ${activeTab === 'cancelled' ? 'active' : ''}`}
          onClick={() => setActiveTab('cancelled')}
        >
          Cancelled Events
        </button>
      </div>

      <div className="bookings-container">
        {filterBookings(activeTab).length === 0 ? (
          <div className="no-bookings">
            <h3>No {activeTab} events found</h3>
            {activeTab === 'upcoming' && (
              <Link to="/booking" className="book-now-btn">
                Book your first event
              </Link>
            )}
          </div>
        ) : (
          filterBookings(activeTab).map(booking => (
            <div key={booking._id} className="booking-card">
              <div className="booking-card-header">
                <h3>{booking.eventType}</h3>
                <span className={`status-badge ${booking.status}`}>
                  {booking.status}
                </span>
              </div>
              
              <div className="booking-details">
                <div className="detail-item">
                  <span className="label">Date:</span>
                  <span className="value">{formatDate(booking.date)}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Time:</span>
                  <span className="value">{booking.time}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Games:</span>
                  <span className="value">{booking.selectedGames.join(', ')}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Tables:</span>
                  <span className="value">{booking.numberOfTables}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Guests:</span>
                  <span className="value">{booking.guestCount}</span>
                </div>
                {booking.specialRequests && (
                  <div className="detail-item full-width">
                    <span className="label">Special Requests:</span>
                    <span className="value">{booking.specialRequests}</span>
                  </div>
                )}
              </div>

              {activeTab === 'upcoming' && booking.status !== 'cancelled' && (
                <div className="booking-actions">
                  <button 
                    className="cancel-btn"
                    onClick={() => handleCancelBooking(booking._id)}
                  >
                    Cancel Booking
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;