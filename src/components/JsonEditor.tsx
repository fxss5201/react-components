import { useContext, Suspense } from 'react'
import {
  JsonEditor as JsonEditorReact,
  githubDarkTheme,
  githubLightTheme,
  type UpdateFunction,
  type OnChangeFunction,
} from 'json-edit-react'
import cn from 'classnames'
import { Spin } from 'antd'
import { useTheme } from '../storeHooks/useTheme'
import LocaleContext from '../context/LocaleContext'
import { type LocaleType } from '../config'
import CodeEditor from './CodeEditor'
import { useOnCopyFn, useOnErrorFn } from './JsonCommon'

export type JsonViewProps = {
  children: object
  className?: string
  locale?: LocaleType
  isCodeEditor?: boolean
  onUpdate?: UpdateFunction
  onEdit?: UpdateFunction
  onDelete?: UpdateFunction
  onAdd?: UpdateFunction
  onChange?: OnChangeFunction
}

function JsonEditor({ children, className, locale, isCodeEditor = false, onUpdate, onEdit, onDelete, onAdd, onChange }: JsonViewProps) {
  const { theme } = useTheme()
  const jsonTheme = theme === 'dark' ? githubDarkTheme : githubLightTheme
  const localeContext = useContext(LocaleContext)
  const currentLocale = locale || localeContext || 'zh'
  const onCopyFn = useOnCopyFn(currentLocale)
  const onErrorFn = useOnErrorFn(currentLocale)

  return (
    <JsonEditorReact
      data={children}
      theme={jsonTheme}
      className={cn('w-full bg-gray-50! dark:bg-gray-950!', className)}
      maxWidth='100%'
      rootFontSize={14}
      showCollectionCount='when-closed'
      enableClipboard={onCopyFn}
      showIconTooltips={true}
      onUpdate={onUpdate}
      onEdit={onEdit}
      onDelete={onDelete}
      onAdd={onAdd}
      onChange={onChange}
      onError={onErrorFn}
      TextEditor={
        isCodeEditor
          ? (props) => (
              <Suspense
                fallback={
                  <Spin tip={currentLocale === 'zh' ? '加载代码编辑器中' : 'Loading code editor'} size="large" />
                }
              >
                <CodeEditor {...props} />
              </Suspense>
            )
          : undefined
      }
    />
  )
}

export default JsonEditor
