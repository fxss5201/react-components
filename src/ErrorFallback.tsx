import { type FallbackProps } from 'react-error-boundary'
import { Button, Result } from 'antd'
import { useRouter } from './Hooks/useRouter'

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const router = useRouter()
  const goHome = () => {
    resetErrorBoundary()
    router('')
  }
  return (
    <Result
      status="error"
      title="发生错误"
      subTitle="请检查并修改以下信息。"
      extra={[
        <Button type="primary" key="console" onClick={goHome}>首页</Button>,
        <Button key="buy" onClick={resetErrorBoundary}>重试</Button>,
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
