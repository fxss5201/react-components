import { get, post, put, del } from './index'
import type { StudentType } from '@/types/studentType'
import type { HttpResponseType } from '@/types/response'
import type { AxiosResponse } from 'axios'

interface StudentListHttpResponse extends HttpResponseType {
  data: StudentType[]
}
export function studentListHttp(): Promise<AxiosResponse<StudentListHttpResponse>> {
  return get('/api/students')
}

export function addStudentHttp(data: StudentType): Promise<AxiosResponse<HttpResponseType>> {
  return post('/api/students', data)
}

export function putStudentHttp(data: StudentType): Promise<AxiosResponse<HttpResponseType>> {
  return put(`/api/students/${data.id}`, data)
}

interface StudentByIdHttpResponse extends HttpResponseType {
  data: StudentType
}
export function getStudentByIdHttp(id: number): Promise<AxiosResponse<StudentByIdHttpResponse>> {
  return get(`/api/students/${id}`)
}

export function delStudentHttp(id: number): Promise<AxiosResponse<HttpResponseType>> {
  return del(`/api/students/${id}`)
}
