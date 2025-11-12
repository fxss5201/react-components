import { useState } from 'react'
import {
  LockOutlined,
  MobileOutlined,
  UserOutlined,
} from '@ant-design/icons'
import {
  ProFormCaptcha,
  ProFormText,
} from '@ant-design/pro-components'
import { App, theme as antdTheme, Form, Button } from 'antd'
import { useNavigateFn } from '../Hooks/useNavigateFn'
import { useLocale } from '../Hooks/useLocale'
import LayoutTheme from '../layout/LayoutTheme'
import LayoutLocale from '../layout/LayoutLocale'
import config from '../config'

interface ResetPasswordFormValues {
  username: string
  mobile: string
  captcha: string
  password: string
  passwordConfirm: string
}

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })
}

function ResetPassword() {
  const navigate = useNavigateFn()
  const locale = useLocale()
  const { message } = App.useApp()
  const { token } = antdTheme.useToken()
  const [loading, setLoading] = useState(false)

  return (
    <div className='h-screen p-25' style={{ backgroundColor: token.colorBgContainer }}>
      <div className='fixed top-4 right-8 flex items-center'>
        <LayoutTheme />
        <LayoutLocale className='ml-8' />
      </div>
      <div className='flex items-center justify-center'>
        <div className='flex items-center'>
          <img src={config.logoImg} alt={config.logoText} className='w-11 h-11 mr-4' />
          <div className='text-3xl font-bold'>{config.logoText}</div>
        </div>
      </div>
      <div className='my-6 text-center text-2xl font-bold'>{locale === 'zh' ? '重置密码' : 'Reset password'}</div>
      <Form<ResetPasswordFormValues>
        className='w-82 mx-auto'
        initialValues={{
          username: '',
          mobile: '',
          captcha: '',
          password: '',
          passwordConfirm: '',
        }}
        onFinish={async (values: ResetPasswordFormValues) => {
          setLoading(true)
          console.log(values)
          await waitTime(2000)
          setLoading(false)
          message.success(locale === 'zh' ? '密码重置成功' : 'Password reset success')
          navigate('/login')
        }}
      >
        <ProFormText
          name='username'
          fieldProps={{
            size: 'large',
            prefix: <UserOutlined />,
          }}
          placeholder={locale === 'zh' ? '用户名' : 'Username'}
          rules={[
            {
              required: true,
              message: locale === 'zh' ? '请输入用户名!' : 'Please input username!',
            },
          ]}
        />
        <ProFormText
          fieldProps={{
            size: 'large',
            prefix: <MobileOutlined />,
          }}
          name='mobile'
          placeholder={locale === 'zh' ? '手机号' : 'Mobile'}
          rules={[
            {
              required: true,
              message: locale === 'zh' ? '请输入手机号！' : 'Please input mobile!',
            },
            {
              pattern: /^1\d{10}$/,
              message: locale === 'zh' ? '手机号格式错误！' : 'Mobile format error!',
            },
          ]}
        />
        <ProFormCaptcha
          fieldProps={{
            size: 'large',
            prefix: <LockOutlined />,
          }}
          captchaProps={{
            size: 'large',
          }}
          placeholder={locale === 'zh' ? '请输入验证码' : 'Please input captcha'}
          captchaTextRender={(timing, count) => {
            if (timing) {
              return locale === 'zh' ? `${count}秒后重新获取` : `${count} seconds later`
            }
            return locale === 'zh' ? '获取验证码' : 'Get captcha'
          }}
          name='captcha'
          rules={[
            {
              required: true,
              message: locale === 'zh' ? '请输入验证码！' : 'Please input captcha!',
            },
          ]}
          onGetCaptcha={async () => {
            message.success(locale === 'zh' ? '获取验证码成功！' : 'Get captcha success!');
          }}
        />
        <ProFormText.Password
          name='password'
          fieldProps={{
            size: 'large',
            prefix: <LockOutlined />,
            strengthText:
              locale === 'zh' ? '密码应包含数字、字母和特殊字符，至少 8 个字符长。' : 'Password should contain numbers, letters and special characters, at least 8 characters long.',
            statusRender: (value) => {
              const getStatus = () => {
                if (value && value.length > 12) {
                  return 'ok'
                }
                if (value && value.length > 6) {
                  return 'pass'
                }
                return 'poor'
              }
              const status = getStatus()
              if (status === 'pass') {
                return (
                  <div style={{ color: token.colorWarning }}>
                    {locale === 'zh' ? '强度：中' : 'Strength: medium'}
                  </div>
                )
              }
              if (status === 'ok') {
                return (
                  <div style={{ color: token.colorSuccess }}>
                    {locale === 'zh' ? '强度：强' : 'Strength: strong'}
                  </div>
                )
              }
              return (
                <div style={{ color: token.colorError }}>
                  {locale === 'zh' ? '强度：弱' : 'Strength: weak'}
                </div>
              )
            },
          }}
          placeholder={locale === 'zh' ? '密码' : 'Password'}
          rules={[
            {
              required: true,
              message: locale === 'zh' ? '请输入密码！' : 'Please input password!',
            },
          ]}
        />
        <ProFormText.Password
          name='passwordConfirm'
          dependencies={['password']}
          fieldProps={{
            size: 'large',
            prefix: <LockOutlined />,
            strengthText:
              locale === 'zh' ? '密码应包含数字、字母和特殊字符，至少 8 个字符长。' : 'Password should contain numbers, letters and special characters, at least 8 characters long.',
            statusRender: (value) => {
              const getStatus = () => {
                if (value && value.length > 12) {
                  return 'ok'
                }
                if (value && value.length > 6) {
                  return 'pass'
                }
                return 'poor'
              }
              const status = getStatus()
              if (status === 'pass') {
                return (
                  <div style={{ color: token.colorWarning }}>
                    {locale === 'zh' ? '强度：中' : 'Strength: medium'}
                  </div>
                )
              }
              if (status === 'ok') {
                return (
                  <div style={{ color: token.colorSuccess }}>
                    {locale === 'zh' ? '强度：强' : 'Strength: strong'}
                  </div>
                )
              }
              return (
                <div style={{ color: token.colorError }}>
                  {locale === 'zh' ? '强度：弱' : 'Strength: weak'}
                </div>
              )
            },
          }}
          placeholder={locale === 'zh' ? '确认密码' : 'Confirm password'}
          rules={[
            {
              required: true,
              message: locale === 'zh' ? '请输入确认密码！' : 'Please input confirm password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject(new Error(locale === 'zh' ? '两次输入的密码不一致！' : 'The new password that you entered do not match!'));
              },
            }),
          ]}
        />
        <div className='flex items-center justify-between mb-6'>
          <div></div>
          <a onClick={(e) => {
            e.preventDefault()
            navigate('/login')
          }}>
            {locale === 'zh' ? '去登录' : 'Go to login'}
          </a>
        </div>
        <Form.Item>
          <Button type='primary' htmlType='submit' block size='large' loading={loading}>
            {locale === 'zh' ? '重置密码' : 'Reset password'}
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default ResetPassword
