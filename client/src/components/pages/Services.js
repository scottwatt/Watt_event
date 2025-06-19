// components/pages/Services.js - Updated with OptimizedImage
import React from 'react';
import OptimizedImage from '../OptimizedImage';
import '../../App.css';
import '../ServicesList.css';

class Services extends React.Component {
  render() {
    return (
      <div>
        <div className="services-container">
          <h1>Our Services</h1>
          <br></br>
          
          {/* Corporate Events Section */}
          <div className="service-row">
            <div className="service-text">
              <h2>Corporate Events</h2>
              <p>Poker parties can add a unique twist to corporate events, offering a fun and engaging way to encourage team building and networking. The thrill of the game, combined with the chance to interact outside of the usual office environment, helps break down barriers and promote interactions among colleagues. A poker-themed corporate event can also be a fantastic way to entertain clients, creating a relaxed atmosphere conducive to building stronger business relationships.</p>
            </div>
            <div className="service-image">
              <OptimizedImage
                src='images/WEtables.jpg'
                alt="Corporate casino event tables in Bakersfield"
                width={500}
                height={315}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Fundraisers Section */}
          <div className="service-row service-row-reverse">
            <div className="service-image">
              <OptimizedImage
                src='images/WeTourney.jpg'
                alt="Casino fundraiser tournament in Bakersfield"
                width={500}
                height={315}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="service-text">
              <h2>Fundraisers</h2>
              <p>A poker tournament can serve as an exciting and profitable way to raise money for your cause or organization. Participants get the chance to enjoy a competitive game of poker while knowing their buy-ins are going towards a good cause. Such events often attract a diverse crowd and can be more engaging than traditional fundraising methods. The element of skill and luck in poker also adds to the excitement, encouraging higher participation and potentially greater donations.</p>
            </div>
          </div>

          {/* Parties Section */}
          <div className="service-row">
            <div className="service-text">
              <h2>Parties</h2>
              <ul className="event-descriptions">
                <li>
                  <strong>Sports Viewing Parties:</strong> Hosting a poker party during a major sports event can enhance the excitement. Guests can play hands during halftime or breaks in the action, making for a dynamic and entertaining experience.
                </li>
                <li>
                  <strong>Anniversary Parties:</strong> Celebrate a milestone anniversary with a poker party as a unique way to mark the special occasion. It offers couples and their guests an evening filled with excitement and friendly competition.
                </li>
                <li>
                  <strong>Graduation Parties:</strong> Honor the graduate with a poker party, bringing friends and family together for a night of fun and celebration of hard work and achievements.
                </li>
                <li>
                  <strong>Retirement Parties:</strong> A poker party for retirement offers the retiree a chance to enjoy leisure time with colleagues, friends, and family in a lively game night.
                </li>
                <li>
                  <strong>Birthday Parties:</strong> A poker party adds an element of anticipation and excitement to birthday festivities, perfect for bonding with guests over a shared love of the game.
                </li>
                <li>
                  <strong>Bachelor/Bachelorette Parties:</strong> For a classy twist on pre-wedding celebrations, a poker party provides excitement and an opportunity for the bridal party and friends to bond.
                </li>
              </ul>
            </div>
            <div className="service-image">
              <OptimizedImage
                src='images/WeBJ.jpg'
                alt="Blackjack party rental in Bakersfield"
                width={500}
                height={315}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;