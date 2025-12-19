import FormBlock from '@/components/FormBlock'
import type { FormItemsUnion } from '@/components/FormBlock'
import { Form } from 'antd'

function FormBlockRowCol() {
  const [form] = Form.useForm()

  const items: FormItemsUnion[] = [
    {
      type: 'Row',
      fieldProps: {
        gutter: { xs: 8, sm: 16, md: 24 },
        justify: 'space-between'
      },
      childrenProps: [
        {
          type: 'Col',
          fieldProps: {},
          childrenProps: [
            {
              type: 'Input',
              fieldProps: {
                allowClear: true,
                placeholder: '请输入用户名',
              },
              label: '用户名',
              name: 'username',
              rules: [{ required: true, message: '请输入用户名' }]
            }
          ]
        },
        {
          type: 'Col',
          fieldProps: {
            span: 12,
          },
          childrenProps: [
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
          ]
        }
      ]
    },
    {
      type: 'TextArea',
      fieldProps: {
        allowClear: true,
        placeholder: '请输入文本',
      },
      label: '文本',
      name: 'textAreaField',
      rules: [{ required: true, message: '请输入文本' }]
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
      name='formBlockRowCol'
      form={form}
      items={items}
      onFinish={values => console.log(values)}
    ></FormBlock>
  )
}

export default FormBlockRowCol