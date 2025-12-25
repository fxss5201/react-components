import { useEffect, useState, useImperativeHandle, useRef } from 'react'
import { Button, Form, App, Result, Table } from 'antd'
import type { FormInstance, ModalProps, FormProps } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { useRequest } from 'ahooks'
import TablePage from '@/components/TablePage'
import { useTranslation } from 'react-i18next'
import type { TablePageProps } from '@/components/TablePage'
import type { AxiosResponse } from 'axios'
import type { FormItemsUnion } from '@/components/FormBlock'

export type OperationButtonDisplayType = 'icon' | 'text' | 'icon-text'

/**
 * @description 表格分页组件，包含请求逻辑。|| Table pagination component with request logic.
 * @param T 表格数据类型。|| Table data type.
 * @param F 搜索表单数据类型。|| Search form data type.
 */
export interface TablePageBoxProps<T = any, F = any> {
  /**
 * @description 表格分页组件， columns 参数结合 isCustomOperation 需不需要配置 操作列，formBlockProps 只有 items 必须配置，formModalProps 只有 formBlockItems 必须配置。|| Table pagination component, columns parameter needs to configure operation column when isCustomOperation is true, formBlockProps only requires items to be configured, while formModalProps only requires formBlockItems to be configured
 * @param T 表格数据类型。|| Table data type.
 * @param F 搜索表单数据类型。|| Search form data type.
 */
  tablePageProps: Pick<Omit<TablePageProps<T, F>, 'formBlockProps' | 'formModalProps'>, 'rowKey' | 'columns' | 'localKey' | 'actions' | 'sticky'> & {
    /**
     * @description 搜索表单块属性。|| Search form block properties.
     */
    formBlockProps: {
      /**
       * @description 搜索表单块项目,未配置或者为空数组时，不显示搜索表单块。|| Search form block items, when not configured or empty array, the search form block will not be displayed.
       */
      items: FormItemsUnion[]
      /**
       * @description 搜索表单块类名。|| Search form block class name.
       */
      classNames?: FormProps['classNames']
      /**
       * @description 搜索表单块样式。|| Search form block styles.
       */
      styles?: FormProps['styles']
    }
    /**
     * @description 弹窗表单块属性。|| Modal form block properties.
     */
    formModalProps: {
      /**
       * @description 弹窗表单块项目,未配置或者为空数组时，不显示弹窗。|| Modal form block items, when not configured or empty array, the modal block will not be displayed.
       */
      formBlockItems: FormItemsUnion[]
      /**
       * @description 弹窗宽度。|| Modal width.
       */
      width?: ModalProps['width']
      /**
       * @description 弹窗类名。|| Modal class name.
       */
      classNames?: ModalProps['classNames']
      /**
       * @description 弹窗样式。|| Modal styles.
       */
      styles?: ModalProps['styles']
    }
  }
  /**
   * @description 是否自定义操作列，默认为 false ，会自动配置操作列（编辑、删除），如果设置为 true ，则需要手动配置操作列。|| Whether to customize the operation column, default is false, will automatically configure the operation column (edit, delete), if set to true, you need to manually configure the operation column.
   * @default false
   */
  isCustomOperation?: boolean
  /**
   * @description 操作列按钮显示类型，默认为 'icon-text' ，可选 'icon'、'text'、'icon-text'。|| Operation column button display type, default is 'icon-text', optional 'icon'、'text'、'icon-text'.
   * @default 'icon-text'
   */
  operationButtonDisplay?: OperationButtonDisplayType
  /**
   * @description 操作列按钮前置内容，支持函数返回 ReactNode。|| Operation column button before content, supports function to return ReactNode.
   */
  operationButtonBefore?: React.ReactNode | ((record: T) => React.ReactNode)
  /**
   * @description 操作列按钮后置内容，支持函数返回 ReactNode。|| Operation column button after content, supports function to return ReactNode.
   */
  operationButtonAfter?: React.ReactNode | ((record: T) => React.ReactNode)
  /**
   * @description TablePageBox ref
   */
  ref: React.Ref<{
    /**
     * @description 表格 ref。|| Table ref.
     */
    tableRef: Parameters<typeof Table>[0]['ref']
    /**
     * @description 搜索表单实例。|| Search form instance.
     */
    formQuery: FormInstance<F>
    /**
     * @description 弹窗添加函数，一般用于添加新数据。|| Modal add function, generally used to add new data.
     */
    modalAddFn: (record: T) => void
    /**
     * @description 弹窗编辑函数，一般用于编辑数据。|| Modal edit function, generally used to edit data.
     */
    modalEditFn: (record: T) => void
    /**
     * @description 弹窗删除函数，一般用于删除数据。|| Modal delete function, generally used to delete data.
     */
    modalDeleteFn: (record: T) => void
    /**
     * @description 获取表格数据的函数，当 getOptions.manual 为 true 时，需要手动调用该函数获取数据。|| Function to get table data, when getOptions.manual is true, you need to manually call this function to get the data.
     */
    getRun: (params: { page: number, pageSize: number, [key: string]: any }) => void
  }>
  /**
   * @description 弹窗标题。|| Modal title.
   */
  modalTitle?: string
  /**
   * @description 获取表格数据的函数。|| Function to get table data.
   */
  getFn: (params: { page: number, pageSize: number, [key: string]: any }) => Promise<AxiosResponse<{
    data: {
      data: T[]
      total: number
    }
  }>>
  /**
   * @description 获取表格数据的参数配置。|| Configuration for parameters to get table data.
   */
  getOptions?: {
    /**
     * @description 是否手动触发获取表格数据，默认为 false ，如果设置为 true ，则需要使用 ref 手动调用 getRun 函数获取数据。|| Whether to manually trigger the function to get table data, default is false, if set to true, you need to manually call the getRun function through ref to get the data.
     */
    manual?: boolean,
    /**
     * @description 默认获取表格数据的参数，当手动触发获取表格数据时，会合并默认参数和手动传入的参数。|| Default parameters to get table data, when manually trigger the function to get table data, the default parameters and manually passed parameters will be merged.
     */
    defaultParams?: any,
  }
  /**
   * @description 表格单行数据的 ID 键名。|| Table single row data ID key name.
   * @default 'id'
   */
  ItemKey?: keyof T
  /**
   * @description 获取表格单行数据的函数。|| Function to get table single row data.
   */
  getItemFn?: (id: number) => Promise<AxiosResponse<{
    data: {
      data: T
    }
  }>>
  /**
   * @description 添加表格数据的函数。|| Function to add table data.
   */
  addFn: (params: T) => Promise<AxiosResponse<{
    data: {
      data: T
    }
  }>>
  /**
   * @description 更新表格数据的函数。|| Function to update table data.
   */
  putFn: (params: T) => Promise<AxiosResponse<{
    data: {
      data: T
    }
  }>>
  /**
   * @description 删除表格数据的函数。|| Function to delete table data.
   */
  delFn: (id: number) => Promise<AxiosResponse<{
    data: any
  }>>
  /**
   * @description 删除确认弹窗内容的键名。|| Delete confirmation modal content key name.
   * @default 'name'
   */
  delteModalContentKey?: keyof T
}

function TablePageBox<T = any, F = any>(props: TablePageBoxProps<T, F>) {
  const {
    tablePageProps,
    isCustomOperation = false,
    operationButtonDisplay = 'icon-text',
    operationButtonBefore,
    operationButtonAfter,
    ref,
    modalTitle,
    getFn,
    getOptions = {
      manual: false,
    },
    getItemFn,
    addFn,
    putFn,
    delFn,
    delteModalContentKey = 'name' as keyof T,
    ItemKey = 'id' as keyof T } = props
  const tableRef: Parameters<typeof Table>[0]['ref'] = useRef(null)

  const { t } = useTranslation()
  const { modal } = App.useApp()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [formModal] = Form.useForm()
  const [formQuery] = Form.useForm()
  const [formData, setFormData] = useState<T>()
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [total, setTotal] = useState(0)
  useEffect(() => {
    if (isModalOpen) {
      formModal.setFieldsValue(formData)
    } else {
      formModal.resetFields()
    }
  }, [isModalOpen, formData, formModal])

  const { data: tableData, error, loading, refresh, run: getRun } = useRequest(getFn, {
    ...getOptions,
    retryCount: 3,
    defaultParams: [
      {
        ...(getOptions.defaultParams || {}),
        page,
        pageSize,
      }
    ],
    onSuccess: (res) => {
      const data = res?.data?.data
      setTotal(data.total)
      if (data.total > 0 && page > 1 && data.data.length === 0) {
        const newPage = Math.ceil(data.total / pageSize)
        setPage(newPage)
        getRun({
          page: newPage,
          pageSize,
          ...formQuery.getFieldsValue()
        })
      }
    }
  })
  const { run: addRun, loading: addLoading } = useRequest(addFn, {
    manual: true,
    retryCount: 3,
    onSuccess: () => {
      refresh()
      setIsModalOpen(false)
    }
  })
  const { run: putRun, loading: putLoading } = useRequest(putFn, {
    manual: true,
    retryCount: 3,
    onSuccess: () => {
      refresh()
      setIsModalOpen(false)
    }
  })
  const { runAsync: deleteRunAsync } = useRequest(delFn, {
    manual: true,
    retryCount: 3,
  })
  const handleDeleteOk = async (id: number) => {
    await deleteRunAsync(id)
    refresh()
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const modalEditFn = async (record: T) => {
    setIsEdit(true)
    if (getItemFn) {
      const res = await getItemFn(record[ItemKey]! as number)
      console.log(res)
      setFormData({
        ...record,
        ...res?.data?.data,
      })
    } else {
      setFormData(record)
    }
    setIsModalOpen(true)
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const modalDeleteFn = (record: T) => {
    modal.confirm({
      title: '删除提示',
      content: `确认删除 ${record[delteModalContentKey]} 吗？`,
      closable: true,
      onOk() {
        return handleDeleteOk(record[ItemKey]! as number)
      }
    })
  }

  useImperativeHandle(ref, () => {
    const modalAddFn = (record: T) => {
      setIsEdit(false)
      setFormData(record)
      setIsModalOpen(true)
    }
    return {
      tableRef,
      formQuery,
      modalAddFn,
      modalEditFn,
      modalDeleteFn,
      getRun,
    }
  }, [formQuery, modalEditFn, modalDeleteFn, getRun])

  if (error) {
    return (
      <Result
        status='error'
        title={error.message}
        extra={[
          <Button key='Request Again' onClick={refresh} loading={loading}>{t('components.TablePage.Request Again', { defaultValue: '重新请求' })}</Button>,
        ]}
      />
    )
  }

  const handleModalOk = (values: T) => {
    if (isEdit) {
      putRun({
        ...formData,
        ...values
      })
    } else {
      addRun(values)
    }
  }
  const handleModalCancel = () => {
    setIsModalOpen(false)
  }

  const operationButtonIcon = ['icon', 'icon-text'].includes(operationButtonDisplay)
  const operationButtonText = ['text', 'icon-text'].includes(operationButtonDisplay)

  return (
    <TablePage<T>
      sticky={{
        offsetHeader: 158,
      }}
      {...tablePageProps}
      ref={tableRef}
      loading={loading}
      columns={[
        ...(tablePageProps.columns || []),
        ...(isCustomOperation
          ? []
          : [{
              title: '操作',
              dataIndex: 'operation',
              render: (_: any, record: T) => (
                <>
                  {operationButtonBefore && (
                    typeof operationButtonBefore === 'function'
                      ? operationButtonBefore(record)
                      : operationButtonBefore
                  )}
                  <Button color='primary' variant='text' size='small'
                    icon={operationButtonIcon && <EditOutlined />}
                    onClick={() => {
                      modalEditFn(record)
                    }}
                  >{operationButtonText && '编辑'}</Button>
                  <Button color='danger' variant='text' size='small'
                    icon={operationButtonIcon && <DeleteOutlined />}
                    onClick={() => {
                      modalDeleteFn(record)
                    }}
                  >{operationButtonText && '删除'}</Button>
                  {operationButtonAfter && (
                    typeof operationButtonAfter === 'function'
                      ? operationButtonAfter(record)
                      : operationButtonAfter
                  )}
                </>
              ),
            }]
          ),
      ]}
      dataSource={tableData?.data?.data?.data || []}
      bordered
      scroll={{
        scrollToFirstRowOnChange: true
      }}
      pagination={{
        current: page,
        pageSize,
        total,
        showSizeChanger: true,
        showQuickJumper: true,
        showTotal: (total) => `共 ${total} 条记录`,
      }}
      onChange={(pagination) => {
        setPage(pagination.current!)
        setPageSize(pagination.pageSize!)
        getRun({
          page: pagination.current!,
          pageSize: pagination.pageSize!,
        })
      }}
      formBlockProps={tablePageProps.formBlockProps?.items?.length
        ? {
            form: formQuery,
            layout: 'inline',
            onFinish: (values) => {
              setPage(1)
              getRun({
                page: 1,
                pageSize,
                ...values
              })
            },
            ...tablePageProps.formBlockProps,
            items: tablePageProps.formBlockProps?.items || []
          }
        : undefined
      }
      actions={tablePageProps.actions}
      formModalProps={tablePageProps.formModalProps?.formBlockItems?.length
        ? {
            title: `${isEdit ? '编辑' : '添加'}${modalTitle}`,
            open: isModalOpen,
            onCancel: handleModalCancel,
            okButtonProps: { autoFocus: true, htmlType: 'submit' },
            confirmLoading: isEdit ? putLoading : addLoading,
            modalRender: (dom) => (
              <Form
                form={formModal}
                onFinish={(values) => handleModalOk(values)}
              >
                {dom}
              </Form>
            ),
            forceRender: true,
            formBlockItems: tablePageProps.formModalProps?.formBlockItems || []
          }
        : undefined
      }
    />
  )
}

export default TablePageBox
