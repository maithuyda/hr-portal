import React, { useState } from 'react';
import './index.scss';
import { Button, Select, Input, Space, Table, Tag } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import CreateAppointment from '../../components/create-appointment-popup';
import { Link } from 'react-router-dom';

export default function AppointmentList() {
  const [appointmentPopup, setAppointmentPopup] = useState(false);
  const showModal = () => {
    setAppointmentPopup(true);
  };
  const { Option } = Select;
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);
  const { Column } = Table;

  interface DataType {
    key: React.Key;
    id: number;
    name: string;
    created_date: string;
    date_of_interview: string;
    position: string;
    phone_number: string;
    skills: string[];
  }

  const data: DataType[] = [];
  for (let index = 0; index < 46; index++) {
    data.push({
      key: index,
      id: index + 1,
      name: `Edward King ${index}`,
      created_date: `${index}/20/2000`,
      date_of_interview: `${index}/20/2000`,
      position: `Software Engineer ${index}`,
      phone_number: `${index}3456789`,
      skills: [`java ${index}`, `javacript ${index}`],
    });
  }
  return (
    <div className="appointment-list">
      <div className="title-list">
        <h2>Appointments</h2>
      </div>

      <div className="create-appointment">
        <Button size="large" className="button" onClick={showModal} type="primary">
          <PlusOutlined />
          Create Appointment
        </Button>
        <CreateAppointment isShowed={appointmentPopup} setVisible={setAppointmentPopup} />
      </div>
      <div className="filter-list">
        <div className="select-otions">
          <Select defaultValue="Upcoming Appointments" size="large">
            <Option value="Upcoming Appointments">Upcoming Appointments</Option>
            <Option value="All Appointments">All Appointments</Option>
          </Select>
        </div>
        <div className="search">
          <Search placeholder="Search by" onSearch={onSearch} size="large" />
        </div>
      </div>
      <div className="table-list">
        <Table dataSource={data} pagination={{ position: ['bottomCenter'] }}>
          <Column title="Name" dataIndex="name" />
          <Column title="Date of Application" dataIndex="created_date" />
          <Column title="Date of Interview" dataIndex="date_of_interview" />
          <Column title="Position" dataIndex="position" />
          <Column title="Phone Number" dataIndex="phone_number" />
          <Column
            title="Skills"
            dataIndex="skills"
            key="skills"
            render={(tags: string[]) => (
              <>
                {tags.map((tag) => (
                  <Tag color="blue" key={tag}>
                    {tag}
                  </Tag>
                ))}
              </>
            )}
          />
          <Column
            title="Action"
            key="action"
            render={(__: any, record: DataType) => (
              <Space size="middle">
                <Link to={`candidate-details/${record.id}`}>View {record.name}</Link>
              </Space>
            )}
          />
        </Table>
      </div>
    </div>
  );
}
