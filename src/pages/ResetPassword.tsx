import { useState } from 'react'
import { MobileOutlined, UserOutlined } from '@ant-design/icons'
import { App, theme as antdTheme, Form, Input, Button } from 'antd'
import { useNavigate } from 'react-router'
import LayoutTheme from '@/layout/LayoutTheme'
import LayoutLocale from '@/layout/LayoutLocale'
import config from '@/config'
import { useTranslation } from 'react-i18next'
import FormPassword from '@/components/FormPassword'
import FormCaptcha from '@/components/FormCaptcha'

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
  const [ form ] = Form.useForm()

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
        initialValues={{
          username: '',
          mobile: '',
          captcha: '',
          password: '',
          passwordConfirm: '',
        }}
        form={form}
        onFinish={async (values: ResetPasswordFormValues) => {
          setLoading(true)
          console.log(values)
          await waitTime(2000)
          setLoading(false)
          message.success(t('resetPassword.Password reset success', { defaultValue: '密码重置成功' }))
          navigate('/login')
        }}
        size='large'
        style={{
          width: '360px',
          margin: '0 auto'
        }}
      >
        <Form.Item
          name='username'
          label={null}
          rules={[
            {
              required: true,
              message: t('resetPassword.Please input username!', { defaultValue: '请输入用户名!' }),
            },
          ]}
        >
          <Input
            placeholder={t('resetPassword.Username', { defaultValue: '用户名' })}
            prefix={<UserOutlined />}
            allowClear={true}
          />
        </Form.Item>
        <Form.Item
          name='mobile'
          label={null}
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
        >
          <Input
            placeholder={t('resetPassword.Mobile', { defaultValue: '手机号' })}
            prefix={<MobileOutlined />}
            allowClear={true}
          />
        </Form.Item>
        <Form.Item label={null}>
          <FormCaptcha
            onGetCaptcha={async () => {
              return new Promise((resolve, reject) => {
                const { mobile } = form.getFieldsValue()
                if (!mobile) {
                  message.error(t('resetPassword.Please input mobile!', { defaultValue: '请输入手机号！' }))
                  reject()
                } else {
                  if (!/^1\d{10}$/.test(mobile)) {
                    message.error(t('resetPassword.Mobile format error!', { defaultValue: '手机号格式错误！' }))
                    reject()
                  } else {
                    setTimeout(() => {
                      message.success(t('resetPassword.Get captcha success!', { defaultValue: '获取验证码成功！' }))
                      resolve()
                    }, 2000)
                  }
                }
              })
            }}
          />
        </Form.Item>
        <Form.Item
          name='password'
          label={null}
          rules={[
            {
              required: true,
              message: t('resetPassword.Please input password!', { defaultValue: '请输入密码！' }),
            },
          ]}
        >
          <FormPassword />
        </Form.Item>
        <Form.Item
          name='passwordConfirm'
          label={null}
          dependencies={['password']}
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
        >
          <FormPassword
            placeholder={t('resetPassword.Confirm password', { defaultValue: '确认密码' })}
          />
        </Form.Item>
        <div className='flex items-center justify-between mb-6'>
          <div></div>
          <Button
            size='small'
            type='link'
            onClick={() => {
              navigate('/login')
            }}>
            {t('resetPassword.Go to login', { defaultValue: '返回登录' })}
          </Button>
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
