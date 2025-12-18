import { useState } from 'react'
import FormBlock from '@/components/FormBlock'
import type { FormItemsUnion } from '@/components/FormBlock'
import { Button, Form, App } from 'antd'

function FormBlockDemo() {
  const [targetKeys, setTargetKeys] = useState<string[]>([])
  const [form] = Form.useForm()
  const { message } = App.useApp()

  const items: FormItemsUnion[] = [
    {
      type: 'Input',
      fieldProps: {
        allowClear: true,
        placeholder: '请输入用户名',
      },
      label: '用户名',
      name: 'username',
      rules: [{ required: true, message: '请输入用户名' }]
    },
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
      type: 'Search',
      fieldProps: {
        allowClear: true,
        placeholder: '请输入搜索',
      },
      label: '搜索',
      name: 'searchField',
      rules: [{ required: true, message: '请输入搜索' }]
    },
    {
      type: 'OTP',
      fieldProps: {},
      label: 'OTP',
      name: 'otpField',
      rules: [{ required: true, message: '请输入OTP' }]
    },
    {
      type: 'Select',
      fieldProps: {
        allowClear: true,
        placeholder: '请选择选项',
        options: [
          { label: '选项1', value: '1' },
          { label: '选项2', value: '2' },
        ]
      },
      label: '选择项',
      name: 'selectField',
      rules: [{ required: true, message: '请选择选项' }]
    },
    {
      type: 'Checkbox',
      fieldProps: {
        children: '是否选中'
      },
      label: '多选框',
      name: 'checkboxField',
      valuePropName: 'checked',
    },
    {
      type: 'CheckboxGroup',
      fieldProps: {
        options: [
          { label: '选项1', value: '1' },
          { label: '选项2', value: '2' },
        ]
      },
      label: '多选框1',
      name: 'checkboxGroupField'
    },
    {
      type: 'Radio',
      fieldProps: {
        children: '是否选中'
      },
      label: '单选框',
      name: 'radioField',
      valuePropName: 'checked',
    },
    {
      type: 'RadioGroup',
      fieldProps: {
        options: [
          { label: '选项1', value: '1' },
          { label: '选项2', value: '2' },
        ]
      },
      label: '单选框',
      name: 'radioGroupField',
      rules: [{ required: true, message: '请选择选项' }]
    },
    {
      type: 'AutoComplete',
      fieldProps: {
        allowClear: true,
        placeholder: '请输入自动完成',
        options: [
          { label: '选项1', value: '1' },
          { label: '选项2', value: '2' },
        ]
      },
      label: '自动完成',
      name: 'autoCompleteField',
      rules: [{ required: true, message: '请输入自动完成' }]
    },
    {
      type: 'Cascader',
      fieldProps: {
        allowClear: true,
        placeholder: '请选择级联选择',
        options: [
          {
            value: 'zhejiang',
            label: 'Zhejiang',
            'aria-label': 'Zhejiang',
            'data-title': 'Zhejiang',
            children: [
              {
                value: 'hangzhou',
                label: 'Hangzhou',
                'aria-label': 'Hangzhou',
                'data-title': 'Hangzhou',
                children: [
                  {
                    value: 'xihu',
                    label: 'West Lake',
                    'aria-label': 'West Lake',
                    'data-title': 'West Lake',
                  },
                ],
              }
            ]
          }
        ]
      },
      label: '级联选择',
      name: 'cascaderField',
      rules: [{ required: true, message: '请选择级联选择' }]
    },
    {
      type: 'ColorPicker',
      fieldProps: {
        allowClear: true,
        format: 'hex'
      },
      label: '颜色选择',
      name: 'colorField',
      rules: [{ required: true, message: '请选择颜色' }]
    },
    {
      type: 'DatePicker',
      fieldProps: {
        allowClear: true,
        placeholder: '请选择日期',
        format: 'YYYY-MM-DD',
      },
      label: '日期选择',
      name: 'dateField',
      rules: [{ required: true, message: '请选择日期' }]
    },
    {
      type: 'TimePicker',
      fieldProps: {
        allowClear: true,
        placeholder: '请选择时间',
        format: 'HH:mm:ss',
      },
      label: '时间选择',
      name: 'timeField',
      rules: [{ required: true, message: '请选择时间' }]
    },
    {
      type: 'InputNumber',
      fieldProps: {
        placeholder: '请输入数字',
        min: 0,
        max: 100,
      },
      label: '数字输入',
      name: 'numberField',
      rules: [{ required: true, message: '请输入数字' }]
    },
    {
      type: 'Mentions',
      fieldProps: {
        allowClear: true,
        placeholder: '请输入提及',
        options: [
          { label: '选项1', value: '1' },
          { label: '选项2', value: '2' },
        ]
      },
      label: '提及',
      name: 'mentionsField',
      rules: [{ required: true, message: '请输入提及' }]
    },
    {
      type: 'Rate',
      fieldProps: {
        allowClear: true
      },
      label: '评分',
      name: 'rateField',
      rules: [{ required: true, message: '请选择评分' }]
    },
    {
      type: 'Slider',
      fieldProps: {
        min: 0,
        max: 10,
      },
      label: '滑动选择',
      name: 'sliderField',
      rules: [{ required: true, message: '请选择滑动选择' }]
    },
    {
      type: 'Switch',
      fieldProps: {
        checkedChildren: '开',
        unCheckedChildren: '关',
      },
      label: '开关',
      name: 'switchField',
      valuePropName: 'checked',
    },
    {
      type: 'Transfer',
      fieldProps: {
        dataSource: [
          {
            key: '0',
            title: '选项1',
            description: '选项1的描述',
          },
          {
            key: '1',
            title: '选项2',
            description: '选项2的描述',
          },
        ],
        render: (item) => item.title,
        titles: ['待选项', '已选项'],
        showSearch: true,
        filterOption: (inputValue, option) =>
          option.title.indexOf(inputValue) !== -1,
        targetKeys,
        onChange: (nextTargetKeys) => setTargetKeys(nextTargetKeys as string[]),
      },
      label: '穿梭框',
      name: 'transferField',
      rules: [{ required: true, message: '请选择穿梭框' }]
    },
    {
      type: 'TreeSelect',
      fieldProps: {
        allowClear: true,
        placeholder: '请选择树选择',
        treeData: [
          {
            title: '选项1',
            value: '1',
            children: [
              {
                title: '选项1-1',
                value: '1-1',
              },
            ],
          },
        ],
      },
      label: '树选择',
      name: 'treeSelectField',
      rules: [{ required: true, message: '请选择树选择' }]
    },
    {
      type: 'Upload',
      fieldProps: {
        name: 'file',
        action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
          console.log(info.fileList)
        },
        children: (
          <Button>点击上传</Button>
        ),
      },
      label: '上传文件',
      name: 'uploadField',
      rules: [{ required: true, message: '请上传文件' }],
      valuePropName: 'fileList',
      getValueFromEvent: (e) => {
        if (Array.isArray(e)) {
          return e
        }
        return e && e.fileList
      },
    },
    {
      type: 'FormPassword',
      fieldProps: {
        allowClear: true,
        placeholder: '请输入密码',
      },
      label: '密码',
      name: 'passwordField',
      rules: [{ required: true, message: '请输入密码' }]
    },
    {
      type: 'FormCaptcha',
      fieldProps: {
        allowClear: true,
        placeholder: '请输入验证码',
        onGetCaptcha: async () => {
          return new Promise((resolve) => {
            setTimeout(() => {
              message.success('获取验证码成功！')
              resolve()
            }, 2000)
          })
        }
      },
      label: '验证码',
      name: 'captchaField'
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
      name='formBlockDemo'
      form={form}
      items={items}
      onFinish={values => console.log(values)}
    ></FormBlock>
  )
}

export default FormBlockDemo