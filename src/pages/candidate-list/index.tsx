import React, { useState, lazy } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { Button, Input, Space, Table, Menu, Dropdown } from 'antd';
import { PlusOutlined, VerticalAlignBottomOutlined } from '@ant-design/icons';
import MenuItem from 'antd/lib/menu/MenuItem';
const CreateCandidate = lazy(() => import('../../components/popup-create-candidate'));

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
            title=""
            key="action"
            render={(__: any, record: DataType) => (
              <Space size="middle">
                {/* <Link className="link" to={`/candidate-details/${record.id}`}>
                  Details
                </Link> */}
                <span className="candidate__ellipsis">
                  <Dropdown.Button
                    overlay={
                      <Menu>
                        <MenuItem>
                          <Link to={`/candidate-details/${record.id}`}>View Details</Link>
                        </MenuItem>
                        <MenuItem>
                          <Link to={`/candidate-details/${record.id}`}>Download CV</Link>
                        </MenuItem>
                        <MenuItem>
                          <Link to="/appointment-list">Create Appointment</Link>
                        </MenuItem>
                      </Menu>
                    }
                    size="large"
                    trigger={['click']}></Dropdown.Button>
                </span>
              </Space>
            )}
          />
        </Table>
      </div>
    </div>
  );
}
