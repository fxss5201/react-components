import { useRef } from 'react'
import { Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import type { TableProps } from 'antd'
import type { StudentType } from '@/types/studentType'
import { studentListHttp, addStudentHttp, putStudentHttp, delStudentHttp } from '@/service/student'
import TablePageBox from '@/components/TablePageBox'

function StudentsBoxPage() {
  const tablePageBoxRef: Parameters<typeof TablePageBox<StudentType>>[0]['ref'] = useRef(null)

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
  ]

  return (
    <div className='px-4'>
      <TablePageBox<StudentType>
        ref={tablePageBoxRef}
        modalTitle='学生'
        tablePageProps={{
          rowKey: 'id',
          columns,
          localKey: 'StudentsBoxPage',
          formBlockProps: {
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
          },
          actions: (
            <Button color='primary' onClick={() => {
              tablePageBoxRef.current?.modalAddFn({
                name: '',
                age: 0,
                groupId: undefined,
              })
            }}>添加学生</Button>
          ),
          formModalProps: {
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
          }
        }}
        getFn={studentListHttp}
        addFn={addStudentHttp}
        putFn={putStudentHttp}
        delFn={delStudentHttp}
      />
    </div>
  )
}

export default StudentsBoxPage
