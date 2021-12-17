import React, { useEffect } from 'react';
import { Modal, Button, Form, Input, Checkbox } from 'antd';

const UserModal = (props) => {
  const [form] = Form.useForm();
  const { visible, record,handleCancel,onFinish } = props

  // 相当于componentDidmount
  useEffect(() => {
    form.setFieldsValue(record)
  }, [visible])


  const onOk = () => {
    form.submit()
  }


  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  // const onReset = () => {
  //   form.resetFields();
  // };


  return (
    <>
      <Modal title="Basic Modal" visible={visible} onOk={onOk} onCancel={handleCancel} forceRender>
        {/* {JSON.stringify(props.record)} */}
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          form={form}
          // initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your Name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Create_Time"
            name="create_time"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Status"
            name="status"
          >
            <Input />
          </Form.Item>



          {/* <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item> */}
        </Form>
      </Modal>
    </>
  );
};

export default UserModal