import { useEffect } from 'react'
import { useImmer } from 'use-immer'
import { Table, Button, Popover, Checkbox } from 'antd'
import { SettingOutlined } from '@ant-design/icons'
import type { GetProps } from 'antd'
import FormBlock from '@/components/FormBlock'
import type { FormBlockProps } from '@/components/FormBlock'
import FormModal from '@/components/FormModal'
import type { FormModalProps } from '@/components/FormModal'
import cn from 'classnames'

/**
 * @description 表格分页组件。|| Table pagination component.
 * @param T 表格数据类型。|| Table data type.
 * @param F 搜索表单数据类型。|| Search form data type.
 */
export interface TablePageProps<T = any, F = any> extends GetProps<typeof Table<T>> {
  /**
   * @description 本地存储键名，用于保存表格列设置。|| Local storage key name for saving table column settings.
   */
  localKey?: string
  /**
   * @description 搜索表单块属性。|| Search form block properties.
   */
  formBlockProps?: FormBlockProps<F>
  /**
   * @description 搜索表单块是否占满宽度。|| Whether the search form block occupies the full width.
   * @default false
   */
  formBlockFull?: boolean
  /**
   * @description 操作按钮。|| Action buttons.
   */
  actions?: React.ReactNode | (() => React.ReactNode)
  /**
   * @description 模态框属性。|| Modal properties.
   */
  formModalProps?: FormModalProps
  /**
   * @description 是否显示表格列设置。|| Whether to display table column settings.
   * @default true
   */
  tableSetting?: boolean
  /**
   * @description 样式设置。|| Style settings.
   */
  tablePage?: {
    /**
     * @description 根元素类名。|| Root element class name.
     */
    className?: string
    /**
     * @description 表单块类名。|| Form block class name.
     */
    classNames?: {
      /**
       * @description 表格根元素类名。|| Table root element class name.
       */
      root?: string
      /**
       * @description 表单块类名。|| Form block class name.
       */
      formBlock?: string
      /**
       * @description 表格类名。|| Table class name.
       */
      table?: string
      /**
       * @description 表格头类名。|| Table header class name.
       */
      header?: string
      /**
       * @description 操作按钮类名。|| Action buttons class name.
       */
      actions?: string
      /**
       * @description 表格列设置类名。|| Table column settings class name.
       */
      tableSetting?: string
    }
    /**
     * @description 表格样式。|| Table styles.
     */
    style?: React.CSSProperties
    /**
     * @description 表格样式。|| Table styles.
     */
    styles?: {
      /**
       * @description 表格根元素样式。|| Table root element styles.
       */
      root?: React.CSSProperties
      /**
       * @description 表单块样式。|| Form block styles.
       */
      formBlock?: React.CSSProperties
      /**
       * @description 表格样式。|| Table styles.
       */
      table?: React.CSSProperties
      /**
       * @description 表格头样式。|| Table header styles.
       */
      header?: React.CSSProperties
      /**
       * @description 操作按钮样式。|| Action buttons styles.
       */
      actions?: React.CSSProperties
      /**
       * @description 表格列设置样式。|| Table column settings styles.
       */
      tableSetting?: React.CSSProperties
    }
  }
}

function TablePage<T = any, F = any>(props: TablePageProps<T, F>) {
  const {
    localKey,
    formBlockProps,
    actions,
    formModalProps,
    formBlockFull = false,
    tableSetting = true,
    tablePage: { className, classNames, style = {}, styles } = {},
    ...tableProps
  } = props

  if (localKey) {
    const savedColumns = localStorage.getItem(localKey)
    if (savedColumns) {
      const savedColumnsObj = JSON.parse(savedColumns)
      tableProps.columns = tableProps.columns!.map(item => {
        // @ts-ignore
        const savedColumn = savedColumnsObj.find((col: { key: string, hidden: boolean }) => col.key === (item.dataIndex || item.key))
        return {
          ...item,
          hidden: savedColumn?.hidden || false,
        }
      })
    }
  }
  const [tableColumns, updateTableColumns] = useImmer(tableProps.columns || [])
  useEffect(() => {
    updateTableColumns(tableProps.columns || [])
  }, [tableProps.columns, updateTableColumns])
  useEffect(() => {
    if (localKey) {
      const saveColumns = tableColumns.map(item => {
        return {
          // @ts-ignore
          key: item.dataIndex || item.key,
          hidden: item.hidden || false,
        }
      })
      localStorage.setItem(localKey, JSON.stringify(saveColumns))
    }
  }, [tableColumns, localKey])

  const tableColumnsPopover = tableColumns.map((item, index) => {
    return (
      // @ts-ignore
      <div key={item.dataIndex || item.key} style={{ marginTop: index === 0 ? 0 : '4px' }}>
        <Checkbox
          checked={!item.hidden}
          onChange={e => {
            updateTableColumns(draft => {
              draft[index].hidden = !e.target.checked
            })
          }}
          // @ts-ignore
          >{item.title || item.dataIndex || item.key}</Checkbox>
      </div>
    )
  })

  return (
    <div
      className={cn('table-page', className || '', classNames?.root || '')}
      style={{ ...style, ...(styles?.root || {}) }}>
      {(formBlockProps || actions || tableSetting) && 
        !formBlockFull
          ? (
            <div
              className={cn('table-page__header', 'flex align-center justify-between mb-4', classNames?.header || '')}
              style={styles?.header || {}}>
              <div className='flex-auto'>
                {formBlockProps && (
                  <FormBlock<F>
                    {...formBlockProps}
                    className={cn('table-page__formBlock', classNames?.formBlock || '')}
                    style={styles?.formBlock || {}} />
                )}
              </div>
              <div
                className={cn('table-page__actions', 'flex-shrink-0 flex align-center', classNames?.actions || '')}
                style={styles?.actions || {}}>
                  {typeof actions === 'function' ? actions() : actions}
                  {tableSetting && (
                    <Popover
                      title='表格列设置'
                      content={tableColumnsPopover}
                      placement='bottomRight'
                      styles={{
                        content: {
                          maxHeight: '50vh',
                          overflowY: 'auto',
                        }
                      }}>
                      <Button icon={<SettingOutlined />}
                        className={cn('table-page__tableSetting', 'ml-4', classNames?.tableSetting || '')}
                        style={styles?.tableSetting || {}} />
                    </Popover>
                  )}
                </div>
            </div>
          )
          : (
            <div
              className={cn('table-page__header', 'mb-4', classNames?.header || '')}
              style={styles?.header || {}}>
              {formBlockProps && (
                <FormBlock<F>
                  {...formBlockProps}
                  className={cn('table-page__formBlock', 'mb-4', classNames?.formBlock || '')}
                  style={styles?.formBlock || {}} />
              )}
              <div
                className={cn('table-page__actions', 'flex align-center', classNames?.actions || '')}
                style={styles?.actions || {}}>
                {tableSetting && (
                  <Popover
                    title='表格列设置'
                    content={tableColumnsPopover}
                    placement='bottomLeft'
                    styles={{
                      content: {
                        maxHeight: '50vh',
                        overflowY: 'auto',
                      }
                    }}>
                    <Button icon={<SettingOutlined />}
                      className={cn('table-page__tableSetting', 'mr-4', classNames?.tableSetting || '')}
                      style={styles?.tableSetting || {}} />
                  </Popover>
                )}
                {typeof actions === 'function' ? actions() : actions}
              </div>
            </div>
          )
        }
      <Table<T>
        {...tableProps}
        columns={tableColumns}
        className={cn('table-page__table', classNames?.table || '')}
        style={styles?.table || {}} />

      {formModalProps && (
        <FormModal
          {...formModalProps}
        ></FormModal>
      )}
    </div>
  )
}

export default TablePage
