import { createBrowserRouter } from 'react-router'
import type { RouteObject } from 'react-router'
import { lazy } from 'react'
import { HomeOutlined, TranslationOutlined, UploadOutlined, FileMarkdownOutlined, CopyOutlined, CloseCircleOutlined } from '@ant-design/icons'
import App from '../App'
import PageLayout from '../pages/PageLayout'
import NotFoundPage from '../pages/NotFoundPage'
import Home from '../pages/Home'

const BASE_URL = import.meta.env.BASE_URL

const FilesUpload = lazy(() => import('../pages/FilesUpload'))
const MdPage = lazy(() => import('../pages/MdPage'))
const I18nextPage = lazy(() => import('../pages/I18nextPage'))
const CopyToClipboardPage = lazy(() => import('../pages/CopyToClipboardPage'))
const ErrorPage = lazy(() => import('../pages/ErrorPage'))
const SkeletonPage = lazy(() => import('../pages/pro-components/SkeletonPage'))
const ActivityIndex = lazy(() => import('../pages/activitys/ActivityIndex'))
const AddActivity = lazy(() => import('../pages/activitys/AddActivity'))
const AddActivity1 = lazy(() => import('../pages/activitys/AddActivity1'))
const NoActivity = lazy(() => import('../pages/activitys/NoActivity'))
const NoActivity1 = lazy(() => import('../pages/activitys/NoActivity1'))

export type RoutersType = Omit<RouteObject, 'meta' | 'Component' | 'element'> & {
  element?: React.ReactNode
  meta: {
    // index 为 true 的时候，需要指定 key，否则会报错
    key?: string
    // 菜单label，如果是多语言，根据 path （index 为 true 时，则根据 key ） 去配置
    label: string
    // 菜单图表
    icon?: React.ReactNode
    // 当前路由是否需要使用 Activity 组件保存路由状态，默认 false
    activity?: boolean
    // 是否隐藏在菜单中，父路由为 true 时，子路由也会被隐藏
    hideInMenu?: boolean
    // 进入该路由时是否隐藏头部，默认 false
    hideHead?: boolean
    // 进入该路由时是否隐藏菜单，默认 false
    hideMenu?: boolean
    // 进入该路由时是否收起菜单，默认 false
    collapseMenu?: boolean,
    // 进入该路由时是否隐藏底部，默认 false
    hideFooter?: boolean
    // 进入该路由时是否隐藏面包屑导航，默认 false
    hideBreadcrumb?: boolean
    // 进入该路由时是否隐藏标签页，默认 false
    hideTabs?: boolean
  },
  children?: RoutersType[]
}

export type RoutersListType = Omit<RouteObject, 'meta' | 'Component' | 'element'> & {
  element?: React.ReactNode
  meta: {
    key: string
    label: string
    icon?: React.ReactNode
    activity?: boolean
    hideInMenu?: boolean
    hideHead?: boolean
    hideMenu?: boolean
    collapseMenu?: boolean
    hideFooter?: boolean
    hideBreadcrumb?: boolean
    hideTabs?: boolean
  }
}

// 路由组件配置全部采用 element ，不使用 Component
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
      activity: true,
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
    path: 'activitys',
    meta: {
      label: '状态保存',
    },
    children: [
      {
        path: 'activity-index',
        element: <ActivityIndex />,
        meta: {
          label: '组件状态',
        }
      },
      {
        path: 'activity-route',
        meta: {
          label: '路由状态',
        },
        children: [
          {
            path: 'add-activity',
            element: <AddActivity />,
            meta: {
              label: '路由保状态（非受控）',
              activity: true,
            }
          },
          {
            path: 'add-activity1',
            element: <AddActivity1 />,
            meta: {
              label: '路由保状态（受控）',
              activity: true,
            }
          },
          {
            path: 'no-activity',
            element: <NoActivity />,
            meta: {
              label: '路由不保状态（非受控）'
            }
          },
          {
            path: 'no-activity1',
            element: <NoActivity1 />,
            meta: {
              label: '路由不保状态（受控）'
            }
          },
        ]
      }
    ]
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
          label: '骨架屏',
          // hideInMenu: true,
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
      // hideInMenu: true,
      // collapseMenu: true,
      // hideMenu: true,
      // hideHead: true,
      // hideFooter: true,
      // hideBreadcrumb: true,
      // hideTabs: true,
    }
  },
] as RoutersType[]

const router = createBrowserRouter([
  {
    path: BASE_URL,
    element: <App />,
    children: [
      {
        path: BASE_URL,
        element: <PageLayout />,
        children: routers as RouteObject[]
      } 
    ]
  },
  {
    path: `${BASE_URL}*`,
    element: <NotFoundPage />,
    meta: {
      label: '404 页面',
    }
  }
] as RouteObject[])

export default router

// routersTree 是 routers 的树结构，每个节点都有 path 属性（path是所有的唯一标识，如果是 index 为 true 的节点，则 path 为父路径，否则为父路径 + 路径），children 是子节点的数组，此时的key仅作为多语言的key使用
export const routersTree = createRoutersTree(routers, BASE_URL)
// routersList 是 routers 的列表结构，每个节点都有 path 属性（path是所有的唯一标识，如果是 index 为 true 的节点，则 path 为父路径，否则为父路径 + 路径），meta 是节点的元数据，此时的key作为多语言的key使用
// 之所以需要 reverse 是因为按照正常的 find、findIndex、indexOf 等方法，是从前往后查找的，我们在生成 routersList 时，先保存父路由，当子路由为 index true 时，会和父路由的 path 相同
export const routersList = createRoutersList(routers, BASE_URL, []).reverse() as RoutersListType[]

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
