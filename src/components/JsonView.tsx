import { JsonEditor, githubDarkTheme, githubLightTheme } from 'json-edit-react'
import cn from 'classnames'
import { useTheme } from '../storeHooks/useTheme'
import { useOnCopyFn, useOnErrorFn } from './JsonCommon'
import { type LocaleType } from '../config'

export type JsonViewProps = {
  children: object
  className?: string
  locale?: LocaleType
}

function JsonView({ children, className, locale }: JsonViewProps) {
  const { theme } = useTheme()
  const jsonTheme = theme === 'dark' ? githubDarkTheme : githubLightTheme
  const onCopyFn = useOnCopyFn(locale)
  const onErrorFn = useOnErrorFn(locale)
  return (
    <JsonEditor
      data={children}
      theme={jsonTheme}
      viewOnly={true}
      className={cn('w-full bg-gray-50! dark:bg-gray-950!', className)}
      maxWidth='100%'
      rootFontSize={14}
      showCollectionCount='when-closed'
      enableClipboard={onCopyFn}
      showIconTooltips={true}
      onError={onErrorFn}
    />
  )
}

export default JsonView
