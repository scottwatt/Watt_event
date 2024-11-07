// client/src/components/AdminRoute.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const AdminRoute = ({ component: Component, ...rest }) => {
  const { user, loading } = useAuth();

  console.log('AdminRoute check:', { user, isAdmin: user?.isAdmin });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Route
      {...rest}
      render={props => {
        if (!user) {
          console.log('No user found, redirecting to home');
          return <Redirect to="/" />;
        }
        
        if (!user.isAdmin) {
          console.log('User is not admin, redirecting to home');
          return <Redirect to="/" />;
        }

        console.log('User is admin, rendering admin dashboard');
        return <Component {...props} />;
      }}
    />
  );
};

export default AdminRoute;