// App.js - Updated with Casino Rental Bakersfield Landing Page
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

// Lazy load components
const Home = lazy(() => import('./components/pages/Home'));
const About = lazy(() => import('./components/pages/AboutUs'));
const Services = lazy(() => import('./components/pages/Services'));
const Products = lazy(() => import('./components/pages/Products'));
const Contact = lazy(() => import('./components/pages/Contact'));
const Booking = lazy(() => import('./components/pages/Booking'));
const TermsOfService = lazy(() => import('./components/pages/TermsOfService'));

// SEO Landing Pages - Lazy loaded
const CasinoRentalBakersfield = lazy(() => import('./components/pages/CasinoRentalBakersfield'));

// Game Rules Components - Lazy loaded
const BlackjackRules = lazy(() => import('./components/BlackjackRules'));
const PokerRules = lazy(() => import('./components/PokerRules'));
const RouletteRules = lazy(() => import('./components/RouletteRules'));
const CrapsRules = lazy(() => import('./components/CrapsRules'));

// Loading component
const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
    fontSize: '1.2rem',
    color: '#666'
  }}>
    <div style={{
      border: '3px solid #f3f3f3',
      borderTop: '3px solid #FFD700',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      animation: 'spin 1s linear infinite',
      marginRight: '15px'
    }}></div>
    Loading...
  </div>
);

// Error Boundary for lazy-loaded components
class LazyLoadErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Lazy loading error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '2rem', 
          textAlign: 'center',
          color: '#721c24',
          backgroundColor: '#f8d7da'
        }}>
          <h2>Something went wrong loading this page.</h2>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: '10px 20px',
              backgroundColor: '#721c24',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <Router>
      <Navbar />
      <LazyLoadErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Switch>
            {/* Main Pages */}
            <Route path='/' exact component={Home} />
            <Route path='/about-us' component={About} />
            <Route path='/services' component={Services} />
            <Route path='/products' component={Products} />
            <Route path='/contact' component={Contact} />
            <Route path='/booking' component={Booking} />
            <Route path='/terms-of-service' component={TermsOfService} />
            
            {/* SEO Landing Pages */}
            <Route path='/casino-rental-bakersfield' component={CasinoRentalBakersfield} />
            
            {/* Game Rules Routes */}
            <Route path='/blackjack' component={BlackjackRules} />
            <Route path='/poker' component={PokerRules} />
            <Route path='/roulette' component={RouletteRules} />
            <Route path='/craps' component={CrapsRules} />
          </Switch>
        </Suspense>
      </LazyLoadErrorBoundary>
      <Footer />

      {/* Add CSS for loading spinner */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </Router>
  );
}

export default App;