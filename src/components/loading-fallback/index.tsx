import { Spin } from 'antd';
import React from 'react';
import './index.scss';

const LoadingFallBack: React.FC = () => (
  <div className="example">
    <Spin size="large" />
  </div>
);

export default LoadingFallBack;
