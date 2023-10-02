import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out some of the many services and products we offer!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/blackjack.jpg'
              text='Blackjack is the most widely played casino banking game in the world.'
              label='Blackjack'
              path='/products'
            />
            <CardItem
              src='images/poker.jpg'
              text='From Texas Holdem to Omaha!'
              label='Poker'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/dealer.jpg'
              text='Bring everyone together and have a poker night!'
              label='Parties'
              path='/services'
            />
            <CardItem
              src='images/dealer.jpg'
              text='Help raise money while having a blast!'
              label='Fundraisers'
              path='/services'
            />
            <CardItem
              src='images/dealer.jpg'
              text='Great for Birthdays and all get togethers.'
              label='Birthdays'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;