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

interface TablePageProps<T = any, F = any> extends GetProps<typeof Table<T>> {
  localKey?: string
  formBlockProps?: FormBlockProps<F>
  actions?: React.ReactNode
  formModalProps?: FormModalProps
  formBlockFull?: boolean
  tableSetting?: boolean
  tablePage?: {
    className?: string
    classNames?: {
      root?: string
      formBlock?: string
      table?: string
      header?: string
      actions?: string
      tableSetting?: string
    }
    style?: React.CSSProperties
    styles?: {
      root?: React.CSSProperties
      formBlock?: React.CSSProperties
      table?: React.CSSProperties
      header?: React.CSSProperties
      actions?: React.CSSProperties
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
                  {actions}
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
                {actions}
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
