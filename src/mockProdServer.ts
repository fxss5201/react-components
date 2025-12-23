import { createProdMockServer } from 'vite-plugin-mock/client'
import students from '../mock/students'

export function setupProdMockServer() {
  createProdMockServer([...students])
}
