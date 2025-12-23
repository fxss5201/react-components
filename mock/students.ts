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
    age: 18
  },
  {
    id: 2,
    name: '李四',
    age: 20
  },
  {
    id: 3,
    name: '王五',
    age: 22
  },
  {
    id: 4,
    name: '赵六',
    age: 24
  },
  {
    id: 5,
    name: '王二',
    age: 26
  },
  {
    id: 6,
    name: '陆',
    age: 28
  },
  {
    id: 7,
    name: '七',
    age: 30
  },
  {
    id: 8,
    name: '捌',
    age: 32
  },
  {
    id: 9,
    name: '玖',
    age: 34
  },
  {
    id: 10,
    name: '拾',
    age: 36
  },
  {
    id: 11,
    name: '拾壹',
    age: 38
  },
  {
    id: 12,
    name: '拾二',
    age: 38
  },
  {
    id: 13,
    name: '拾三',
    age: 40
  },
]

export default [
  {
    url: '/mock/students',
    method: 'get',
    timeout: 1000,
    response: ({ query }: { query: { page: number, pageSize: number, name?: string } }) => {
      const { page, pageSize, name } = query
      const start = (page - 1) * pageSize
      const end = start + pageSize
      if (!name) {
        return resultSuccess({
          data: studentList.slice(start, end),
          total: studentList.length,
        })
      }
      const filterData = studentList.filter((x) => x.name.includes(name))
      return resultSuccess({
        data: filterData.slice(start, end),
        total: filterData.length,
      })
    }
  },
  {
    url: '/mock/students/:id',
    method: 'get',
    timeout: 1000,
    response: ({ query }: { query: { id: number } }) => {
      return resultSuccess(studentList.find((x) => x.id === Number(query.id)))
    }
  },
  {
    url: '/mock/students',
    method: 'post',
    timeout: 1000,
    response: ({ body }: { body: StudentType }) => {
      let id = 1
      if (studentList.length > 0) {
        id = Number(studentList[studentList.length - 1]?.id ?? 0) + 1
      }
      studentList.push({
        ...body,
        id
      })
      return resultSuccess()
    }
  },
  {
    url: '/mock/students/:id',
    method: 'put',
    timeout: 1000,
    response: ({ body }: { body: StudentType }) => {
      const curIndex = studentList.findIndex((x) => x.id === body.id)
      studentList[curIndex] = {
        ...studentList[curIndex],
        ...body
      }
      return resultSuccess()
    }
  },
  {
    url: '/mock/students/:id',
    method: 'delete',
    timeout: 1000,
    response: ({ query }: { query: { id: number } }) => {
      studentList = studentList.filter((x) => x.id !== Number(query.id))
      return resultSuccess()
    }
  }
] as MockMethod[]
