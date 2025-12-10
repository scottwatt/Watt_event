// components/pages/Services.js - Professional Redesign
import React from 'react';
import { Link } from 'react-router-dom';
import OptimizedImage from '../OptimizedImage';
import './Services.css';

const Services = () => {
  const eventTypes = [
    {
      icon: '🏈',
      title: 'Sports Viewing Parties',
      description: 'Play poker during halftime for an exciting game day experience.'
    },
    {
      icon: '💍',
      title: 'Anniversary Parties',
      description: 'Celebrate milestones with friendly competition and elegance.'
    },
    {
      icon: '🎓',
      title: 'Graduation Parties',
      description: 'Honor achievements with a memorable casino night celebration.'
    },
    {
      icon: '🎉',
      title: 'Retirement Parties',
      description: 'Send off colleagues in style with Vegas-level entertainment.'
    },
    {
      icon: '🎂',
      title: 'Birthday Parties',
      description: 'Make any birthday unforgettable with casino excitement.'
    },
    {
      icon: '💒',
      title: 'Bachelor/Bachelorette',
      description: 'Classy pre-wedding celebrations with friends and family.'
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-content">
          <span className="services-hero-badge">What We Offer</span>
          <h1>Professional Casino Event Services</h1>
          <p>
            From corporate gatherings to private celebrations, we bring the authentic 
            Vegas experience to any event in Bakersfield and Kern County.
          </p>
        </div>
      </section>

      {/* Services */}
      <div className="services-container">
        
        {/* Corporate Events */}
        <article className="service-card">
          <div className="service-image-wrapper">
            <OptimizedImage
              src="images/WEtables.jpg"
              alt="Corporate casino event with professional poker tables in Bakersfield"
              width={600}
              height={600}
              loading="eager"
              sizes="(max-width: 968px) 100vw, 50vw"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <span className="service-image-overlay">Most Popular</span>
          </div>
          <div className="service-content">
            <span className="service-icon">🏢</span>
            <h2>Corporate Events</h2>
            <p>
              Transform your corporate gathering into an unforgettable experience. Casino parties 
              offer a unique twist that encourages team building, networking, and genuine connections 
              outside the usual office environment.
            </p>
            <p>
              The thrill of the game breaks down barriers and promotes interactions among colleagues. 
              It's also a fantastic way to entertain clients in a relaxed atmosphere that's conducive 
              to building stronger business relationships.
            </p>
            <div className="service-features">
              <span className="feature-tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                Team Building
              </span>
              <span className="feature-tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                Client Entertainment
              </span>
              <span className="feature-tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                Holiday Parties
              </span>
              <span className="feature-tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                Networking Events
              </span>
            </div>
          </div>
        </article>

        {/* Fundraisers */}
        <article className="service-card reverse">
          <div className="service-image-wrapper">
            <OptimizedImage
              src="images/WeTourney.jpg"
              alt="Casino fundraiser tournament with poker tables in Bakersfield"
              width={600}
              height={600}
              loading="lazy"
              sizes="(max-width: 968px) 100vw, 50vw"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <span className="service-image-overlay">High Impact</span>
          </div>
          <div className="service-content">
            <span className="service-icon">🎗️</span>
            <h2>Fundraisers</h2>
            <p>
              A casino night fundraiser is an exciting and highly profitable way to raise money 
              for your cause or organization. Participants enjoy competitive poker while knowing 
              their buy-ins support a meaningful mission.
            </p>
            <p>
              These events attract diverse crowds and are far more engaging than traditional 
              fundraising methods. The blend of skill and luck adds excitement that encourages 
              higher participation and potentially greater donations.
            </p>
            <div className="service-features">
              <span className="feature-tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                Charity Events
              </span>
              <span className="feature-tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                School Fundraisers
              </span>
              <span className="feature-tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                Nonprofit Events
              </span>
              <span className="feature-tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                Tournament Style
              </span>
            </div>
          </div>
        </article>

        {/* Private Parties */}
        <article className="service-card">
          <div className="service-image-wrapper">
            <OptimizedImage
              src="images/webj.jpg"
              alt="Private blackjack party rental in Bakersfield"
              width={600}
              height={600}
              loading="lazy"
              sizes="(max-width: 968px) 100vw, 50vw"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <span className="service-image-overlay">Fan Favorite</span>
          </div>
          <div className="service-content">
            <span className="service-icon">🎊</span>
            <h2>Private Parties</h2>
            <p>
              Make any celebration extraordinary with a casino-themed party. From intimate 
              gatherings to large celebrations, our professional equipment and dealers create 
              an authentic Vegas atmosphere your guests will never forget.
            </p>
            <div className="event-types-grid">
              {eventTypes.map((event, index) => (
                <div key={index} className="event-type-item">
                  <span className="event-type-icon">{event.icon}</span>
                  <div>
                    <h4>{event.title}</h4>
                    <p>{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>

      </div>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="services-cta-content">
          <h2>Ready to Plan Your Event?</h2>
          <p>
            Let us bring the excitement of Las Vegas to your next gathering. 
            Get a free, no-obligation quote today!
          </p>
          <div className="cta-buttons">
            <Link to="/booking" className="cta-btn primary">
              Get Free Quote
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <a href="tel:661-302-0115" className="cta-btn secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              (661) 302-0115
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;