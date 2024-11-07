// server/routes/bookings.js
const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const auth = require('../middleware/auth');
const { 
  sendBookingNotification, 
  sendBookingConfirmation,
  sendBookingReceivedEmail 
} = require('../utils/emailService');
const { checkBookingAvailability } = require('../utils/bookingUtils');
const logger = require('../config/logger');

// Get all bookings for the current user
router.get('/my', auth, async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user._id })
      .sort({ date: -1 });
    
    res.json(bookings);
  } catch (err) {
    logger.error('Error fetching bookings:', err);
    res.status(500).json({
      success: false,
      message: 'Unable to fetch your bookings. Please try again later.'
    });
  }
});

// Check date availability
router.get('/availability/:date', auth, async (req, res) => {
  try {
    const isAvailable = await checkBookingAvailability(req.params.date);
    res.json({ available: isAvailable });
  } catch (err) {
    logger.error('Error checking availability:', err);
    res.status(500).json({
      success: false,
      message: 'Unable to check date availability'
    });
  }
});

// Create a new booking
router.post('/', auth, async (req, res) => {
  try {
    const {
      date,
      time,
      eventType,
      numberOfTables,
      selectedGames,
      guestCount,
      specialRequests,
      phoneNumber
    } = req.body;

    // Input validation
    const requiredFields = {
      date,
      time,
      eventType,
      numberOfTables,
      selectedGames,
      guestCount,
      phoneNumber
    };

    const missingFields = Object.entries(requiredFields)
      .filter(([_, value]) => !value)
      .map(([key]) => key);

    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missingFields.join(', ')}`
      });
    }

    // Validate phone number format
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (!phoneRegex.test(phoneNumber)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid phone number format. Please use format: XXX-XXX-XXXX'
      });
    }

    // Check booking availability
    const isAvailable = await checkBookingAvailability(date);
    if (!isAvailable) {
      return res.status(400).json({
        success: false,
        message: 'This date is fully booked. Please select another date.'
      });
    }

    // Create booking
    const booking = new Booking({
      userId: req.user._id,
      date,
      time,
      eventType,
      numberOfTables,
      selectedGames,
      guestCount,
      specialRequests,
      phoneNumber,
      status: 'pending'
    });

    await booking.save();

    // Send emails (both customer and admin notifications)
    try {
      // Send email to customer
      await sendBookingReceivedEmail(booking, req.user.email);
      logger.info('Booking received email sent to customer');
      
      // Send notification to admin
      await sendBookingNotification(booking, req.user.email);
      logger.info('Booking notification sent to admin');
    } catch (emailError) {
      logger.error('Error sending emails:', emailError);
      // Continue with booking process despite email failure
    }

    res.status(201).json({
      success: true,
      booking,
      message: 'Booking created successfully. Check your email for confirmation details.'
    });

  } catch (err) {
    logger.error('Error creating booking:', err);
    res.status(500).json({
      success: false,
      message: 'Unable to create booking. Please try again later.'
    });
  }
});

// Get specific booking details
router.get('/:id', auth, async (req, res) => {
  try {
    const booking = await Booking.findOne({
      _id: req.params.id,
      userId: req.user._id
    });

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    res.json({
      success: true,
      booking
    });

  } catch (err) {
    logger.error('Error fetching booking details:', err);
    res.status(500).json({
      success: false,
      message: 'Unable to fetch booking details. Please try again later.'
    });
  }
});

// Update booking status
router.patch('/:id/status', auth, async (req, res) => {
  try {
    const { status } = req.body;
    
    // Validate status
    const validStatuses = ['pending', 'confirmed', 'cancelled'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status. Must be pending, confirmed, or cancelled.'
      });
    }

    const booking = await Booking.findById(req.params.id)
      .populate('userId', 'email');

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    // Check if status is actually changing
    if (booking.status === status) {
      return res.json({
        success: true,
        booking,
        message: 'Booking status unchanged'
      });
    }

    booking.status = status;
    await booking.save();

    // Send confirmation email if status is confirmed
    if (status === 'confirmed') {
      try {
        await sendBookingConfirmation(booking, booking.userId.email);
        logger.info('Booking confirmation email sent');
      } catch (emailError) {
        logger.error('Failed to send booking confirmation email:', emailError);
      }
    }

    res.json({
      success: true,
      booking,
      message: `Booking status updated to ${status}`
    });

  } catch (err) {
    logger.error('Error updating booking status:', err);
    res.status(500).json({
      success: false,
      message: 'Unable to update booking status. Please try again later.'
    });
  }
});

// Cancel booking
router.patch('/:id/cancel', auth, async (req, res) => {
  try {
    const booking = await Booking.findOne({
      _id: req.params.id,
      userId: req.user._id
    });

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    // Prevent cancelling already cancelled bookings
    if (booking.status === 'cancelled') {
      return res.status(400).json({
        success: false,
        message: 'Booking is already cancelled'
      });
    }

    // Check if booking is within 24 hours
    const bookingDate = new Date(booking.date);
    const now = new Date();
    const hoursUntilBooking = (bookingDate - now) / (1000 * 60 * 60);

    if (hoursUntilBooking < 24) {
      return res.status(400).json({
        success: false,
        message: 'Bookings cannot be cancelled within 24 hours of the event. Please contact us directly.'
      });
    }

    booking.status = 'cancelled';
    await booking.save();

    res.json({
      success: true,
      booking,
      message: 'Booking cancelled successfully'
    });

  } catch (err) {
    logger.error('Error cancelling booking:', err);
    res.status(500).json({
      success: false,
      message: 'Unable to cancel booking. Please try again later.'
    });
  }
});

module.exports = router;