import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { UserOutlined } from '@ant-design/icons';
import { AutoComplete, Input } from 'antd';

export default function SearchCandidate() {
  const renderTitle = (title: string) => (
    <span>
      {title}
      <Link style={{ float: 'right' }} to="candidate-list" target="_blank" rel="noopener noreferrer">
        more
      </Link>
    </span>
  );
  const renderItem = (title: string, count: string) => ({
    value: title,
    label: (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        {title}
        <span>
          <UserOutlined /> {count}
        </span>
      </div>
    ),
  });
  const options = [
    {
      label: renderTitle('Candidates'),
      options: [renderItem('David', 'ID1324561'), renderItem('Philipp', 'ID1324561')],
    },
  ];
  return (
    <AutoComplete
      dropdownClassName="certain-category-search-dropdown"
      dropdownMatchSelectWidth={500}
      style={{ width: '50%' }}
      options={options}>
      <Input.Search size="large" placeholder="input here" />
    </AutoComplete>
  );
}
