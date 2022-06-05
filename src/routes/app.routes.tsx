import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../shared/components/Layout';

import Login from '../pages/login';

export const AppRoutes = () => (
  <Layout>
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  </Layout>
);
