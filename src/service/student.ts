import { get, post, put, del } from './index'
import type { StudentType, StudentGroupType } from '@/types/studentType'
import type { HttpResponseType } from '@/types/response'
import type { AxiosResponse } from 'axios'

/**
 * 如何区分mock接口和真实接口
 * 1. mock接口的url前缀为 /mock ，在项目根目录的 mock 文件夹下，其中配置 mock 接口
 * 2. 真实接口的url前缀为 自定义 ，如果需要跨域，需要在项目根目录的 vite.config.ts 中配置 proxy
 * 3. 这样就可以在项目中同时使用 mock 接口和真实接口，开发完成之后将 mock 接口的 url 前缀替换为真实接口的 url 前缀即可
 */

type StudentGroupsHttpResponse = HttpResponseType<StudentGroupType[]>
export function studentGroupsHttp(): Promise<AxiosResponse<StudentGroupsHttpResponse>> {
  return get('/mock/students/groups')
}

type StudentListHttpResponse = HttpResponseType<{
  data: StudentType[],
  total: number,
}>
export function studentListHttp(params: { page: number, pageSize: number, name?: string }): Promise<AxiosResponse<StudentListHttpResponse>> {
  return get('/mock/students', {
    params
  })
}

export function addStudentHttp(data: StudentType): Promise<AxiosResponse<HttpResponseType<{ data: StudentType }>>> {
  return post('/mock/students', data)
}

export function putStudentHttp(data: StudentType): Promise<AxiosResponse<HttpResponseType<{ data: StudentType }>>> {
  return put(`/mock/students/${data.id}`, data)
}

export function getStudentByIdHttp(id: number): Promise<AxiosResponse<HttpResponseType<{ data: StudentType }>>> {
  return get(`/mock/students/${id}`)
}

export function delStudentHttp(id: number): Promise<AxiosResponse<HttpResponseType<{ data: any }>>> {
  return del(`/mock/students/${id}`)
}
