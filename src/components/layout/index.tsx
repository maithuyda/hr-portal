import Header from '../header';
import React from 'react';
import './index.scss';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <Outlet />
    </div>
  );
}
