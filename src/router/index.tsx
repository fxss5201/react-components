import { createBrowserRouter } from 'react-router'
import type { RouteObject } from 'react-router'
import { lazy } from 'react'
import { HomeOutlined, TranslationOutlined, UploadOutlined, FileMarkdownOutlined, CopyOutlined, CloseCircleOutlined } from '@ant-design/icons'
import App from '../App'
import Home from '../pages/Home'

const BASE_URL = import.meta.env.BASE_URL

const FilesUpload = lazy(() => import('../pages/FilesUpload'))
const MdPage = lazy(() => import('../pages/MdPage'))
const I18nextPage = lazy(() => import('../pages/I18nextPage'))
const CopyToClipboardPage = lazy(() => import('../pages/CopyToClipboardPage'))
const ErrorPage = lazy(() => import('../pages/ErrorPage'))
const SkeletonPage = lazy(() => import('../pages/pro-components/SkeletonPage'))

export type RoutersType = RouteObject & {
  meta: {
    key?: string
    label: string
    icon?: React.ReactNode
  },
  children?: RoutersType[]
}

export type RoutersListType = RouteObject & {
  meta: {
    key: string
    label: string
    icon?: React.ReactNode
  }
}

export const routers = [
  {
    index: true,
    element: <Home />,
    meta: {
      key: 'home', // index 为 true 的时候，需要指定 key，否则会报错
      label: '首页',
      icon: <HomeOutlined />,
    }
  },
  {
    path: 'i18next-page',
    element: <I18nextPage />,
    meta: {
      label: 'i18next 页面',
      icon: <TranslationOutlined />,
    }
  },
  {
    path: 'copy-to-clipboard-page',
    element: <CopyToClipboardPage />,
    meta: {
      label: '复制到剪贴板',
      icon: <CopyOutlined />,
    }
  },
  {
    path: 'md-page',
    element: <MdPage />,
    meta: {
      label: 'Markdown 页面',
      icon: <FileMarkdownOutlined />,
    }
  },
  {
    path: 'files-upload',
    element: <FilesUpload />,
    meta: {
      label: '多文件上传',
      icon: <UploadOutlined />,
    }
  },
  {
    path: 'pro-components',
    meta: {
      label: '专业组件',
    },
    children: [
      {
        path: 'skeleton',
        element: <SkeletonPage />,
        meta: {
          label: '骨架屏'
        }
      }
    ]
  },
  {
    path: 'error-page',
    element: <ErrorPage />,
    meta: {
      label: '错误页面',
      icon: <CloseCircleOutlined />,
    }
  },
] as RoutersType[]

const router = createBrowserRouter([
  {
    path: BASE_URL,
    element: <App />,
    children: routers,
  }
])

export default router

// routersTree 是 routers 的树结构，每个节点都有 path 属性（path是所有的唯一标识，如果是 index 为 true 的节点，则 path 为父路径，否则为父路径 + 路径），children 是子节点的数组，此时的key仅作为多语言的key使用
export const routersTree = createRoutersTree(routers, BASE_URL)
// routersList 是 routers 的列表结构，每个节点都有 path 属性（path是所有的唯一标识，如果是 index 为 true 的节点，则 path 为父路径，否则为父路径 + 路径），meta 是节点的元数据，此时的key作为多语言的key使用
export const routersList = createRoutersList(routers, BASE_URL, []) as RoutersListType[]

function createRoutersTree(routers: RoutersType[], parentPath: string = '',): RoutersType[] {
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

function createRoutersList(routers: RoutersType[], parentPath: string = '', list: RoutersListType[] = []): RoutersListType[] {
  routers.forEach((item) => {
    list.push({
      ...item,
      path: item.index ? parentPath : `${parentPath.endsWith('/') ? parentPath : parentPath + '/'}${item.path!}`,
      meta: {
        ...item.meta,
        key: item.meta.key || item.path!
      }
    })
    if (item.children) {
      list.push(...createRoutersList(item.children, `${parentPath.endsWith('/') ? parentPath : parentPath + '/'}${item.path!}`))
    }
  })
  return list
}
