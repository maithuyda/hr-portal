import React from 'react';
import './index.scss';
import { Modal, Button, Input, Form, DatePicker, TimePicker } from 'antd';
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

  const { TextArea } = Input;

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
          <Form.Item name="candidate_id">
            <div className="form-item">
              <label>Candidate ID</label>
              <SearchCandidate />
            </div>
          </Form.Item>
          <Form.Item name="date_of_interview">
            <div className="form-item">
              <label>Date of Interview</label>
              <DatePicker className="width-50-flex" size="large" />
            </div>
          </Form.Item>
          <Form.Item name="time_range">
            <div className="form-item">
              <label>Time Range</label>
              <TimePicker.RangePicker use12Hours format="h:mm a" size="large" className="width-50-flex" />
            </div>
          </Form.Item>
          <Form.Item name="interviewers">
            <div className="form-item">
              <label>Interviewers</label>
              <TextArea
                autoSize
                maxLength={50}
                className="width-50-flex"
                size="large"
                placeholder="Input interviewers"
              />
            </div>
          </Form.Item>
          <Form.Item name="agent_support">
            <div className="form-item">
              <label>Agent Support</label>
              <TextArea
                autoSize
                maxLength={50}
                className="width-50-flex"
                size="large"
                placeholder="Input agent support"
              />
            </div>
          </Form.Item>
          <Form.Item name="topic">
            <div className="form-item">
              <label>Topic</label>
              <TextArea autoSize className="width-50-flex" size="large" showCount maxLength={50} />
            </div>
          </Form.Item>
          <Form.Item name="description">
            <div className="form-item">
              <label>Description</label>
              <TextArea className="width-50-flex" size="large" autoSize showCount maxLength={300} />
            </div>
          </Form.Item>
          <div className="create-appointment-btn">
            <Button size="large" className="btn-primary" htmlType="submit" type="primary">
              <CheckOutlined />
              Create Appointment
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
