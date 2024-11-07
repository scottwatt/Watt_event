import React from 'react';
import './RouletteRules.css'; // Make sure to create a corresponding CSS file for styling

const RouletteRules = () => {
  return (
    <div className="roulette-rules-container">
      <h1>Roulette Rules</h1>
      
      <section className="roulette-intro">
        <p>Roulette is an intriguing game that is played throughout the world. The large payoffs that are possible for small wagers stimulate the interest of the expert as well as the novice player, especially when playing Roulette in Vegas.</p>
      </section>
      <br></br>
      <section className="roulette-gameplay">
        <h2>Gameplay</h2>
        <p>
          The rules of Roulette are straightforward:
        </p>
        <ul>
          <li>Players use different colored chips so the bets are not confused.</li>
          <li>The value of your chips is determined by the price you pay for them.</li>
          <li>When you’re done playing, make certain to redeem your chips at the same table you were playing at.</li>
          <li>Each spin of the wheel provides a multitude of options for the player.</li>
          <li>Players may bet on single numbers, rows of numbers, adjacent numbers, colors, odd or even numbers, among others.</li>
        </ul>
      </section>
      <br></br>
      
      <section className="roulette-betting">
        <h2>Betting Options & Payouts</h2>
        <p>We’re proud to offer Roulette in three variations, including the popular American-style, European Roulette, and a new version with an additional betting option. Below are the bets and their payouts:</p>
        <table className="roulette-payouts-table">
          <thead>
            <tr>
              <th>Bet Type</th>
              <th>Description</th>
              <th>Payout</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Single number (Straight up)</td>
              <td>Bet on a single number</td>
              <td>35 to 1</td>
            </tr>
            <tr>
              <td>Double number (Split)</td>
              <td>Bet on two adjacent numbers</td>
              <td>17 to 1</td>
            </tr>
            <tr>
              <td>Three number (Street)</td>
              <td>Bet on a row of three numbers</td>
              <td>11 to 1</td>
            </tr>
            <tr>
              <td>Four number (Corner bet)</td>
              <td>Bet on a block of four numbers</td>
              <td>8 to 1</td>
            </tr>
            <tr>
              <td>Five number</td>
              <td>Specific bet on 0-00-1-2-3</td>
              <td>6 to 1</td>
            </tr>
            <tr>
              <td>Six number (Line)</td>
              <td>Bet on two adjacent rows of numbers</td>
              <td>5 to 1</td>
            </tr>
            <tr>
              <td>Dozens</td>
              <td>Bet on first, second, or third dozen</td>
              <td>2 to 1</td>
            </tr>
            <tr>
              <td>Column bet</td>
              <td>Bet on a column of twelve numbers</td>
              <td>2 to 1</td>
            </tr>
            <tr>
              <td>1-18 (Low or Manque)</td>
              <td>Bet on the first half of numbers</td>
              <td>Even money</td>
            </tr>
            <tr>
              <td>19-36 (High or Passe)</td>
              <td>Bet on the second half of numbers</td>
              <td>Even money</td>
            </tr>
            <tr>
              <td>Red or Black</td>
              <td>Bet on the color of the winning number</td>
              <td>Even money</td>
            </tr>
            <tr>
              <td>Odd or Even</td>
              <td>Bet on whether the winning number will be odd or even</td>
              <td>Even money</td>
            </tr>
          </tbody>
        </table>
        <p>Note: The exact placement of the chips determines the bet being made. Each player is responsible for the correct positioning of their wager on the layout, regardless of whether the bet is placed by the dealer.</p>
      </section>
    </div>
  );
};

export default RouletteRules;
