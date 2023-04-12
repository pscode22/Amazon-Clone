import React from 'react';
import { Route, Routes } from 'react-router-dom';

const RouteLayout = React.lazy(() => import('./layout'));
const RouteHomePage = React.lazy(() => import('./home'));

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        // errorElement={<RouteError />}
        element={<RouteLayout />}
      >
        <Route path="/" element={<RouteHomePage />} />
      </Route>
    </Routes>
  );
}
