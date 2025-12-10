// components/CrapsRules.js - Professional Redesign
import React from 'react';
import { Link } from 'react-router-dom';
import './GameRules.css';

const CrapsRules = () => {
  const basicBets = [
    { name: 'Pass Line', payout: '1 to 1', desc: 'Win on 7/11, lose on 2/3/12 on come-out roll' },
    { name: "Don't Pass", payout: '1 to 1', desc: 'Opposite of Pass Line (ties on 12)' },
    { name: 'Come', payout: '1 to 1', desc: 'Like Pass Line, but made after point is set' },
    { name: "Don't Come", payout: '1 to 1', desc: "Like Don't Pass, but after point is set" }
  ];

  const oddsBets = [
    { name: 'Odds on 4 or 10', payout: '2 to 1' },
    { name: 'Odds on 5 or 9', payout: '3 to 2' },
    { name: 'Odds on 6 or 8', payout: '6 to 5' }
  ];

  const placeBets = [
    { name: 'Place 4 or 10', payout: '9 to 5' },
    { name: 'Place 5 or 9', payout: '7 to 5' },
    { name: 'Place 6 or 8', payout: '7 to 6' }
  ];

  const propBets = [
    { name: 'Any 7', payout: '4 to 1' },
    { name: 'Any Craps (2, 3, 12)', payout: '7 to 1' },
    { name: 'Snake Eyes (2)', payout: '30 to 1' },
    { name: 'Boxcars (12)', payout: '30 to 1' },
    { name: 'Ace-Deuce (3)', payout: '15 to 1' },
    { name: 'Yo-Eleven (11)', payout: '15 to 1' },
    { name: 'Hard 4 or Hard 10', payout: '7 to 1' },
    { name: 'Hard 6 or Hard 8', payout: '9 to 1' }
  ];

  return (
    <div className="rules-page">
      {/* Hero Section */}
      <section className="rules-hero">
        <div className="rules-hero-content">
          <span className="rules-hero-icon">🎲</span>
          <span className="rules-hero-badge">Game Rules</span>
          <h1>Craps Rules</h1>
          <p>
            The most exciting game on the casino floor! Craps combines fast-paced action, 
            social gameplay, and multiple betting options for endless entertainment.
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
            <a href="#pass-line">Pass Line</a>
            <a href="#betting">All Bets</a>
            <a href="#etiquette">Etiquette</a>
          </div>
        </nav>

        {/* The Basics */}
        <section id="basics" className="rules-section">
          <h2><span className="section-icon">🎯</span> Craps Basics</h2>
          <p>
            In craps, one player (the "shooter") rolls two dice while others bet on the outcome. 
            The game revolves around the shooter's first roll (the "come-out roll") and establishing 
            a "point" number.
          </p>
          
          <div className="rules-highlight">
            <p>
              <strong>Why It's Exciting:</strong> Craps is the only casino game where players 
              cheer together. When the shooter wins, most of the table wins with them!
            </p>
          </div>

          <h3>The Come-Out Roll</h3>
          <ul className="rules-list">
            <li>
              <span className="list-number">7</span>
              <div className="list-content">
                <strong>Seven or Eleven</strong>
                <span>Natural winner! Pass Line bets win immediately.</span>
              </div>
            </li>
            <li>
              <span className="list-number">2</span>
              <div className="list-content">
                <strong>Two, Three, or Twelve</strong>
                <span>"Craps!" Pass Line bets lose (Don't Pass wins).</span>
              </div>
            </li>
            <li>
              <span className="list-number">4</span>
              <div className="list-content">
                <strong>Four, Five, Six, Eight, Nine, Ten</strong>
                <span>Establishes the "point." Shooter must roll this number again before rolling 7.</span>
              </div>
            </li>
          </ul>
        </section>

        {/* Pass Line */}
        <section id="pass-line" className="rules-section">
          <h2><span className="section-icon">✅</span> The Pass Line Bet</h2>
          <p>
            The Pass Line is the most fundamental craps bet and the best place for beginners to start:
          </p>
          
          <div className="rules-definitions">
            <div className="rules-definition-item">
              <dt>🎯 On the Come-Out Roll</dt>
              <dd>
                <strong>WIN</strong> if shooter rolls 7 or 11<br/>
                <strong>LOSE</strong> if shooter rolls 2, 3, or 12 (craps)<br/>
                Any other number becomes the "point"
              </dd>
            </div>
            <div className="rules-definition-item">
              <dt>🎲 After Point is Set</dt>
              <dd>
                <strong>WIN</strong> if shooter rolls the point number again<br/>
                <strong>LOSE</strong> if shooter rolls 7 ("seven out")<br/>
                Other numbers have no effect on Pass Line
              </dd>
            </div>
          </div>

          <div className="rules-highlight">
            <p>
              <strong>Pro Tip:</strong> The Pass Line has only a 1.41% house edge, making it 
              one of the best bets in the entire casino!
            </p>
          </div>
        </section>

        {/* Betting Options */}
        <section id="betting" className="rules-section">
          <h2><span className="section-icon">💰</span> Betting Options & Payouts</h2>
          
          {/* Basic Bets */}
          <div className="betting-category">
            <h3><span className="category-icon">⭐</span> Basic Bets (Best Odds)</h3>
            <div className="bet-grid">
              {basicBets.map((bet, idx) => (
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

          {/* Odds Bets */}
          <div className="betting-category">
            <h3><span className="category-icon">💎</span> Odds Bets (Zero House Edge!)</h3>
            <p style={{marginBottom: '1rem', color: '#666', fontSize: '0.9rem'}}>
              After a point is established, you can "take odds" behind your Pass Line bet:
            </p>
            <div className="bet-grid">
              {oddsBets.map((bet, idx) => (
                <div className="bet-item" key={idx}>
                  <span className="bet-name">{bet.name}</span>
                  <span className="bet-payout">{bet.payout}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Place Bets */}
          <div className="betting-category">
            <h3><span className="category-icon">📍</span> Place Bets</h3>
            <div className="bet-grid">
              {placeBets.map((bet, idx) => (
                <div className="bet-item" key={idx}>
                  <span className="bet-name">{bet.name}</span>
                  <span className="bet-payout">{bet.payout}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Proposition Bets */}
          <div className="betting-category">
            <h3><span className="category-icon">🎰</span> Proposition Bets (High Risk/Reward)</h3>
            <div className="bet-grid">
              {propBets.map((bet, idx) => (
                <div className="bet-item" key={idx}>
                  <span className="bet-name">{bet.name}</span>
                  <span className="bet-payout">{bet.payout}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Terms */}
        <section className="rules-section">
          <h2><span className="section-icon">📚</span> Key Craps Terms</h2>
          
          <div className="rules-definitions">
            <div className="rules-definition-item">
              <dt>Shooter</dt>
              <dd>The player currently rolling the dice.</dd>
            </div>
            <div className="rules-definition-item">
              <dt>Come-Out Roll</dt>
              <dd>The first roll of a new round before a point is established.</dd>
            </div>
            <div className="rules-definition-item">
              <dt>Point</dt>
              <dd>The number (4, 5, 6, 8, 9, or 10) that the shooter must roll again to win.</dd>
            </div>
            <div className="rules-definition-item">
              <dt>Seven Out</dt>
              <dd>When the shooter rolls a 7 after the point is set—round ends, dice pass to next shooter.</dd>
            </div>
            <div className="rules-definition-item">
              <dt>Hardway</dt>
              <dd>Rolling a number with doubles (e.g., Hard 8 = two 4s).</dd>
            </div>
          </div>
        </section>

        {/* Etiquette */}
        <section id="etiquette" className="rules-section">
          <h2><span className="section-icon">🤝</span> Craps Etiquette</h2>
          <p>Follow these guidelines to be welcomed at any craps table:</p>
          
          <ul className="rules-list">
            <li>
              <span className="list-number">🎲</span>
              <div className="list-content">
                <strong>Handle Dice Properly</strong>
                <span>Use one hand only. Keep dice visible above the table at all times.</span>
              </div>
            </li>
            <li>
              <span className="list-number">🚫</span>
              <div className="list-content">
                <strong>Never Say "Seven"</strong>
                <span>Superstition! Say "Big Red" instead when the point is established.</span>
              </div>
            </li>
            <li>
              <span className="list-number">💵</span>
              <div className="list-content">
                <strong>Toss to the Back Wall</strong>
                <span>Dice must hit the back wall of the table on every roll.</span>
              </div>
            </li>
            <li>
              <span className="list-number">✋</span>
              <div className="list-content">
                <strong>Hands Up When Dice Are Rolling</strong>
                <span>Keep hands above the table to avoid interfering with the dice.</span>
              </div>
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="rules-cta">
          <h2>Bring the Craps Excitement!</h2>
          <p>Our professional craps tables create the most exciting atmosphere at any event!</p>
          <div className="cta-buttons">
            <Link to="/booking" className="cta-btn primary">
              Book Craps Table
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

export default CrapsRules;