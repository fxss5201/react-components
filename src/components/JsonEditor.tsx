import { Suspense, useState } from 'react'
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
import { useTheme } from '@/storeHooks/useTheme'
import { useTranslation } from 'react-i18next'
import CodeEditor from './CodeEditor'
import JsonRender from './JsonRender'
import useUndo from 'use-undo'
import { useBgLayoutStyles } from '@/Hooks/useStyles'

export type JsonEditorProps = {
  children: object
  viewOnly?: boolean
  enableCopy?: boolean
  enableSearch?: boolean
  className?: string
  searchClassName?: string
  jsonClassName?: string
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
  isCodeEditor = false,
  onUpdate,
  onEdit,
  onDelete,
  onAdd,
  onChange
}: JsonEditorProps) {
  const { styles: bgLayoutStyles } = useBgLayoutStyles()
  const { theme } = useTheme()
  const jsonTheme = theme === 'dark' ? githubDarkTheme : githubLightTheme
  const { t } = useTranslation()
  const { notification } = App.useApp()
  const onCopyFn: CopyFunction = ({ stringValue, type, success, errorMessage }) => {
    if (success) {
      const message = t('components.JsonEditor.copied to clipboard', { defaultValue: '复制成功' })
      const typeMessage = type === 'value' ? t('components.JsonEditor.Value', { defaultValue: '值' }) : t('components.JsonEditor.Path', { defaultValue: '路径' })
      notification.success({
        message: `${typeMessage} ${message}`,
        description: <JsonRender enableCopy={false} codeClassName='max-h-[68vh] overflow-auto'>{stringValue}</JsonRender>,
        duration: 3,
      })
    } else {
      const message = t('components.JsonEditor.Problem copying to clipboard', { defaultValue: '复制失败' })
      notification.error({
        message,
        description: errorMessage || t('components.JsonEditor.Unknown error', { defaultValue: '未知错误' }),
        duration: 3,
      })
    }
  }
  const onErrorFn: OnErrorFunction = ({ error }) => {
    notification.error({
      message: error.code,
      description: error.message || t('components.JsonEditor.Unknown error', { defaultValue: '未知错误' }),
      duration: 3,
    })
  }
  const [searchText, setSearchText] = useState('')
  const [
    { present: jsonData },
    { set: setData, reset: resetData, undo: undoData, redo: redoData, canUndo, canRedo },
  ] = useUndo(children)

  return (
    <div className={cn(className)}>
      <div className={cn('p-[14px] flex items-center flex-wrap rounded-t-md', bgLayoutStyles.bgLayout)}>
        {enableSearch && (
          <Input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder={t('components.JsonEditor.Search', { defaultValue: '搜索' })}
            prefix={<SearchOutlined />}
            className={cn('w-50', searchClassName)}
          />
        )}
        {!viewOnly && (
          <>
            <Tooltip placement="bottom" title={t('components.JsonEditor.Undo', { defaultValue: '撤销' })}>
              <Button type="text" onClick={undoData} disabled={!canUndo}><UndoOutlined /></Button>
            </Tooltip>
            <Tooltip placement="bottom" title={t('components.JsonEditor.Redo', { defaultValue: '重做' })}>
              <Button type="text" onClick={redoData} disabled={!canRedo}><RedoOutlined /></Button>
            </Tooltip>
            <Tooltip placement="bottom" title={t('components.JsonEditor.Reset', { defaultValue: '重置' })}>
              <Button type="text" onClick={() => resetData(children)} disabled={!canUndo}><ReloadOutlined /></Button>
            </Tooltip>
          </>
        )}
      </div>
      <JsonEditorReact
        data={viewOnly ? children : jsonData}
        setData={setData as (data: unknown) => void}
        theme={jsonTheme}
        className={cn('w-full pt-0! rounded-t-none! rounded-b-md!', bgLayoutStyles.bgLayout, jsonClassName)}
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
                    <Spin tip={t('components.JsonEditor.Loading code editor', { defaultValue: '加载代码编辑器中' })} size="large" />
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
