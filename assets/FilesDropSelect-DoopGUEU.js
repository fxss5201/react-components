import{b as j,j as e}from"./@uiw/react-codemirror-dimZJgSu.js";import{c as h,u as F}from"./index-CwDalt6B.js";import{M as D}from"./MDXRender--j0cKFwg.js";import{P as p}from"./Playground-XZt4ylVh.js";import{F as m}from"./FilesDropSelect-Byb8B8Lb.js";import{J as f}from"./JsonView-DtypalN_.js";import{u as i}from"./@mdx-js/react-BwGmxI0N.js";import"./react-syntax-highlighter-DW6ulm9l.js";import"./markdown-plugins-CqPL4kxN.js";import"./react-markdown-U0gPFawi.js";import"./DropElement-C0NNM9yT.js";import"./index-BSg5Lc9Y.js";import"./isBrowser-BdZk1G-M.js";import"./FilesSelect-CtUSxN8E.js";import"./index-C1Uc0xMy.js";import"./JsonEditor-C8Qw5Tcq.js";import"./CodeEditor-DCLYA5gR.js";import"./JsonRender-CBqOC-Sc.js";import"./use-undo.m-DQTOi8z5.js";import"./index-C7j3i05K.js";function S(){const t=h.c(4);let n;t[0]===Symbol.for("react.memo_cache_sentinel")?(n=[],t[0]=n):n=t[0];const[s,c]=j.useState(n);let l;if(t[1]===Symbol.for("react.memo_cache_sentinel")){const d=function(o){c(o)};l=e.jsx(m,{onSelect:d}),t[1]=l}else l=t[1];let r;return t[2]!==s?(r=e.jsxs(e.Fragment,{children:[l,e.jsx(f,{className:"mt-4!",jsonClassName:"max-h-100 overflow-auto",children:s})]}),t[2]=s,t[3]=r):r=t[3],r}const y=`import { useState } from 'react'
import FilesDropSelect from '@/components/FilesDropSelect'
import type { FileTreeItem } from '@/types/files'
import JsonView from '@/components/JsonView'

function FilesDropSelectDemo() {
  const [listData, setListData] = useState<FileTreeItem[]>([])

  function onSelect(fileList: FileTreeItem[]) {
    setListData(fileList)
  }

  return (
    <>
      <FilesDropSelect onSelect={onSelect}></FilesDropSelect>
      <JsonView className='mt-4!' jsonClassName='max-h-100 overflow-auto'>
        {listData}
      </JsonView>
    </>
  )
}

export default FilesDropSelectDemo
`;function a(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"filesdropselect",children:"FilesDropSelect"}),`
`,e.jsxs(n.p,{children:["可以支持拖拽或者选择 文件/文件夹，是 ",e.jsx(n.code,{children:"DropElement"})," 和 ",e.jsx(n.code,{children:"FilesSelect"})," 的组合组件。"]}),`
`,e.jsx(n.h2,{id:"目录",children:"目录"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#api",children:"API"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#%E5%8F%82%E6%95%B0-props",children:"参数 Props"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#%E6%BC%94%E7%A4%BA%E7%A4%BA%E4%BE%8B",children:"演示示例"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#%E6%8B%96%E6%8B%BD%E5%92%8C%E9%80%89%E6%8B%A9%E6%96%87%E4%BB%B6%E6%96%87%E4%BB%B6%E5%A4%B9",children:"拖拽和选择文件/文件夹"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(n.h3,{id:"参数-props",children:"参数 Props"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export type FileType = 'file' | 'folder'
export type FileItemType = {
  type: FileType
  file?: File
  name: string
  size?: number
  filePath: string
  folderPath: string
}

export type FileTreeItem = FileItemType & {
  children?: FileTreeItem[]
}

export type TargetType = 'tree' | 'list'
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export type DropElementProps = {
  targetType?: TargetType // 执行 onSelect 时，参数的类型， tree 时为文件树，list 时为文件列表
  isIgnoreFolder?: boolean // 当 targetType 为 'list' 时，是否忽略文件夹，比如说上传文件的时候，只需要上传文件，不需要上传文件夹
  isUpload?: boolean
  onSelect: (fileTrees: FileTreeItem[]) => void
  classNames?: {
    dropElement?: string
    filesSelect?: string
  }
  childrens?: {
    dropElement?: React.ReactNode
    filesSelect?: React.ReactNode
  }
}
`})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"属性"}),e.jsx(n.th,{children:"说明"}),e.jsx(n.th,{children:"类型"}),e.jsx(n.th,{children:"默认值"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"targetType"})}),e.jsx(n.td,{children:"回调函数参数类型"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'tree' | 'list'"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'tree'"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"isIgnoreFolder"})}),e.jsx(n.td,{children:"当 targetType 为 'list' 时，是否忽略文件夹，比如说上传文件的时候，只需要上传文件，不需要上传文件夹"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"isUpload"})}),e.jsx(n.td,{children:"是否上传文件/文件夹，仅用于文案"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onSelect"})}),e.jsx(n.td,{children:"拖拽结束后的回调函数"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(fileTrees: FileTreeItem[]) => void"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"classNames"})}),e.jsxs(n.td,{children:["自定义class类名，分别对应 ",e.jsx(n.code,{children:"DropElement"})," 和 ",e.jsx(n.code,{children:"FilesSelect"})]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"{ dropElement?: string, filesSelect?: string }"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"childrens"})}),e.jsxs(n.td,{children:["自定义内容，分别对应 ",e.jsx(n.code,{children:"DropElement"})," 和 ",e.jsx(n.code,{children:"FilesSelect"}),"，设置后会覆盖默认内容"]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"{ dropElement?: React.ReactNode, filesSelect?: React.ReactNode }"})}),e.jsx(n.td,{children:"-"})]})]})]}),`
`,e.jsx(n.h2,{id:"演示示例",children:"演示示例"}),`
`,e.jsx(n.h3,{id:"拖拽和选择文件文件夹",children:"拖拽和选择文件/文件夹"}),`
`,e.jsx(p,{code:y,title:"拖拽和选择文件/文件夹",description:"拖拽和选择文件/文件夹，并查看结果。",children:e.jsx(S,{})})]})}function g(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}function T(){const t=h.c(4);let n;t[0]===Symbol.for("react.memo_cache_sentinel")?(n=[],t[0]=n):n=t[0];const[s,c]=j.useState(n);let l;if(t[1]===Symbol.for("react.memo_cache_sentinel")){const d=function(o){c(o)};l=e.jsx(m,{onSelect:d}),t[1]=l}else l=t[1];let r;return t[2]!==s?(r=e.jsxs(e.Fragment,{children:[l,e.jsx(f,{className:"mt-4!",jsonClassName:"max-h-100 overflow-auto",children:s})]}),t[2]=s,t[3]=r):r=t[3],r}const E=`import { useState } from 'react'
import FilesDropSelect from '@/components/FilesDropSelect'
import type { FileTreeItem } from '@/types/files'
import JsonView from '@/components/JsonView'

function FilesDropSelectDemo() {
  const [listData, setListData] = useState<FileTreeItem[]>([])

  function onSelect(fileList: FileTreeItem[]) {
    setListData(fileList)
  }

  return (
    <>
      <FilesDropSelect onSelect={onSelect}></FilesDropSelect>
      <JsonView className='mt-4!' jsonClassName='max-h-100 overflow-auto'>
        {listData}
      </JsonView>
    </>
  )
}

export default FilesDropSelectDemo
`;function x(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"filesdropselect",children:"FilesDropSelect"}),`
`,e.jsxs(n.p,{children:["Drag and select files/folders, is a combination component of ",e.jsx(n.code,{children:"DropElement"})," and ",e.jsx(n.code,{children:"FilesSelect"}),"."]}),`
`,e.jsx(n.h2,{id:"toc",children:"TOC"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#api",children:"API"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#parameters-props",children:"Parameters Props"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#demos",children:"Demos"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#drop-and-select-filesfolders",children:"Drop and Select Files/Folders"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(n.h3,{id:"parameters-props",children:"Parameters Props"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export type FileType = 'file' | 'folder'
export type FileItemType = {
  type: FileType
  file?: File
  name: string
  size?: number
  filePath: string
  folderPath: string
}

export type FileTreeItem = FileItemType & {
  children?: FileTreeItem[]
}

export type TargetType = 'tree' | 'list'
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export type DropElementProps = {
  targetType?: TargetType // 执行 onSelect 时，参数的类型， tree 时为文件树，list 时为文件列表
  isIgnoreFolder?: boolean // 当 targetType 为 'list' 时，是否忽略文件夹，比如说上传文件的时候，只需要上传文件，不需要上传文件夹
  isUpload?: boolean
  onSelect: (fileTrees: FileTreeItem[]) => void
  classNames?: {
    dropElement?: string
    filesSelect?: string
  }
  childrens?: {
    dropElement?: React.ReactNode
    filesSelect?: React.ReactNode
  }
}
`})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Description"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"targetType"})}),e.jsx(n.td,{children:"Execution parameter type of onSelect, tree for file tree, list for file list"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'tree' | 'list'"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"tree"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"isIgnoreFolder"})}),e.jsx(n.td,{children:"Whether to ignore folders when targetType is 'list', for example, when uploading files, only files need to be uploaded, not folders"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"isUpload"})}),e.jsx(n.td,{children:"Whether to upload files/folders, only used to change the text of the select/upload button"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onSelect"})}),e.jsx(n.td,{children:"Callback function when files/folders are dropped"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(fileTrees: FileTreeItem[]) => void"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"classNames"})}),e.jsxs(n.td,{children:["Custom class names, respectively corresponding to ",e.jsx(n.code,{children:"DropElement"})," and ",e.jsx(n.code,{children:"FilesSelect"})]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"{ dropElement?: string, filesSelect?: string }"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"childrens"})}),e.jsxs(n.td,{children:["Custom content, respectively corresponding to ",e.jsx(n.code,{children:"DropElement"})," and ",e.jsx(n.code,{children:"FilesSelect"}),", setting will override default content"]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"{ dropElement?: React.ReactNode, filesSelect?: React.ReactNode }"})}),e.jsx(n.td,{children:"-"})]})]})]}),`
`,e.jsx(n.h2,{id:"demos",children:"Demos"}),`
`,e.jsx(n.h3,{id:"drop-and-select-filesfolders",children:"Drop and Select Files/Folders"}),`
`,e.jsx(p,{code:E,title:"Drag and Select Files/Folders",description:"Drag and select files/folders, and view the results.",children:e.jsx(T,{})})]})}function b(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(x,{...t})}):x(t)}function O(){const t=h.c(2),n=F();let s;return t[0]!==n?(s=e.jsx("div",{className:"px-4 pb-4",children:e.jsx(D,{children:n==="zh"?e.jsx(g,{}):e.jsx(b,{})})}),t[0]=n,t[1]=s):s=t[1],s}export{O as default};
