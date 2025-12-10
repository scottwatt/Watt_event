// components/pages/Contact.js - Professional Redesign
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const digits = value.replace(/\D/g, '');
      let formatted = '';
      if (digits.length > 0) formatted += digits.slice(0, 3);
      if (digits.length > 3) formatted += '-' + digits.slice(3, 6);
      if (digits.length > 6) formatted += '-' + digits.slice(6, 10);
      setFormData(prev => ({ ...prev, [name]: formatted }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submitData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      submitData.append(key, value);
    });

    try {
      const response = await fetch("https://formspree.io/f/xoqopnpz", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: submitData,
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', eventType: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span className="contact-hero-badge">Get In Touch</span>
          <h1>Contact Us</h1>
          <p>
            Ready to bring Vegas to your event? We're here to help make 
            your casino party dreams a reality.
          </p>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="quick-contact">
        <div className="quick-contact-container">
          <a href="tel:661-302-0115" className="quick-contact-item">
            <span className="icon">📞</span>
            <span className="text">(661) 302-0115</span>
          </a>
          <a href="mailto:jill@wattevent.com" className="quick-contact-item">
            <span className="icon">✉️</span>
            <span className="text">contact@wattevent.com</span>
          </a>
          <div className="quick-contact-item">
            <span className="icon">📍</span>
            <span className="text">Bakersfield, California</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-info-header">
              <h2>Let's Talk</h2>
              <p>
                Have questions about our casino rentals? Want to discuss your 
                upcoming event? Reach out and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="contact-cards">
              <a href="tel:661-302-0115" className="contact-card">
                <div className="contact-card-icon">📞</div>
                <div className="contact-card-content">
                  <h3>Phone</h3>
                  <p>(661) 302-0115</p>
                </div>
              </a>
              
              <a href="mailto:contact@wattevent.com" className="contact-card">
                <div className="contact-card-icon">✉️</div>
                <div className="contact-card-content">
                  <h3>Email</h3>
                  <p>contact@wattevent.com</p>
                </div>
              </a>
              
              <div className="contact-card">
                <div className="contact-card-icon">📍</div>
                <div className="contact-card-content">
                  <h3>Service Area</h3>
                  <p>Bakersfield & Kern County</p>
                </div>
              </div>
            </div>

            <div className="business-hours">
              <h3>🕐 Business Hours</h3>
              <div className="hours-grid">
                <div className="hours-row">
                  <span className="day">Monday - Friday</span>
                  <span className="time open">9:00 AM - 9:00 PM</span>
                </div>
                <div className="hours-row">
                  <span className="day">Saturday</span>
                  <span className="time open">10:00 AM - 10:00 PM</span>
                </div>
                <div className="hours-row">
                  <span className="day">Sunday</span>
                  <span className="time open">10:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>

            <div className="contact-map">
              <iframe
                title="Watt Events Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.469528315297!2d-119.0187124847681!3d35.37329248026311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ea6b2d4a32d07b%3A0x9c5f06d5c8f9b9c!2sBakersfield%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1641847463644!5m2!1sen!2s"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <h2>Send Us a Message</h2>
            <p>Fill out the form below and we'll get back to you shortly.</p>

            {formStatus === 'success' && (
              <div className="form-message success">
                ✓ Message sent successfully! We'll be in touch soon.
              </div>
            )}

            {formStatus === 'error' && (
              <div className="form-message error">
                ✕ Something went wrong. Please try again or call us directly.
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="661-555-0123"
                    maxLength="12"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="eventType">Event Type</label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                  >
                    <option value="">Select an option</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="wedding">Wedding</option>
                    <option value="fundraiser">Fundraiser</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your event, questions, or how we can help..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;