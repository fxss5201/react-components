import { Button, Result } from 'antd'
import { useNavigateFn } from '@/Hooks/useNavigateFn'
import { useTranslation } from 'react-i18next'

function NotFoundPage() {
  const { t } = useTranslation()

  const navigate = useNavigateFn()
    const goHome = () => {
      navigate('/')
    }

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
