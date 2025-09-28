import { createBrowserRouter } from 'react-router'
import type { RouteObject } from 'react-router'
import { lazy } from 'react'
import { HomeOutlined, TranslationOutlined, UploadOutlined, FileMarkdownOutlined } from '@ant-design/icons'
import { type LangResourcesType } from '../locales/index'
import App from '../App'
import Home from '../pages/Home'

const BASE_URL = import.meta.env.BASE_URL

const FilesUpload = lazy(() => import('../pages/FilesUpload'))
const MdPage = lazy(() => import('../pages/MdPage'))
const I18nextPage = lazy(() => import('../pages/I18nextPage'))

export type RoutersType = RouteObject & {
  meta: {
    key: keyof LangResourcesType['translation']['Menu']
    label: string
    icon?: React.ReactNode
  },
  children?: RoutersType[]
}

export const routers = [
  {
    index: true,
    Component: Home,
    meta: {
      key: 'home',
      label: '首页',
      icon: <HomeOutlined />,
    }
  },
  {
    path: 'i18next-page',
    element: <I18nextPage />,
    meta: {
      key: 'i18next-page',
      label: 'i18next 页面',
      icon: <TranslationOutlined />,
    }
  },
  {
    path: 'md-page',
    element: <MdPage />,
    meta: {
      key: 'md-page',
      label: 'Markdown 页面',
      icon: <FileMarkdownOutlined />,
    }
  },
  {
    path: 'files-upload',
    element: <FilesUpload />,
    meta: {
      key: 'files-upload',
      label: '多文件上传',
      icon: <UploadOutlined />,
    }
  },
] as RoutersType[]

function createRouters(routers: RoutersType[]): RoutersType[] {
  return routers.map(item => {
    if (item.index) {
      return item
    } else {
      return {
        ...item,
        path: `${BASE_URL}${item.path!}`,
        ...(item.children ? { children: createRouters(item.children) } : {}),
      }
    }
  })
}

const router = createBrowserRouter([
  {
    path: BASE_URL,
    element: <App />,
    children: createRouters(routers),
  }
])

export default router
