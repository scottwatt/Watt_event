// server/utils/emailService.js
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const logger = require('../config/logger');

// Initialize Mailgun
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY
});

const domain = process.env.MAILGUN_DOMAIN;
const fromEmail = process.env.MAILGUN_FROM_EMAIL;
const adminEmail = process.env.ADMIN_EMAIL;

// Send initial booking confirmation to customer
const sendBookingReceivedEmail = async (booking, userEmail) => {
  try {
    logger.info('Starting sendBookingReceivedEmail...', { userEmail });

    const formattedDate = new Date(booking.date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const templateVariables = {
      bookingDate: formattedDate,
      bookingTime: booking.time,
      eventType: booking.eventType,
      games: Array.isArray(booking.selectedGames) ? booking.selectedGames.join(', ') : booking.selectedGames,
      guestCount: booking.guestCount.toString(),
      contactEmail: fromEmail,
      contactPhone: process.env.CONTACT_PHONE || '661-302-0115'
    };

    logger.info('Preparing email with variables:', templateVariables);

    const data = {
      from: `Watt Events <${fromEmail}>`,
      to: userEmail,
      subject: 'Your Casino Event Booking Request Received! 🎲',
      template: 'booking_received',
      'h:X-Mailgun-Variables': JSON.stringify(templateVariables)
    };

    logger.info('Sending email with data:', {
      to: userEmail,
      template: 'booking_received',
      variables: templateVariables
    });

    const response = await mg.messages.create(domain, data);
    logger.info('Booking received email sent successfully:', response.id);
    return response;
  } catch (error) {
    logger.error('Failed to send booking received email:', error);
    throw error;
  }
};

// Send notification to admin
const sendBookingNotification = async (booking, userEmail) => {
  try {
    logger.info('Starting sendBookingNotification...', { userEmail });

    const formattedDate = new Date(booking.date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const templateVariables = {
      customerEmail: userEmail,
      bookingDate: formattedDate,
      bookingTime: booking.time,
      eventType: booking.eventType,
      games: Array.isArray(booking.selectedGames) ? booking.selectedGames.join(', ') : booking.selectedGames,
      guestCount: booking.guestCount.toString(),
      phoneNumber: booking.phoneNumber,
      specialRequests: booking.specialRequests || 'None'
    };

    logger.info('Preparing admin notification with variables:', templateVariables);

    const data = {
      from: `Watt Events <${fromEmail}>`,
      to: adminEmail,
      subject: 'New Casino Event Booking Request',
      template: 'booking_notification',
      'h:X-Mailgun-Variables': JSON.stringify(templateVariables)
    };

    const response = await mg.messages.create(domain, data);
    logger.info('Admin notification sent successfully:', response.id);
    return response;
  } catch (error) {
    logger.error('Failed to send admin notification:', error);
    throw error;
  }
};

// Send final confirmation to customer when booking is confirmed
const sendBookingConfirmation = async (booking, userEmail) => {
  try {
    logger.info('Starting sendBookingConfirmation...', { userEmail });

    const formattedDate = new Date(booking.date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const templateVariables = {
      bookingDate: formattedDate,
      bookingTime: booking.time,
      eventType: booking.eventType,
      games: Array.isArray(booking.selectedGames) ? booking.selectedGames.join(', ') : booking.selectedGames,
      guestCount: booking.guestCount.toString(),
      contactEmail: fromEmail,
      contactPhone: process.env.CONTACT_PHONE || '661-302-0115'
    };

    logger.info('Preparing confirmation email with variables:', templateVariables);

    const data = {
      from: `Watt Events <${fromEmail}>`,
      to: userEmail,
      subject: 'Your Casino Event is Confirmed! 🎲',
      template: 'booking_confirmation',
      'h:X-Mailgun-Variables': JSON.stringify(templateVariables)
    };

    logger.info('Sending confirmation with data:', {
      to: userEmail,
      template: 'booking_confirmation',
      variables: templateVariables
    });

    const response = await mg.messages.create(domain, data);
    logger.info('Booking confirmation sent successfully:', response.id);
    return response;
  } catch (error) {
    logger.error('Failed to send booking confirmation:', error);
    throw error;
  }
};

const sendNewPasswordEmail = async (email, newPassword) => {
    try {
      logger.info('Preparing to send new password email');
  
      const data = {
        from: `Watt Events <${fromEmail}>`,
        to: email,
        subject: 'Your New Password - Watt Events',
        template: 'new_password',
        'h:X-Mailgun-Variables': JSON.stringify({
          newPassword,
          loginUrl: `${process.env.CLIENT_URL}/login`,
          supportEmail: process.env.SUPPORT_EMAIL || fromEmail
        })
      };
  
      const response = await mg.messages.create(domain, data);
      logger.info('New password email sent successfully');
      return response;
    } catch (error) {
      logger.error('Failed to send new password email:', error);
      throw error;
    }
  };

// Verify email configuration
const verifyEmailConfiguration = () => {
  logger.info('Verifying email configuration...');
  if (!process.env.MAILGUN_API_KEY) {
    logger.error('Missing MAILGUN_API_KEY');
  }
  if (!process.env.MAILGUN_DOMAIN) {
    logger.error('Missing MAILGUN_DOMAIN');
  }
  if (!process.env.MAILGUN_FROM_EMAIL) {
    logger.error('Missing MAILGUN_FROM_EMAIL');
  }
  if (!process.env.ADMIN_EMAIL) {
    logger.error('Missing ADMIN_EMAIL');
  }
  logger.info('Email configuration verified');
};

// Run verification on startup
verifyEmailConfiguration();

module.exports = {
  sendBookingNotification,
  sendBookingConfirmation,
  sendBookingReceivedEmail,
  sendNewPasswordEmail
};