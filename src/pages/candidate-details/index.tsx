import React from 'react';
import './index.scss';
import { Row, Col, Statistic, Card } from 'antd';
import { FileSyncOutlined, FileExcelOutlined, FileTextOutlined } from '@ant-design/icons';

export default function CandidateDetails() {
  return (
    <div className="candidate-details">
      <h1>Candidate Details Page</h1>
      <div className="statistics-list">
        <Row gutter={[24, 24]}>
          <Col span={8}>
            <Card>
              <Statistic
                title="Pending Candidates"
                value={40}
                prefix={<FileSyncOutlined />}
                valueStyle={{ height: '3.5rem', fontSize: '2rem' }}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Statistic
                title="Upcoming Appointments"
                value={21}
                prefix={<FileTextOutlined />}
                valueStyle={{ height: '3.5rem', fontSize: '2rem' }}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Statistic
                title="Rejected"
                value={100}
                prefix={<FileExcelOutlined />}
                valueStyle={{ height: '3.5rem', fontSize: '2rem' }}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
