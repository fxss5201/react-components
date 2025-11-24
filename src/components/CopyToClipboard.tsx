import { useState, useCallback, useEffect, useContext } from 'react'
import copy from 'copy-to-clipboard'
import { Button, Tooltip } from 'antd'
import { CopyOutlined, CheckOutlined } from '@ant-design/icons'
import LocaleContext from '@/context/LocaleContext'
import { type LocaleType } from '@/config'

export type CopyToClipboardProps = {
  text?: string,
  getText?: () => string,
  children?: ((props: { copied: boolean, copyToClipboard: () => void }) => React.ReactNode),
  disabled?: boolean,
  timeout?: number,
  onCopy?: (text: string) => void,
  onError?: (error: Error) => void,
  locale?: LocaleType
}

function CopyToClipboard({
  text,
  getText,
  children,
  disabled = false,
  timeout = 2000,
  onCopy,
  onError,
  locale
}: CopyToClipboardProps) {
  const [copied, setCopied] = useState<boolean>(false)
  const [timeoutRef, setTimeoutRef] = useState<NodeJS.Timeout | null>(null)
  const localeContext = useContext(LocaleContext)
  const currentLocale = locale || localeContext || 'zh'

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
      console.error(new Error(currentLocale === 'zh' ? '文本为空' : 'text is empty'))
      onError?.(new Error(currentLocale === 'zh' ? '文本为空' : 'text is empty'))
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
      console.error(new Error(currentLocale === 'zh' ? '复制失败' : 'copy failed'))
      onError?.(new Error(currentLocale === 'zh' ? '复制失败' : 'copy failed'))
    }
  }, [disabled, getText, text, timeout, onCopy, onError, currentLocale])

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
        <span className='mr-2 text-[14px] font-medium font-mono'>{currentLocale === 'zh' ? '复制成功' : 'copy success'}</span>
        <Button type="text" icon={<CheckOutlined />} />
      </>
    ) : (
      <Tooltip title={currentLocale === 'zh' ? '复制' : 'copy'}>
        <Button type="text" icon={<CopyOutlined />} onClick={copyToClipboard} />
      </Tooltip>
    )
  }, [children, copied, copyToClipboard, currentLocale])

  return renderContent()
}

export default CopyToClipboard
