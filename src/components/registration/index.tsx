import React from 'react';
import './index.scss';
import { Modal, Button, Input, Form } from 'antd';
import { IRegistrationProp } from 'shared/types';

export default function Registration({ isShowed, setVisible }: IRegistrationProp) {
  const onFinish = (values: any) => {
    console.log('success', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Modal className="registration" visible={isShowed} title="Welcome !" onCancel={() => setVisible(false)} footer="">
      <div className="registration__container">
        <h2 className="title">Registration</h2>
        <Form className="input" name="input" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
          <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
            <label>
              Email
              <Input size="large" className="input__margin-top-bottom" placeholder="Input email" />
            </label>
          </Form.Item>
          <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
            <label>
              Username
              <Input size="large" className="input__margin-top-bottom" placeholder="Input username" />
            </label>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback>
            <label>
              Password
              <Input.Password size="large" className="input__margin-top-bottom" placeholder="Input password" />
            </label>
          </Form.Item>
          <Form.Item
            name="confirm"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(__, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}>
            <label>
              Confirmed Password
              <Input.Password size="large" className="input__margin-top-bottom" placeholder="Input password" />
            </label>
          </Form.Item>
          <Button size="large" className="register--btn" htmlType="submit" type="primary" block>
            Sign In
          </Button>
        </Form>
        <div className="login">
          <h3>
            Don’t have an Account ? <span onClick={() => setVisible(false)}>Login</span>
          </h3>
        </div>
      </div>
    </Modal>
  );
}
