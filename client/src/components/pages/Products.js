// components/pages/Products.js - Professional Redesign
import React from 'react';
import { Link } from 'react-router-dom';
import OptimizedImage from '../OptimizedImage';
import './Products.css';

const Products = () => {
  const products = [
    {
      id: 'poker',
      name: 'Poker Tables',
      description: 'Professional Texas Hold\'em and Omaha poker tables that seat up to 10 players. Complete with premium chips, cards, and dealer button.',
      image: '/images/texashold.jpg',
      route: '/poker',
      badge: 'Most Popular',
      features: ['10 Player Capacity', 'Pro Chip Sets', 'Multiple Game Types'],
      rating: '4.9'
    },
    {
      id: 'blackjack',
      name: 'Blackjack Tables',
      description: 'Authentic casino blackjack tables with professional felt, chip trays, and card shoes. Experience Vegas-style 21 at your event.',
      image: '/images/cards.jpg',
      route: '/blackjack',
      badge: 'Classic',
      features: ['7 Player Seats', 'Casino Grade', 'Professional Dealers'],
      rating: '5.0'
    },
    {
      id: 'roulette',
      name: 'Roulette Wheels',
      description: 'Full-size roulette wheels with professional betting layouts. Available in American and European styles for the complete experience.',
      image: '/images/rouletteChips.jpg',
      route: '/roulette',
      badge: 'Vegas Style',
      features: ['Full-Size Wheel', 'Betting Layout', 'Trained Croupiers'],
      rating: '4.8'
    },
    {
      id: 'craps',
      name: 'Craps Tables',
      description: 'Exciting 12-foot craps tables bring the energy of the casino floor to your event. Complete with dice, chips, and expert dealers.',
      image: 'images/craps.jpg',
      route: '/craps',
      badge: 'High Energy',
      features: ['12-Foot Tables', 'Full Layout', 'Expert Dealers'],
      rating: '4.9'
    }
  ];

  const stats = [
    { number: '100+', label: 'Events Completed' },
    { number: '4', label: 'Game Types' },
    { number: '50+', label: 'Tables Available' },
    { number: '5★', label: 'Average Rating' }
  ];

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="products-hero-content">
          <span className="products-hero-badge">Our Equipment</span>
          <h1>Premium Casino Equipment</h1>
          <p>
            Professional-grade casino tables and equipment for an authentic 
            Vegas experience at your Bakersfield event.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <div className="products-container">
        <div className="products-grid">
          {products.map((product) => (
            <article key={product.id} className="product-card">
              <Link to={product.route} className="product-card-link">
                <div className="product-image-wrapper">
                  <OptimizedImage
                    src={product.image}
                    alt={`${product.name} rental in Bakersfield`}
                    width={600}
                    height={400}
                    loading="lazy"
                    sizes="(max-width: 968px) 100vw, 50vw"
                  />
                  <div className="product-overlay"></div>
                  <span className="product-badge">{product.badge}</span>
                  <span className="product-quick-view">View Details →</span>
                </div>
                <div className="product-content">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="product-features">
                    {product.features.map((feature, idx) => (
                      <span key={idx} className="product-feature">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                          <polyline points="22 4 12 14.01 9 11.01"/>
                        </svg>
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="product-footer">
                    <span className="product-cta">
                      Learn More
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </span>
                    <span className="product-rating">
                      <span className="stars">★★★★★</span>
                      {product.rating}
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <section className="products-featured">
        <div className="products-featured-container">
          <div className="section-header">
            <h2>Bakersfield's Largest Selection</h2>
            <p>Professional casino equipment for events of any size</p>
          </div>
          <div className="featured-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="products-cta">
        <div className="products-cta-container">
          <h2>Need Help Choosing?</h2>
          <p>
            Not sure which games are right for your event? Our team can help you 
            select the perfect combination based on your guest count and venue.
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

export default Products;