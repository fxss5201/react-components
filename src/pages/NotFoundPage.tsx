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
      title={t('NotFoundPage.title')}
      subTitle={t('NotFoundPage.subTitle')}
      extra={<Button type="primary" onClick={goHome}>{t('Home')}</Button>}
    />
  )
}

export default NotFoundPage
