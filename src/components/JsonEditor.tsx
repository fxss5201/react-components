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
  /**
   * @description 初始值。|| Initial value.
   */
  children: object
  /**
   * @description 是否只读。|| Whether to read only.
   * @default false
   */
  viewOnly?: boolean
  /**
   * @description 是否启用复制。|| Whether to enable copy.
   * @default true
   */
  enableCopy?: boolean
  /**
   * @description 是否启用搜索。|| Whether to enable search.
   * @default true
   */
  enableSearch?: boolean
  /**
   * @description 自定义类名。|| Custom class name.
   */
  className?: string
  /**
   * @description 搜索框自定义类名。|| Search box custom class name.
   */
  searchClassName?: string
  /**
   * @description JSON 内容自定义类名。|| JSON content custom class name.
   */
  jsonClassName?: string
  /**
   * @description 是否启用代码编辑器。|| Whether to enable code editor.
   * @default false
   */
  isCodeEditor?: boolean
  /**
   * @description 更新回调。|| Update callback.
   */
  onUpdate?: UpdateFunction
  /**
   * @description 编辑回调。|| Edit callback.
   */
  onEdit?: UpdateFunction
  /**
   * @description 删除回调。|| Delete callback.
   */
  onDelete?: UpdateFunction
  /**
   * @description 添加回调。|| Add callback.
   */
  onAdd?: UpdateFunction
  /**
   * @description 变化回调。|| Change callback.
   */
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
