import React, { useState, lazy } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { Button, Input, Space, Table, Popover } from 'antd';
import { PlusOutlined, VerticalAlignBottomOutlined, EllipsisOutlined } from '@ant-design/icons';
const CreateCandidate = lazy(() => import('../../components/popup-create-candidate'));
const DownloadCV = lazy(() => import('../../components/download-cv'));

const { Search } = Input;
const { Column } = Table;

export default function CandidateList() {
  const [candidatePopup, setCandidatePopup] = useState(false);
  const showCandidatePopup = () => {
    setCandidatePopup(true);
  };

  const onSearch = (value: string) => console.log(value);

  interface DataType {
    key: React.Key;
    id: string;
    name: string;
    created_date: string;
    position: string;
    progress: string;
    cv_id: string;
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
      cv_id: 'csv-sample.csv',
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
            title=""
            key="view-more"
            render={(__: any, record: DataType) => (
              <Space size="middle">
                <Popover
                  content={
                    <div className="candidate__ellipsis">
                      <Link to={`/candidate-details/${record.id}`}>View Candidate</Link>
                      <Link to="/appointment-list">Create Appointment</Link>
                    </div>
                  }
                  title=""
                  trigger="click"
                  placement="bottom">
                  <Button>
                    <EllipsisOutlined />
                  </Button>
                </Popover>
              </Space>
            )}
          />
          <Column
            title=""
            key="downloadCV"
            render={(__: any, record: DataType) => (
              <div key={record.id}>
                <DownloadCV cv_id={record.cv_id} />
              </div>
            )}
          />
        </Table>
      </div>
    </div>
  );
}
