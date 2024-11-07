// client/src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5001/api',
  headers: {
    'Content-Type': 'application/json'
  },
  // Add timeout
  timeout: 10000, // 10 seconds
  // Add withCredentials if you're using cookies
  withCredentials: true
});

// Request interceptor with better error logging
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Log all requests except sensitive data
    console.log('API Request:', {
      url: config.url,
      method: config.method,
      headers: {
        ...config.headers,
        Authorization: config.headers.Authorization ? '[HIDDEN]' : undefined
      },
      data: config.url.includes('password') ? '[HIDDEN]' : config.data
    });
    
    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor with detailed error logging
api.interceptors.response.use(
  (response) => {
    // Log successful responses
    console.log('API Response:', {
      url: response.config.url,
      status: response.status,
      data: response.config.url.includes('password') ? '[HIDDEN]' : response.data
    });
    return response;
  },
  (error) => {
    // Log detailed error information
    console.error('API Error Details:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
      config: {
        url: error.config?.url,
        method: error.config?.method,
        data: error.config?.url?.includes('password') ? '[HIDDEN]' : error.config?.data
      }
    });
    
    // Handle different error scenarios
    if (error.response) {
      // Server responded with an error
      switch (error.response.status) {
        case 401:
          // Unauthorized - clear token and redirect to login
          localStorage.removeItem('token');
          window.location.href = '/login';
          break;
          
        case 403:
          // Forbidden - handle access denied
          console.error('Access denied');
          break;
          
        case 404:
          // Not found
          console.error('Resource not found');
          break;
          
        case 422:
          // Validation error
          console.error('Validation failed:', error.response.data);
          break;
          
        case 500:
          // Server error
          console.error('Server error:', error.response.data);
          break;
          
        default:
          console.error('Unhandled error status:', error.response.status);
      }
    } else if (error.request) {
      // Request was made but no response received
      console.error('No response received:', error.request);
    } else {
      // Something else happened while setting up the request
      console.error('Error setting up request:', error.message);
    }
    
    return Promise.reject(error);
  }
);

// Add convenience methods for common operations
api.auth = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  forgotPassword: (email) => api.post('/auth/forgot-password', { email }),
  changePassword: (passwords) => api.post('/auth/change-password', passwords),
  getProfile: () => api.get('/auth/me'),
};

api.bookings = {
  create: (bookingData) => api.post('/bookings', bookingData),
  getAll: () => api.get('/bookings/my'),
  getOne: (id) => api.get(`/bookings/${id}`),
  cancel: (id) => api.patch(`/bookings/${id}/cancel`),
  checkAvailability: (date) => api.get(`/bookings/availability/${date}`),
};

api.admin = {
  getAllBookings: () => api.get('/admin/bookings'),
  getAllUsers: () => api.get('/admin/users'),
  updateBookingStatus: (id, status) => api.patch(`/admin/bookings/${id}/status`, { status }),
  deleteBooking: (id) => api.delete(`/admin/bookings/${id}`),
};

export default api;