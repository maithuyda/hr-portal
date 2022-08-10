import React from 'react';
import './index.scss';
// import {
//   LoadingOutlined,
//   FileDoneOutlined,
//   TeamOutlined,
//   CheckCircleOutlined,
//   SolutionOutlined,
// } from '@ant-design/icons';
// import { Button, Timeline } from 'antd';
import { AuditOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps } from 'antd';

const { Step } = Steps;

export default function CandidateDetailsTimeline() {
  // const [currentStatus, setCurrentStatus] = useState(1);
  // const [currentButton, setCurrentButton] = useState<string>();

  // const statusList = [
  //   { name: 'Applied', id: 1 },
  //   { name: 'Interview', id: 2 },
  //   { name: 'Decision', id: 3 },
  //   { name: 'Completed', id: 4 },
  // ];

  // const handleColorTimeLine = (id: number) => {
  //   if (currentStatus === id) {
  //     return 'red';
  //   } else if (currentStatus > id) {
  //     return 'green';
  //   } else {
  //     return 'gray';
  //   }
  // };
  // const handleIconTimeline = (id: number) => {
  //   if (currentStatus === id) {
  //     return <LoadingOutlined />;
  //   } else if (id === 1) {
  //     return <FileDoneOutlined />;
  //   } else if (id === 2) {
  //     return <TeamOutlined />;
  //   } else if (id === 3) {
  //     return <SolutionOutlined />;
  //   } else if (id === 4) {
  //     return <CheckCircleOutlined />;
  //   }
  // };
  // useEffect(() => {
  //   if (currentStatus === 1) {
  //     setCurrentButton('Create Appointment');
  //   } else if (currentStatus === 2) {
  //     setCurrentButton('Feedback');
  //   } else if (currentStatus === 3) {
  //     setCurrentButton('Final desicion');
  //   } else if (currentStatus === 4) {
  //     setCurrentButton('Edit Decision');
  //   } else if (currentStatus === 5) {
  //     setCurrentButton('Done');
  //   }
  // }, [currentStatus]);
  return (
    <div className="candidate-details-timeline">
      {/* <Timeline>
        {statusList.map((status) => (
          <Timeline.Item key={status.id} color={handleColorTimeLine(status.id)} dot={handleIconTimeline(status.id)}>
            {status.name}
          </Timeline.Item>
        ))}
      </Timeline>
      <Button className="candidate-details-timeline-button" onClick={() => setCurrentStatus((prev) => prev + 1)}>
        {currentButton}
      </Button> */}
      <Steps current={1} status="finish">
        <Step title="Applied" icon={<UserOutlined />} description="Applied in 20/10/2020" />
        <Step title="Interview" icon={<SolutionOutlined />} description="Interview in 22/10/2020" />
        <Step title="Decision" icon={<AuditOutlined />} description="Pass" />
        <Step title="Completed" icon={<SmileOutlined />} description="Onboard in 29/10/2020" />
      </Steps>
    </div>
  );
}
