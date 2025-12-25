import { type MockMethod } from 'vite-plugin-mock'
import { type StudentType } from '../src/types/studentType'
import { resultSuccess } from './http'

/**
 * mock 接口的 url前缀 必须为 /mock
 */

let studentList: StudentType[] = [
  {
    id: 1,
    name: '张三',
    age: 18,
    groupId: 1,
  },
  {
    id: 2,
    name: '李四',
    age: 20,
    groupId: 1,
  },
  {
    id: 3,
    name: '王五',
    age: 22,
    groupId: 2,
  },
  {
    id: 4,
    name: '赵六',
    age: 24,
    groupId: 2,
  },
  {
    id: 5,
    name: '王二',
    age: 26,
    groupId: 2,
  },
  {
    id: 6,
    name: '陆',
    age: 28,
    groupId: 1,
  },
  {
    id: 7,
    name: '七',
    age: 30,
    groupId: 1,
  },
  {
    id: 8,
    name: '捌',
    age: 32,
    groupId: 1,
  },
  {
    id: 9,
    name: '玖',
    age: 34,
    groupId: 1,
  },
  {
    id: 10,
    name: '拾',
    age: 36,
    groupId: 1,
  },
  {
    id: 11,
    name: '拾壹',
    age: 38,
    groupId: 1,
  },
  {
    id: 12,
    name: '拾二',
    age: 38,
    groupId: 2,
  },
  {
    id: 13,
    name: '拾三',
    age: 40,
    groupId: 2,
  },
]

export default [
  {
    url: '/mock/students/groups',
    method: 'get',
    timeout: 1000,
    response: () => {
      return resultSuccess([
        {
          id: 1,
          name: '一组',
        },
        {
          id: 2,
          name: '二组',
        },
      ])
    }
  },
  {
    url: '/mock/students',
    method: 'get',
    timeout: 300,
    response: ({ query }: { query: { page: number, pageSize: number, name?: string, groupId?: number } }) => {
      const { page, pageSize, name, groupId } = query
      const start = (page - 1) * pageSize
      const end = start + pageSize
      if (name && groupId) {
        const filterData = studentList.filter((x) => x.name.includes(name) && x.groupId === Number(groupId))
        return resultSuccess({
          data: filterData.slice(start, end),
          total: filterData.length,
        })
      } else if (name) {
        const filterData = studentList.filter((x) => x.name.includes(name))
        return resultSuccess({
          data: filterData.slice(start, end),
          total: filterData.length,
        })
      } else if (groupId) {
        const filterData = studentList.filter((x) => x.groupId === Number(groupId))
        return resultSuccess({
          data: filterData.slice(start, end),
          total: filterData.length,
        })
      } else {
        return resultSuccess({
          data: studentList.slice(start, end),
          total: studentList.length,
        })
      }
    }
  },
  {
    url: '/mock/students/:id',
    method: 'get',
    timeout: 300,
    response: ({ query }: { query: { id: number } }) => {
      return resultSuccess(studentList.find((x) => x.id === Number(query.id)))
    }
  },
  {
    url: '/mock/students',
    method: 'post',
    timeout: 300,
    response: ({ body }: { body: StudentType }) => {
      let id = 1
      if (studentList.length > 0) {
        id = Number(studentList[studentList.length - 1]?.id ?? 0) + 1
      }
      const newItem = {
        ...body,
        id
      }
      studentList.push(newItem)
      return resultSuccess(newItem)
    }
  },
  {
    url: '/mock/students/:id',
    method: 'put',
    timeout: 300,
    response: ({ body }: { body: StudentType }) => {
      const curIndex = studentList.findIndex((x) => x.id === body.id)
      const newItem = {
        ...studentList[curIndex],
        ...body
      }
      studentList[curIndex] = newItem
      return resultSuccess(newItem)
    }
  },
  {
    url: '/mock/students/:id',
    method: 'delete',
    timeout: 300,
    response: ({ query }: { query: { id: number } }) => {
      studentList = studentList.filter((x) => x.id !== Number(query.id))
      return resultSuccess()
    }
  }
] as MockMethod[]
