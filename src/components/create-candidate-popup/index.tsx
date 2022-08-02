import React from 'react';
import './index.scss';
import { Modal, Button, Input, Form, DatePicker } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { ICreateCandidateProp } from 'shared/types';

export default function CreateCandidate({ isShowed, setVisible }: ICreateCandidateProp) {
  const onFinish = (values: any) => {
    console.log('success', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const { TextArea } = Input;

  return (
    <Modal
      className="create-candidate"
      visible={isShowed}
      title="Welcome !"
      onCancel={() => setVisible(false)}
      footer="">
      <div className="create-candidate__container">
        <h2 className="title">Create candidate</h2>
        <Form className="input" name="input" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
          <Form.Item name="first_name">
            <div className="form-item">
              <label>First Name</label>
              <TextArea autoSize maxLength={50} className="width-50-flex" size="large" placeholder="Input name" />
            </div>
          </Form.Item>
          <Form.Item name="last_name">
            <div className="form-item">
              <label>Last Name</label>
              <TextArea autoSize maxLength={50} className="width-50-flex" size="large" placeholder="Input name" />
            </div>
          </Form.Item>
          <Form.Item name="candidate_email">
            <div className="form-item">
              <label>Email</label>
              <TextArea autoSize maxLength={50} className="width-50-flex" size="large" placeholder="Input name" />
            </div>
          </Form.Item>
          <Form.Item name="phone_number">
            <div className="form-item">
              <label>Phone number</label>
              <TextArea
                autoSize
                maxLength={50}
                className="width-50-flex"
                size="large"
                placeholder="Input phone number"
              />
            </div>
          </Form.Item>
          <Form.Item name="date_of_birth">
            <div className="form-item">
              <label>Date of Birth</label>
              <DatePicker className="width-50-flex" size="large" />
            </div>
          </Form.Item>
          <div className="create-candidate-btn">
            <Button size="large" className="btn-primary" htmlType="submit" type="primary">
              <CheckOutlined />
              Create candidate
            </Button>
            <Button size="large" className="btn-primary" onClick={() => setVisible(false)} type="primary">
              <CloseOutlined />
              Cancel
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
}
