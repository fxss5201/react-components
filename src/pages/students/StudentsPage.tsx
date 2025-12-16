import { useEffect, useState } from 'react'
import { Table, Button, Modal, Form, Input, InputNumber, App } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import type { TableProps } from 'antd'
import type { StudentType } from '@/types/studentType'
import { useRequest } from 'ahooks'
import { studentListHttp, addStudentHttp, putStudentHttp, delStudentHttp } from '@/service/student'

function StudentsPage() {
const { modal } = App.useApp()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [form] = Form.useForm()
  const [queryForm] = Form.useForm()
  const [formData, setFormData] = useState<StudentType>()
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [total, setTotal] = useState(0)
  useEffect(() => {
    if (isModalOpen) {
      form.setFieldsValue(formData)
    } else {
      form.resetFields()
    }
  }, [isModalOpen, formData, form])

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
          ...queryForm.getFieldsValue()
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
      key: 'action',
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
    return <div>错误: {error.message}</div>
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
      <div className='flex justify-between mb-4'>
        <Form form={queryForm} layout='inline' onFinish={(values) => {
          setPage(1)
          getStudentListRun({
            page: 1,
            pageSize,
            ...values
          })
        }}>
          <Form.Item name='name'>
            <Input prefix={<SearchOutlined />} allowClear placeholder='请输入姓名' />
          </Form.Item>
          <Form.Item>
            <Button htmlType='submit' type='primary'>搜索</Button>
          </Form.Item>
        </Form>
        <Button color='primary' onClick={() => {
          setIsEdit(false)
          setFormData({
            name: '',
            age: 0,
          })
          setIsModalOpen(true)
        }}>添加学生</Button>
      </div>
      <Table<StudentType>
        rowKey='id'
        loading={loading}
        columns={columns}
        dataSource={tableData?.data?.data?.data || []}
        bordered
        scroll={{
          scrollToFirstRowOnChange: true,
          y: document.documentElement.clientHeight - 390
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
      />

      <Modal
        title={isEdit ? '编辑学生' : '添加学生'}
        open={isModalOpen}
        onCancel={handleModalCancel}
        okButtonProps={{ autoFocus: true, htmlType: 'submit' }}
        confirmLoading={isEdit ? putLoading : addLoading}
        modalRender={(dom) => (
          <Form
            form={form}
            onFinish={(values) => handleModalOk(values)}
          >
            {dom}
          </Form>
        )}
      >
        <Form.Item name='name' label='姓名' rules={[{ required: true }]} className='pt-4'>
          <Input placeholder='请输入姓名' />
        </Form.Item>
        <Form.Item name='age' label='年龄' rules={[{ required: true }]}>
          <InputNumber min={1} placeholder='请输入年龄' className='w-full' />
        </Form.Item>
      </Modal>
    </div>
  )
}

export default StudentsPage
