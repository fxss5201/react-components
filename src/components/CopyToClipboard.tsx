import { useState, useCallback, useEffect } from 'react'
import copy from 'copy-to-clipboard'
import { Button, Tooltip } from 'antd'
import { CopyOutlined, CheckOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'

export type CopyToClipboardProps = {
  /**
   * @description 要复制的文本。|| Text to copy.
   */
  text?: string
  /**
   * @description 自定义获取文本函数。|| Custom function to get text.
   */
  getText?: () => string
  /**
   * @description 自定义子组件。|| Custom child component.
   */
  children?: ((props: { copied: boolean, copyToClipboard: () => void }) => React.ReactNode)
  /**
   * @description 是否禁用复制。|| Whether to disable copying.
   * @default false
   */
  disabled?: boolean
  /**
   * @description 复制成功后显示的超时时间（毫秒）。|| Timeout (in milliseconds) to show the success state after copying.
   * @default 2000
   */
  timeout?: number
  /**
   * @description 复制成功回调。|| Callback when copying is successful.
   */
  onCopy?: (text: string) => void
  /**
   * @description 复制错误回调。|| Callback when copying encounters an error.
   */
  onError?: (error: Error) => void
}

function CopyToClipboard({
  text,
  getText,
  children,
  disabled = false,
  timeout = 2000,
  onCopy,
  onError
}: CopyToClipboardProps) {
  const [copied, setCopied] = useState<boolean>(false)
  const [timeoutRef, setTimeoutRef] = useState<NodeJS.Timeout | null>(null)
  const { t } = useTranslation()

  const clearPreviousTimeout = useCallback(() => {
    if (timeoutRef) {
      clearTimeout(timeoutRef)
      setTimeoutRef(null)
    }
  }, [timeoutRef])

  const copyToClipboard = useCallback(async () => {
    if (disabled) return

    const copyText = getText ? getText() : text
    if (!copyText) {
      console.error(new Error(t('components.CopyToClipboard.text is empty', { defaultValue: '文本为空' })))
      onError?.(new Error(t('components.CopyToClipboard.text is empty', { defaultValue: '文本为空' })))
      return
    }

    const success = copy(copyText)
    if (success) {
      setCopied(true)
      onCopy?.(copyText)

      if (timeout > 0) {
        setTimeoutRef(setTimeout(() => {
          setCopied(false)
          setTimeoutRef(null)
        }, timeout))
      }
    } else {
      setCopied(false)
      console.error(new Error(t('components.CopyToClipboard.copy failed', { defaultValue: '复制失败' })))
      onError?.(new Error(t('components.CopyToClipboard.copy failed', { defaultValue: '复制失败' })))
    }
  }, [disabled, getText, text, timeout, onCopy, onError, t])

  useEffect(() => {
    return () => {
      clearPreviousTimeout()
    }
  }, [clearPreviousTimeout])

  const renderContent = useCallback(() => {
    if (typeof children === 'function') {
      return children({ copied, copyToClipboard })
    }
    return copied ? (
      <>
        <span className='mr-2 text-[14px] font-medium font-mono'>{t('components.CopyToClipboard.copied', { defaultValue: '复制成功' })}</span>
        <Button type="text" icon={<CheckOutlined />} />
      </>
    ) : (
      <Tooltip title={t('components.CopyToClipboard.copy', { defaultValue: '复制' })}>
        <Button type="text" icon={<CopyOutlined />} onClick={copyToClipboard} />
      </Tooltip>
    )
  }, [children, copied, copyToClipboard, t])

  return renderContent()
}

export default CopyToClipboard
