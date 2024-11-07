import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our Casino Games!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <div className='cards__items'>
            <CardItem
              src='images/blackjack.jpg'
              text='Blackjack - The most widely played casino banking game'
              label='Blackjack'
              path='/blackjack'
            />
            <CardItem
              src='images/poker.jpg'
              text='Poker - From Texas Holdem to Omaha!'
              label='Poker'
              path='/poker'
            />
          </div>
          <div className='cards__items'>
            <CardItem
              src='/images/rouletteChips.jpg'
              text='Try your luck at the Roulette table'
              label='Roulette'
              path='/roulette'
            />
            <CardItem
              src='images/craps.jpg'
              text='Experience the excitement of Craps'
              label='Craps'
              path='/craps'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;