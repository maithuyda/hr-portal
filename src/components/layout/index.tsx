import Header from '../header';
import SideBar from '../sidebar';
import React from 'react';
import './index.scss';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <div className="content-wrapper">
        <div className="content-wrapper-sidebar">
          <SideBar />
        </div>
        <div className="content-wrapper-outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
