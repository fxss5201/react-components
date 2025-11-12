import {
  AlipayCircleOutlined,
  LockOutlined,
  MobileOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WechatOutlined,
} from '@ant-design/icons'
import {
  LoginForm,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
  setAlpha,
} from '@ant-design/pro-components'
import { Space, Tabs, App, theme as antdTheme } from 'antd'
import type { CSSProperties } from 'react'
import { useState, Activity } from 'react'
import { useNavigateFn } from '../Hooks/useNavigateFn'
import { useLocale } from '../Hooks/useLocale'
import LayoutTheme from '../layout/LayoutTheme'
import LayoutLocale from '../layout/LayoutLocale'
import config from '../config'
import { useUser } from '../storeHooks/useUser'

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
  const navigate = useNavigateFn()
  const locale = useLocale()
  const { message } = App.useApp()
  const { token } = antdTheme.useToken()
  const [loginType, setLoginType] = useState<LoginType>('account')
  const { changeUserInfo } = useUser()

  const iconStyles: CSSProperties = {
    marginInlineStart: '16px',
    color: setAlpha(token.colorTextBase, 0.2),
    fontSize: '24px',
    verticalAlign: 'middle',
    cursor: 'pointer',
  }

  return (
    <div className='h-screen p-25' style={{ backgroundColor: token.colorBgContainer }}>
      <div className='fixed top-4 right-8 flex items-center'>
        <LayoutTheme />
        <LayoutLocale className='ml-8' />
      </div>
      <LoginForm<LoginFormValues>
        logo={config.logoImg}
        title={config.logoText}
        actions={
          <Space>
            {locale === 'zh' ? '其他登录方式' : 'Other login methods'}
            <AlipayCircleOutlined style={iconStyles} />
            <TaobaoCircleOutlined style={iconStyles} />
            <WechatOutlined style={iconStyles} />
          </Space>
        }
        request={async () => {
          const rememberLogin = localStorage.getItem('rememberLogin')
          if (rememberLogin) {
            return {
              ...JSON.parse(rememberLogin),
              mobile: '',
              captcha: '',
            }
          }
          return {
            username: '',
            password: '',
            rememberPassword: false,
            mobile: '',
            captcha: '',
          }
        }}
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
            name: values.username || values.mobile || '',
            img: config.logoImg,
            badge: 10,
          }
          changeUserInfo(userInfo)
          localStorage.setItem(config.loginLocalStorageKey, JSON.stringify(userInfo))
          await waitTime(2000)
          message.success(locale === 'zh' ? '登录成功' : 'Login success')
          navigate('/')
        }}
      >
        <Tabs
          centered
          activeKey={loginType}
          onChange={(activeKey) => setLoginType(activeKey as LoginType)}
          items={[
            {
              key: 'account',
              label: locale === 'zh' ? '账号密码登录' : 'Account password login',
            },
            {
              key: 'phone',
              label: locale === 'zh' ? '手机号登录' : 'Phone login',
            },
          ]}
          className='mt-6'
        ></Tabs>
        <Activity mode={loginType === 'account' ? 'visible' : 'hidden'}>
          <>
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
            <div className='flex items-center justify-between mb-6'>
              <ProFormCheckbox noStyle name='rememberPassword'>
                {locale === 'zh' ? '记住密码' : 'Remember password'}
              </ProFormCheckbox>
              <a onClick={(e) => {
                e.preventDefault()
                navigate('/reset-password')
              }}>
                {locale === 'zh' ? '忘记密码' : 'Forgot password'}
              </a>
            </div>
          </>
        </Activity>
        <Activity mode={loginType === 'phone' ? 'visible' : 'hidden'}>
          <>
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
          </>
        </Activity>
      </LoginForm>
    </div>
  )
}

export default Login
