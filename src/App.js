import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Contact from './components/pages/Contact';
import AboutPage from './components/pages/AboutUs';
import BlackjackRules from './components/BlackjackRules';
import PokerRules from './components/PokerRules';
import CrapsRules from './components/CrapsRules';
import RouletteRules from './components/RouletteRules';
import TermsOfService from './components/pages/TermsOfService';

function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/about-us' component={AboutPage} />
          <Route path='/products' component={Products} />
          <Route path='/contact' component={Contact} />
          <Route path='/blackjack' component={BlackjackRules} />
          <Route path='/poker' component={PokerRules} />  
          <Route path='/craps' component={CrapsRules} /> 
          <Route path='/roulette' component={RouletteRules} />
          <Route path='/terms-of-service' component={TermsOfService} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
