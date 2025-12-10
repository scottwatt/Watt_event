// components/pages/PrivacyPolicy.js - Professional Design
import React from 'react';
import { Link } from 'react-router-dom';
import './LegalPages.css';

const PrivacyPolicy = () => {
  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'collection', title: 'Information We Collect' },
    { id: 'usage', title: 'How We Use Your Information' },
    { id: 'sharing', title: 'Information Sharing' },
    { id: 'cookies', title: 'Cookies & Tracking' },
    { id: 'security', title: 'Data Security' },
    { id: 'rights', title: 'Your Rights' },
    { id: 'children', title: "Children's Privacy" },
    { id: 'changes', title: 'Policy Changes' },
    { id: 'contact', title: 'Contact Us' }
  ];

  return (
    <div className="legal-page">
      {/* Hero Section */}
      <section className="legal-hero">
        <div className="legal-hero-content">
          <span className="legal-hero-icon">🔒</span>
          <span className="legal-hero-badge">Legal</span>
          <h1>Privacy Policy</h1>
          <p>
            Your privacy is important to us. This policy explains how we collect, 
            use, and protect your personal information.
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
        <section id="introduction" className="legal-section">
          <h2>
            <span className="section-number">1</span>
            Introduction
          </h2>
          <p>
            Watt Events ("Company", "we", "us", or "our") is committed to protecting your 
            privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard 
            your information when you visit our website www.wattevent.com or use our services.
          </p>
          <p>
            By using our website or services, you consent to the data practices described in 
            this policy. If you do not agree with this policy, please do not use our website or services.
          </p>
          <div className="legal-highlight">
            <p>
              <strong>Our Commitment:</strong> We never sell your personal information to third 
              parties. We collect only what we need to provide you with excellent service.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="collection" className="legal-section">
          <h2>
            <span className="section-number">2</span>
            Information We Collect
          </h2>
          <h3>Information You Provide</h3>
          <p>
            We collect information you voluntarily provide when you:
          </p>
          <ul className="legal-list">
            <li>
              <span className="list-icon">📝</span>
              <div className="list-content">
                <strong>Contact Forms</strong>
                Name, email address, phone number, and message content
              </div>
            </li>
            <li>
              <span className="list-icon">📅</span>
              <div className="list-content">
                <strong>Booking Requests</strong>
                Event details, date, location, and special requirements
              </div>
            </li>
            <li>
              <span className="list-icon">✉️</span>
              <div className="list-content">
                <strong>Email Communications</strong>
                Any information included in emails you send us
              </div>
            </li>
            <li>
              <span className="list-icon">📞</span>
              <div className="list-content">
                <strong>Phone Calls</strong>
                Information shared during phone conversations
              </div>
            </li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>
            When you visit our website, we may automatically collect:
          </p>
          <ul className="legal-list">
            <li>
              <span className="list-icon">🌐</span>
              <div className="list-content">
                <strong>Device Information</strong>
                Browser type, operating system, and device type
              </div>
            </li>
            <li>
              <span className="list-icon">📍</span>
              <div className="list-content">
                <strong>Usage Data</strong>
                Pages visited, time spent, and navigation patterns
              </div>
            </li>
            <li>
              <span className="list-icon">🔗</span>
              <div className="list-content">
                <strong>Referral Information</strong>
                How you found our website (search engine, link, etc.)
              </div>
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section id="usage" className="legal-section">
          <h2>
            <span className="section-number">3</span>
            How We Use Your Information
          </h2>
          <p>
            We use the information we collect for the following purposes:
          </p>
          <ul className="legal-list">
            <li>
              <span className="list-icon">📧</span>
              <div className="list-content">
                <strong>Communication</strong>
                Respond to inquiries, send quotes, and confirm bookings
              </div>
            </li>
            <li>
              <span className="list-icon">🎪</span>
              <div className="list-content">
                <strong>Service Delivery</strong>
                Plan, coordinate, and deliver our casino rental services
              </div>
            </li>
            <li>
              <span className="list-icon">📊</span>
              <div className="list-content">
                <strong>Improvement</strong>
                Analyze usage to improve our website and services
              </div>
            </li>
            <li>
              <span className="list-icon">🔔</span>
              <div className="list-content">
                <strong>Updates</strong>
                Send service updates and promotional information (with consent)
              </div>
            </li>
            <li>
              <span className="list-icon">⚖️</span>
              <div className="list-content">
                <strong>Legal Compliance</strong>
                Comply with legal obligations and protect our rights
              </div>
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section id="sharing" className="legal-section">
          <h2>
            <span className="section-number">4</span>
            Information Sharing
          </h2>
          <p>
            We do not sell, trade, or rent your personal information. We may share your 
            information only in the following circumstances:
          </p>
          <ul className="legal-list">
            <li>
              <span className="list-icon">🤝</span>
              <div className="list-content">
                <strong>Service Providers</strong>
                Trusted third parties who assist us in operating our business (e.g., payment processors)
              </div>
            </li>
            <li>
              <span className="list-icon">⚖️</span>
              <div className="list-content">
                <strong>Legal Requirements</strong>
                When required by law, court order, or government request
              </div>
            </li>
            <li>
              <span className="list-icon">🛡️</span>
              <div className="list-content">
                <strong>Protection</strong>
                To protect our rights, privacy, safety, or property
              </div>
            </li>
            <li>
              <span className="list-icon">✅</span>
              <div className="list-content">
                <strong>With Consent</strong>
                When you have given explicit permission to share
              </div>
            </li>
          </ul>
        </section>

        {/* Section 5 */}
        <section id="cookies" className="legal-section">
          <h2>
            <span className="section-number">5</span>
            Cookies & Tracking Technologies
          </h2>
          <p>
            Our website may use cookies and similar tracking technologies to enhance your 
            experience. Cookies are small files stored on your device that help us:
          </p>
          <ul className="legal-list">
            <li>
              <span className="list-icon">⚙️</span>
              <div className="list-content">
                Remember your preferences and settings
              </div>
            </li>
            <li>
              <span className="list-icon">📈</span>
              <div className="list-content">
                Understand how you use our website
              </div>
            </li>
            <li>
              <span className="list-icon">🎯</span>
              <div className="list-content">
                Improve our services based on usage patterns
              </div>
            </li>
          </ul>
          <div className="legal-highlight">
            <p>
              <strong>Your Choice:</strong> Most browsers allow you to control cookies through 
              settings. You can refuse cookies, but some website features may not work properly.
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section id="security" className="legal-section">
          <h2>
            <span className="section-number">6</span>
            Data Security
          </h2>
          <p>
            We implement appropriate technical and organizational measures to protect your 
            personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>
          <ul className="legal-list">
            <li>
              <span className="list-icon">🔐</span>
              <div className="list-content">
                <strong>Encryption</strong>
                Secure data transmission using SSL/TLS encryption
              </div>
            </li>
            <li>
              <span className="list-icon">🔒</span>
              <div className="list-content">
                <strong>Access Controls</strong>
                Limited access to personal data on a need-to-know basis
              </div>
            </li>
            <li>
              <span className="list-icon">🔄</span>
              <div className="list-content">
                <strong>Regular Reviews</strong>
                Periodic security assessments and updates
              </div>
            </li>
          </ul>
          <p>
            While we strive to protect your information, no method of transmission over the 
            internet is 100% secure. We cannot guarantee absolute security.
          </p>
        </section>

        {/* Section 7 */}
        <section id="rights" className="legal-section">
          <h2>
            <span className="section-number">7</span>
            Your Rights
          </h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information:
          </p>
          <ul className="legal-list">
            <li>
              <span className="list-icon">👁️</span>
              <div className="list-content">
                <strong>Access</strong>
                Request a copy of the personal information we hold about you
              </div>
            </li>
            <li>
              <span className="list-icon">✏️</span>
              <div className="list-content">
                <strong>Correction</strong>
                Request correction of inaccurate or incomplete information
              </div>
            </li>
            <li>
              <span className="list-icon">🗑️</span>
              <div className="list-content">
                <strong>Deletion</strong>
                Request deletion of your personal information (subject to legal requirements)
              </div>
            </li>
            <li>
              <span className="list-icon">🚫</span>
              <div className="list-content">
                <strong>Opt-Out</strong>
                Unsubscribe from marketing communications at any time
              </div>
            </li>
          </ul>
          <p>
            To exercise any of these rights, please contact us using the information provided below.
          </p>
        </section>

        {/* Section 8 */}
        <section id="children" className="legal-section">
          <h2>
            <span className="section-number">8</span>
            Children's Privacy
          </h2>
          <p>
            Our website and services are not intended for children under the age of 13. We do 
            not knowingly collect personal information from children under 13. If you are a 
            parent or guardian and believe your child has provided us with personal information, 
            please contact us immediately.
          </p>
          <div className="legal-highlight">
            <p>
              <strong>Note:</strong> Our casino entertainment services are designed for adult 
              events (18+). Any services involving minors require parental/guardian consent 
              and supervision.
            </p>
          </div>
        </section>

        {/* Section 9 */}
        <section id="changes" className="legal-section">
          <h2>
            <span className="section-number">9</span>
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. When we make changes, we will:
          </p>
          <ul className="legal-list">
            <li>
              <span className="list-icon">📅</span>
              <div className="list-content">
                Update the "Last Updated" date at the top of this policy
              </div>
            </li>
            <li>
              <span className="list-icon">📢</span>
              <div className="list-content">
                Notify you of significant changes through our website or email
              </div>
            </li>
          </ul>
          <p>
            We encourage you to review this policy periodically. Your continued use of our 
            services after changes indicates acceptance of the updated policy.
          </p>
        </section>

        {/* Section 10 */}
        <section id="contact" className="legal-section">
          <h2>
            <span className="section-number">10</span>
            Contact Us
          </h2>
          <p>
            If you have questions about this Privacy Policy, want to exercise your rights, 
            or have concerns about how we handle your information, please contact us:
          </p>
          <div className="legal-contact">
            <h3>Watt Events - Privacy Inquiries</h3>
            <p>📍 Bakersfield, California</p>
            <p>📞 <a href="tel:661-302-0115">(661) 302-0115</a></p>
            <p>✉️ <a href="mailto:contact@wattevent.com">contact@wattevent.com</a></p>
          </div>
          <p style={{ marginTop: '1.5rem' }}>
            We will respond to your inquiry within 30 days.
          </p>
        </section>

        {/* Back to Top */}
        <div className="back-to-top">
          <a href="#top">↑ Back to Top</a>
        </div>

        {/* CTA */}
        <section className="legal-cta">
          <h2>Questions? We're Here to Help</h2>
          <p>Contact us if you have any questions about your privacy or our services.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-btn primary">
              Contact Us
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link to="/terms-of-service" className="cta-btn secondary">
              View Terms of Service
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;