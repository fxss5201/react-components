import { useState } from 'react';
import { useCountDown } from 'ahooks'
import { Form, Input, Button } from 'antd'
import { ShakeOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import type { GetProps } from 'antd'

type FormCaptchaType = GetProps<typeof Input> & {
  onGetCaptcha?: () => Promise<void>
}

function FormCaptcha(props: FormCaptchaType) {
  const { onGetCaptcha, ...restProps } = props
  const { t } = useTranslation()
  const [targetDate, setTargetDate] = useState<number>()
  const [loading, setLoading] = useState<boolean>(false)

  const [countdown] = useCountDown({
    targetDate
  })

  return (
    <Form.Item label={null}>
      <div className='flex items-center'>
        <div className='flex-auto'>
          <Form.Item
            name="captcha"
            noStyle
            rules={[
              {
                required: true,
                message: t('login.Please input captcha!', { defaultValue: '请输入验证码！' }),
              },
              {
                pattern: /^\d{6}$/,
                message: t('login.Captcha format error!', { defaultValue: '验证码格式错误！' }),
              },
            ]}
          >
            <Input
              placeholder={t('login.Please input captcha', { defaultValue: '请输入验证码！' })}
              prefix={<ShakeOutlined />}
              allowClear={true}
              {...restProps}
            />
          </Form.Item>
        </div>
        <div className='flex-shrink-0 ml-4'>
          <Button
            loading={loading}
            disabled={countdown > 0}
            onClick={async() => {
              setLoading(true)
              await onGetCaptcha?.().then(() => {
                setTargetDate(Date.now() + 60 * 1000)
              }).finally(() => {
                setLoading(false)
              })
            }}>
            {countdown === 0 
              ? t('login.Get captcha', { defaultValue: '获取验证码' })
              : `${Math.round(countdown / 1000)} ${t('login.seconds later', { defaultValue: '秒后重新获取' })}`
            }
          </Button>
        </div>
      </div>
    </Form.Item>
  )
}

export default FormCaptcha
