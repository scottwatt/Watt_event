// server/utils/bookingUtils.js
const { startOfDay, endOfDay } = require('date-fns');
const Booking = require('../models/Booking');

const checkBookingAvailability = async (date) => {
  const startDate = startOfDay(new Date(date));
  const endDate = endOfDay(new Date(date));

  const existingBookings = await Booking.find({
    date: {
      $gte: startDate,
      $lte: endDate
    },
    status: { $ne: 'cancelled' }
  });

  return existingBookings.length < 2; // Limit to 2 events per day
};

module.exports = {
  checkBookingAvailability
};