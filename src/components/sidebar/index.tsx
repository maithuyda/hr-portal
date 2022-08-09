import React from 'react';
import './index.scss';
import { UserOutlined, ScheduleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        <li className="sidebar__list--item">
          <Link to="/" className="text">
            <ScheduleOutlined />
            Appointments
          </Link>
        </li>
        <li className="sidebar__list--item">
          <Link to="/candidate-list" className="text">
            <UserOutlined />
            Candidates
          </Link>
        </li>
      </ul>
    </div>
  );
}
