import { useContext } from 'react'
import { type CopyFunction, type OnErrorFunction } from 'json-edit-react'
import { type LocaleType } from '../config'
import { App } from 'antd'
import LocaleContext from '../context/LocaleContext'

export const useOnCopyFn = (locale?: LocaleType): CopyFunction => {
  const localeContext = useContext(LocaleContext)
  const currentLocale = locale || localeContext || 'zh'
  const { notification } = App.useApp()
  return ({ stringValue, type, success, errorMessage }) => {
    if (success) {
      const message = currentLocale === 'zh' ? '复制成功' : 'copied to clipboard'
      const typeMessage = type === 'value' ? (currentLocale === 'zh' ? '值' : 'Value') : (currentLocale === 'zh' ? '路径' : 'Path')
      notification.success({
        message: `${typeMessage} ${message}`,
        description: stringValue,
        duration: 3,
      })
    } else {
      const message = currentLocale === 'zh' ? '复制失败' : 'Problem copying to clipboard'
      notification.error({
        message,
        description: errorMessage || (currentLocale === 'zh' ? '未知错误' : 'Unknown error'),
        duration: 3,
      })
    }
  }
}

export const useOnErrorFn = (locale?: LocaleType): OnErrorFunction => {
  const localeContext = useContext(LocaleContext)
  const currentLocale = locale || localeContext || 'zh'
  const { notification } = App.useApp()
  return ({ error }) => {
    notification.error({
      message: error.code,
      description: error.message || (currentLocale === 'zh' ? '未知错误' : 'Unknown error'),
      duration: 3,
    })
  }
}
