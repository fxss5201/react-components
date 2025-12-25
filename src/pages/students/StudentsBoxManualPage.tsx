import { useRef, useState } from 'react'
import { Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import type { TableProps } from 'antd'
import type { StudentType, StudentGroupType } from '@/types/studentType'
import { studentGroupsHttp, studentListHttp, addStudentHttp, putStudentHttp, getStudentByIdHttp, delStudentHttp } from '@/service/student'
import TablePageBox from '@/components/TablePageBox'
import { useRequest } from 'ahooks'

function StudentsBoxManualPage() {
  const tablePageBoxRef: Parameters<typeof TablePageBox<StudentType>>[0]['ref'] = useRef(null)
  const [groups, setGroups] = useState<StudentGroupType[]>([])
  const [, setGroupId] = useState<number>()
  const { loading } = useRequest(studentGroupsHttp, {
    retryCount: 3,
    onSuccess: (res) => {
      const data = res?.data?.data || []
      const groupId = data[0]?.id
      setGroups(data)
      setGroupId(groupId)
      tablePageBoxRef.current?.formQuery.setFieldsValue({
        groupId,
      })
      tablePageBoxRef.current?.getRun({
        page: 1,
        pageSize: 10,
        groupId,
      })
    }
  })

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
          localKey: 'StudentsBoxManualPage',
          formBlockProps: {
            items: [
              {
                type: 'Select',
                name: 'groupId',
                label: null,
                fieldProps: {
                  loading,
                  allowClear: true,
                  placeholder: '请选择组',
                  options: groups.map((item) => ({
                    label: item.name,
                    value: item.id,
                  })),
                  style: {
                    width: '218px',
                  },
                },
              },
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
                type: 'Select',
                name: 'groupId',
                label: '分组',
                rules: [{ required: true }],
                className: 'pt-4',
                fieldProps: {
                  loading,
                  allowClear: true,
                  placeholder: '请选择组',
                  options: groups.map((item) => ({
                    label: item.name,
                    value: item.id,
                  })),
                },
              },
              {
                type: 'Input',
                name: 'name',
                label: '姓名',
                rules: [{ required: true }],
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
        getOptions={{
          manual: true,
        }}
        getItemFn={getStudentByIdHttp}
        addFn={addStudentHttp}
        putFn={putStudentHttp}
        delFn={delStudentHttp}
      />
    </div>
  )
}

export default StudentsBoxManualPage
