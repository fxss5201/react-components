import { Button, Result } from 'antd'
import { useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'

function NotAuthorizedPage() {
  const { t } = useTranslation()

  const navigate = useNavigate()
  const goHome = () => {
    navigate('/')
  }

  return (
    <Result
      status="403"
      title={t('system.NotAuthorizedPage.title')}
      subTitle={t('system.NotAuthorizedPage.subTitle')}
      extra={<Button type="primary" onClick={goHome}>{t('system.Home')}</Button>}
    />
  )
}

export default NotAuthorizedPage
