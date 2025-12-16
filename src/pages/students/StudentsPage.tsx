import { useEffect, useState } from 'react'
import { Table, Button, Modal, Form, Input, InputNumber, App } from 'antd'
import type { TableProps } from 'antd'
import type { StudentType } from '@/types/studentType'
import { useRequest } from 'ahooks'
import { studentListHttp, addStudentHttp, putStudentHttp, delStudentHttp } from '@/service/student'

function StudentsPage() {
const { modal } = App.useApp()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [form] = Form.useForm()
  const [formData, setFormData] = useState<StudentType>()
  useEffect(() => {
    if (isModalOpen) {
      form.setFieldsValue(formData)
    } else {
      form.resetFields()
    }
  }, [isModalOpen, formData, form])

  const { data: tableData, error, loading, refresh } = useRequest(studentListHttp)
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
    <div className='px-4 pb-4'>
      <div className='flex justify-end mb-4'>
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
        dataSource={tableData?.data?.data || []}
        bordered
        pagination={false}
        // pagination={{
        //   showSizeChanger: true,
        //   showQuickJumper: true,
        //   showTotal: (total) => `共 ${total} 条记录`,
        // }}
        // onChange={(pagination) => {
        //   console.log(pagination)
        // }}
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
