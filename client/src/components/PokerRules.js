// components/PokerRules.js - Professional Redesign
import React from 'react';
import { Link } from 'react-router-dom';
import './GameRules.css';

const PokerRules = () => {
  const handRankings = [
    { rank: 1, name: 'Royal Flush', desc: 'A, K, Q, J, 10 all of the same suit', example: 'A♠ K♠ Q♠ J♠ 10♠' },
    { rank: 2, name: 'Straight Flush', desc: 'Five consecutive cards of the same suit', example: '9♥ 8♥ 7♥ 6♥ 5♥' },
    { rank: 3, name: 'Four of a Kind', desc: 'Four cards of the same rank', example: 'K♠ K♥ K♦ K♣ 2♠' },
    { rank: 4, name: 'Full House', desc: 'Three of a kind plus a pair', example: 'Q♠ Q♥ Q♦ 8♣ 8♠' },
    { rank: 5, name: 'Flush', desc: 'Five cards of the same suit (not consecutive)', example: 'A♦ J♦ 8♦ 6♦ 2♦' },
    { rank: 6, name: 'Straight', desc: 'Five consecutive cards of mixed suits', example: '10♠ 9♥ 8♦ 7♣ 6♠' },
    { rank: 7, name: 'Three of a Kind', desc: 'Three cards of the same rank', example: '7♠ 7♥ 7♦ K♣ 2♠' },
    { rank: 8, name: 'Two Pair', desc: 'Two different pairs', example: 'J♠ J♥ 5♦ 5♣ A♠' },
    { rank: 9, name: 'One Pair', desc: 'Two cards of the same rank', example: '10♠ 10♥ A♦ 8♣ 4♠' },
    { rank: 10, name: 'High Card', desc: 'No matching cards - highest card wins', example: 'A♠ J♥ 8♦ 6♣ 2♠' }
  ];

  const bettingActions = [
    { action: 'Check', icon: '✓', desc: 'Pass the action without betting (only if no bet has been made)' },
    { action: 'Bet', icon: '💰', desc: 'Place the first wager in a betting round' },
    { action: 'Call', icon: '📞', desc: 'Match the current bet to stay in the hand' },
    { action: 'Raise', icon: '⬆️', desc: 'Increase the current bet amount' },
    { action: 'Fold', icon: '🏳️', desc: 'Surrender your cards and forfeit any bets made' },
    { action: 'All-In', icon: '🎯', desc: 'Bet all your remaining chips' }
  ];

  return (
    <div className="rules-page">
      {/* Hero Section */}
      <section className="rules-hero">
        <div className="rules-hero-content">
          <span className="rules-hero-icon">🃏</span>
          <span className="rules-hero-badge">Game Rules</span>
          <h1>Poker Rules</h1>
          <p>
            Master the world's most popular card game. Learn hand rankings, betting 
            strategies, and everything you need to play like a pro.
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
            <a href="#hand-rankings">Hand Rankings</a>
            <a href="#betting">Betting Actions</a>
            <a href="#texas-holdem">Texas Hold'em</a>
            <a href="#etiquette">Etiquette</a>
          </div>
        </nav>

        {/* Objective */}
        <section id="objective" className="rules-section">
          <h2><span className="section-icon">🎯</span> Object of the Game</h2>
          <p>
            Poker is a game of skill, strategy, and psychology. The goal is to win chips 
            by either having the best hand at showdown or by making all other players fold 
            their cards through strategic betting.
          </p>
          <div className="rules-highlight">
            <p>
              <strong>Key Insight:</strong> You don't need the best hand to win! Successful 
              poker players know when to bluff and when to fold, making it a fascinating 
              game of incomplete information.
            </p>
          </div>
        </section>

        {/* The Pack */}
        <section className="rules-section">
          <h2><span className="section-icon">🎴</span> The Deck</h2>
          <p>
            Poker uses a standard 52-card deck. In professional settings, two decks with 
            different colored backs are used—while one is being dealt, the other is being 
            shuffled for the next hand to speed up play.
          </p>
          <p>
            In casino and tournament settings, cards are changed frequently to prevent 
            marking or damage, and any player can request new decks.
          </p>
        </section>

        {/* Hand Rankings */}
        <section id="hand-rankings" className="rules-section">
          <h2><span className="section-icon">🏆</span> Hand Rankings (Best to Worst)</h2>
          <p>
            Memorizing hand rankings is essential. From best to worst:
          </p>
          
          <ul className="rules-list">
            {handRankings.map((hand) => (
              <li key={hand.rank}>
                <span className="list-number">{hand.rank}</span>
                <div className="list-content">
                  <strong>{hand.name}</strong>
                  <span>{hand.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Betting Actions */}
        <section id="betting" className="rules-section">
          <h2><span className="section-icon">💵</span> Betting Actions</h2>
          <p>Understanding your options during a betting round:</p>
          
          <div className="rules-definitions">
            {bettingActions.map((item, idx) => (
              <div className="rules-definition-item" key={idx}>
                <dt>{item.icon} {item.action}</dt>
                <dd>{item.desc}</dd>
              </div>
            ))}
          </div>

          <div className="rules-highlight">
            <p>
              <strong>Betting Structure:</strong> Most games use "No Limit" (bet any amount), 
              "Pot Limit" (bet up to pot size), or "Fixed Limit" (predetermined bet amounts).
            </p>
          </div>
        </section>

        {/* Texas Hold'em */}
        <section id="texas-holdem" className="rules-section">
          <h2><span className="section-icon">⭐</span> Texas Hold'em</h2>
          <p>
            The most popular poker variant worldwide. Each player gets two private cards 
            ("hole cards") and shares five community cards to make the best five-card hand.
          </p>
          
          <h3>The Four Betting Rounds</h3>
          <ul className="rules-list">
            <li>
              <span className="list-number">1</span>
              <div className="list-content">
                <strong>Pre-Flop</strong>
                <span>Two cards dealt to each player. First betting round.</span>
              </div>
            </li>
            <li>
              <span className="list-number">2</span>
              <div className="list-content">
                <strong>The Flop</strong>
                <span>Three community cards revealed. Second betting round.</span>
              </div>
            </li>
            <li>
              <span className="list-number">3</span>
              <div className="list-content">
                <strong>The Turn</strong>
                <span>Fourth community card revealed. Third betting round.</span>
              </div>
            </li>
            <li>
              <span className="list-number">4</span>
              <div className="list-content">
                <strong>The River</strong>
                <span>Fifth and final community card. Final betting round, then showdown.</span>
              </div>
            </li>
          </ul>
        </section>

        {/* Blinds & Position */}
        <section className="rules-section">
          <h2><span className="section-icon">🪑</span> Blinds & Position</h2>
          <p>
            Texas Hold'em uses a rotating dealer button and forced bets called "blinds" 
            to create action:
          </p>
          
          <div className="rules-definitions">
            <div className="rules-definition-item">
              <dt>Small Blind</dt>
              <dd>Player to the left of the dealer posts a forced bet (typically half the minimum bet).</dd>
            </div>
            <div className="rules-definition-item">
              <dt>Big Blind</dt>
              <dd>Player two seats left of dealer posts a forced bet (the minimum bet amount).</dd>
            </div>
            <div className="rules-definition-item">
              <dt>The Button</dt>
              <dd>The dealer position—the best position as you act last after the flop.</dd>
            </div>
          </div>

          <div className="rules-highlight">
            <p>
              <strong>Position Matters:</strong> Acting later in a betting round is advantageous 
              because you have more information about other players' actions.
            </p>
          </div>
        </section>

        {/* Etiquette */}
        <section id="etiquette" className="rules-section">
          <h2><span className="section-icon">🤝</span> Poker Etiquette</h2>
          <p>Follow these guidelines to be a respected player at any table:</p>
          
          <ul className="rules-list">
            <li>
              <span className="list-number">•</span>
              <div className="list-content">
                <strong>Act in Turn</strong>
                <span>Wait for your turn before checking, betting, or folding.</span>
              </div>
            </li>
            <li>
              <span className="list-number">•</span>
              <div className="list-content">
                <strong>Protect Your Cards</strong>
                <span>Keep your hole cards visible and place a chip on them.</span>
              </div>
            </li>
            <li>
              <span className="list-number">•</span>
              <div className="list-content">
                <strong>Don't Slow Roll</strong>
                <span>If you have the winning hand, reveal it promptly.</span>
              </div>
            </li>
            <li>
              <span className="list-number">•</span>
              <div className="list-content">
                <strong>Be Gracious</strong>
                <span>Win or lose with class. Don't criticize other players' decisions.</span>
              </div>
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="rules-cta">
          <h2>Ready to Host a Poker Night?</h2>
          <p>Book professional poker tables and dealers for your next event in Bakersfield!</p>
          <div className="cta-buttons">
            <Link to="/booking" className="cta-btn primary">
              Book Poker Tables
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

export default PokerRules;