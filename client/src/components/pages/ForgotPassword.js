// client/src/components/pages/ForgotPassword.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      if (!email) {
        throw new Error('Email is required');
      }

      console.log('Sending forgot password request...');
      
      const response = await api.post('/auth/forgot-password', { 
        email: email.trim().toLowerCase() 
      });

      if (response.data.success) {
        setMessage(response.data.message || 'Password reset instructions sent to your email.');
        setEmail('');
      } else {
        throw new Error(response.data.message || 'Failed to process request');
      }
    } catch (err) {
      console.error('Forgot password error:', err);
      setError(
        err.response?.data?.message || 
        err.message || 
        'Unable to process request. Please try again later.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">
        <h2>Forgot Password</h2>
        <p className="instructions">
          Enter your email address and we'll send you password reset instructions.
        </p>

        {message && <div className="message success">{message}</div>}
        {error && <div className="message error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={loading}
            />
          </div>

          <button 
            type="submit" 
            className="submit-button"
            disabled={loading || !email}
          >
            {loading ? 'Processing...' : 'Reset Password'}
          </button>

          <div className="links">
            <Link to="/login" className="back-link">
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;