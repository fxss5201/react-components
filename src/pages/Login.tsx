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
  ProConfigProvider,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
  setAlpha,
} from '@ant-design/pro-components'
import { Space, Tabs, App, theme as antdTheme } from 'antd'
import type { CSSProperties } from 'react'
import { useState, Activity } from 'react'
import { useNavigateFn } from '../Hooks/useNavigateFn'
import { useTheme } from '../storeHooks/useTheme'
import { useLocale } from '../Hooks/useLocale'
import LayoutTheme from '../layout/LayoutTheme'
import LayoutLocale from '../layout/LayoutLocale'

type LoginType = 'phone' | 'account'


function Login() {
  const navigate = useNavigateFn()
  const { theme } = useTheme()
  const locale = useLocale()
  const { message } = App.useApp()
  const { token } = antdTheme.useToken()
  const [loginType, setLoginType] = useState<LoginType>('account')

  const iconStyles: CSSProperties = {
    marginInlineStart: '16px',
    color: setAlpha(token.colorTextBase, 0.2),
    fontSize: '24px',
    verticalAlign: 'middle',
    cursor: 'pointer',
  }

  return (
    <ProConfigProvider hashed={false} dark={theme === 'dark'}>
      <div className='h-screen p-25' style={{ backgroundColor: token.colorBgContainer }}>
        <div className='fixed top-4 right-8 flex items-center'>
          <LayoutTheme />
          <LayoutLocale className='ml-8' />
        </div>
        <LoginForm
          logo="https://github.githubassets.com/favicons/favicon.png"
          title="Github"
          subTitle={locale === 'zh' ? '全球最大的代码托管平台' : 'The world’s leading software development platform'}
          actions={
            <Space>
              {locale === 'zh' ? '其他登录方式' : 'Other login methods'}
              <AlipayCircleOutlined style={iconStyles} />
              <TaobaoCircleOutlined style={iconStyles} />
              <WechatOutlined style={iconStyles} />
            </Space>
          }
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
          ></Tabs>
          <Activity mode={loginType === 'account' ? 'visible' : 'hidden'}>
            <>
              <ProFormText
                name="username"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={'prefixIcon'} />,
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
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={'prefixIcon'} />,
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
            </>
          </Activity>
          <Activity mode={loginType === 'phone' ? 'visible' : 'hidden'}>
            <>
              <ProFormText
                fieldProps={{
                  size: 'large',
                  prefix: <MobileOutlined className={'prefixIcon'} />,
                }}
                name="mobile"
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
                  prefix: <LockOutlined className={'prefixIcon'} />,
                }}
                captchaProps={{
                  size: 'large',
                }}
                placeholder={locale === 'zh' ? '请输入验证码' : 'Please input captcha'}
                captchaTextRender={(timing, count) => {
                  if (timing) {
                    return locale === 'zh' ? `${count}s ${'获取验证码'}` : `${count}s ${'Get captcha'}`
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
          <div
            style={{
              marginBlockEnd: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              {locale === 'zh' ? '自动登录' : 'Auto login'}
            </ProFormCheckbox>
            <a
              style={{
                float: 'right',
              }}
            >
              {locale === 'zh' ? '忘记密码' : 'Forgot password'}
            </a>
          </div>
        </LoginForm>
      </div>
    </ProConfigProvider>
  )
}

export default Login
