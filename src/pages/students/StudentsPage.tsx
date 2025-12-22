import { useEffect, useState } from 'react'
import { Button, Form, App, Result } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import type { TableProps } from 'antd'
import type { StudentType } from '@/types/studentType'
import { useRequest } from 'ahooks'
import { studentListHttp, addStudentHttp, putStudentHttp, delStudentHttp } from '@/service/student'
import TablePage from '@/components/TablePage'
import { useTranslation } from 'react-i18next'

function StudentsPage() {
  const { t } = useTranslation()
  const { modal } = App.useApp()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [formModal] = Form.useForm()
  const [formQuery] = Form.useForm()
  const [formData, setFormData] = useState<StudentType>()
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

  const { data: tableData, error, loading, refresh, run: getStudentListRun } = useRequest(studentListHttp, {
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
  const { run: addStudentRun, loading: addLoading } = useRequest(addStudentHttp, {
    manual: true,
    onSuccess: () => {
      refresh()
      setIsModalOpen(false)
    }
  })
  const { run: putStudentRun, loading: putLoading } = useRequest(putStudentHttp, {
    manual: true,
    onSuccess: () => {
      refresh()
      setIsModalOpen(false)
    }
  })
  const { runAsync: deleteStudentRun } = useRequest(delStudentHttp, {
    manual: true
  })
  const handleDeleteOk = async (id: number) => {
    await deleteStudentRun(id)
    refresh()
  }
  
  const columns: TableProps<StudentType>['columns'] = [
    {
      title: 'ID',
      dataIndex: 'id'
    },
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
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
                content: `确认删除学生 ${record.name} 吗？`,
                closable: true,
                onOk() {
                  return handleDeleteOk(record.id!)
                }
              })
            }}
          >删除</Button>
        </>
      ),
    },
  ]

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

  const handleModalOk = (values: StudentType) => {
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
    <div className='px-4'>
      <TablePage<StudentType>
        rowKey='id'
        loading={loading}
        columns={columns}
        dataSource={tableData?.data?.data?.data || []}
        bordered
        sticky={{
          offsetHeader: 158,
        }}
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
        localKey='StudentsPage'
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
          items: [
            {
              type: 'Input',
              name: 'name',
              label: null,
              fieldProps: {
                prefix: <SearchOutlined />,
                allowClear: true,
                placeholder: '请输入姓名'
              },
            },
            {
              type: 'Button',
              fieldProps: {
                type: 'primary',
                htmlType: 'submit',
                children: '搜索'
              },
              label: null
            },
          ]
        }}
        actions={(
          <Button color='primary' onClick={() => {
            setIsEdit(false)
            setFormData({
              name: '',
              age: 0,
            })
            setIsModalOpen(true)
          }}>添加学生</Button>
        )}
        formModalProps={{
          title: isEdit ? '编辑学生' : '添加学生',
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
          formBlockItems: [
            {
              type: 'Input',
              name: 'name',
              label: '姓名',
              rules: [{ required: true }],
              className: 'pt-4',
              fieldProps: {
                allowClear: true,
                placeholder: '请输入姓名'
              },
            },
            {
              type: 'InputNumber',
              name: 'age',
              label: '年龄',
              rules: [{ required: true }],
              fieldProps: {
                min: 1,
                placeholder: '请输入年龄',
                className: 'w-full',
              },
            },
          ]
        }}
      />
    </div>
  )
}

export default StudentsPage
