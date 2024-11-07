import React from 'react';
import './CrapsRules.css'; // Make sure to create a corresponding CSS file for styling

const CrapsRules = () => {
  return (
    <div className="craps-rules-container">
      <h1>Craps Rules</h1>

      <section className="craps-intro">
        <p>Craps is an exciting, fast-paced, action-packed game utilizing a pair of dice. Below are some basics to help you understand how to play craps at a casino.</p>
      </section>

      <section className="craps-gameplay">
        <h2>Gameplay</h2>
        <p>
          One player, known as the “shooter,” throws the dice. All wagers must be placed before the shooter throws the dice. Here are the types of wagers and terms you should be familiar with:
        </p>
        <dl>
          <dt>Pass Line</dt>
          <dd>An even money bet. Win on a 7 or 11 roll, lose on 2, 3, or 12 on the come out roll. Any other number becomes the “point” to win before a 7.</dd>
          <dt>Don't Pass Line</dt>
          <dd>The opposite of the pass line. Lose on 7 or 11 on the come out roll, win on 2 or 3, tie on 12. Win if a 7 rolls before the point.</dd>
          <dt>Come Bets</dt>
          <dd>Win on 7 or 11 after the point is established, lose on 2, 3, or 12. Any other number becomes your “come point” to win before a 7 rolls.</dd>
          <dt>Don't Come Bets</dt>
          <dd>The opposite of come bets. Win on 2 or 3, tie on 12, lose on 7 or 11 after the point is established. Win if a 7 rolls before the “come point.”</dd>
          <dt>Odds</dt>
          <dd>Additional bets that can be made on existing Pass, Don't Pass, Come, and Don't Come bets. The odds bet wins if the point is rolled before a 7 and pays true odds.</dd>
          <dt>Place Bets</dt>
          <dd>Bets made on numbers 4, 5, 6, 8, 9, or 10. Win if the chosen number is rolled before a 7.</dd>
          <dt>Field Bets</dt>
          <dd>One-roll bet that wins if 2, 3, 4, 9, 10, 11, or 12 are rolled, and loses on 5, 6, 7, or 8.</dd>
          <dt>Proposition Bets</dt>
          <dd>One-roll bets placed on specific number combinations or outcomes.</dd>
          <dt>Hardways</dt>
          <dd>Betting that a hard number (doubles) will roll before a 7 or that number "the easy way" (as a non-double).</dd>
          <dt>Hop Bets</dt>
          <dd>One-roll bet that a specific dice combination will occur.</dd>
        </dl>
      </section>

      <section className="craps-betting">
        <h2>Betting Options & Payouts</h2>
        <p>Various betting options are available in craps. Here are some of the common bets along with their payouts:</p>
        <ul>
          <li>Single number bet pays 35 to 1. Also called “straight up.”</li>
          <li>Double number bet pays 17 to 1. Also called a “split.”</li>
          <li>Three number bet pays 11 to 1. Also called a “street.”</li>
          <li>Four number bet pays 8 to 1. Also called a “corner bet.”</li>
          <li>Five number bet pays 6 to 1. Only one specific bet which includes the following numbers: 0-00-1-2-3.</li>
          <li>Six number bets pay 5 to 1. Also called a “line.”</li>
          <li>Twelve numbers or dozens (first, second, third dozen) pay 2 to 1.</li>
          <li>Column bet (12 numbers in a row) pays 2 to 1.</li>
          <li>18 numbers (1-18) pay even money.</li>
          <li>18 numbers (19-36) pay even money.</li>
          <li>Red or black pays even money.</li>
          <li>Odd or even bets pay even money.</li>
        </ul>
      </section>

    </div>
  );
};

export default CrapsRules;
