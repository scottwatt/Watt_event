import React from 'react';
import './CrapsRules.css';

const CrapsRules = () => {
  // Define betting sections data
  const bettingCategories = [
    {
      title: "Pass Line and Come Bets",
      bets: [
        { name: "Pass Line/Come", payout: "1 to 1" },
        { name: "Don't Pass/Don't Come", payout: "1 to 1" }
      ]
    },
    {
      title: "Odds Bets",
      subtitle: "After Point is Established",
      bets: [
        { name: "Points of 4 or 10", payout: "2 to 1" },
        { name: "Points of 5 or 9", payout: "3 to 2" },
        { name: "Points of 6 or 8", payout: "6 to 5" }
      ]
    },
    {
      title: "Place Bets",
      bets: [
        { name: "4 or 10", payout: "9 to 5" },
        { name: "5 or 9", payout: "7 to 5" },
        { name: "6 or 8", payout: "7 to 6" }
      ]
    },
    {
      title: "Field Bets",
      bets: [
        { name: "3, 4, 9, 10, or 11", payout: "1 to 1" },
        { name: "2 or 12", payout: "2 to 1" }
      ]
    },
    {
      title: "Proposition Bets",
      bets: [
        { name: "Any 7", payout: "4 to 1" },
        { name: "Any Craps (2, 3, or 12)", payout: "7 to 1" },
        { name: "2 or 12 (individually)", payout: "30 to 1" },
        { name: "3 or 11 (individually)", payout: "15 to 1" },
        { name: "Horn Bet (2, 3, 11, and 12)", payout: "Paid as individual bets" }
      ]
    },
    {
      title: "Hardway Bets",
      bets: [
        { name: "Hard 4 or Hard 10", payout: "7 to 1" },
        { name: "Hard 6 or Hard 8", payout: "9 to 1" }
      ]
    },
    {
      title: "Buy and Lay Bets",
      bets: [
        { name: "Buy 4 or 10", payout: "2 to 1", commission: "5% commission" },
        { name: "Buy 5 or 9", payout: "3 to 2", commission: "5% commission" },
        { name: "Buy 6 or 8", payout: "6 to 5", commission: "5% commission" }
      ]
    }
  ];

  // Define gameplay terms data
  const gameplayTerms = [
    {
      term: "Pass Line",
      definition: "An even money bet. Win on a 7 or 11 roll, lose on 2, 3, or 12 on the come out roll. Any other number becomes the 'point' to win before a 7."
    },
    {
      term: "Don't Pass Line",
      definition: "The opposite of the pass line. Lose on 7 or 11 on the come out roll, win on 2 or 3, tie on 12. Win if a 7 rolls before the point."
    },
    {
      term: "Come Bets",
      definition: "Win on 7 or 11 after the point is established, lose on 2, 3, or 12. Any other number becomes your 'come point' to win before a 7 rolls."
    },
    {
      term: "Don't Come Bets",
      definition: "The opposite of come bets. Win on 2 or 3, tie on 12, lose on 7 or 11 after the point is established. Win if a 7 rolls before the 'come point.'"
    },
    {
      term: "Odds",
      definition: "Additional bets that can be made on existing Pass, Don't Pass, Come, and Don't Come bets. The odds bet wins if the point is rolled before a 7 and pays true odds."
    },
    {
      term: "Place Bets",
      definition: "Bets made on numbers 4, 5, 6, 8, 9, or 10. Win if the chosen number is rolled before a 7."
    },
    {
      term: "Field Bets",
      definition: "One-roll bet that wins if 2, 3, 4, 9, 10, 11, or 12 are rolled, and loses on 5, 6, 7, or 8."
    },
    {
      term: "Proposition Bets",
      definition: "One-roll bets placed on specific number combinations or outcomes."
    },
    {
      term: "Hardways",
      definition: "Betting that a hard number (doubles) will roll before a 7 or that number 'the easy way' (as a non-double)."
    },
    {
      term: "Hop Bets",
      definition: "One-roll bet that a specific dice combination will occur."
    }
  ];

  const renderBettingCategories = () => (
    <div className="betting-section">
      <h2>Betting Options & Payouts</h2>
      {bettingCategories.map((category, index) => (
        <div key={index} className="bet-category">
          <h3>{category.title}</h3>
          {category.subtitle && <p className="category-subtitle">{category.subtitle}</p>}
          <div className="bet-list">
            {category.bets.map((bet, betIndex) => (
              <div key={betIndex} className="bet-item">
                <span className="bet-name">{bet.name}</span>
                <span className="bet-payout">{bet.payout}</span>
                {bet.commission && (
                  <span className="commission-note">{bet.commission}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderGameplayTerms = () => (
    <section className="craps-gameplay">
      <h2>Gameplay</h2>
      <p>
        One player, known as the "shooter," throws the dice. All wagers must be placed before the shooter 
        throws the dice. Here are the types of wagers and terms you should be familiar with:
      </p>
      <dl>
        {gameplayTerms.map((item, index) => (
          <React.Fragment key={index}>
            <dt>{item.term}</dt>
            <dd>{item.definition}</dd>
          </React.Fragment>
        ))}
      </dl>
    </section>
  );

  return (
    <div className="craps-rules-container">
      <h1>Craps Rules</h1>

      <section className="craps-intro">
        <p>
          Craps is an exciting, fast-paced, action-packed game utilizing a pair of dice. 
          Below are some basics to help you understand how to play craps at a casino.
        </p>
      </section>

      {renderGameplayTerms()}
      {renderBettingCategories()}
    </div>
  );
};

export default CrapsRules;