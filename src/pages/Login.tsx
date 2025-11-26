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
import { useNavigateFn } from '@/Hooks/useNavigateFn'
import LayoutTheme from '@/layout/LayoutTheme'
import LayoutLocale from '@/layout/LayoutLocale'
import config from '@/config'
import { useUser } from '@/storeHooks/useUser'
import { useTranslation } from 'react-i18next'

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
  const navigate = useNavigateFn()
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
            {t('login.Other login methods', { defaultValue: '其他登录方式' })}
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
            id: 888,
            name: values.username || values.mobile || '',
            img: config.logoImg,
            badge: 10,
            permissionList: values.username === 'admin' ? ['01', '02', '03', '09'] : ['01', '02'],
          }
          changeUserInfo(userInfo)
          localStorage.setItem(config.loginLocalStorageKey, JSON.stringify(userInfo))
          await waitTime(2000)
          message.success(t('login.Login success', { defaultValue: '登录成功' }))
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
            <ProFormText
              name='username'
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined />,
              }}
              placeholder={t('login.Username: admin or user', { defaultValue: '用户名：admin 或 user' })}
              rules={[
                {
                  required: true,
                  message: t('login.Please input username!', { defaultValue: '请输入用户名！' }),
                },
              ]}
            />
            <ProFormText.Password
              name='password'
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined />,
                strengthText: t('login.Password should contain numbers, letters and special characters, at least 8 characters long.', { defaultValue: '密码必须包含数字、字母和特殊字符，至少8个字符长。' }),
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
                        {t('login.Strength: medium', { defaultValue: '强度：中等' })}
                      </div>
                    )
                  }
                  if (status === 'ok') {
                    return (
                      <div style={{ color: token.colorSuccess }}>
                        {t('login.Strength: strong', { defaultValue: '强度：强' })}
                      </div>
                    )
                  }
                  return (
                    <div style={{ color: token.colorError }}>
                      {t('login.Strength: weak', { defaultValue: '强度：弱' })}
                    </div>
                  )
                },
              }}
              placeholder={t('login.Password', { defaultValue: '密码' })}
              rules={[
                {
                  required: true,
                  message: t('login.Please input password!', { defaultValue: '请输入密码！' }),
                },
              ]}
            />
            <div className='flex items-center justify-between mb-6'>
              <ProFormCheckbox noStyle name='rememberPassword'>
                {t('login.Remember password', { defaultValue: '记住密码' })}
              </ProFormCheckbox>
              <a onClick={(e) => {
                e.preventDefault()
                navigate('/reset-password')
              }}>
                {t('login.Forgot password', { defaultValue: '忘记密码' })}
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
              placeholder={t('login.Mobile', { defaultValue: '手机号' })}
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
            />
            <ProFormCaptcha
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined />,
              }}
              captchaProps={{
                size: 'large',
              }}
              placeholder={t('login.Please input captcha', { defaultValue: '请输入验证码！' })}
              captchaTextRender={(timing, count) => {
                if (timing) {
                  return `${count} ${t('login.seconds later', { defaultValue: '秒后重新获取' })}`
                }
                return t('login.Get captcha', { defaultValue: '获取验证码' })
              }}
              name='captcha'
              rules={[
                {
                  required: true,
                  message: t('login.Please input captcha!', { defaultValue: '请输入验证码！' }),
                },
              ]}
              onGetCaptcha={async () => {
                message.success(t('login.Get captcha success!', { defaultValue: '获取验证码成功！' }));
              }}
            />
          </>
        </Activity>
      </LoginForm>
    </div>
  )
}

export default Login
