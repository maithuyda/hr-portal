import React, { useEffect, useState } from 'react';
import './index.scss';
import { Form, Button, DatePicker, Input, TimePicker } from 'antd';
import { EditOutlined, CheckOutlined } from '@ant-design/icons';
const { TextArea } = Input;

export default function AppointmentDetails() {
  const [editAppointment, setEditAppointment] = useState<boolean>(true);

  const onFinish = (values: any) => {
    console.log('success', values);
    setEditAppointment(true);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const onFormLayoutChange = ({ disabled }: { disabled: boolean }) => {
    setEditAppointment(disabled);
  };
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({
      agent_support: 'dsadasdasd',
      description: 'fafasfdafad',
      interviewers: 'fdsafasdf',
      topic: 'fasdasfas',
    });
  }, []);
  return (
    <div className="edit-details-appointment">
      {editAppointment && (
        <div className="edit-btn">
          <Button
            onClick={() => setEditAppointment(!editAppointment)}
            size="large"
            className="btn-primary"
            type="primary">
            <EditOutlined />
            Edit
          </Button>
        </div>
      )}
      <Form
        className="input"
        labelCol={{ span: 6 }}
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onValuesChange={onFormLayoutChange}
        disabled={editAppointment}
        autoComplete="off">
        {!editAppointment && (
          <Button size="large" className="btn-primary" htmlType="submit" type="primary">
            <CheckOutlined />
            Save
          </Button>
        )}
        <Form.Item
          label="Date of Interview"
          name="date_of_interview"
          rules={[{ required: true, message: 'Please input your Date of Interview!' }]}>
          <DatePicker className="width-100" size="large" />
        </Form.Item>
        <Form.Item
          label="Time Range"
          name="interview_time"
          rules={[{ required: true, message: 'Please input your Time Range!' }]}>
          <TimePicker format="h/mm a" size="large" className="width-100" />
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
      </Form>
    </div>
  );
}
