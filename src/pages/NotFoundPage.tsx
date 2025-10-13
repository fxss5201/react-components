import { Button, Result } from 'antd'
import { useRouter } from '../Hooks/useRouter'
import { useTranslation } from 'react-i18next'

function NotFoundPage() {
  const { t } = useTranslation()

  const router = useRouter()
    const goHome = () => {
      router('')
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
