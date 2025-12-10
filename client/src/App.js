// App.js - Updated with ScrollToTop
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Contact from './components/pages/Contact';
import Booking from './components/pages/Booking';
import CasinoRentalBakersfield from './components/pages/CasinoRentalBakersfield';
import TermsOfService from './components/pages/TermsOfService';
import PrivacyPolicy from './components/pages/PrivacyPolicy';

// Game Rules Pages
import BlackjackRules from './components/BlackjackRules';
import PokerRules from './components/PokerRules';
import RouletteRules from './components/RouletteRules';
import CrapsRules from './components/CrapsRules';

function App() {
  return (
    <Router>
      {/* ScrollToTop must be inside Router */}
      <ScrollToTop />
      
      <div className="app">
        <Navbar />
        
        <main className="main-content">
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about-us' component={AboutUs} />
            <Route path='/services' component={Services} />
            <Route path='/products' component={Products} />
            <Route path='/contact' component={Contact} />
            <Route path='/booking' component={Booking} />
            <Route path='/casino-rental-bakersfield' component={CasinoRentalBakersfield} />
            <Route path='/terms-of-service' component={TermsOfService} />
            <Route path='/privacy-policy' component={PrivacyPolicy} />
            
            {/* Game Rules */}
            <Route path='/blackjack' component={BlackjackRules} />
            <Route path='/poker' component={PokerRules} />
            <Route path='/roulette' component={RouletteRules} />
            <Route path='/craps' component={CrapsRules} />
          </Switch>
        </main>
        
        <Footer />
        
        {/* Floating CTA - Always visible for quick contact */}
        <FloatingCTA />
      </div>
    </Router>
  );
}

export default App;