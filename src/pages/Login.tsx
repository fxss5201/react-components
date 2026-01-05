import { MobileOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Checkbox, Input, Tabs, App, theme as antdTheme } from 'antd'
import { useState, Activity } from 'react'
import { useNavigate } from 'react-router'
import LayoutTheme from '@/layout/LayoutTheme'
import LayoutLocale from '@/layout/LayoutLocale'
import config from '@/config'
import { useTranslation } from 'react-i18next'
import FormPassword from '@/components/FormPassword'
import FormCaptcha from '@/components/FormCaptcha'
import { loginFn } from '@/store/index'

type LoginType = 'phone' | 'account'
interface LoginFormValues {
  username?: string
  password?: string
  rememberPassword?: boolean
  mobile?: string
  captcha?: string
}

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })
}

function Login() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { message } = App.useApp()
  const { token } = antdTheme.useToken()
  const [ loginType, setLoginType ] = useState<LoginType>('account')
  const [ form ] = Form.useForm()
  const rememberLogin = localStorage.getItem('rememberLogin')
  const formValues: LoginFormValues = {
    ...(rememberLogin
      ? JSON.parse(rememberLogin)
      : {
        username: '',
        password: '',
        rememberPassword: false,
      }),
    mobile: '',
    captcha: '',
  }

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

      <Form<LoginFormValues>
        initialValues={formValues}
        form={form}
        onFinish={async (values: LoginFormValues) => {
          console.log(values)
          if (loginType === 'account') {
            if (values.rememberPassword) {
              localStorage.setItem('rememberLogin', JSON.stringify(values))
            } else {
              localStorage.removeItem('rememberLogin')
            }
          }
          const userInfo = {
            id: 888,
            name: values.username || values.mobile || '',
            img: config.logoImg,
            badge: 10,
            permissionList: values.username === 'admin' ? ['01', '02', '03', '09'] : ['01', '02'],
          }
          await waitTime(2000)
          message.success(t('login.Login success', { defaultValue: '登录成功' }))
          loginFn(userInfo)
        }}
        size='large'
        style={{
          width: '360px',
          margin: '0 auto'
        }}
      >
        <Tabs
          centered
          activeKey={loginType}
          onChange={(activeKey) => setLoginType(activeKey as LoginType)}
          items={[
            {
              key: 'account',
              label: t('login.Account password login', { defaultValue: '账号密码登录' }),
            },
            {
              key: 'phone',
              label: t('login.Phone login', { defaultValue: '手机号登录' }),
            },
          ]}
          className='mt-6'
        ></Tabs>
        <Activity mode={loginType === 'account' ? 'visible' : 'hidden'}>
          <>
            <Form.Item
              name='username'
              label={null}
              rules={[
                {
                  required: true,
                  message: t('login.Please input username!', { defaultValue: '请输入用户名！' }),
                },
              ]}
            >
              <Input
                placeholder={t('login.Username: admin or user', { defaultValue: '用户名：admin 或 user' })}
                prefix={<UserOutlined />}
                allowClear={true}
              />
            </Form.Item>
            <Form.Item
              name='password'
              label={null}
              rules={[
                {
                  required: true,
                  message: t('login.Please input password!', { defaultValue: '请输入密码！' }),
                },
              ]}
            >
              <FormPassword />
            </Form.Item>
            <div className='flex items-center justify-between mb-6'>
              <Form.Item
                name='rememberPassword'
                label={null}
                valuePropName='checked'
                noStyle>
                <Checkbox>{t('login.Remember password', { defaultValue: '记住密码' })}</Checkbox>
              </Form.Item>
              <Button
                size='small'
                type='link'
                onClick={() => {
                  navigate('/reset-password')
                }}
              >
                {t('login.Forgot password', { defaultValue: '忘记密码' })}
              </Button>
            </div>
          </>
        </Activity>
        <Activity mode={loginType === 'phone' ? 'visible' : 'hidden'}>
          <>
            <Form.Item
              name='mobile'
              label={null}
              rules={[
                {
                  required: true,
                  message: t('login.Please input mobile!', { defaultValue: '请输入手机号！' }),
                },
                {
                  pattern: /^1\d{10}$/,
                  message: t('login.Mobile format error!', { defaultValue: '手机号格式错误！' }),
                },
              ]}
            >
              <Input
                placeholder={t('login.Mobile', { defaultValue: '手机号' })}
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
                      message.error(t('login.Please input mobile!', { defaultValue: '请输入手机号！' }))
                      reject()
                    } else {
                      if (!/^1\d{10}$/.test(mobile)) {
                        message.error(t('login.Mobile format error!', { defaultValue: '手机号格式错误！' }))
                        reject()
                      } else {
                        setTimeout(() => {
                          message.success(t('login.Get captcha success!', { defaultValue: '获取验证码成功！' }))
                          resolve()
                        }, 2000)
                      }
                    }
                  })
                }}
              />
            </Form.Item>
          </>
        </Activity>
        <Form.Item label={null}>
          <Button type='primary' htmlType='submit' block>
            {t('login.Login', { defaultValue: '登录' })}
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
