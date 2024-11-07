// components/pages/Register.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [localError, setLocalError] = useState('');
  const { register, loading, error: authError } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear errors when user starts typing
    setLocalError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setLocalError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setLocalError('Password must be at least 6 characters long');
      return;
    }

    try {
      await register({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password
      });
    } catch (err) {
      console.error('Registration error:', err);
      setLocalError(err.response?.data?.message || 'Failed to create account');
    }
  };

  // Display either local error or auth error
  const displayError = localError || authError;

  return (
    <div className="register-container">
      <div className="register-overlay"></div>
      <div className="register-box">
        <div className="register-content">
          <h2>Create Account</h2>
          <p className="register-subtitle">Join us for exclusive casino events</p>
          
          {displayError && (
            <div className="error-message">
              {displayError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="register-form">
            <div className="input-row">
              <div className="input-group">
                <input
                  type="text"
                  name="firstName"
                  required
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={localError && !formData.firstName ? 'error' : ''}
                />
              </div>

              <div className="input-group">
                <input
                  type="text"
                  name="lastName"
                  required
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={localError && !formData.lastName ? 'error' : ''}
                />
              </div>
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className={localError && !formData.email ? 'error' : ''}
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                name="password"
                required
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className={localError && !formData.password ? 'error' : ''}
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                name="confirmPassword"
                required
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={localError && !formData.confirmPassword ? 'error' : ''}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`register-button ${loading ? 'loading' : ''}`}
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <div className="register-footer">
            <p>Already have an account?</p>
            <Link to="/login" className="login-link">
              Sign in here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;