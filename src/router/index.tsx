import { createBrowserRouter } from 'react-router'
import type { RouteObject } from 'react-router'
import { lazy } from 'react'
import {
  HomeOutlined,
  UploadOutlined,
  FileMarkdownOutlined,
  CopyOutlined,
  CloseCircleOutlined,
  QuestionCircleOutlined
} from '@ant-design/icons'
import App from '../App'
import PageLayout from '../pages/PageLayout'
import NotFoundPage from '../pages/NotFoundPage'
import Login from '../pages/Login'
import Home from '../pages/Home'
import { authLoader } from './loader/authLoader'
import IconFont from '../components/IconFont'

const BASE_URL = import.meta.env.BASE_URL

const FilesUpload = lazy(() => import('../pages/file-upload/FilesUpload'))
const FilesSelect = lazy(() => import('../pages/file-upload/FilesSelect'))
// const DropUpload = lazy(() => import('../pages/file-upload/DropUpload'))
const DropUploadMdx = lazy(() => import('../pages/file-upload/DropUploadMdx'))
const MdDemoPage = lazy(() => import('../pages/markdown/MdDemoPage'))
const MdRenderPage = lazy(() => import('../pages/markdown/MdRenderPage'))
const CopyToClipboardPage = lazy(() => import('../pages/CopyToClipboardPage'))
const ErrorPage = lazy(() => import('../pages/ErrorPage'))
const SkeletonPage = lazy(() => import('../pages/pro-components/SkeletonPage'))
const ActivityIndex = lazy(() => import('../pages/activitys/ActivityIndex'))
const AddActivity = lazy(() => import('../pages/activitys/AddActivity'))
const AddActivity1 = lazy(() => import('../pages/activitys/AddActivity1'))
const NoActivity = lazy(() => import('../pages/activitys/NoActivity'))
const NoActivity1 = lazy(() => import('../pages/activitys/NoActivity1'))
const SearchParamsPage = lazy(() => import('../pages/SearchParamsPage'))
const JsonEditorPage = lazy(() => import('../pages/json/JsonEditorPage'))

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
    path: 'copy-to-clipboard-page',
    element: <CopyToClipboardPage />,
    meta: {
      label: '复制到剪贴板',
      icon: <CopyOutlined />,
    }
  },
  {
    path: 'file-upload',
    meta: {
      label: '文件上传',
      icon: <UploadOutlined />,
    },
    children: [
      {
        path: 'files-select',
        element: <FilesSelect />,
        meta: {
          label: '文件选择',
        }
      },
      {
        path: 'files-upload',
        element: <FilesUpload />,
        meta: {
          label: '多文件上传',
        }
      },
      {
        path: 'drop-upload',
        element: <DropUploadMdx />,
        meta: {
          label: '拖拽上传',
        }
      }
    ]
  },
  {
    path: 'json',
    meta: {
      label: 'JSON',
      icon: <IconFont type='icon-json' />,
    },
    children: [
      {
        path: 'json-editor',
        element: <JsonEditorPage />,
        meta: {
          label: 'JSON 编辑器',
        }
      }
    ]
  },
  {
    path: 'markdown',
    meta: {
      label: 'Markdown',
      icon: <FileMarkdownOutlined />,
    },
    children: [
      {
        path: 'md-render-page',
        element: <MdRenderPage />,
        meta: {
          label: 'Markdown 渲染',
        }
      },
      {
        path: 'md-demo-page',
        element: <MdDemoPage />,
        meta: {
          label: 'Markdown 演示',
          activity: true,
        }
      },
    ]
  },
  {
    path: 'search-params-page',
    element: <SearchParamsPage />,
    meta: {
      label: '路由搜索参数',
      icon: <QuestionCircleOutlined />,
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
  {
    path: 'login',
    element: <Login />,
    meta: {
      label: '登录',
      hideInTabs: true,
    }
  },
] as RoutersBaseType[]

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: authLoader,
    children: [
      {
        path: '/',
        element: <PageLayout />,
        children: routers.filter(item => item.path !== 'login') as RoutersBaseType[]
      },
      ...routers.filter(item => item.path === 'login') as RoutersBaseType[]
    ]
  },
  {
    path: `/*`,
    element: <NotFoundPage />,
    meta: {
      label: '404 页面',
    }
  }
] as RouteObject[], {
  basename: BASE_URL,
  future: {
    unstable_middleware: true,
  },
})

export default router

// routersTree 是 routers 的树结构，每个节点都有 path 属性（path是所有的唯一标识，如果是 index 为 true 的节点，则 path 为父路径，否则为父路径 + 路径），children 是子节点的数组，此时的key仅作为多语言的key使用
const routersTree = createRoutersTree(routers, '/')
// routersList 是 routers 的列表结构，每个节点都有 path 属性（path是所有的唯一标识，如果是 index 为 true 的节点，则 path 为父路径，否则为父路径 + 路径），meta 是节点的元数据，此时的key作为多语言的key使用
// 之所以需要 reverse 是因为按照正常的 find、findIndex、indexOf 等方法，是从前往后查找的，我们在生成 routersList 时，先保存父路由，当子路由为 index true 时，会和父路由的 path 相同
const routersList = createRoutersList(routers, '/', []).reverse() as RoutersType[]

export {
  routersTree,
  routersList
}

// RoutersBaseType 是路由配置的基础类型，用于规范 routers 配置
export type RoutersBaseType = Omit<RouteObject, 'meta' | 'Component' | 'element'> & {
  element?: React.ReactNode
  meta: {
    // index 为 true 的时候，需要指定 key，否则会报错
    key?: string
    // 菜单label，如果是多语言，根据 path （index 为 true 时，则根据 key ） 去配置
    label: string
    // 菜单图表
    icon?: React.ReactNode
    // 当前路由是否需要使用 Activity 组件保存路由状态，默认 false （仅在 element 存在时生效）
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
    // 在标签页中是否隐藏该路由，默认 false
    hideInTabs?: boolean
  },
  children?: RoutersBaseType[]
}

// RoutersType 是生成的 routersTree 或 routersList 的类型，主要是保证每个节点都有 key 属性
export type RoutersType = Omit<RoutersBaseType, 'meta' | 'children'> & {
  meta: Omit<RoutersBaseType['meta'], 'key'> & {
    key: string
  },
  children?: RoutersType[]
}

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
