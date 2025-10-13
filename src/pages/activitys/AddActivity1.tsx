import React, { useState } from 'react'
import type { FormProps } from 'antd'
import { Button, Checkbox, Form, Input } from 'antd'

type FieldType = {
  username?: string
  password?: string
  remember?: boolean
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
}

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
}

const AddActivity1: React.FC = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
    remember: true,
  })

  return (
    <div className='px-4 pb-4'>
      <Form
        name="AddActivity1"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
        </Form.Item>

        <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
          <Checkbox checked={form.remember} onChange={(e) => setForm({ ...form, remember: e.target.checked })}>Remember me</Checkbox>
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default AddActivity1
