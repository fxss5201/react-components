import { Popover, Input, theme as antdTheme } from 'antd'
import { LockOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import type { GetProps } from 'antd'

type FormPasswordType = GetProps<typeof Input.Password>

function FormPassword(props: FormPasswordType) {
  const { t } = useTranslation()
  const { token } = antdTheme.useToken()
  
  return (
    <Popover
      content={t('login.Password should contain numbers, letters and special characters, at least 8 characters long', { defaultValue: '密码必须包含数字、字母和特殊字符，至少8个字符长。' })}
      title={() => {
        const value = props.value as string
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
      }}
      placement='right'>
      <Input.Password
        placeholder={t('login.Password', { defaultValue: '密码' })}
        prefix={<LockOutlined />}
        allowClear={true}
        {...props}
      />
    </Popover>
  )
}

export default FormPassword
  