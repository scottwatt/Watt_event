import React from 'react';
import './AboutUs.css';
import { Link } from 'react-router-dom';
import Cards from '../cards.jpg'; // Ensure you have an image named 'cards.jpg' in the correct directory

const AboutPage = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <img src={Cards} alt="About Watt Events" className="about-image" />
        <div>
          <h1>About Watt Events</h1>
          <p>Bringing the casino experience to your events, with a touch of Vegas-style entertainment.</p>
        </div>
      </section>

      <section className="about-story">
        <h2>Our Story</h2>
        <p>At Watt Events, we believe that every event is an opportunity to create unforgettable memories. Founded in Bakersfield, California, our journey began with a simple idea: to bring the thrill and sophistication of a casino experience to any gathering. Whether it's a corporate event, a birthday celebration, or just a night out with friends, our goal is to deliver a slice of Vegas-style entertainment to your doorstep.</p>
      </section>

      <section className="about-details">
        <h2>Our Mission</h2>
        <p>Our mission is to provide an immersive, high-quality casino experience with games like Poker, Blackjack, Roulette, and Craps, catered to your preferences. We ensure that your event, big or small, resonates with the excitement of a night at the casino, without any of the risks but all of the fun.</p>
        
        <h2>Our Vision</h2>
        <p>We envision a world where every milestone and gathering is celebrated with joy, excitement, and a touch of class. Watt Events strives to be the premier choice for casino-themed entertainment across California, recognized for our unwavering commitment to customer satisfaction and event success.</p>
        
        <h2>Our Values</h2>
        <ul>
          <li><strong>Customer Focus:</strong> Your enjoyment is our success. Every event is tailored to meet your desires, ensuring a unique and personalized experience.</li>
          <li><strong>Integrity:</strong> We operate with honesty and transparency. Trust is the bedrock of our relationship with clients.</li>
          <li><strong>Quality:</strong> From professional-grade gaming equipment to well-trained staff, we provide the best to ensure your event is flawless.</li>
          <li><strong>Innovation:</strong> We are always looking for new ways to enhance your experience and bring fresh ideas to the table.</li>
        </ul>
        
        <h2>Why Choose Watt Events?</h2>
        <p>With Watt Events, you're not just planning an event; you're scripting a night of stories to be told for years to come. Our attention to detail, dedication to customer service, and genuine love for what we do set us apart. Plus, we're always open — ready to bring the party to you 24/7 because the best moments shouldn't be limited to business hours.</p>
        
        <h2>Connect With Us</h2>
        <p>To start planning your event or to learn more about what we can do for you, contact us today. Let's make your next event extraordinary!</p>
        <div className="contact-button-container">
        <Link to="/contact" className="contact-button">
          Contact Us
        </Link>
      </div>
      </section>
    </div>
  );
};

export default AboutPage;
