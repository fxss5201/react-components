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
import { useNavigate } from 'react-router'
import LayoutTheme from '@/layout/LayoutTheme'
import LayoutLocale from '@/layout/LayoutLocale'
import config from '@/config'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()
  const navigate = useNavigate()
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
      <div className='my-6 text-center text-2xl font-bold'>{t('resetPassword.Reset password', { defaultValue: '重置密码' })}</div>
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
          message.success(t('resetPassword.Password reset success', { defaultValue: '密码重置成功' }))
          navigate('/login')
        }}
      >
        <ProFormText
          name='username'
          fieldProps={{
            size: 'large',
            prefix: <UserOutlined />,
          }}
          placeholder={t('resetPassword.Username', { defaultValue: '用户名' })}
          rules={[
            {
              required: true,
              message: t('resetPassword.Please input username!', { defaultValue: '请输入用户名!' }),
            },
          ]}
        />
        <ProFormText
          fieldProps={{
            size: 'large',
            prefix: <MobileOutlined />,
          }}
          name='mobile'
          placeholder={t('resetPassword.Mobile', { defaultValue: '手机号' })}
          rules={[
            {
              required: true,
              message: t('resetPassword.Please input mobile!', { defaultValue: '请输入手机号!' }),
            },
            {
              pattern: /^1\d{10}$/,
              message: t('resetPassword.Mobile format error!', { defaultValue: '手机号格式错误!' }),
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
          placeholder={t('resetPassword.Please input captcha', { defaultValue: '请输入验证码' })}
          captchaTextRender={(timing, count) => {
            if (timing) {
              return `${count} ${t('resetPassword.seconds later', { defaultValue: '秒后重新获取' })}`
            }
            return t('resetPassword.Get captcha', { defaultValue: '获取验证码' })
          }}
          name='captcha'
          rules={[
            {
              required: true,
              message: t('resetPassword.Please input captcha!', { defaultValue: '请输入验证码!' }),
            },
          ]}
          onGetCaptcha={async () => {
            message.success(t('resetPassword.Get captcha success!', { defaultValue: '获取验证码成功!' }));
          }}
        />
        <ProFormText.Password
          name='password'
          fieldProps={{
            size: 'large',
            prefix: <LockOutlined />,
            strengthText: t('resetPassword.Password should contain numbers, letters and special characters, at least 8 characters long.', { defaultValue: '密码必须包含数字、字母和特殊字符，至少8个字符长。' }),
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
                    {t('resetPassword.Strength: medium', { defaultValue: '强度：中等' })}
                  </div>
                )
              }
              if (status === 'ok') {
                return (
                  <div style={{ color: token.colorSuccess }}>
                    {t('resetPassword.Strength: strong', { defaultValue: '强度：强' })}
                  </div>
                )
              }
              return (
                <div style={{ color: token.colorError }}>
                  {t('resetPassword.Strength: weak', { defaultValue: '强度：弱' })}
                </div>
              )
            },
          }}
          placeholder={t('resetPassword.Password', { defaultValue: '密码' })}
          rules={[
            {
              required: true,
              message: t('resetPassword.Please input password!', { defaultValue: '请输入密码！' }),
            },
          ]}
        />
        <ProFormText.Password
          name='passwordConfirm'
          dependencies={['password']}
          fieldProps={{
            size: 'large',
            prefix: <LockOutlined />,
            strengthText: t('resetPassword.Password should contain numbers, letters and special characters, at least 8 characters long.', { defaultValue: '密码必须包含数字、字母和特殊字符，至少8个字符长。' }),
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
                    {t('resetPassword.Strength: medium', { defaultValue: '强度：中等' })}
                  </div>
                )
              }
              if (status === 'ok') {
                return (
                  <div style={{ color: token.colorSuccess }}>
                    {t('resetPassword.Strength: strong', { defaultValue: '强度：强' })}
                  </div>
                )
              }
              return (
                <div style={{ color: token.colorError }}>
                  {t('resetPassword.Strength: weak', { defaultValue: '强度：弱' })}
                </div>
              )
            },
          }}
          placeholder={t('resetPassword.Confirm password', { defaultValue: '确认密码' })}
          rules={[
            {
              required: true,
              message: t('resetPassword.Please input confirm password!', { defaultValue: '请输入确认密码！' }),
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject(t('resetPassword.The new password that you entered do not match!', { defaultValue: '两次输入的密码不一致！' }));
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
            {t('resetPassword.Go to login', { defaultValue: '返回登录' })}
          </a>
        </div>
        <Form.Item>
          <Button type='primary' htmlType='submit' block size='large' loading={loading}>
            {t('resetPassword.Reset password', { defaultValue: '重置密码' })}
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default ResetPassword
