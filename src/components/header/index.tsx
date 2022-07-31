import React from 'react';
import './index.scss';
import { StarOutlined, UserOutlined } from '@ant-design/icons';

export default function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <StarOutlined />
        <h3>Candy</h3>
      </div>
      <div className="header__right">
        <UserOutlined />
      </div>
    </div>
  );
}
