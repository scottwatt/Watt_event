// components/RouletteRules.js - Professional Redesign
import React from 'react';
import { Link } from 'react-router-dom';
import './GameRules.css';

const RouletteRules = () => {
  const insideBets = [
    { name: 'Straight Up', desc: 'Bet on a single number', payout: '35 to 1' },
    { name: 'Split', desc: 'Bet on two adjacent numbers', payout: '17 to 1' },
    { name: 'Street', desc: 'Bet on a row of three numbers', payout: '11 to 1' },
    { name: 'Corner', desc: 'Bet on four numbers in a square', payout: '8 to 1' },
    { name: 'Five Number', desc: 'Bet on 0, 00, 1, 2, 3 (American only)', payout: '6 to 1' },
    { name: 'Line', desc: 'Bet on two adjacent rows (6 numbers)', payout: '5 to 1' }
  ];

  const outsideBets = [
    { name: 'Red or Black', desc: 'Bet on the color of the winning number', payout: '1 to 1' },
    { name: 'Odd or Even', desc: 'Bet on odd or even numbers', payout: '1 to 1' },
    { name: 'Low (1-18)', desc: 'Bet on numbers 1 through 18', payout: '1 to 1' },
    { name: 'High (19-36)', desc: 'Bet on numbers 19 through 36', payout: '1 to 1' },
    { name: 'Dozens', desc: 'Bet on first, second, or third dozen', payout: '2 to 1' },
    { name: 'Columns', desc: 'Bet on a column of 12 numbers', payout: '2 to 1' }
  ];

  return (
    <div className="rules-page">
      {/* Hero Section */}
      <section className="rules-hero">
        <div className="rules-hero-content">
          <span className="rules-hero-icon">🎰</span>
          <span className="rules-hero-badge">Game Rules</span>
          <h1>Roulette Rules</h1>
          <p>
            Experience the thrill of the spinning wheel! Roulette is an elegant casino 
            classic that combines luck with multiple betting options for all players.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="rules-container">
        
        {/* Quick Navigation */}
        <nav className="rules-nav">
          <h3>📖 Quick Navigation</h3>
          <div className="rules-nav-links">
            <a href="#basics">The Basics</a>
            <a href="#wheel">The Wheel</a>
            <a href="#inside-bets">Inside Bets</a>
            <a href="#outside-bets">Outside Bets</a>
            <a href="#tips">Tips</a>
          </div>
        </nav>

        {/* The Basics */}
        <section id="basics" className="rules-section">
          <h2><span className="section-icon">🎯</span> How Roulette Works</h2>
          <p>
            Roulette is beautifully simple: a ball spins around a wheel, and players bet 
            on where it will land. You can bet on specific numbers, groups of numbers, 
            colors, or odd/even.
          </p>
          <div className="rules-highlight">
            <p>
              <strong>Did You Know?</strong> Roulette means "little wheel" in French. The game 
              originated in 18th century France and quickly became a casino staple worldwide.
            </p>
          </div>
          
          <h3>Playing the Game</h3>
          <ul className="rules-list">
            <li>
              <span className="list-number">1</span>
              <div className="list-content">
                <strong>Buy Chips</strong>
                <span>Exchange cash for special roulette chips. Each player gets a unique color.</span>
              </div>
            </li>
            <li>
              <span className="list-number">2</span>
              <div className="list-content">
                <strong>Place Bets</strong>
                <span>Put chips on the betting layout before the dealer closes betting.</span>
              </div>
            </li>
            <li>
              <span className="list-number">3</span>
              <div className="list-content">
                <strong>The Spin</strong>
                <span>Dealer spins the wheel and releases the ball in the opposite direction.</span>
              </div>
            </li>
            <li>
              <span className="list-number">4</span>
              <div className="list-content">
                <strong>Winners Paid</strong>
                <span>Winning bets are paid, losing bets collected, and a new round begins.</span>
              </div>
            </li>
          </ul>
        </section>

        {/* The Wheel */}
        <section id="wheel" className="rules-section">
          <h2><span className="section-icon">🎡</span> The Roulette Wheel</h2>
          <p>
            Understanding the wheel layout helps you make informed betting decisions:
          </p>
          
          <div className="rules-definitions">
            <div className="rules-definition-item">
              <dt>🇺🇸 American Roulette</dt>
              <dd>
                Features 38 pockets: numbers 1-36 plus 0 and 00. The extra 00 gives the house 
                a 5.26% edge. Most common in US casinos.
              </dd>
            </div>
            <div className="rules-definition-item">
              <dt>🇪🇺 European Roulette</dt>
              <dd>
                Features 37 pockets: numbers 1-36 plus single 0. Lower house edge of 2.7%, 
                making it more favorable for players.
              </dd>
            </div>
          </div>

          <h3>Number Colors</h3>
          <p>
            Numbers 1-36 alternate between red and black (though not in numerical order). 
            The 0 and 00 are green, representing the house advantage.
          </p>
        </section>

        {/* Inside Bets */}
        <section id="inside-bets" className="rules-section">
          <h2><span className="section-icon">🎯</span> Inside Bets</h2>
          <p>
            Inside bets are placed on specific numbers or small groups of numbers. 
            Higher risk, higher reward!
          </p>
          
          <div className="betting-category">
            <h3><span className="category-icon">💎</span> Inside Bets & Payouts</h3>
            <div className="bet-grid">
              {insideBets.map((bet, idx) => (
                <div className="bet-item" key={idx}>
                  <div>
                    <span className="bet-name">{bet.name}</span>
                    <span className="bet-note">{bet.desc}</span>
                  </div>
                  <span className="bet-payout">{bet.payout}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outside Bets */}
        <section id="outside-bets" className="rules-section">
          <h2><span className="section-icon">🎲</span> Outside Bets</h2>
          <p>
            Outside bets cover larger groups of numbers with lower payouts but 
            better odds of winning. Great for beginners!
          </p>
          
          <div className="betting-category">
            <h3><span className="category-icon">🌟</span> Outside Bets & Payouts</h3>
            <div className="bet-grid">
              {outsideBets.map((bet, idx) => (
                <div className="bet-item" key={idx}>
                  <div>
                    <span className="bet-name">{bet.name}</span>
                    <span className="bet-note">{bet.desc}</span>
                  </div>
                  <span className="bet-payout">{bet.payout}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rules-highlight">
            <p>
              <strong>Note:</strong> Outside bets lose when the ball lands on 0 or 00, 
              which is how the casino maintains its edge.
            </p>
          </div>
        </section>

        {/* Betting Tips */}
        <section id="tips" className="rules-section">
          <h2><span className="section-icon">💡</span> Roulette Tips</h2>
          
          <ul className="rules-list">
            <li>
              <span className="list-number">•</span>
              <div className="list-content">
                <strong>European Over American</strong>
                <span>If available, European roulette has better odds (2.7% vs 5.26% house edge).</span>
              </div>
            </li>
            <li>
              <span className="list-number">•</span>
              <div className="list-content">
                <strong>Outside Bets for Longevity</strong>
                <span>Even-money bets (red/black, odd/even) help your bankroll last longer.</span>
              </div>
            </li>
            <li>
              <span className="list-number">•</span>
              <div className="list-content">
                <strong>Set a Budget</strong>
                <span>Decide how much you're willing to risk before you start playing.</span>
              </div>
            </li>
            <li>
              <span className="list-number">•</span>
              <div className="list-content">
                <strong>Avoid the Five Number Bet</strong>
                <span>On American wheels, this bet has the worst odds (7.89% house edge).</span>
              </div>
            </li>
          </ul>
        </section>

        {/* Table Etiquette */}
        <section className="rules-section">
          <h2><span className="section-icon">🤝</span> Table Etiquette</h2>
          
          <div className="rules-definitions">
            <div className="rules-definition-item">
              <dt>Use Your Color</dt>
              <dd>Only use your assigned chip color. This prevents confusion at crowded tables.</dd>
            </div>
            <div className="rules-definition-item">
              <dt>Wait for the Clear</dt>
              <dd>Don't place new bets until the dealer removes the marker from the previous winning number.</dd>
            </div>
            <div className="rules-definition-item">
              <dt>Cash Out Properly</dt>
              <dd>Exchange your colored chips for regular casino chips when leaving the table.</dd>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="rules-cta">
          <h2>Spin the Wheel at Your Event!</h2>
          <p>Our professional roulette wheels bring Vegas excitement to Bakersfield parties!</p>
          <div className="cta-buttons">
            <Link to="/booking" className="cta-btn primary">
              Book Roulette Wheel
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

export default RouletteRules;