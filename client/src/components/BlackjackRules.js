// components/BlackjackRules.js - Professional Redesign
import React from 'react';
import { Link } from 'react-router-dom';
import './GameRules.css';

const BlackjackRules = () => {
  const handRankings = [
    { name: 'Blackjack (Natural)', desc: 'An Ace and any 10-value card dealt as your first two cards', payout: '3 to 2' },
    { name: '21', desc: 'Any combination of cards totaling exactly 21', payout: '1 to 1' },
    { name: 'Winning Hand', desc: 'Any hand closer to 21 than the dealer without busting', payout: '1 to 1' },
    { name: 'Push (Tie)', desc: 'Same total as dealer - bet is returned', payout: 'No win/loss' },
    { name: 'Bust', desc: 'Hand total exceeds 21 - automatic loss', payout: 'Lose bet' }
  ];

  const basicStrategy = [
    { situation: "Dealer shows 7-Ace", action: "Hit until you reach 17 or higher" },
    { situation: "Dealer shows 4, 5, or 6", action: "Stand on 12 or higher (let dealer bust)" },
    { situation: "Dealer shows 2 or 3", action: "Stand on 13 or higher" },
    { situation: "You have 11", action: "Always double down" },
    { situation: "You have 10", action: "Double down unless dealer shows 10 or Ace" },
    { situation: "You have soft 17", action: "Hit (Ace + 6)" }
  ];

  return (
    <div className="rules-page">
      {/* Hero Section */}
      <section className="rules-hero">
        <div className="rules-hero-content">
          <span className="rules-hero-icon">🎴</span>
          <span className="rules-hero-badge">Game Rules</span>
          <h1>Blackjack Rules</h1>
          <p>
            Also known as Twenty-One, Blackjack is one of the most popular casino games 
            with simple rules, exciting play, and opportunities for skilled players.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="rules-container">
        
        {/* Quick Navigation */}
        <nav className="rules-nav">
          <h3>📖 Quick Navigation</h3>
          <div className="rules-nav-links">
            <a href="#objective">Objective</a>
            <a href="#card-values">Card Values</a>
            <a href="#gameplay">Gameplay</a>
            <a href="#actions">Player Actions</a>
            <a href="#strategy">Basic Strategy</a>
          </div>
        </nav>

        {/* Objective */}
        <section id="objective" className="rules-section">
          <h2><span className="section-icon">🎯</span> Object of the Game</h2>
          <p>
            The goal of Blackjack is simple: beat the dealer's hand without going over 21. 
            Each player competes only against the dealer, not against other players at the table.
          </p>
          <div className="rules-highlight">
            <p>
              <strong>Key Point:</strong> If your hand exceeds 21, you "bust" and lose immediately, 
              regardless of what the dealer has. This is why knowing when to hit or stand is crucial!
            </p>
          </div>
        </section>

        {/* Card Values */}
        <section id="card-values" className="rules-section">
          <h2><span className="section-icon">🃏</span> Card Values & Scoring</h2>
          <p>Understanding card values is fundamental to playing Blackjack:</p>
          
          <ul className="rules-list">
            <li>
              <span className="list-number">2-10</span>
              <div className="list-content">
                <strong>Number Cards</strong>
                <span>Worth their face value (a 7 is worth 7 points)</span>
              </div>
            </li>
            <li>
              <span className="list-number">J Q K</span>
              <div className="list-content">
                <strong>Face Cards</strong>
                <span>Jacks, Queens, and Kings are all worth 10 points</span>
              </div>
            </li>
            <li>
              <span className="list-number">A</span>
              <div className="list-content">
                <strong>Aces</strong>
                <span>Worth either 1 or 11 points (player's choice based on hand)</span>
              </div>
            </li>
          </ul>

          <div className="rules-highlight">
            <p>
              <strong>Soft vs Hard Hands:</strong> A "soft" hand contains an Ace counted as 11 
              (e.g., Ace + 6 = soft 17). A "hard" hand has no Ace, or an Ace that must be counted as 1.
            </p>
          </div>
        </section>

        {/* Hand Rankings */}
        <section className="rules-section">
          <h2><span className="section-icon">🏆</span> Hand Rankings & Payouts</h2>
          <div className="rules-table-wrapper">
            <table className="rules-table">
              <thead>
                <tr>
                  <th>Hand</th>
                  <th>Description</th>
                  <th>Payout</th>
                </tr>
              </thead>
              <tbody>
                {handRankings.map((hand, idx) => (
                  <tr key={idx}>
                    <td><strong>{hand.name}</strong></td>
                    <td>{hand.desc}</td>
                    <td><span className="payout">{hand.payout}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Gameplay */}
        <section id="gameplay" className="rules-section">
          <h2><span className="section-icon">🎲</span> How to Play</h2>
          
          <h3>The Deal</h3>
          <p>
            Each player places their bet before any cards are dealt. The dealer then gives 
            each player two cards face up, and takes two cards for themselves—one face up 
            (the "upcard") and one face down (the "hole card").
          </p>

          <h3>Naturals (Blackjack)</h3>
          <p>
            If your first two cards are an Ace and a 10-value card, you have a "natural" 
            or "Blackjack." If the dealer doesn't also have Blackjack, you win immediately 
            and are paid 3 to 2 on your bet.
          </p>

          <h3>The Dealer's Play</h3>
          <p>
            After all players have completed their hands, the dealer reveals their hole card. 
            The dealer must hit on 16 or less and stand on 17 or more. If the dealer busts, 
            all remaining players win.
          </p>
        </section>

        {/* Player Actions */}
        <section id="actions" className="rules-section">
          <h2><span className="section-icon">✋</span> Player Actions</h2>
          
          <div className="rules-definitions">
            <div className="rules-definition-item">
              <dt>🟢 Hit</dt>
              <dd>Request another card from the dealer. You can hit as many times as you want until you stand or bust.</dd>
            </div>
            <div className="rules-definition-item">
              <dt>🔴 Stand</dt>
              <dd>Keep your current hand and end your turn. Signal by waving your hand horizontally over your cards.</dd>
            </div>
            <div className="rules-definition-item">
              <dt>⬆️ Double Down</dt>
              <dd>Double your original bet and receive exactly one more card. Best used when you have 9, 10, or 11.</dd>
            </div>
            <div className="rules-definition-item">
              <dt>✂️ Split</dt>
              <dd>If you have two cards of the same value, split them into two separate hands with equal bets.</dd>
            </div>
            <div className="rules-definition-item">
              <dt>🛡️ Insurance</dt>
              <dd>When the dealer shows an Ace, you can bet up to half your original wager that the dealer has Blackjack. Pays 2 to 1.</dd>
            </div>
            <div className="rules-definition-item">
              <dt>🏳️ Surrender</dt>
              <dd>Give up half your bet and forfeit your hand. Only available in some games as your first action.</dd>
            </div>
          </div>
        </section>

        {/* Basic Strategy */}
        <section id="strategy" className="rules-section">
          <h2><span className="section-icon">🧠</span> Basic Strategy</h2>
          <p>
            While luck plays a role, using basic strategy significantly improves your odds. 
            Here are key guidelines based on the dealer's upcard:
          </p>
          
          <div className="rules-table-wrapper">
            <table className="rules-table">
              <thead>
                <tr>
                  <th>Situation</th>
                  <th>Recommended Action</th>
                </tr>
              </thead>
              <tbody>
                {basicStrategy.map((tip, idx) => (
                  <tr key={idx}>
                    <td><strong>{tip.situation}</strong></td>
                    <td>{tip.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rules-highlight">
            <p>
              <strong>Pro Tip:</strong> The dealer's 4, 5, and 6 are "bust cards." When the dealer 
              shows these, play conservatively and let them take the risk of busting.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="rules-cta">
          <h2>Ready to Play Blackjack?</h2>
          <p>Book a blackjack table for your next event and let our professional dealers guide your guests!</p>
          <div className="cta-buttons">
            <Link to="/booking" className="cta-btn primary">
              Book Blackjack Table
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

export default BlackjackRules;