import type { AxiosRequestConfig, AxiosInstance } from 'axios'
import axios from 'axios'

const instance: AxiosInstance = axios.create({
  timeout: 3000
})

instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export function get<T>(url: string, config: AxiosRequestConfig = {}): Promise<T> {
  return instance.get(url, config)
}

export function post<T, D>(
  url: string,
  data: D,
  config: AxiosRequestConfig = {}
): Promise<T> {
  return instance.post(url, data, config)
}

export function put<T, D>(
  url: string,
  data: D,
  config: AxiosRequestConfig = {}
): Promise<T> {
  return instance.put(url, data, config)
}

export function del<T>(url: string, config: AxiosRequestConfig = {}): Promise<T> {
  return instance.delete(url, config)
}

export default instance
