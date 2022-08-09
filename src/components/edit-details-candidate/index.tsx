import React, { useState } from 'react';
import './index.scss';
import { Form, Input, Button, DatePicker, Upload } from 'antd';
import { UploadOutlined, EditOutlined, CheckOutlined } from '@ant-design/icons';

export default function EditDetailsCandidate() {
  const [editCandidate, setEditCandidate] = useState<boolean>(true);

  const onFinish = (values: any) => {
    console.log('success', values);
    setEditCandidate(true);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const { TextArea } = Input;
  const onFormLayoutChange = ({ disabled }: { disabled: boolean }) => {
    setEditCandidate(disabled);
  };
  return (
    <div className="edit-details-candidate">
      <div className="edit-btn">
        <Button onClick={() => setEditCandidate(!editCandidate)} size="large" className="btn-primary" type="primary">
          <EditOutlined />
          Edit
        </Button>
      </div>
      <Form
        className="input"
        labelCol={{ span: 6 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onValuesChange={onFormLayoutChange}
        disabled={editCandidate}
        autoComplete="off">
        {!editCandidate && (
          <Button size="large" className="btn-primary" htmlType="submit" type="primary">
            <CheckOutlined />
            Save
          </Button>
        )}
        <Form.Item
          label="First Name"
          name="first_name"
          rules={[{ required: true, message: 'Please input your First Name!' }]}>
          <TextArea autoSize maxLength={50} className="width-100" size="large" placeholder="Input your First Name" />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="last_name"
          rules={[{ required: true, message: 'Please input your Last Name!' }]}>
          <TextArea autoSize maxLength={50} className="width-100" size="large" placeholder="Input name" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="candidate_email"
          rules={[{ required: true, message: 'Please input your Email!' }]}>
          <TextArea autoSize maxLength={50} className="width-100" size="large" placeholder="Input name" />
        </Form.Item>
        <Form.Item
          label="Phone number"
          name="phone_number"
          rules={[{ required: true, message: 'Please input your Phone number!' }]}>
          <TextArea autoSize maxLength={50} className="width-100" size="large" placeholder="Input phone number" />
        </Form.Item>
        <Form.Item
          label="Date of Birth"
          name="date_of_birth"
          rules={[{ required: true, message: 'Please input your Date of Birth!' }]}>
          <DatePicker className="width-100" size="large" />
        </Form.Item>
        <Form.Item label="Position" name="position" rules={[{ required: true, message: 'Please input position!' }]}>
          <TextArea placeholder="Input position" autoSize className="width-100" size="large" showCount maxLength={50} />
        </Form.Item>
        <Form.Item
          label="Qualification"
          name="qualification"
          rules={[{ required: true, message: 'Please input qualification!' }]}>
          <TextArea
            placeholder="Input qualification"
            autoSize
            className="width-100"
            size="large"
            showCount
            maxLength={50}
          />
        </Form.Item>
        <Form.Item label="CV" name="CV" rules={[{ required: true, message: 'Please upload CV!' }]}>
          <Upload listType="picture" className="upload-list-inline" style={{ width: '100%' }}>
            <Button block icon={<UploadOutlined />} className="width-100">
              Upload
            </Button>
          </Upload>
        </Form.Item>
      </Form>
    </div>
  );
}
