import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { Button, Input, Select, Space, Table, Tag } from 'antd';
import { PlusOutlined, VerticalAlignBottomOutlined } from '@ant-design/icons';
import CreateCandidate from '../../components/create-candidate-popup';

export default function CandidateList() {
  const [candidatePopup, setCandidatePopup] = useState(false);

  const showModal = () => {
    setCandidatePopup(true);
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
    <div className="candidate-list">
      <h1>Candidate List Page</h1>
      <div className="create-candidate">
        <Button size="large" className="button" onClick={showModal} type="primary">
          <PlusOutlined />
          Create Candidate
        </Button>
        <Button size="large" className="button" onClick={showModal} type="primary">
          <VerticalAlignBottomOutlined />
          Export Excel
        </Button>
        <CreateCandidate isShowed={candidatePopup} setVisible={setCandidatePopup} />
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
