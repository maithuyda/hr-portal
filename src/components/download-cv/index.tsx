import { downloadFile } from '../../actions/download-file';
import React, { useState } from 'react';
// import { useDownloadFile } from '../../customHooks/useDownloadFile';
import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export interface IDownloadCVProp {
  cv_id: string;
}
export default function DownloadCV({ cv_id }: IDownloadCVProp) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleDownloadCV = async () => {
    setIsLoading(true);
    downloadFile({
      link: `https://raw.githubusercontent.com/anubhav-goel/react-download-file-axios/main/sampleFiles/${cv_id}`,
      fileName: 'Lephuong.csv',
    });
    setIsLoading(false);
  };

  return (
    <div className="download-cv">
      <Button
        onClick={handleDownloadCV}
        type="primary"
        shape="circle"
        icon={<DownloadOutlined />}
        size="large"
        loading={isLoading}
      />
    </div>
  );
}
