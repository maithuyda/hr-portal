import React, { useState, useEffect } from 'react';
import './index.scss';
import { Form, Input, Button, DatePicker, Upload } from 'antd';
import type { UploadProps } from 'antd';
import moment from 'moment';
import { EditOutlined, CheckOutlined, UploadOutlined } from '@ant-design/icons';
const { TextArea } = Input;

const props: UploadProps = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange({ file, fileList }: any) {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
  },
};
export default function CandidateProfile() {
  const [editCandidate, setEditCandidate] = useState<boolean>(true);
  const onFinish = (values: any) => {
    console.log('success', values);
    setEditCandidate(true);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const onFormLayoutChange = ({ disabled }: { disabled: boolean }) => {
    setEditCandidate(disabled);
  };
  const normFile = (event: any) => {
    if (Array.isArray(event)) {
      return event;
    }
    return event?.fileList;
  };
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({
      first_name: 'Divid',
      last_name: 'Maria',
      candidate_email: 'david@example.com',
      phone_number: '0123456789',
      date_of_birth: moment(),
      position: 'Software Developer',
      qualification: 'Computer Science',
      CV: [
        {
          uid: '1',
          name: 'CV.pdf',
          status: 'done',
          response: 'Server Error 500', // custom error message to show
          url: '/view-cv/232',
        },
      ],
    });
  }, []);
  return (
    <div className="candidate-details__content--profile">
      {editCandidate && (
        <div className="edit-btn">
          <Button onClick={() => setEditCandidate(!editCandidate)} size="large" className="btn-primary" type="primary">
            <EditOutlined />
            Edit
          </Button>
        </div>
      )}
      <Form
        className="input"
        labelCol={{ span: 6 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onValuesChange={onFormLayoutChange}
        disabled={editCandidate}
        form={form}
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
          <DatePicker className="width-100" size="large" style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item label="Position" name="position" rules={[{ required: true, message: 'Please input position!' }]}>
          <TextArea
            placeholder="Input position"
            autoSize
            className="width-100"
            size="large"
            showCount={!editCandidate}
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
            showCount={!editCandidate}
            maxLength={50}
          />
        </Form.Item>
        <Form.Item
          label="CV"
          name="CV"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[{ required: false, message: 'Please upload CV!' }]}>
          <Upload {...props}>
            <Button style={{ width: '100%' }} icon={<UploadOutlined />}>
              Upload
            </Button>
          </Upload>
        </Form.Item>
      </Form>
    </div>
  );
}
