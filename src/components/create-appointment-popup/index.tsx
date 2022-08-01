import React from 'react';
import './index.scss';
import { Modal, Button, Input, Form, Select, DatePicker } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { ICreateAppointmentProp } from 'shared/types';
import SearchCandidate from '../search-candidate-autocomplete';

export default function CreateAppointment({ isShowed, setVisible }: ICreateAppointmentProp) {
  const onFinish = (values: any) => {
    console.log('success', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const { Option } = Select;

  return (
    <Modal
      className="create-appointment"
      visible={isShowed}
      title="Welcome !"
      onCancel={() => setVisible(false)}
      footer="">
      <div className="create-appointment__container">
        <h2 className="title">Create Appointment</h2>
        <Form className="input" name="input" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
          <Form.Item>
            <label>Candidate Name</label>
            <SearchCandidate />
          </Form.Item>
          <Form.Item>
            <label>Position</label>
            <Select defaultValue="Sign Up" style={{ width: '30%' }}>
              <Option value="Software Engineer">Software Engineer</Option>
              <Option value="Bussiness Analysist">Bussiness Analysist</Option>
              <Option value="Human Resourse">Human Resourse</Option>
              <Option value="Maketing">Maketing</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <label>Date of Interview</label>
            <DatePicker style={{ width: '50%' }} />
          </Form.Item>
          <Form.Item>
            <label>Interviewers</label>
            <Input size="large" className="input__margin-top-bottom" placeholder="Input username" />
          </Form.Item>
          <Button size="large" className="btn-primary" htmlType="submit" type="primary">
            <CheckOutlined />
            Create Appointment
          </Button>
          <Button size="large" className="btn-primary" onClick={() => setVisible(false)} type="primary">
            <CloseOutlined />
            Cancel
          </Button>
        </Form>
      </div>
    </Modal>
  );
}
