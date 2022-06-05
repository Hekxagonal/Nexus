import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/login';

export const AuthRoutes = () => (
  <Routes>
    <Route path="*" element={<Login />} />
  </Routes>
);
