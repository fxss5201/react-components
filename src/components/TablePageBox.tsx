import { useEffect, useState, useImperativeHandle, useRef } from 'react'
import { Button, Form, App, Result, Table } from 'antd'
import type { FormInstance } from 'antd'
import { useRequest } from 'ahooks'
import TablePage from '@/components/TablePage'
import { useTranslation } from 'react-i18next'
import type { TablePageProps } from '@/components/TablePage'
import type { AxiosResponse } from 'axios'
import type { FormItemsUnion } from '@/components/FormBlock'

/**
 * @description 表格分页组件，包含请求逻辑。|| Table pagination component with request logic.
 * @param T 表格数据类型。|| Table data type.
 * @param F 搜索表单数据类型。|| Search form data type.
 */
export interface TablePageBoxProps<T = any, F = any> {
  /**
 * @description 表格分页组件， columns 参数不需要配置 操作列，formBlockProps 只用配置 items，formModalProps 只用配置 formBlockItems。|| Table pagination component, columns parameter does not need to configure operation column, formBlockProps only needs to configure items, formModalProps only needs to configure formBlockItems.
 * @param T 表格数据类型。|| Table data type.
 * @param F 搜索表单数据类型。|| Search form data type.
 */
  tablePageProps: Pick<Omit<TablePageProps<T, F>, 'formBlockProps' | 'formModalProps'>, 'rowKey' | 'columns' | 'localKey' | 'actions' | 'sticky'> & {
    /**
     * @description 搜索表单块属性。|| Search form block properties.
     */
    formBlockProps: {
      /**
       * @description 搜索表单块项目。|| Search form block items.
       */
      items: FormItemsUnion[]
    }
    /**
     * @description 弹窗表单块属性。|| Modal form block properties.
     */
    formModalProps: {
      /**
       * @description 弹窗表单块项目。|| Modal form block items.
       */
      formBlockItems: FormItemsUnion[]
    }
  }
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
   */
  delteModalContentKey?: keyof T
  /**
   * @description 删除确认弹窗 ID 键名。|| Delete confirmation modal ID key name.
   */
  delteModalIdKey?: keyof T
}

function TablePageBox<T = any, F = any>(props: TablePageBoxProps<T, F>) {
  const {
    tablePageProps,
    ref,
    modalTitle,
    getFn,
    addFn,
    putFn,
    delFn,
    delteModalContentKey = 'name' as keyof T,
    delteModalIdKey = 'id' as keyof T } = props
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

  const { data: tableData, error, loading, refresh, run: getStudentListRun } = useRequest(getFn, {
    defaultParams: [
      {
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
        getStudentListRun({
          page: newPage,
          pageSize,
          ...formQuery.getFieldsValue()
        })
      }
    }
  })
  const { run: addStudentRun, loading: addLoading } = useRequest(addFn, {
    manual: true,
    onSuccess: () => {
      refresh()
      setIsModalOpen(false)
    }
  })
  const { run: putStudentRun, loading: putLoading } = useRequest(putFn, {
    manual: true,
    onSuccess: () => {
      refresh()
      setIsModalOpen(false)
    }
  })
  const { runAsync: deleteStudentRun } = useRequest(delFn, {
    manual: true
  })
  const handleDeleteOk = async (id: number) => {
    await deleteStudentRun(id)
    refresh()
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
      modalAddFn
    }
  }, [formQuery])

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
      putStudentRun({
        ...formData,
        ...values
      })
    } else {
      addStudentRun(values)
    }
  }
  const handleModalCancel = () => {
    setIsModalOpen(false)
  }

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
        {
          title: '操作',
          dataIndex: 'action',
          render: (_, record) => (
            <>
              <Button color='primary' variant='text' size='small'
                onClick={() => {
                  setIsEdit(true)
                  setFormData({
                    ...record
                  })
                  setIsModalOpen(true)
                }}>编辑</Button>
              <Button color='danger' variant='text' size='small'
                onClick={() => {
                  modal.confirm({
                    title: '确认删除吗？',
                    content: `确认删除 ${record[delteModalContentKey]} 吗？`,
                    closable: true,
                    onOk() {
                      return handleDeleteOk(record[delteModalIdKey]! as number)
                    }
                  })
                }}
              >删除</Button>
            </>
          ),
        },
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
        getStudentListRun({
          page: pagination.current!,
          pageSize: pagination.pageSize!,
        })
      }}
      formBlockProps={{
        form: formQuery,
        layout: 'inline',
        onFinish: (values) => {
          setPage(1)
          getStudentListRun({
            page: 1,
            pageSize,
            ...values
          })
        },
        items: tablePageProps.formBlockProps?.items || []
      }}
      actions={tablePageProps.actions}
      formModalProps={{
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
      }}
    />
  )
}

export default TablePageBox
