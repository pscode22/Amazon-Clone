import MainHeader from '@components/layout/header';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
  return (
    <div className="w-screen">
      <MainHeader />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
