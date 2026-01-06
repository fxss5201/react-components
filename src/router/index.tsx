import { createBrowserRouter } from 'react-router'
import type { RouteObject } from 'react-router'
import { lazy } from 'react'
import {
  HomeOutlined,
  UploadOutlined,
  FileMarkdownOutlined,
  CopyOutlined,
  CloseCircleOutlined,
  QuestionCircleOutlined,
  PieChartOutlined,
  UserOutlined,
  FormOutlined,
  TableOutlined,
} from '@ant-design/icons'
import App from '@/App'
import PageLayout from '@/pages/PageLayout'
import NotFoundPage from '@/pages/NotFoundPage'
import NotAuthorizedPage from '@/pages/NotAuthorizedPage'
import Login from '@/pages/Login'
import ResetPassword from '@/pages/ResetPassword'
import Home from '@/pages/Home'
import { loginMiddleware } from './middleware/loginMiddleware'
import { commonMiddleware } from './middleware/commonMiddleware'
import IconFont from '@/components/IconFont'
import config from '@/config'
import type { RoutersBaseType, RoutersType } from './types'
import { createRoutersTree, createRoutersList, addAuthorizedMiddleware } from './utils'

const BASE_URL = import.meta.env.BASE_URL

const FilesDrawer = lazy(() => import('@/pages/file-related/FilesDrawer'))
const FilesSelect = lazy(() => import('@/pages/file-related/FilesSelect'))
const DropUpload = lazy(() => import('@/pages/file-related/DropUpload'))
const FilesDropSelect = lazy(() => import('@/pages/file-related/FilesDropSelect'))
const FileHash = lazy(() => import('@/pages/file-related/FileHash'))
const MdDemoPage = lazy(() => import('@/pages/markdown/MdDemoPage'))
const MdRenderPage = lazy(() => import('@/pages/markdown/MdRenderPage'))
const CopyToClipboardPage = lazy(() => import('@/pages/CopyToClipboardPage'))
const ErrorPage = lazy(() => import('@/pages/ErrorPage'))
const ActivityIndex = lazy(() => import('@/pages/activitys/ActivityIndex'))
const AddActivity = lazy(() => import('@/pages/activitys/AddActivity'))
const AddActivity1 = lazy(() => import('@/pages/activitys/AddActivity1'))
const NoActivity = lazy(() => import('@/pages/activitys/NoActivity'))
const NoActivity1 = lazy(() => import('@/pages/activitys/NoActivity1'))
const SearchParamsPage = lazy(() => import('@/pages/SearchParamsPage'))
const JsonRenderPage = lazy(() => import('@/pages/json/JsonRenderPage'))
const JsonEditorPage = lazy(() => import('@/pages/json/JsonEditorPage'))
const EchartsPage = lazy(() => import('@/pages/echarts/EchartsPage'))
const UserInfoPage = lazy(() => import('@/pages/UserInfoPage'))
const StudentsPage = lazy(() => import('@/pages/students/StudentsPage'))
const StudentsBoxPage = lazy(() => import('@/pages/students/StudentsBoxPage'))
const StudentsBoxManualPage = lazy(() => import('@/pages/students/StudentsBoxManualPage'))
const StudentsBoxOperationPage = lazy(() => import('@/pages/students/StudentsBoxOperationPage'))
const FormBlockPage = lazy(() => import('@/pages/formBlock/FormBlockPage'))
const TablePage = lazy(() => import('@/pages/tablePage/TablePage'))
const FilesZipWriter = lazy(() => import('@/pages/file-related/FilesZipWriter'))
const FilesZipReader = lazy(() => import('@/pages/file-related/FilesZipReader'))

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
      permission: '01',
    }
  },
  {
    path: 'file-related',
    meta: {
      label: '文件相关',
      icon: <UploadOutlined />,
      permission: '02',
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
        path: 'drop-upload',
        element: <DropUpload />,
        meta: {
          label: '拖拽上传',
        }
      },
      {
        path: 'files-drop-select',
        element: <FilesDropSelect />,
        meta: {
          label: '文件拖拽选择',
        }
      },
      {
        path: 'files-drawer',
        element: <FilesDrawer />,
        meta: {
          label: '多文件上传',
        }
      },
      {
        path: 'file-hash',
        element: <FileHash />,
        meta: {
          label: '文件哈希',
        }
      },
      {
        path: 'files-zip-writer',
        element: <FilesZipWriter />,
        meta: {
          label: '文件压缩',
        }
      },
      {
        path: 'files-zip-reader',
        element: <FilesZipReader />,
        meta: {
          label: '文件解压',
        }
      }
    ]
  },
  {
    path: 'markdown',
    meta: {
      label: 'Markdown',
      icon: <FileMarkdownOutlined />,
      permission: '03',
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
          label: 'Markdown 演示'
        }
      },
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
        path: 'json-render',
        element: <JsonRenderPage />,
        meta: {
          label: 'JSON 渲染',
        }
      },
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
    path: 'echarts',
    meta: {
      label: 'Echarts',
      icon: <PieChartOutlined />,
    },
    children: [
      {
        path: 'echarts-block',
        element: <EchartsPage />,
        meta: {
          label: 'echarts基础模块',
        }
      }
    ]
  },
  {
    path: 'form-block',
    element: <FormBlockPage />,
    meta: {
      label: '表单块',
      icon: <FormOutlined />,
    }
  },
  {
    path: 'table-page',
    element: <TablePage />,
    meta: {
      label: '表格页',
      icon: <TableOutlined />,
    }
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
    path: 'students',
    meta: {
      label: '学生管理',
      icon: <UserOutlined />,
    },
    children: [
      {
        path: 'tablePage',
        element: <StudentsPage />,
        meta: {
          label: 'TablePage渲染',
        }
      },
      {
        path: 'tablePageBox',
        element: <StudentsBoxPage />,
        meta: {
          label: 'TablePageBox渲染',
        }
      },
      {
        path: 'tablePageBoxManual',
        element: <StudentsBoxManualPage />,
        meta: {
          label: 'TablePageBox手动请求',
        }
      },
      {
        path: 'tablePageBoxOperation',
        element: <StudentsBoxOperationPage />,
        meta: {
          label: 'TablePageBox自定义操作列',
        }
      },
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
      permission: '09',
    }
  },
  {
    path: 'userInfo',
    element: <UserInfoPage />,
    meta: {
      label: '用户信息',
      hideInMenu: true,
      watermark: {
        content: '${name} ${date}',
        width: 200,
        height: 100
      }
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
  {
    path: 'reset-password',
    element: <ResetPassword />,
    meta: {
      label: '重置密码',
      hideInTabs: true,
    }
  },
  {
    path: 'not-authorized',
    element: <NotAuthorizedPage />,
    meta: {
      label: '403 权限不足',
      hideInTabs: true,
      hideInMenu: true,
      hideBreadcrumb: true,
    }
  },
] as RoutersBaseType[]

// routersTree 是 routers 的树结构，每个节点都有 path 属性（path是所有的唯一标识，如果是 index 为 true 的节点，则 path 为父路径，否则为父路径 + 路径），children 是子节点的数组，此时的key仅作为多语言的key使用
const routersTree = createRoutersTree(routers, '/')
// routersList 是 routers 的列表结构，每个节点都有 path 属性（path是所有的唯一标识，如果是 index 为 true 的节点，则 path 为父路径，否则为父路径 + 路径），meta 是节点的元数据，此时的key作为多语言的key使用
// 之所以需要 reverse 是因为按照正常的 find、findIndex、indexOf 等方法，是从前往后查找的，我们在生成 routersList 时，先保存父路由，当子路由为 index true 时，会和父路由的 path 相同
const routersList = createRoutersList(routers, '/', []).reverse() as RoutersType[]

export {
  routersTree,
  routersList
}

const whiteList = config.whiteList.map(item => item.slice(1))
let lastRouters = routers
if (config.isNeedLogin) {
  lastRouters = addAuthorizedMiddleware(lastRouters)
}
const innerRouters = lastRouters.filter(item => !item.path || !whiteList.includes(item.path)) as RoutersBaseType[]
const outerRouters = lastRouters.filter(item => item.path && whiteList.includes(item.path)) as RoutersBaseType[]

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    middleware: [commonMiddleware, ...(config.isNeedLogin ? [loginMiddleware] : [])],
    children: [
      {
        path: '/',
        element: <PageLayout />,
        children: innerRouters
      },
      ...outerRouters
    ]
  },
  {
    path: `/*`,
    element: <NotFoundPage />,
  }
] as RouteObject[], {
  basename: BASE_URL
})

export default router
