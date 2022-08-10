import React from 'react';
import './index.scss';
import { StarOutlined, UserOutlined } from '@ant-design/icons';
import { Popover } from 'antd';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const handleSingOutBtn = () => {
    localStorage.removeItem('username');
    navigate('/sign-in');
  };

  const userHover = (
    <ul className="user-hover">
      <li className="user-hover__item">
        <Link to="/user-profile">Profile</Link>
      </li>
      <li className="user-hover__item" onClick={handleSingOutBtn}>
        Sign Out
      </li>
      <li className="user-hover__item">Settings</li>
    </ul>
  );
  return (
    <div className="header">
      <div className="header__left">
        <Link className="header__left--link" to="/">
          <StarOutlined />
          <h3>Candy</h3>
        </Link>
      </div>
      <div className="header__right">
        <Popover placement="bottom" title="User" content={userHover}>
          <Link to="/">
            <UserOutlined />
          </Link>
        </Popover>
      </div>
    </div>
  );
}
