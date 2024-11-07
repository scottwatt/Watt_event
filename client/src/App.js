// src/App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Booking from './components/pages/Booking';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Contact from './components/pages/Contact';
import AboutPage from './components/pages/AboutUs';
import BlackjackRules from './components/BlackjackRules';
import PokerRules from './components/PokerRules';
import CrapsRules from './components/CrapsRules';
import RouletteRules from './components/RouletteRules';
import TermsOfService from './components/pages/TermsOfService';
import Dashboard from './components/Dashboard';
import AdminRoute from './components/AdminRoute';
import ForgotPassword from './components/pages/ForgotPassword'; 
import AdminDashboard from './components/admin/AdminDashboard';

import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/services" component={Services} />
            <Route path="/about-us" component={AboutPage} />
            <Route path="/products" component={Products} />
            <Route path="/contact" component={Contact} />
            <Route path="/blackjack" component={BlackjackRules} />
            <Route path="/poker" component={PokerRules} />
            <Route path="/craps" component={CrapsRules} />
            <Route path="/roulette" component={RouletteRules} />
            <Route path="/terms-of-service" component={TermsOfService} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/booking" component={Booking} /> 
            <ProtectedRoute path="/dashboard" component={Dashboard} />
            <AdminRoute path="/admin" component={AdminDashboard} />
          </Switch>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;