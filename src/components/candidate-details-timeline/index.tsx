import React, { useState } from 'react';
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
import { Steps, Button, message } from 'antd';

const { Step } = Steps;

const steps = [
  {
    title: 'Applied',
    icon: <UserOutlined />,
    description: 'Applied in 20/10/2020',
  },
  {
    title: 'Interview',
    icon: <SolutionOutlined />,
    description: 'Interview in 22/10/2020',
  },
  {
    title: 'Decision',
    icon: <AuditOutlined />,
    description: 'Pass',
  },
  {
    title: 'Completed',
    icon: <SmileOutlined />,
    description: 'Onboard in 29/10/2020',
  },
];
export default function CandidateDetailsTimeline() {
  const [current, setCurrent] = useState<number>(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
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
      {/* <Steps current={1} status="finish">
        <Step title="Applied" icon={<UserOutlined />} description="Applied in 20/10/2020" />
        <Step title="Interview" icon={<SolutionOutlined />} description="Interview in 22/10/2020" />
        <Step title="Decision" icon={<AuditOutlined />} description="Pass" />
        <Step title="Completed" icon={<SmileOutlined />} description="Onboard in 29/10/2020" />
      </Steps> */}
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].description}</div>
    </div>
  );
}
