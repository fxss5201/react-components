import FormBlock from '@/components/FormBlock'
import type { FormItemsUnion } from '@/components/FormBlock'
import { Form } from 'antd'

function FormBlockPassword() {
  const [form] = Form.useForm()
  const items: FormItemsUnion[] = [
    {
      type: 'Password',
      fieldProps: {
        allowClear: true,
        placeholder: '请输入密码',
      },
      label: '密码',
      name: 'password',
      rules: [{ required: true, message: '请输入密码' }]
    },
    {
      type: 'Password',
      fieldProps: {
        allowClear: true,
        placeholder: '请输入密码',
      },
      label: '确认密码',
      name: 'confirmPassword',
      dependencies: ['password'],
      rules: [
        { required: true, message: '请输入确认密码' },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue('password') === value) {
              return Promise.resolve()
            }
            return Promise.reject(new Error('两次输入密码不一致'))
          }
        })
      ]
    },
    {
      type: 'Button',
      fieldProps: {
        type: 'primary',
        htmlType: 'submit',
        children: '提交'
      },
      label: null
    },
  ]

  return (
    <FormBlock
      name='formBlockPassword'
      layout='vertical'
      autoComplete='off'
      form={form}
      items={items}
      onFinish={values => console.log(values)}
    ></FormBlock>
  )
}

export default FormBlockPassword
