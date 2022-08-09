import React, { useState, lazy } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { Button, Input, Space, Table } from 'antd';
import { PlusOutlined, VerticalAlignBottomOutlined, CloudDownloadOutlined } from '@ant-design/icons';
const CreateCandidate = lazy(() => import('../../components/create-candidate-popup'));
const CreateAppointment = lazy(() => import('../../components/create-appointment-popup'));

export default function CandidateList() {
  const [candidatePopup, setCandidatePopup] = useState(false);
  const [appointmentPopup, setAppointmentPopup] = useState(false);

  const showCandidatePopup = () => {
    setCandidatePopup(true);
  };
  const showAppointmentPopup = () => {
    setAppointmentPopup(true);
  };

  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);
  const { Column } = Table;

  interface DataType {
    key: React.Key;
    id: string;
    name: string;
    created_date: string;
    position: string;
    progress: string;
  }

  const data: DataType[] = [];
  for (let index = 0; index < 46; index++) {
    data.push({
      key: index,
      id: `ID123${index + 1}`,
      name: `Edward King ${index}`,
      created_date: `${index}/20/2000`,
      position: `Software Engineer ${index}`,
      progress: `Pending Interview${index}`,
    });
  }
  return (
    <div className="candidate-list">
      <div className="title-list">
        <h2>Candidate List</h2>
      </div>
      <div className="create-candidate">
        <Button size="large" className="button" onClick={showCandidatePopup} type="primary">
          <PlusOutlined />
          Create Candidate
        </Button>
        <Button size="large" className="button" onClick={showCandidatePopup} type="primary">
          <VerticalAlignBottomOutlined />
          Export Excel
        </Button>
        <CreateCandidate isShowed={candidatePopup} setVisible={setCandidatePopup} />
      </div>
      <div className="filter-list">
        <div className="search">
          <Search style={{ float: 'right' }} placeholder="Search by" onSearch={onSearch} size="large" />
        </div>
      </div>
      <div className="table-list">
        <Table dataSource={data} pagination={{ position: ['bottomCenter'], pageSize: 5 }}>
          <Column title="Name" dataIndex="name" />
          <Column title="Date of Application" dataIndex="created_date" />
          <Column title="Position applied" dataIndex="position" />
          <Column title="Progress" dataIndex="progress" />
          <Column
            title="CV"
            key="action"
            render={(__: any, record: DataType) => (
              <Space size="middle">
                <Link className="link" to={`/candidate-details/${record.id}`}>
                  <CloudDownloadOutlined style={{ fontSize: '2rem' }} />
                </Link>
              </Space>
            )}
          />
          <Column
            title=""
            key="action"
            render={(__: any, record: DataType) => (
              <Space size="middle">
                <Link className="link" to={`/candidate-details/${record.id}`}>
                  View Candidate
                </Link>
              </Space>
            )}
          />
          <Column
            title=""
            key="action"
            render={(__: any, record: DataType) => (
              <Space size="middle">
                <Button size="middle" className="button" onClick={showAppointmentPopup} type="primary">
                  Create Appointment
                </Button>
                <CreateAppointment
                  isShowed={appointmentPopup}
                  setVisible={setAppointmentPopup}
                  candidate_id={record.id}
                />
              </Space>
            )}
          />
        </Table>
      </div>
    </div>
  );
}
