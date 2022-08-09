import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { Modal, Button, Input, Form, DatePicker, TimePicker, AutoComplete } from 'antd';
import { CheckOutlined, CloseOutlined, UserOutlined } from '@ant-design/icons';
import { ICreateAppointmentProp } from 'shared/types';

export default function CreateAppointment({ isShowed, setVisible, candidate_id }: ICreateAppointmentProp) {
  const onFinish = (values: any) => {
    console.log('success', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const { TextArea } = Input;
  const renderTitle = (title: string) => (
    <span>
      {title}
      <Link style={{ float: 'right' }} to="/candidate-list" target="_blank" rel="noopener noreferrer">
        All Candidates
      </Link>
    </span>
  );
  const renderItem = (name: string, id: string) => ({
    value: id,
    label: (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        {name}
        <span>
          <UserOutlined /> {id}
        </span>
      </div>
    ),
  });
  const options = [
    {
      label: renderTitle('Candidates'),
      options: [
        renderItem('David', 'ID13245451'),
        renderItem('dsasadaf', 'ID1324867561'),
        renderItem('das', 'ID1387661'),
        renderItem('hgjgh', 'ID1324586761'),
      ],
    },
  ];
  return (
    <Modal
      className="create-appointment"
      visible={isShowed}
      title="Create Appointment"
      onCancel={() => setVisible(false)}
      footer="">
      <div className="create-appointment__container">
        <Form
          className="input"
          labelCol={{ span: 6 }}
          layout="horizontal"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}>
          <Form.Item
            label="Candidate ID"
            name="candidate_id"
            rules={[{ required: true, message: 'Please input your Candidate ID!' }]}>
            <AutoComplete
              dropdownClassName="certain-category-search-dropdown"
              dropdownMatchSelectWidth={500}
              style={{ width: '100%' }}
              defaultValue={candidate_id}
              options={options}>
              <Input.Search size="large" placeholder="input here" />
            </AutoComplete>
          </Form.Item>
          <Form.Item
            label="Date of Interview"
            name="date_of_interview"
            rules={[{ required: true, message: 'Please input your Date of Interview!' }]}>
            <DatePicker className="width-100" size="large" />
          </Form.Item>
          <Form.Item
            label="Time Range"
            name="time_range"
            rules={[{ required: true, message: 'Please input your Time Range!' }]}>
            <TimePicker format="h:mm a" size="large" className="width-100" />
          </Form.Item>
          <Form.Item
            label="Interviewers"
            name="interviewers"
            rules={[{ required: true, message: 'Please input your Interviewers!' }]}>
            <TextArea autoSize maxLength={50} className="width-100" size="large" placeholder="Input interviewers" />
          </Form.Item>
          <Form.Item
            label="Agent Support"
            name="agent_support"
            rules={[{ required: true, message: 'Please input your Agent Support!' }]}>
            <TextArea autoSize maxLength={50} className="width-100" size="large" placeholder="Input agent support" />
          </Form.Item>
          <Form.Item label="Topic" name="topic" rules={[{ required: true, message: 'Please input your Topic!' }]}>
            <TextArea placeholder="Input Topic" autoSize className="width-100" size="large" showCount maxLength={50} />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please input your Description!' }]}>
            <TextArea className="width-100" size="large" autoSize showCount maxLength={300} />
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
