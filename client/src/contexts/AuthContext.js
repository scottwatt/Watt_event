// src/contexts/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigation } from '../hooks/useNavigation';
import api from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigation();

  // Helper function for token management
  const setAuthToken = (token, user = null) => {
    if (token) {
      localStorage.setItem('token', token);
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      if (user) setUser(user);
    } else {
      localStorage.removeItem('token');
      delete api.defaults.headers.common['Authorization'];
      setUser(null);
    }
  };

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const response = await api.get('/auth/me');
        console.log('Auth check response:', response.data);
        
        if (response.data.success) {
          setUser(response.data.user);
        } else {
          setAuthToken(null);
        }
      }
    } catch (err) {
      console.error('Auth check failed:', err);
      setAuthToken(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await api.post('/auth/login', { email, password });
      console.log('Login response:', response.data);

      if (response.data.success && response.data.token && response.data.user) {
        setAuthToken(response.data.token, response.data.user);
        console.log('Login successful, redirecting to booking...');
        navigate('/dashboard');
      } else {
        throw new Error('Invalid response format from server');
      }
    } catch (err) {
      console.error('Login error:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Login failed. Please try again.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.post('/auth/register', userData);
      console.log('Registration response:', response.data);
      
      if (response.data.success && response.data.token && response.data.user) {
        setAuthToken(response.data.token, response.data.user);
        navigate('/dashboard');
      } else {
        throw new Error('Invalid response format from server');
      }
    } catch (err) {
      console.error('Registration error:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setAuthToken(null);
    setError(null);
    navigate('/');
    console.log('User logged out successfully');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const value = {
    user,
    loading,
    error,
    login,
    register,
    logout,
    setError,
    checkAuth
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};