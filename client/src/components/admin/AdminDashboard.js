// client/src/components/admin/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import api from '../../services/api';
import './AdminDashboard.css';

const AdminDashboard = () => {
  // State management
  const [bookings, setBookings] = useState([]);
  const [users, setUsers] = useState([]);
  const [activeTab, setActiveTab] = useState('upcomingBookings');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showAddBookingForm, setShowAddBookingForm] = useState(false);
  const { user } = useAuth();
  
  const groupBookingsByDate = (bookings) => {
    const grouped = bookings.reduce((acc, booking) => {
      const date = new Date(booking.date).toLocaleDateString();
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(booking);
      return acc;
    }, {});
  
    // Sort dates
    return Object.keys(grouped)
      .sort((a, b) => new Date(a) - new Date(b))
      .reduce((acc, date) => {
        acc[date] = grouped[date];
        return acc;
      }, {});
  };
  
  const formatDate = (dateString) => {
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  // New booking form state
  const [newBooking, setNewBooking] = useState({
    date: '',
    time: '',
    eventType: '',
    numberOfTables: 1,
    selectedGames: [],
    guestCount: '',
    specialRequests: '',
    phoneNumber: '',
    customerEmail: '',
    customerName: ''
  });

  const timeSlots = [
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
    '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM',
    '10:00 PM', '11:00 PM'
  ];

  const eventTypes = [
    'Corporate Event',
    'Birthday Party',
    'Wedding',
    'Fundraiser',
    'Holiday Party',
    'Other'
  ];

  const gameOptions = [
    'Poker',
    'Blackjack',
    'Roulette',
    'Craps'
  ];

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    try {
      setLoading(true);
      if (activeTab === 'upcomingBookings' || activeTab === 'pastBookings') {
        const response = await api.get('/admin/bookings');
        setBookings(response.data);
      } else if (activeTab === 'users') {
        const response = await api.get('/admin/users');
        setUsers(response.data);
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  const handleAddBooking = async (e) => {
    e.preventDefault();
    try {
      // Check if date has availability
      const availabilityCheck = await api.get(`/bookings/availability/${newBooking.date}`);
      if (!availabilityCheck.data.available) {
        setError('This date already has two bookings scheduled');
        return;
      }

      // Create new user if email provided
      let userId = null;
      if (newBooking.customerEmail) {
        const userResponse = await api.post('/auth/register', {
          email: newBooking.customerEmail,
          password: Math.random().toString(36).slice(-8), // Generate random password
          firstName: newBooking.customerName.split(' ')[0],
          lastName: newBooking.customerName.split(' ')[1] || ''
        });
        userId = userResponse.data.user.id;
      }

      const bookingData = {
        ...newBooking,
        userId: userId,
        status: 'confirmed'
      };

      await api.post('/bookings', bookingData);
      setShowAddBookingForm(false);
      fetchData();
      setNewBooking({
        date: '',
        time: '',
        eventType: '',
        numberOfTables: 1,
        selectedGames: [],
        guestCount: '',
        specialRequests: '',
        phoneNumber: '',
        customerEmail: '',
        customerName: ''
      });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create booking');
    }
  };

  const handleUserStatusUpdate = async (userId, isAdmin) => {
    try {
      await api.patch(`/admin/users/${userId}`, { isAdmin });
      fetchData();
    } catch (err) {
      setError('Failed to update user status');
    }
  };

  const handleDeleteUser = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user? This cannot be undone.')) {
      try {
        await api.delete(`/admin/users/${userId}`);
        fetchData();
      } catch (err) {
        setError('Failed to delete user');
      }
    }
  };

  const handleStatusUpdate = async (bookingId, status) => {
    try {
      await api.patch(`/admin/bookings/${bookingId}/status`, { status });
      fetchData();
    } catch (err) {
      setError('Failed to update booking status');
    }
  };

  const handleDeleteBooking = async (bookingId) => {
    if (window.confirm('Are you sure you want to delete this booking? This cannot be undone.')) {
      try {
        await api.delete(`/admin/bookings/${bookingId}`);
        fetchData();
      } catch (err) {
        setError('Failed to delete booking');
      }
    }
  };

  const filteredBookings = bookings.filter(booking => {
    const bookingDate = new Date(booking.date);
    const today = new Date();
    const isPastBooking = bookingDate < today;
    
    if (activeTab === 'upcomingBookings' && isPastBooking) return false;
    if (activeTab === 'pastBookings' && !isPastBooking) return false;

    const matchesSearch = 
      booking.userId?.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.userId?.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.eventType?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.phoneNumber?.includes(searchTerm);
    
    const matchesStatus = filterStatus === 'all' || booking.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  const filteredUsers = users.filter(user => 
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!user?.isAdmin) {
    return <div className="admin-dashboard">Access Denied. Admin privileges required.</div>;
  }

  if (loading) {
    return (
      <div className="admin-dashboard">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  const renderBookingsList = () => {
    const groupedBookings = groupBookingsByDate(filteredBookings);
  
    return (
      <div className="bookings-list">
        <div className="controls">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search bookings..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="status-filter">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
          {activeTab === 'upcomingBookings' && (
            <button 
              className="add-booking-btn"
              onClick={() => setShowAddBookingForm(true)}
            >
              Add In-Person Booking
            </button>
          )}
        </div>
  
        {showAddBookingForm && (
          <div className="modal-overlay">
            <div className="add-booking-form">
              <div className="form-header">
                <h3>Add New Booking</h3>
                <button 
                  className="close-btn"
                  onClick={() => setShowAddBookingForm(false)}
                >
                  ×
                </button>
              </div>
              <form onSubmit={handleAddBooking}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Customer Name</label>
                    <input
                      type="text"
                      value={newBooking.customerName}
                      onChange={(e) => setNewBooking({...newBooking, customerName: e.target.value})}
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Customer Email (Optional)</label>
                    <input
                      type="email"
                      value={newBooking.customerEmail}
                      onChange={(e) => setNewBooking({...newBooking, customerEmail: e.target.value})}
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
  
                <div className="form-row">
                  <div className="form-group">
                    <label>Date</label>
                    <input
                      type="date"
                      value={newBooking.date}
                      onChange={(e) => setNewBooking({...newBooking, date: e.target.value})}
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Time</label>
                    <select
                      value={newBooking.time}
                      onChange={(e) => setNewBooking({...newBooking, time: e.target.value})}
                      required
                    >
                      <option value="">Select Time</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>
  
                <div className="form-row">
                  <div className="form-group">
                    <label>Event Type</label>
                    <select
                      value={newBooking.eventType}
                      onChange={(e) => setNewBooking({...newBooking, eventType: e.target.value})}
                      required
                    >
                      <option value="">Select Event Type</option>
                      {eventTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      value={newBooking.phoneNumber}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '');
                        const formattedValue = value.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
                        setNewBooking({...newBooking, phoneNumber: formattedValue});
                      }}
                      placeholder="XXX-XXX-XXXX"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      required
                    />
                  </div>
                </div>
  
                <div className="form-row">
                  <div className="form-group">
                    <label>Number of Tables</label>
                    <input
                      type="number"
                      value={newBooking.numberOfTables}
                      onChange={(e) => setNewBooking({...newBooking, numberOfTables: e.target.value})}
                      min="1"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Guest Count</label>
                    <input
                      type="number"
                      value={newBooking.guestCount}
                      onChange={(e) => setNewBooking({...newBooking, guestCount: e.target.value})}
                      min="1"
                      required
                    />
                  </div>
                </div>
  
                <div className="form-group">
                  <label>Games</label>
                  <div className="games-selection">
                    {gameOptions.map(game => (
                      <label key={game} className="checkbox-label">
                        <input
                          type="checkbox"
                          checked={newBooking.selectedGames.includes(game)}
                          onChange={(e) => {
                            const games = e.target.checked
                              ? [...newBooking.selectedGames, game]
                              : newBooking.selectedGames.filter(g => g !== game);
                            setNewBooking({...newBooking, selectedGames: games});
                          }}
                        />
                        {game}
                      </label>
                    ))}
                  </div>
                </div>
  
                <div className="form-group">
                  <label>Special Requests</label>
                  <textarea
                    value={newBooking.specialRequests}
                    onChange={(e) => setNewBooking({...newBooking, specialRequests: e.target.value})}
                    rows="3"
                  />
                </div>
  
                <div className="form-buttons">
                  <button type="submit" className="save-btn">Create Booking</button>
                  <button 
                    type="button" 
                    className="cancel-btn"
                    onClick={() => setShowAddBookingForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
  
        <div className="bookings-by-date">
          {Object.entries(groupedBookings).map(([date, dayBookings]) => (
            <div key={date} className="date-group">
              <div className="date-header">
                <h3>{formatDate(date)}</h3>
                <span className="booking-count">
                  {dayBookings.length} event{dayBookings.length !== 1 ? 's' : ''}
                </span>
              </div>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Time</th>
                      <th>Customer</th>
                      <th>Phone</th>
                      <th>Event Type</th>
                      <th>Games</th>
                      <th>Tables</th>
                      <th>Guests</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dayBookings.map(booking => (
                      <tr key={booking._id}>
                        <td>{booking.time}</td>
                        <td>
                          {booking.userId ? 
                            `${booking.userId.firstName || ''} ${booking.userId.lastName || ''}` 
                            : booking.customerName || 'Walk-in Customer'}
                        </td>
                        <td>{booking.phoneNumber}</td>
                        <td>{booking.eventType}</td>
                        <td>{booking.selectedGames.join(', ')}</td>
                        <td>{booking.numberOfTables}</td>
                        <td>{booking.guestCount}</td>
                        <td>
                          <span className={`status-badge ${booking.status}`}>
                            {booking.status}
                          </span>
                        </td>
                        <td className="action-buttons">
                          {activeTab === 'upcomingBookings' && (
                            <select 
                              value={booking.status}
                              onChange={(e) => handleStatusUpdate(booking._id, e.target.value)}
                              className={`status-select ${booking.status}`}
                            >
                              <option value="pending">Pending</option>
                              <option value="confirmed">Confirmed</option>
                              <option value="cancelled">Cancelled</option>
                            </select>
                          )}
                          <button
                            onClick={() => handleDeleteBooking(booking._id)}
                            className="delete-btn"
                            title="Delete Booking"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderUsersList = () => (
    <div className="users-list">
      <div className="controls">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Joined Date</th>
              <th>Role</th>
              <th>Total Bookings</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(currentUser => (
              <tr key={currentUser._id}>
                <td>{`${currentUser.firstName} ${currentUser.lastName}`}</td>
                <td>{currentUser.email}</td>
                <td>{new Date(currentUser.createdAt).toLocaleDateString()}</td>
                <td>
                  <select
                    value={currentUser.isAdmin ? 'admin' : 'user'}
                    onChange={(e) => handleUserStatusUpdate(currentUser._id, e.target.value === 'admin')}
                    className="role-select"
                    disabled={currentUser._id === user._id}
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
                <td>{bookings.filter(b => b.userId?._id === currentUser._id).length}</td>
                <td className="action-buttons">
                  {currentUser._id !== user._id && (
                    <button
                      onClick={() => handleDeleteUser(currentUser._id)}
                      className="delete-btn"
                      title="Delete User"
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <p>Welcome back, {user?.firstName}</p>
      </div>

      <div className="admin-tabs">
        <button 
          className={`tab ${activeTab === 'upcomingBookings' ? 'active' : ''}`}
          onClick={() => setActiveTab('upcomingBookings')}
        >
          Upcoming Events
        </button>
        <button 
          className={`tab ${activeTab === 'pastBookings' ? 'active' : ''}`}
          onClick={() => setActiveTab('pastBookings')}
        >
          Past Events
        </button>
        <button 
          className={`tab ${activeTab === 'users' ? 'active' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          Users
        </button>
      </div>

      {error && (
        <div className="error-banner">
          <p>{error}</p>
          <button onClick={() => setError('')}>Dismiss</button>
        </div>
      )}

      {(activeTab === 'upcomingBookings' || activeTab === 'pastBookings') && renderBookingsList()}
      {activeTab === 'users' && renderUsersList()}
    </div>
  );
};

export default AdminDashboard;