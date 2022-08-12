import React, { useState } from 'react';
import './index.scss';
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
  const currentButton = (current: number) => {
    switch (current) {
      case 0:
        return (
          <Button type="primary" onClick={() => next()}>
            Create Appointment
          </Button>
        );
      case 1:
        return (
          <Button type="primary" onClick={() => next()}>
            Feedback
          </Button>
        );
      case 2:
        return (
          <Button type="primary" onClick={() => next()}>
            Decision
          </Button>
        );
      default:
        return (
          <Button type="primary" onClick={() => next()}>
            Edit Decision
          </Button>
        );
    }
  };
  return (
    <div className="candidate-details-timeline">
      <div className="steps-action">
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Edit Decision
          </Button>
        )}
        {currentButton(current)}
      </div>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} description={item.description} />
        ))}
      </Steps>
    </div>
  );
}
