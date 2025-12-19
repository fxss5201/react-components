import FormBlock from '@/components/FormBlock'
import type { FormItemsUnion } from '@/components/FormBlock'
import { Form } from 'antd'
import { MobileOutlined } from '@ant-design/icons'

function FormBlockFlexLogin() {
  const [form] = Form.useForm()
  const items: FormItemsUnion[] = [
    {
      type: 'Input',
      fieldProps: {
        allowClear: true,
        placeholder: '请输入手机号',
        prefix: <MobileOutlined />,
      },
      label: null,
      name: 'mobileField',
      rules: [{ required: true, message: '请输入手机号' }]
    },
    {
      type: 'FormPassword',
      fieldProps: {
        allowClear: true,
        placeholder: '请输入密码',
      },
      label: null,
      name: 'passwordField',
      rules: [{ required: true, message: '请输入密码' }]
    },
    {
      type: 'Flex',
      fieldProps: {
        align: 'center',
        justify: 'space-between'
      },
      childrenProps: [
        {
          type: 'Checkbox',
          fieldProps: {
            children: '记住密码',
          },
          label: null,
          name: 'rememberField',
          valuePropName: 'checked',
        },
        {
          type: 'Button',
          fieldProps: {
            size: 'small',
            type: 'link',
            children: '忘记密码',
            onClick: () => console.log('忘记密码')
          },
          label: null
        }
      ]
    },
    {
      type: 'Button',
      fieldProps: {
        type: 'primary',
        htmlType: 'submit',
        children: '登录',
        block: true,
      },
      label: null
    },
  ]
  return (
    <FormBlock
      name='formBlockFlexLogin'
      autoComplete='off'
      form={form}
      items={items}
      onFinish={values => console.log(values)}
      size='large'
      style={{ width: 500 }}
    ></FormBlock>
  )
}

export default FormBlockFlexLogin
