import React from 'react';
import { Link } from 'react-router-dom';
import { List, Avatar } from 'antd';
import './index.scss';

export default function AppointmentList() {
  interface DataType {
    key: React.Key;
    id: string;
    title: string;
    description: string;
  }

  const data: DataType[] = [];
  for (let index = 0; index < 46; index++) {
    data.push({
      key: index,
      id: `ID123${index + 1}`,
      title: `Appointment Topic ${index}`,
      description: `Appointment Description${index}`,
    });
  }
  return (
    <div className="candidate-details__content--appointment">
      <h2>Appointment List</h2>
      <div className="candidate-details__content--appointment__scrollable">
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={<Link to={`/appointment-details/${item.id}`}>{item.title}</Link>}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}
