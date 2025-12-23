export interface HttpResponseType<T> {
  code: number
  message: string
  data: T
}
