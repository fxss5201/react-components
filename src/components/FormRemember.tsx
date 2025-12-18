import { Checkbox, Button } from 'antd'
import { useTranslation } from 'react-i18next'
import type { CheckboxProps } from 'antd'
import { useNavigate } from 'react-router'

type FormRememberType = CheckboxProps

function FormRemember(props: FormRememberType) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  
  return (
    <div className='flex align-center justify-between'>
      <Checkbox {...props} style={{ height: 22 }} />
      <Button
        type='link'
        onClick={() => {
          navigate('/reset-password')
        }}
        size='small'
      >
        {t('login.Forgot password', { defaultValue: '忘记密码' })}
      </Button>
    </div>
  )
}

export default FormRemember
  