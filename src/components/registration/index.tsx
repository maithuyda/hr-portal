import React from 'react';
import './index.scss';
import { Modal } from 'antd';
import { IRegistrationProp } from 'shared/types';

export default function Registration({ isShowed, setVisible }: IRegistrationProp) {
  return (
    <div className="registration">
      <Modal visible={isShowed} title="Register" onCancel={() => setVisible(false)} footer="">
        <div>
          <h3>Welcome</h3>
        </div>
      </Modal>
    </div>
  );
}
