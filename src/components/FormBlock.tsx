import { useId, Fragment } from 'react'
import {
  Form,
  Button,
  Checkbox,
  Radio,
  Input,
  Select,
  AutoComplete,
  Cascader,
  ColorPicker,
  DatePicker,
  TimePicker,
  InputNumber,
  Mentions,
  Rate,
  Slider,
  Switch,
  Transfer,
  TreeSelect,
  Upload,
  Row,
  Col,
  Flex,
} from 'antd'
import FormPassword from '@/components/FormPassword'
import FormCaptcha from '@/components/FormCaptcha'
import FormRemember from '@/components/FormRemember'
import type { FormCaptchaType } from '@/components/FormCaptcha'
import type {
  FormProps,
  FormItemProps,
  ButtonProps,
  CheckboxProps,
  RadioProps,
  RadioGroupProps,
  InputProps,
  SelectProps,
  AutoCompleteProps,
  CascaderProps,
  ColorPickerProps,
  DatePickerProps,
  TimePickerProps,
  InputNumberProps,
  MentionsProps,
  RateProps,
  SwitchProps,
  TransferProps,
  TreeSelectProps,
  UploadProps,
  RowProps,
  ColProps,
  FlexProps,
} from 'antd'
import type { GetProps } from 'antd'

export type Types =
  | 'Button'
  | 'Checkbox'
  | 'CheckboxGroup'
  | 'Radio'
  | 'RadioGroup'
  | 'Input'
  | 'Password'
  | 'TextArea'
  | 'Search'
  | 'OTP'
  | 'Select'
  | 'AutoComplete'
  | 'Cascader'
  | 'ColorPicker'
  | 'DatePicker'
  | 'TimePicker'
  | 'InputNumber'
  | 'Mentions'
  | 'Rate'
  | 'Slider'
  | 'Switch'
  | 'Transfer'
  | 'TreeSelect'
  | 'Upload'
  | 'FormPassword'
  | 'FormCaptcha'
  | 'FormRemember'
  | 'Row'
  | 'Col'
  | 'Flex'

// 为不同的表单组件类型定义特定的 fieldProps 类型
export type FieldPropsType<T extends Types> = 
  T extends 'Button' ? ButtonProps :
  T extends 'Checkbox' ? CheckboxProps :
  T extends 'CheckboxGroup' ? GetProps<typeof Checkbox.Group> :
  T extends 'Radio' ? RadioProps :
  T extends 'RadioGroup' ? RadioGroupProps :
  T extends 'Input' ? InputProps :
  T extends 'Password' ? GetProps<typeof Input.Password> :
  T extends 'TextArea' ? GetProps<typeof Input.TextArea> :
  T extends 'Search' ? GetProps<typeof Input.Search> :
  T extends 'OTP' ? GetProps<typeof Input.OTP> :
  T extends 'Select' ? SelectProps :
  T extends 'AutoComplete' ? AutoCompleteProps :
  T extends 'Cascader' ? CascaderProps :
  T extends 'ColorPicker' ? ColorPickerProps :
  T extends 'DatePicker' ? DatePickerProps :
  T extends 'TimePicker' ? TimePickerProps :
  T extends 'InputNumber' ? InputNumberProps :
  T extends 'Mentions' ? MentionsProps :
  T extends 'Rate' ? RateProps :
  T extends 'Slider' ? GetProps<typeof Slider> :
  T extends 'Switch' ? SwitchProps :
  T extends 'Transfer' ? TransferProps :
  T extends 'TreeSelect' ? TreeSelectProps :
  T extends 'Upload' ? UploadProps :
  T extends 'FormPassword' ? GetProps<typeof Input.Password> :
  T extends 'FormCaptcha' ? FormCaptchaType :
  T extends 'FormRemember' ? CheckboxProps :
  T extends 'Row' ? RowProps :
  T extends 'Col' ? ColProps :
  T extends 'Flex' ? FlexProps :
  never

export type FormItemType<T extends Types> = T extends 'Row' | 'Col' | 'Flex'
  ? {
      type: T,
      fieldProps: T extends 'Row' ? RowProps : T extends 'Col' ? ColProps : FlexProps
      childrenProps?: FormItemsUnion[]
    }
  : FormItemProps & {
      type: T
      fieldProps: FieldPropsType<T>
    }

export type FormItemsUnion =
  | FormItemType<'Button'>
  | FormItemType<'Checkbox'>
  | FormItemType<'CheckboxGroup'>
  | FormItemType<'Radio'>
  | FormItemType<'RadioGroup'>
  | FormItemType<'Input'>
  | FormItemType<'Password'>
  | FormItemType<'TextArea'>
  | FormItemType<'Search'>
  | FormItemType<'OTP'>
  | FormItemType<'Select'>
  | FormItemType<'AutoComplete'>
  | FormItemType<'Cascader'>
  | FormItemType<'ColorPicker'>
  | FormItemType<'DatePicker'>
  | FormItemType<'TimePicker'>
  | FormItemType<'InputNumber'>
  | FormItemType<'Mentions'>
  | FormItemType<'Rate'>
  | FormItemType<'Slider'>
  | FormItemType<'Switch'>
  | FormItemType<'Transfer'>
  | FormItemType<'TreeSelect'>
  | FormItemType<'Upload'>
  | FormItemType<'FormPassword'>
  | FormItemType<'FormCaptcha'>
  | FormItemType<'FormRemember'>
  | FormItemType<'Row'>
  | FormItemType<'Col'>
  | FormItemType<'Flex'>

export type FormBlockProps = FormProps & {
  items?: FormItemsUnion[]
}

const FormAll = {
  Button,
  Checkbox,
  CheckboxGroup: Checkbox.Group,
  Radio,
  RadioGroup: Radio.Group,
  Input,
  Password: Input.Password,
  TextArea: Input.TextArea,
  Search: Input.Search,
  OTP: Input.OTP,
  Select,
  AutoComplete,
  Cascader,
  ColorPicker,
  DatePicker,
  TimePicker,
  InputNumber,
  Mentions,
  Rate,
  Slider,
  Switch,
  Transfer,
  TreeSelect,
  Upload,
  FormPassword,
  FormCaptcha,
  FormRemember,
  Row,
  Col,
  Flex,
}

function FormBlock({ items = [], ...formProps }: FormBlockProps) {
  return (
    <Form {...formProps}>
      {items.map((item) => {
        return FormItemRender(item)
      })}
    </Form>
  )
}

function FormItemRender(item: FormItemsUnion) {
  const { fieldProps, type, ...formItemProps } = item
  const Component = FormAll[type]
  const id = useId()

  if (type === 'Row' || type === 'Col' || type === 'Flex') {
    return (
      <Fragment key={id}>
        {/* @ts-ignore */}
        <Component {...fieldProps as any}>
          {item.childrenProps?.map((childItem) => FormItemRender(childItem))}
        </Component>
      </Fragment>
    )
  } else {
    return (
      <Form.Item {...formItemProps} key={id}>
        {/* @ts-ignore */}
        <Component {...fieldProps as any} />
      </Form.Item>
    )
  }
}

export default FormBlock
