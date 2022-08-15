import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Form } from 'antd';
import './index.scss';
import signInImage from '../../assets/pdf/sample-cv.pdf';
import Registration from '../../components/popup-registration';

export default function SignIn() {
  const [registrationPopup, setRegistrationPopup] = useState(false);

  const navigate = useNavigate();

  const showRegistrationPopup = () => {
    setRegistrationPopup(true);
  };
  const onFinish = (values: any) => {
    localStorage.setItem('username', values.username);
    navigate('/', { replace: true });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="sign-in">
      <div className="sign-in__left">
        <div className="sign-in__left--container">
          <div className="title">
            <h3>Welcome !</h3>
            <h2>Sign in to</h2>
          </div>
          <Form className="input" name="input" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
            <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
              <label>
                Username
                <Input size="large" className="input__margin-top-bottom" placeholder="Input username" />
              </label>
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
              <label>
                Password
                <Input.Password size="large" className="input__margin-top-bottom" placeholder="Input password" />
              </label>
            </Form.Item>
            <Button size="large" className="sign-in-btn" htmlType="submit" type="primary" block>
              Sign In
            </Button>
          </Form>
          <div className="register">
            <h3>
              Don’t have an Account ? <span onClick={showRegistrationPopup}>Register</span>
            </h3>
            <Registration isShowed={registrationPopup} setVisible={setRegistrationPopup} />
          </div>
        </div>
      </div>
      <div className="sign-in__right">
        <img src={signInImage} alt="sign in image" />
      </div>
    </div>
  );
}
