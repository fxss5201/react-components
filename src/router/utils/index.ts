import type { RoutersBaseType, RoutersType } from '@/router/types'
import { authorizedMiddleware } from '@/router/middleware/authorizedMiddleware'

function createRoutersTree(routers: RoutersBaseType[] | RoutersType[], parentPath: string = '',): RoutersType[] {
  return routers.map(item => {
    return {
      ...item,
      path: item.index ? parentPath : `${parentPath.endsWith('/') ? parentPath : parentPath + '/'}${item.path!}`,
      meta: {
        ...item.meta,
        key: item.meta.key || item.path!
      },
      ...(
        item.children ? {
          children: createRoutersTree(item.children, `${parentPath.endsWith('/') ? parentPath : parentPath + '/'}${item.path!}`) 
        } : {}
      )
    } as RoutersType
  })
}

function createRoutersList(routers: RoutersBaseType[] | RoutersType[], parentPath: string = '', list: RoutersType[] = []): RoutersType[] {
  routers.forEach((item) => {
    list.push({
      ...item,
      path: item.index ? parentPath : `${parentPath.endsWith('/') ? parentPath : parentPath + '/'}${item.path!}`,
      meta: {
        ...item.meta,
        key: item.meta.key || item.path!
      }
    } as RoutersType)
    if (item.children) {
      list.push(...createRoutersList(item.children, `${parentPath.endsWith('/') ? parentPath : parentPath + '/'}${item.path!}`))
    }
  })
  return list
}

function addAuthorizedMiddleware(routers: RoutersBaseType[]): RoutersBaseType[] {
  return routers.map(item => {
    return {
      ...item,
      ...(
        item.meta?.permission ? {
          middleware: [...(item.middleware || []), authorizedMiddleware]
        } : {}
      ),
      ...(
        item.children ? {
          children: addAuthorizedMiddleware(item.children) 
        } : {}
      )
    } as RoutersBaseType
  })
}

export {
  createRoutersTree,
  createRoutersList,
  addAuthorizedMiddleware
}
