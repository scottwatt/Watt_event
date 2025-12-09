// components/Cards.js - Improved Version
import React from 'react';
import { Link } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';
import './Cards.css';

function Cards() {
  const games = [
    {
      id: 'blackjack',
      name: 'Blackjack',
      title: 'Blackjack Table Rental',
      description: 'The classic casino game! Our professional blackjack tables seat up to 7 players with trained dealers.',
      image: 'images/blackjack.jpg',
      path: '/blackjack',
      features: ['7 Player Capacity', 'Professional Dealers', 'Casino-Grade Equipment']
    },
    {
      id: 'poker',
      name: 'Poker',
      title: 'Poker Table Rental',
      description: 'Texas Hold\'em, Omaha, and more! Full tournament setups available with professional dealers.',
      image: 'images/poker.jpg',
      path: '/poker',
      features: ['10 Player Tables', 'Tournament Setups', 'Pro Chip Sets']
    },
    {
      id: 'roulette',
      name: 'Roulette',
      title: 'Roulette Wheel Rental',
      description: 'Experience the thrill of the spinning wheel! American and European roulette available.',
      image: '/images/rouletteChips.jpg',
      path: '/roulette',
      features: ['Full-Size Wheel', 'Betting Layout', 'Trained Croupiers']
    },
    {
      id: 'craps',
      name: 'Craps',
      title: 'Craps Table Rental',
      description: 'The most exciting game on the floor! Full-size craps tables with experienced dealers.',
      image: 'images/craps.jpg',
      path: '/craps',
      features: ['12-Foot Tables', 'Complete Betting Layout', 'Expert Dealers']
    }
  ];

  return (
    <section className='cards-section' aria-label="Casino Games">
      <div className='cards-container'>
        <div className='cards-header'>
          <span className='cards-badge'>Our Casino Games</span>
          <h2>Professional Casino Equipment Rental in Bakersfield</h2>
          <p className='cards-subtitle'>
            Bring the Vegas experience to your event with our premium casino tables and trained dealers
          </p>
        </div>
        
        <div className='cards-grid'>
          {games.map((game, index) => (
            <article key={game.id} className='card-item' style={{ animationDelay: `${index * 0.1}s` }}>
              <Link to={game.path} className='card-link'>
                <div className='card-image-wrapper'>
                  <OptimizedImage
                    src={game.image}
                    alt={`${game.title} Bakersfield - Watt Events`}
                    width={400}
                    height={267}
                    className='card-image'
                    sizes="(max-width: 768px) 100vw, (max-width: 960px) 50vw, 25vw"
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                  <div className='card-overlay'>
                    <span className='card-label'>{game.name}</span>
                  </div>
                </div>
                <div className='card-content'>
                  <h3>{game.title}</h3>
                  <p>{game.description}</p>
                  <ul className='card-features'>
                    {game.features.map((feature, idx) => (
                      <li key={idx}>✓ {feature}</li>
                    ))}
                  </ul>
                  <span className='card-cta'>
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className='cards-cta'>
          <p>Need help choosing the right games for your event?</p>
          <div className='cards-cta-buttons'>
            <Link to="/booking" className='btn btn-primary'>
              Get Free Quote
            </Link>
            <a href="tel:661-302-0115" className='btn btn-secondary'>
              Call (661) 302-0115
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;