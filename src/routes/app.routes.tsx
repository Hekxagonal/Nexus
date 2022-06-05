import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../shared/components/Layout';

import Login from '../pages/login';
import pages from './pages';

export const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    {pages.map((el, i) => (
      <Route
        key={i}
        path={el.path}
        element={<Layout pageId={i}>{el.name}</Layout>}
      ></Route>
    ))}
  </Routes>
);
