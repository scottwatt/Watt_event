// index.js - Fixed for react-snap pre-rendering
import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import './styles/theme.css';
import './index.css';

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Application Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '20px', 
          textAlign: 'center',
          fontFamily: 'Arial, sans-serif',
          color: '#721c24',
          backgroundColor: '#f8d7da',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h1>Something went wrong.</h1>
          <p>Please refresh the page and try again.</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: '12px 24px',
              backgroundColor: '#721c24',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '16px',
              marginTop: '10px'
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

// The app component wrapped with error boundary
const WrappedApp = () => (
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// Get root element
const rootElement = document.getElementById('root');

// CRITICAL: Check if pre-rendered by react-snap
// If root has children, hydrate. Otherwise, render fresh.
if (rootElement.hasChildNodes()) {
  // Page was pre-rendered by react-snap - hydrate it
  hydrateRoot(rootElement, <WrappedApp />);
} else {
  // Fresh render (development or if pre-rendering failed)
  const root = createRoot(rootElement);
  root.render(<WrappedApp />);
}

// Optional: Report web vitals (runs after render, won't affect react-snap)
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
  // Performance monitoring - only in production, after hydration
  setTimeout(() => {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            console.log('LCP:', entry.startTime);
          }
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        // Silently fail
      }
    }
  }, 0);
}