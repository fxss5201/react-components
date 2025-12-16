import { type MockMethod } from 'vite-plugin-mock'
import { type StudentType } from '../src/types/studentType'
import { resultSuccess } from './http'

let studentList: StudentType[] = [
  {
    id: 1,
    name: '张三',
    age: 18
  }
]

export default [
  {
    url: '/api/students',
    method: 'get',
    timeout: 2000,
    response: () => {
      return resultSuccess(studentList)
    }
  },
  {
    url: '/api/students/:id',
    method: 'get',
    timeout: 2000,
    response: ({ query }: { query: { id: number } }) => {
      return resultSuccess(studentList.find((x) => x.id === Number(query.id)))
    }
  },
  {
    url: '/api/students',
    method: 'post',
    timeout: 2000,
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
    url: '/api/students/:id',
    method: 'put',
    timeout: 2000,
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
    url: '/api/students/:id',
    method: 'delete',
    timeout: 2000,
    response: ({ query }: { query: { id: number } }) => {
      studentList = studentList.filter((x) => x.id !== Number(query.id))
      return resultSuccess()
    }
  }
] as MockMethod[]
