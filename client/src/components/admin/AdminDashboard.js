// client/src/components/admin/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import api from '../../services/api';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [users, setUsers] = useState([]);
  const [activeTab, setActiveTab] = useState('upcomingBookings'); // Changed default tab
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const { user } = useAuth();

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
    
    // Filter by past/upcoming depending on active tab
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

  const formatPhoneNumber = (phoneNumber) => {
    if (!phoneNumber) return 'No phone number';
    return phoneNumber;
  };

  const formatDateTime = (dateString, time) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} ${time}`;
  };

  if (!user?.isAdmin) {
    return <div className="admin-dashboard">Access Denied. Admin privileges required.</div>;
  }

  if (loading) {
    return (
      <div className="admin-dashboard">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading dashboard...</p>
        </div>
      </div>
    );
  }

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
          Upcoming Bookings
        </button>
        <button 
          className={`tab ${activeTab === 'pastBookings' ? 'active' : ''}`}
          onClick={() => setActiveTab('pastBookings')}
        >
          Past Bookings
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
          <button onClick={fetchData}>Retry</button>
        </div>
      )}

      {(activeTab === 'upcomingBookings' || activeTab === 'pastBookings') && (
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
          </div>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Date & Time</th>
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
                {filteredBookings.map(booking => (
                  <tr key={booking._id}>
                    <td>{formatDateTime(booking.date, booking.time)}</td>
                    <td>
                      {booking.userId ? 
                        `${booking.userId.firstName || ''} ${booking.userId.lastName || ''}` 
                        : 'Unknown User'}
                    </td>
                    <td>{formatPhoneNumber(booking.phoneNumber)}</td>
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
      )}

      {/* Users tab content remains the same */}
      {activeTab === 'users' && (
        <div className="users-list">
          {/* ... existing users list code ... */}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;