import { useContext, Suspense, useState } from 'react'
import {
  JsonEditor as JsonEditorReact,
  githubDarkTheme,
  githubLightTheme,
  type UpdateFunction,
  type OnChangeFunction,
  type CopyFunction,
  type OnErrorFunction,
} from 'json-edit-react'
import cn from 'classnames'
import { App, Spin, Input, Button, Tooltip } from 'antd'
import { SearchOutlined, RedoOutlined, UndoOutlined, ReloadOutlined } from '@ant-design/icons'
import { useTheme } from '../storeHooks/useTheme'
import LocaleContext from '../context/LocaleContext'
import { type LocaleType } from '../config'
import CodeEditor from './CodeEditor'
import JsonRender from './JsonRender'
import useUndo from 'use-undo'

export type JsonEditorProps = {
  children: object
  viewOnly?: boolean
  enableCopy?: boolean
  enableSearch?: boolean
  className?: string
  searchClassName?: string
  jsonClassName?: string
  locale?: LocaleType
  isCodeEditor?: boolean
  onUpdate?: UpdateFunction
  onEdit?: UpdateFunction
  onDelete?: UpdateFunction
  onAdd?: UpdateFunction
  onChange?: OnChangeFunction
}

function JsonEditor({
  children,
  viewOnly = false,
  enableCopy = true,
  enableSearch = true,
  className,
  searchClassName,
  jsonClassName,
  locale,
  isCodeEditor = false,
  onUpdate,
  onEdit,
  onDelete,
  onAdd,
  onChange
}: JsonEditorProps) {
  const { theme } = useTheme()
  const jsonTheme = theme === 'dark' ? githubDarkTheme : githubLightTheme
  const localeContext = useContext(LocaleContext)
  const currentLocale = locale || localeContext || 'zh'
  const { notification } = App.useApp()
  const onCopyFn: CopyFunction = ({ stringValue, type, success, errorMessage }) => {
    if (success) {
      const message = currentLocale === 'zh' ? '复制成功' : 'copied to clipboard'
      const typeMessage = type === 'value' ? (currentLocale === 'zh' ? '值' : 'Value') : (currentLocale === 'zh' ? '路径' : 'Path')
      notification.success({
        message: `${typeMessage} ${message}`,
        description: <JsonRender enableCopy={false} className='max-h-[68vh] overflow-auto'>{stringValue}</JsonRender>,
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
  const onErrorFn: OnErrorFunction = ({ error }) => {
    notification.error({
      message: error.code,
      description: error.message || (currentLocale === 'zh' ? '未知错误' : 'Unknown error'),
      duration: 3,
    })
  }
  const [searchText, setSearchText] = useState('')
  const [
    { present: jsonData },
    { set: setData, reset: resetData, undo: undoData, redo: redoData, canUndo, canRedo },
  ] = useUndo(children)

  return (
    <div className={cn('bg-gray-50! dark:bg-gray-950!', className)}>
      <div className='p-[14px] flex items-center flex-wrap'>
        {enableSearch && (
          <Input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder={currentLocale === 'zh' ? '搜索' : 'Search'}
            prefix={<SearchOutlined />}
            className={cn('w-50', searchClassName)}
          />
        )}
        {!viewOnly && (
          <>
            <Tooltip placement="bottom" title={currentLocale === 'zh' ? '撤销' : 'Undo'}>
              <Button type="text" onClick={undoData} disabled={!canUndo}><UndoOutlined /></Button>
            </Tooltip>
            <Tooltip placement="bottom" title={currentLocale === 'zh' ? '重做' : 'Redo'}>
              <Button type="text" onClick={redoData} disabled={!canRedo}><RedoOutlined /></Button>
            </Tooltip>
            <Tooltip placement="bottom" title={currentLocale === 'zh' ? '重置' : 'Reset'}>
              <Button type="text" onClick={() => resetData(children)} disabled={!canUndo}><ReloadOutlined /></Button>
            </Tooltip>
          </>
        )}
      </div>
      <JsonEditorReact
        data={viewOnly ? children : jsonData}
        setData={setData as (data: unknown) => void}
        theme={jsonTheme}
        className={cn('w-full bg-gray-50! dark:bg-gray-950! pt-0!', jsonClassName)}
        maxWidth='100%'
        viewOnly={viewOnly}
        searchText={searchText}
        rootFontSize={14}
        showCollectionCount='when-closed'
        enableClipboard={enableCopy ? onCopyFn : undefined}
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
    </div>
  )
}

export default JsonEditor
