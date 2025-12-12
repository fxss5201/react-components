export function resultSuccess<T>(data?: T, { message = 'ok' } = {}) {
  return {
    code: 0,
    data,
    message
  }
}
