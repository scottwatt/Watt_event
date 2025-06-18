// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/AboutUs';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Contact from './components/pages/Contact';
import Booking from './components/pages/Booking';
import TermsOfService from './components/pages/TermsOfService';
import Footer from './components/Footer';

// Game Rules Components
import BlackjackRules from './components/BlackjackRules';
import PokerRules from './components/PokerRules';
import RouletteRules from './components/RouletteRules';
import CrapsRules from './components/CrapsRules';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about-us' component={About} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/contact' component={Contact} />
          <Route path='/booking' component={Booking} />
          <Route path='/terms-of-service' component={TermsOfService} />
          
          {/* Game Rules Routes */}
          <Route path='/blackjack' component={BlackjackRules} />
          <Route path='/poker' component={PokerRules} />
          <Route path='/roulette' component={RouletteRules} />
          <Route path='/craps' component={CrapsRules} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;