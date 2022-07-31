import React, { useState } from 'react';
import './index.scss';
import { Modal, Button, Input } from 'antd';
import { IRegistrationProp } from 'shared/types';

export default function Registration({ isShowed, setVisible }: IRegistrationProp) {
  const [email, setEmail] = useState('');

  const [username, setUserName] = useState('');

  const [password, setPassword] = useState('');

  const handleInputEmail = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };
  const handleInputUserName = (event: React.FormEvent<HTMLInputElement>) => {
    setUserName(event.currentTarget.value);
  };
  const handleInputPassword = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };
  const handleSubmitForm = () => {
    console.log('registration', email, username, password);
  };
  return (
    <Modal className="registration" visible={isShowed} title="Register" onCancel={() => setVisible(false)} footer="">
      <div className="registration__container">
        <h3>Welcome</h3>
        <div className="input">
          <label>
            Email <Input onChange={handleInputEmail} placeholder="Input username" />
          </label>
          <label>
            Username <Input onChange={handleInputUserName} placeholder="Input username" />
          </label>
          <label>
            Password <Input.Password onChange={handleInputPassword} placeholder="Input password" />
          </label>
          <label>
            Confirm Password <Input.Password onChange={handleInputPassword} placeholder="Input password" />
          </label>
          <Button onClick={handleSubmitForm} type="primary" block>
            Login
          </Button>
        </div>
      </div>
    </Modal>
  );
}
