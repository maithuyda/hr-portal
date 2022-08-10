import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';
import { Menu } from 'antd';
import { ContactsOutlined, TeamOutlined } from '@ant-design/icons';

export default function SideBar() {
  const navigate = useNavigate();

  const items = [
    { label: 'Appointments', key: '/appointment-list', icon: <ContactsOutlined style={{ fontSize: '1.3rem' }} /> },
    { label: 'Candidates', key: '/candidate-list', icon: <TeamOutlined style={{ fontSize: '1.3rem' }} /> },
  ];
  const handleNavigateSidebar = (event: any) => {
    navigate(event.key);
  };
  return (
    <div className="sidebar">
      {/* <ul className="sidebar__list">
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
      </ul> */}
      <Menu defaultSelectedKeys={['/appointment-list']} items={items} theme="dark" onSelect={handleNavigateSidebar} />
    </div>
  );
}
