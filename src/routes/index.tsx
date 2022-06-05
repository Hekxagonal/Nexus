import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { useAuth } from '../shared/hooks/useAuth';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export const Routes = () => {
  const { isLogged } = useAuth();

  return (
    <BrowserRouter>{isLogged ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
  );
};
