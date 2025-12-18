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
} from 'antd'
import FormPassword from '@/components/FormPassword'
import FormCaptcha from '@/components/FormCaptcha'
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
  never

export type FormItemType<T extends Types> = FormItemProps & {
  type: T,
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
}

function FormBlock({ items = [], ...formProps }: FormBlockProps) {
  return (
    <Form {...formProps}>
      {items.map((item, index) => {
        const { fieldProps, type, ...formItemProps } = item
        const Component = FormAll[type]
        
        return (
          <Form.Item {...formItemProps} key={formItemProps.name?.toString() || index}>
            {/* @ts-ignore */}
            <Component {...fieldProps as any} />
          </Form.Item>
        )
      })}
    </Form>
  )
}

export default FormBlock
