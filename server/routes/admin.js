// server/routes/admin.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const adminAuth = require('../middleware/admin');
const Booking = require('../models/Booking');
const User = require('../models/User');

// Get all bookings
router.get('/bookings', [auth, adminAuth], async (req, res) => {
    try {
      const bookings = await Booking.find()
        .populate('userId', 'firstName lastName email')
        .sort({ date: -1 });
      res.json(bookings);
    } catch (err) {
      console.error('Error fetching bookings:', err);
      res.status(500).json({ 
        message: 'Error fetching bookings',
        error: err.message 
      });
    }
  });

// Get all users
router.get('/users', [auth, adminAuth], async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users' });
  }
});

// Update booking status
router.patch('/bookings/:id/status', [auth, adminAuth], async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(booking);
  } catch (err) {
    res.status(500).json({ message: 'Error updating booking' });
  }
});

// Delete booking
router.delete('/bookings/:id', [auth, adminAuth], async (req, res) => {
    try {
      const booking = await Booking.findByIdAndDelete(req.params.id);
      
      if (!booking) {
        return res.status(404).json({
          success: false,
          message: 'Booking not found'
        });
      }
  
      res.json({
        success: true,
        message: 'Booking deleted successfully'
      });
    } catch (err) {
      console.error('Error deleting booking:', err);
      res.status(500).json({
        success: false,
        message: 'Error deleting booking'
      });
    }
  });

module.exports = router;