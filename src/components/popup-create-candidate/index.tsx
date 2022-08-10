import React from 'react';
import './index.scss';
import { Modal, Button, Input, Form, DatePicker, Upload } from 'antd';
import { CheckOutlined, CloseOutlined, UploadOutlined } from '@ant-design/icons';
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
      title="Create Candidate"
      onCancel={() => setVisible(false)}
      footer="">
      <div className="create-candidate__container">
        <Form
          className="input"
          labelCol={{ span: 6 }}
          layout="horizontal"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}>
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
            <TextArea
              placeholder="Input position"
              autoSize
              className="width-100"
              size="large"
              showCount
              maxLength={50}
            />
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
            <Upload listType="picture" className="upload-list-inline width-100">
              <Button block icon={<UploadOutlined />}>
                Upload
              </Button>
            </Upload>
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
