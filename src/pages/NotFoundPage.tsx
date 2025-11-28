import { Button, Result } from 'antd'
import { useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import config from '@/config'

function NotFoundPage() {
  const { t } = useTranslation()

  const navigate = useNavigate()
  const goHome = () => {
    navigate('/')
  }

  useEffect(() => {
    document.title = `${t('system.NotFoundPage.title')} | ${config.logoText}`
  }, [t])

  return (
    <Result
      status="404"
      title={t('system.NotFoundPage.title')}
      subTitle={t('system.NotFoundPage.subTitle')}
      extra={<Button type="primary" onClick={goHome}>{t('system.Home')}</Button>}
    />
  )
}

export default NotFoundPage
