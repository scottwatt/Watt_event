import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Contact from './components/pages/Contact';
import BlackjackRules from './components/BlackjackRules';
import PokerRules from './components/PokerRules';
import CrapsRules from './components/CrapsRules';
import RouletteRules from './components/RouletteRules';

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
          <Route path='/products' component={Products} />
          <Route path='/contact' component={Contact} />
          <Route path='/blackjack' component={BlackjackRules} />
          <Route path='/poker' component={PokerRules} />  
          <Route path='/craps' component={CrapsRules} /> 
          <Route path='/roulette' component={RouletteRules} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
