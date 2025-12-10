// components/pages/TermsOfService.js - Professional Redesign
import React from 'react';
import { Link } from 'react-router-dom';
import './LegalPages.css';

const TermsOfService = () => {
  const sections = [
    { id: 'acceptance', title: 'Acceptance of Terms' },
    { id: 'services', title: 'Service Description' },
    { id: 'bookings', title: 'Bookings & Payments' },
    { id: 'cancellation', title: 'Cancellation Policy' },
    { id: 'conduct', title: 'User Conduct' },
    { id: 'liability', title: 'Limitation of Liability' },
    { id: 'indemnification', title: 'Indemnification' },
    { id: 'changes', title: 'Changes to Terms' },
    { id: 'governing', title: 'Governing Law' },
    { id: 'contact', title: 'Contact Information' }
  ];

  return (
    <div className="legal-page">
      {/* Hero Section */}
      <section className="legal-hero">
        <div className="legal-hero-content">
          <span className="legal-hero-icon">📜</span>
          <span className="legal-hero-badge">Legal</span>
          <h1>Terms of Service</h1>
          <p>
            Please read these terms carefully before using our services. 
            By booking with Watt Events, you agree to these terms.
          </p>
          <span className="last-updated">Last Updated: January 15, 2025</span>
        </div>
      </section>

      {/* Main Content */}
      <div className="legal-container">
        
        {/* Table of Contents */}
        <nav className="legal-toc">
          <h2>📋 Table of Contents</h2>
          <ol className="legal-toc-list">
            {sections.map((section, idx) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>
                  <span className="toc-number">{idx + 1}</span>
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Section 1 */}
        <section id="acceptance" className="legal-section">
          <h2>
            <span className="section-number">1</span>
            Acceptance of Terms
          </h2>
          <p>
            Welcome to Watt Events ("Company", "we", "us", or "our"). These Terms of Service 
            ("Terms") govern your use of our website at www.wattevent.com and all related 
            services, including casino equipment rentals and event services.
          </p>
          <p>
            By accessing our website, making a booking, or using our services, you ("User", 
            "you", or "your") acknowledge that you have read, understood, and agree to be 
            bound by these Terms. If you do not agree to these Terms, please do not use our services.
          </p>
          <div className="legal-highlight">
            <p>
              <strong>Important:</strong> You must be at least 18 years old to use our services 
              and make bookings. By using our services, you represent that you meet this age requirement.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="services" className="legal-section">
          <h2>
            <span className="section-number">2</span>
            Service Description
          </h2>
          <p>
            Watt Events provides casino equipment rental services for entertainment purposes only. 
            Our services include:
          </p>
          <ul className="legal-list">
            <li>
              <span className="list-icon">🃏</span>
              <div className="list-content">
                <strong>Casino Equipment Rental</strong>
                Professional poker tables, blackjack tables, roulette wheels, and craps tables
              </div>
            </li>
            <li>
              <span className="list-icon">👨‍💼</span>
              <div className="list-content">
                <strong>Professional Dealers</strong>
                Trained dealers to operate casino games at your event
              </div>
            </li>
            <li>
              <span className="list-icon">🚚</span>
              <div className="list-content">
                <strong>Delivery & Setup</strong>
                Equipment delivery, setup, and breakdown services
              </div>
            </li>
            <li>
              <span className="list-icon">🎪</span>
              <div className="list-content">
                <strong>Event Support</strong>
                On-site coordination and support during your event
              </div>
            </li>
          </ul>
          <div className="legal-highlight">
            <p>
              <strong>No Real Gambling:</strong> Our services are for entertainment purposes only. 
              No real money gambling is offered, implied, or permitted. All casino activities at 
              events using our services must comply with California state law.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section id="bookings" className="legal-section">
          <h2>
            <span className="section-number">3</span>
            Bookings & Payments
          </h2>
          <h3>Booking Process</h3>
          <p>
            Bookings can be made through our website, by phone, or by email. A booking is not 
            confirmed until you receive written confirmation from Watt Events and any required 
            deposit has been received.
          </p>
          <h3>Pricing</h3>
          <p>
            All prices quoted are in US Dollars. Pricing may vary based on event date, duration, 
            location, and specific requirements. A detailed quote will be provided before booking confirmation.
          </p>
          <h3>Payment Terms</h3>
          <ul className="legal-list">
            <li>
              <span className="list-icon">💳</span>
              <div className="list-content">
                <strong>Deposit</strong>
                A 50% deposit is required to confirm your booking
              </div>
            </li>
            <li>
              <span className="list-icon">📅</span>
              <div className="list-content">
                <strong>Balance Due</strong>
                Remaining balance is due 7 days before your event date
              </div>
            </li>
            <li>
              <span className="list-icon">✅</span>
              <div className="list-content">
                <strong>Accepted Methods</strong>
                We accept cash, credit cards, checks, and electronic transfers
              </div>
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section id="cancellation" className="legal-section">
          <h2>
            <span className="section-number">4</span>
            Cancellation Policy
          </h2>
          <p>
            We understand that plans can change. Our cancellation policy is as follows:
          </p>
          <ul className="legal-list">
            <li>
              <span className="list-icon">✅</span>
              <div className="list-content">
                <strong>30+ Days Before Event</strong>
                Full refund of deposit minus a $50 administrative fee
              </div>
            </li>
            <li>
              <span className="list-icon">⚠️</span>
              <div className="list-content">
                <strong>14-29 Days Before Event</strong>
                50% of deposit is refundable
              </div>
            </li>
            <li>
              <span className="list-icon">❌</span>
              <div className="list-content">
                <strong>Less Than 14 Days</strong>
                Deposit is non-refundable; rescheduling may be available
              </div>
            </li>
          </ul>
          <p>
            To cancel a booking, please contact us in writing via email at contact@wattevent.com. 
            Cancellation is effective on the date we receive your written notice.
          </p>
        </section>

        {/* Section 5 */}
        <section id="conduct" className="legal-section">
          <h2>
            <span className="section-number">5</span>
            User Conduct
          </h2>
          <p>
            When using our services, you agree to:
          </p>
          <ul className="legal-list">
            <li>
              <span className="list-icon">✓</span>
              <div className="list-content">
                Use our equipment responsibly and for its intended entertainment purpose only
              </div>
            </li>
            <li>
              <span className="list-icon">✓</span>
              <div className="list-content">
                Ensure no real money gambling takes place at your event
              </div>
            </li>
            <li>
              <span className="list-icon">✓</span>
              <div className="list-content">
                Treat our staff with respect and provide a safe working environment
              </div>
            </li>
            <li>
              <span className="list-icon">✓</span>
              <div className="list-content">
                Report any equipment damage or issues promptly
              </div>
            </li>
            <li>
              <span className="list-icon">✓</span>
              <div className="list-content">
                Comply with all applicable local, state, and federal laws
              </div>
            </li>
          </ul>
        </section>

        {/* Section 6 */}
        <section id="liability" className="legal-section">
          <h2>
            <span className="section-number">6</span>
            Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by applicable law, Watt Events shall not be liable for:
          </p>
          <ul className="legal-list">
            <li>
              <span className="list-icon">•</span>
              <div className="list-content">
                Any indirect, incidental, special, consequential, or punitive damages
              </div>
            </li>
            <li>
              <span className="list-icon">•</span>
              <div className="list-content">
                Loss of profits, data, use, goodwill, or other intangible losses
              </div>
            </li>
            <li>
              <span className="list-icon">•</span>
              <div className="list-content">
                Damages resulting from unauthorized access to or use of our services
              </div>
            </li>
            <li>
              <span className="list-icon">•</span>
              <div className="list-content">
                Any gaming or gambling activities beyond the scope of our entertainment services
              </div>
            </li>
          </ul>
          <p>
            Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.
          </p>
        </section>

        {/* Section 7 */}
        <section id="indemnification" className="legal-section">
          <h2>
            <span className="section-number">7</span>
            Indemnification
          </h2>
          <p>
            You agree to indemnify, defend, and hold harmless Watt Events, its officers, directors, 
            employees, and agents from and against any claims, liabilities, damages, losses, and 
            expenses, including reasonable attorney's fees, arising out of or in any way connected 
            with your use of our services or violation of these Terms.
          </p>
        </section>

        {/* Section 8 */}
        <section id="changes" className="legal-section">
          <h2>
            <span className="section-number">8</span>
            Changes to Terms
          </h2>
          <p>
            We reserve the right to modify or replace these Terms at any time at our sole discretion. 
            If we make material changes, we will provide notice through our website or by other means.
          </p>
          <p>
            Your continued use of our services after any changes constitutes acceptance of the new Terms. 
            We encourage you to review these Terms periodically for any updates.
          </p>
        </section>

        {/* Section 9 */}
        <section id="governing" className="legal-section">
          <h2>
            <span className="section-number">9</span>
            Governing Law
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the 
            State of California, without regard to its conflict of law provisions.
          </p>
          <p>
            Any disputes arising from these Terms or our services shall be resolved exclusively 
            in the courts located in Kern County, California.
          </p>
        </section>

        {/* Section 10 */}
        <section id="contact" className="legal-section">
          <h2>
            <span className="section-number">10</span>
            Contact Information
          </h2>
          <p>
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <div className="legal-contact">
            <h3>Watt Events</h3>
            <p>📍 Bakersfield, California</p>
            <p>📞 <a href="tel:661-302-0115">(661) 302-0115</a></p>
            <p>✉️ <a href="mailto:contact@wattevent.com">contact@wattevent.com</a></p>
          </div>
        </section>

        {/* Back to Top */}
        <div className="back-to-top">
          <a href="#top">↑ Back to Top</a>
        </div>

        {/* CTA */}
        <section className="legal-cta">
          <h2>Ready to Book Your Event?</h2>
          <p>Now that you've reviewed our terms, let's plan your casino party!</p>
          <div className="cta-buttons">
            <Link to="/booking" className="cta-btn primary">
              Get Free Quote
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <a href="tel:661-302-0115" className="cta-btn secondary">
              📞 (661) 302-0115
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;