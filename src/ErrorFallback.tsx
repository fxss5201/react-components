import { type FallbackProps } from 'react-error-boundary'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const goHome = () => {
    resetErrorBoundary()
    navigate('/')
  }
  return (
    <Result
      status="error"
      title={t('system.errorFallback.title')}
      subTitle={t('system.errorFallback.subTitle')}
      extra={[
        <Button type="primary" key="console" onClick={goHome}>{t('system.Home', { defaultValue: '首页' })}</Button>,
        <Button key="buy" onClick={resetErrorBoundary}>{t('system.Retry', { defaultValue: '重试' })}</Button>,
      ]}
    >
      <div className="desc">
        <div className='text-red-600 text-2xl'>{error.message}</div>
        <pre className='text-red-600 whitespace-pre-wrap'>{error.stack}</pre>
      </div>
    </Result>
  )
}

export default ErrorFallback
