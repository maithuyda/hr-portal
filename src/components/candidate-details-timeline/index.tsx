import React, { useEffect, useState } from 'react';
import './index.scss';
import {
  LoadingOutlined,
  FileDoneOutlined,
  TeamOutlined,
  CheckCircleOutlined,
  SolutionOutlined,
} from '@ant-design/icons';
import { Button, Timeline } from 'antd';

export default function CandidateDetailsTimeline() {
  const [currentStatus, setCurrentStatus] = useState(1);
  const [currentButton, setCurrentButton] = useState<string>();

  const statusList = [
    { name: 'Applied', id: 1 },
    { name: 'Interview', id: 2 },
    { name: 'Decision', id: 3 },
    { name: 'Completed', id: 4 },
  ];

  const handleColorTimeLine = (id: number) => {
    if (currentStatus === id) {
      return 'red';
    } else if (currentStatus > id) {
      return 'green';
    } else {
      return 'gray';
    }
  };
  const handleIconTimeline = (id: number) => {
    if (currentStatus === id) {
      return <LoadingOutlined />;
    } else if (id === 1) {
      return <FileDoneOutlined />;
    } else if (id === 2) {
      return <TeamOutlined />;
    } else if (id === 3) {
      return <SolutionOutlined />;
    } else if (id === 4) {
      return <CheckCircleOutlined />;
    }
  };
  useEffect(() => {
    if (currentStatus === 1) {
      setCurrentButton('Create Appointment');
    } else if (currentStatus === 2) {
      setCurrentButton('Feedback');
    } else if (currentStatus === 3) {
      setCurrentButton('Final desicion');
    } else if (currentStatus === 4) {
      setCurrentButton('Edit Decision');
    } else if (currentStatus === 5) {
      setCurrentButton('Done');
    }
  }, [currentStatus]);
  return (
    <div className="candidate-details-timeline">
      <Timeline>
        {statusList.map((status) => (
          <Timeline.Item key={status.id} color={handleColorTimeLine(status.id)} dot={handleIconTimeline(status.id)}>
            {status.name}
          </Timeline.Item>
        ))}
      </Timeline>
      <Button className="candidate-details-timeline-button" onClick={() => setCurrentStatus((prev) => prev + 1)}>
        {currentButton}
      </Button>
    </div>
  );
}
