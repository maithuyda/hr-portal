import React, { useState, useRef } from 'react';
// import { Link } from 'react-router-dom';
import { Button, message } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import axios from 'axios';

export default function DownloadCV() {
  const [buttonState, setButtonState] = useState(false);
  const preDownloading = () => setButtonState(true);
  const postDownloading = () => setButtonState(false);

  return (
    <div className="download-cv">
      <a href={url} download={name} ref={ref} />
      <Button
        onClick={() => downloadCVFile('fdsafds')}
        type="primary"
        shape="circle"
        icon={<DownloadOutlined />}
        size="large"
        loading={buttonState}
      />
    </div>
  );
}
