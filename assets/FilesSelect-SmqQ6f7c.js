import{b as a,j as e}from"./@uiw/react-codemirror-dimZJgSu.js";import{c as h,u as T}from"./index-CwDalt6B.js";import{M as g}from"./MDXRender--j0cKFwg.js";import{P as p}from"./Playground-XZt4ylVh.js";import{F as y}from"./FilesUploadDrawer-yJjplDqt.js";import{F as x}from"./FilesSelect-CtUSxN8E.js";import{J as f}from"./JsonView-DtypalN_.js";import{u as j}from"./@mdx-js/react-BwGmxI0N.js";import"./react-syntax-highlighter-DW6ulm9l.js";import"./markdown-plugins-CqPL4kxN.js";import"./react-markdown-U0gPFawi.js";import"./FilesDrawer-DH-ydRHZ.js";import"./use-immer.module-BUjbJLOH.js";import"./index-DvjyObLV.js";import"./progress-B267_-79.js";import"./index-C1Uc0xMy.js";import"./JsonEditor-C8Qw5Tcq.js";import"./CodeEditor-DCLYA5gR.js";import"./JsonRender-CBqOC-Sc.js";import"./use-undo.m-DQTOi8z5.js";import"./index-C7j3i05K.js";function L(){const n=h.c(6),[t,l]=a.useState(!1);let r;n[0]===Symbol.for("react.memo_cache_sentinel")?(r=[],n[0]=r):r=n[0];const[s,i]=a.useState(r);let o;n[1]===Symbol.for("react.memo_cache_sentinel")?(o=F=>{i(F),l(!0)},n[1]=o):o=n[1];const d=o;let c;n[2]===Symbol.for("react.memo_cache_sentinel")?(c=e.jsx(x,{targetType:"list",isUpload:!0,onSelect:d}),n[2]=c):c=n[2];let m;return n[3]!==t||n[4]!==s?(m=e.jsxs("div",{className:"px-4 pb-4",children:[c,e.jsx(y,{targetType:"list",open:t,list:s,setOpen:l})]}),n[3]=t,n[4]=s,n[5]=m):m=n[5],m}const w=`import { useState } from 'react'
import FilesUploadDrawer from '@/components/FilesUploadDrawer'
import FilesSelect from '@/components/FilesSelect'
import type { FileItemType } from '@/types/files'

function FilesListUpload() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [fileList, setFileList] = useState<FileItemType[]>([])

  const onSelectFn = (files: FileItemType[]) => {
    setFileList(files)
    setDrawerOpen(true)
  }

  return (
    <div className='px-4 pb-4'>
      <FilesSelect targetType='list' isUpload={true} onSelect={onSelectFn} />

      <FilesUploadDrawer
        targetType='list'
        open={drawerOpen}
        list={fileList}
        setOpen={setDrawerOpen}
      />
    </div>
  )
}

export default FilesListUpload
`;function D(){const n=h.c(4);let t;n[0]===Symbol.for("react.memo_cache_sentinel")?(t=[],n[0]=t):t=n[0];const[l,r]=a.useState(t);let s;if(n[1]===Symbol.for("react.memo_cache_sentinel")){const o=function(c){r(c)};s=e.jsx(x,{targetType:"list",onSelect:o,className:"mt-4"}),n[1]=s}else s=n[1];let i;return n[2]!==l?(i=e.jsxs(e.Fragment,{children:[s,e.jsx(f,{className:"mt-4!",jsonClassName:"max-h-100 overflow-auto",children:l})]}),n[2]=l,n[3]=i):i=n[3],i}const I=`import { useState } from 'react'
import FilesSelect from '@/components/FilesSelect'
import type { FileTreeItem } from '@/types/files'
import JsonView from '@/components/JsonView'

function FileSelectList() {
  const [listData, setListData] = useState<FileTreeItem[]>([])

  function onSelect(fileList: FileTreeItem[]) {
    setListData(fileList)
  }

  return (
    <>
      <FilesSelect targetType='list' onSelect={onSelect} className='mt-4'></FilesSelect>
      <JsonView className='mt-4!' jsonClassName='max-h-100 overflow-auto'>
        {listData}
      </JsonView>
    </>
  )
}

export default FileSelectList
`;function N(){const n=h.c(4);let t;n[0]===Symbol.for("react.memo_cache_sentinel")?(t=[],n[0]=t):t=n[0];const[l,r]=a.useState(t);let s;if(n[1]===Symbol.for("react.memo_cache_sentinel")){const o=function(c){r(c)};s=e.jsx(x,{targetType:"tree",onSelect:o,className:"mt-4"}),n[1]=s}else s=n[1];let i;return n[2]!==l?(i=e.jsxs(e.Fragment,{children:[s,e.jsx(f,{className:"mt-4!",jsonClassName:"max-h-100 overflow-auto",children:l})]}),n[2]=l,n[3]=i):i=n[3],i}const b=`import { useState } from 'react'
import FilesSelect from '@/components/FilesSelect'
import { type FileTreeItem } from '@/types/files'
import JsonView from '@/components/JsonView'

function FileSelectTree() {
  const [listData, setListData] = useState<FileTreeItem[]>([])

  function onSelect(fileList: FileTreeItem[]) {
    setListData(fileList)
  }

  return (
    <>
      <FilesSelect targetType='tree' onSelect={onSelect} className='mt-4'></FilesSelect>
      <JsonView className='mt-4!' jsonClassName='max-h-100 overflow-auto'>
        {listData}
      </JsonView>
    </>
  )
}

export default FileSelectTree
`;function _(){const n=h.c(4);let t;n[0]===Symbol.for("react.memo_cache_sentinel")?(t=[],n[0]=t):t=n[0];const[l,r]=a.useState(t);let s;if(n[1]===Symbol.for("react.memo_cache_sentinel")){const o=function(c){r(c)};s=e.jsx(x,{targetType:"list",isIgnoreFolder:!0,onSelect:o,className:"mt-4"}),n[1]=s}else s=n[1];let i;return n[2]!==l?(i=e.jsxs(e.Fragment,{children:[s,e.jsx(f,{className:"mt-4!",jsonClassName:"max-h-100 overflow-auto",children:l})]}),n[2]=l,n[3]=i):i=n[3],i}const E=`import { useState } from 'react'
import FilesSelect from '@/components/FilesSelect'
import type { FileItemType } from '@/types/files'
import JsonView from '@/components/JsonView'

function FileSelectListIgnoreFolder() {
  const [listData, setListData] = useState<FileItemType[]>([])

  function onSelect(fileList: FileItemType[]) {
    setListData(fileList)
  }

  return (
    <>
      <FilesSelect targetType='list' isIgnoreFolder={true} onSelect={onSelect} className='mt-4'></FilesSelect>
      <JsonView className='mt-4!' jsonClassName='max-h-100 overflow-auto'>
        {listData}
      </JsonView>
    </>
  )
}

export default FileSelectListIgnoreFolder
`;function u(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...j(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"filesselect",children:"FilesSelect"}),`
`,e.jsx(t.p,{children:"FilesSelect 组件用于选择文件列表，支持选择文件、选择文件夹（含根目录）、选择文件夹（不含根目录）。"}),`
`,e.jsx(t.h2,{id:"目录",children:"目录"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"#api",children:"API"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#%E5%8F%82%E6%95%B0-props",children:"参数 Props"})}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"#%E6%BC%94%E7%A4%BA%E7%A4%BA%E4%BE%8B",children:"演示示例"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#%E6%96%87%E4%BB%B6%E5%88%97%E8%A1%A8",children:"文件列表"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#%E5%BF%BD%E7%95%A5%E6%96%87%E4%BB%B6%E5%A4%B9%E7%9A%84%E6%96%87%E4%BB%B6%E5%88%97%E8%A1%A8",children:"忽略文件夹的文件列表"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#%E6%96%87%E4%BB%B6%E6%A0%91",children:"文件树"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#%E4%B8%8A%E4%BC%A0%E6%96%87%E4%BB%B6%E6%96%87%E4%BB%B6%E5%A4%B9",children:"上传文件/文件夹"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(t.h3,{id:"参数-props",children:"参数 Props"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`export type FileType = 'file' | 'folder'
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
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`export type FilesSelectProps = {
  targetType?: TargetType,
  onSelect: (fileTrees: FileTreeItem[]) => void
  isIgnoreFolder?: boolean // 当 targetType 为 'list' 时，是否忽略文件夹，比如说上传文件的时候，只需要上传文件，不需要上传文件夹
  isUpload?: boolean
  className?: string
  children?: React.ReactNode
}
`})}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"属性"}),e.jsx(t.th,{children:"说明"}),e.jsx(t.th,{children:"类型"}),e.jsx(t.th,{children:"默认值"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"targetType"})}),e.jsx(t.td,{children:"执行 onSelect 时，参数的类型， tree 时为文件树，list 时为文件列表"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"'tree' | 'list'"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"'tree'"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"onSelect"})}),e.jsx(t.td,{children:"选择文件/文件夹后的回调函数"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"(fileTrees: FileTreeItem[]) => void"})}),e.jsx(t.td,{children:"-"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"isIgnoreFolder"})}),e.jsx(t.td,{children:"当 targetType 为 'list' 时，是否忽略文件夹，比如说上传文件的时候，只需要上传文件，不需要上传文件夹"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"false"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"isUpload"})}),e.jsx(t.td,{children:"是否上传文件/文件夹，仅用于更换 选择 或 上传 文件文案"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"false"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"className"})}),e.jsx(t.td,{children:"自定义class类名"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"-"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"children"})}),e.jsx(t.td,{children:"子元素"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"React.ReactNode"})}),e.jsx(t.td,{children:"-"})]})]})]}),`
`,e.jsx(t.h2,{id:"演示示例",children:"演示示例"}),`
`,e.jsx(t.h3,{id:"文件列表",children:"文件列表"}),`
`,e.jsx(p,{code:I,title:"文件列表",description:"选择文件列表。",children:e.jsx(D,{})}),`
`,e.jsx(t.h3,{id:"忽略文件夹的文件列表",children:"忽略文件夹的文件列表"}),`
`,e.jsx(p,{code:E,title:"忽略文件夹的文件列表",description:"选择文件列表，忽略文件夹。",children:e.jsx(_,{})}),`
`,e.jsx(t.h3,{id:"文件树",children:"文件树"}),`
`,e.jsx(p,{code:b,title:"文件树",description:"选择文件树。",children:e.jsx(N,{})}),`
`,e.jsx(t.h3,{id:"上传文件文件夹",children:"上传文件/文件夹"}),`
`,e.jsx(p,{code:w,title:"上传文件/文件夹",description:"选择之后直接上传文件/文件夹。",children:e.jsx(L,{})})]})}function B(n={}){const{wrapper:t}={...j(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(u,{...n})}):u(n)}function U(){const n=h.c(6),[t,l]=a.useState(!1);let r;n[0]===Symbol.for("react.memo_cache_sentinel")?(r=[],n[0]=r):r=n[0];const[s,i]=a.useState(r);let o;n[1]===Symbol.for("react.memo_cache_sentinel")?(o=F=>{i(F),l(!0)},n[1]=o):o=n[1];const d=o;let c;n[2]===Symbol.for("react.memo_cache_sentinel")?(c=e.jsx(x,{targetType:"list",isUpload:!0,onSelect:d}),n[2]=c):c=n[2];let m;return n[3]!==t||n[4]!==s?(m=e.jsxs("div",{className:"px-4 pb-4",children:[c,e.jsx(y,{targetType:"list",open:t,list:s,setOpen:l})]}),n[3]=t,n[4]=s,n[5]=m):m=n[5],m}const J=`import { useState } from 'react'
import FilesUploadDrawer from '@/components/FilesUploadDrawer'
import FilesSelect from '@/components/FilesSelect'
import type { FileItemType } from '@/types/files'

function FilesListUpload() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [fileList, setFileList] = useState<FileItemType[]>([])

  const onSelectFn = (files: FileItemType[]) => {
    setFileList(files)
    setDrawerOpen(true)
  }

  return (
    <div className='px-4 pb-4'>
      <FilesSelect targetType='list' isUpload={true} onSelect={onSelectFn} />

      <FilesUploadDrawer
        targetType='list'
        open={drawerOpen}
        list={fileList}
        setOpen={setDrawerOpen}
      />
    </div>
  )
}

export default FilesListUpload
`;function V(){const n=h.c(4);let t;n[0]===Symbol.for("react.memo_cache_sentinel")?(t=[],n[0]=t):t=n[0];const[l,r]=a.useState(t);let s;if(n[1]===Symbol.for("react.memo_cache_sentinel")){const o=function(c){r(c)};s=e.jsx(x,{targetType:"list",onSelect:o,className:"mt-4"}),n[1]=s}else s=n[1];let i;return n[2]!==l?(i=e.jsxs(e.Fragment,{children:[s,e.jsx(f,{className:"mt-4!",jsonClassName:"max-h-100 overflow-auto",children:l})]}),n[2]=l,n[3]=i):i=n[3],i}const v=`import { useState } from 'react'
import FilesSelect from '@/components/FilesSelect'
import type { FileTreeItem } from '@/types/files'
import JsonView from '@/components/JsonView'

function FileSelectList() {
  const [listData, setListData] = useState<FileTreeItem[]>([])

  function onSelect(fileList: FileTreeItem[]) {
    setListData(fileList)
  }

  return (
    <>
      <FilesSelect targetType='list' onSelect={onSelect} className='mt-4'></FilesSelect>
      <JsonView className='mt-4!' jsonClassName='max-h-100 overflow-auto'>
        {listData}
      </JsonView>
    </>
  )
}

export default FileSelectList
`;function C(){const n=h.c(4);let t;n[0]===Symbol.for("react.memo_cache_sentinel")?(t=[],n[0]=t):t=n[0];const[l,r]=a.useState(t);let s;if(n[1]===Symbol.for("react.memo_cache_sentinel")){const o=function(c){r(c)};s=e.jsx(x,{targetType:"tree",onSelect:o,className:"mt-4"}),n[1]=s}else s=n[1];let i;return n[2]!==l?(i=e.jsxs(e.Fragment,{children:[s,e.jsx(f,{className:"mt-4!",jsonClassName:"max-h-100 overflow-auto",children:l})]}),n[2]=l,n[3]=i):i=n[3],i}const A=`import { useState } from 'react'
import FilesSelect from '@/components/FilesSelect'
import type { FileTreeItem } from '@/types/files'
import JsonView from '@/components/JsonView'

function FileSelectTree() {
  const [listData, setListData] = useState<FileTreeItem[]>([])

  function onSelect(fileList: FileTreeItem[]) {
    setListData(fileList)
  }

  return (
    <>
      <FilesSelect targetType='tree' onSelect={onSelect} className='mt-4'></FilesSelect>
      <JsonView className='mt-4!' jsonClassName='max-h-100 overflow-auto'>
        {listData}
      </JsonView>
    </>
  )
}

export default FileSelectTree
`;function O(){const n=h.c(4);let t;n[0]===Symbol.for("react.memo_cache_sentinel")?(t=[],n[0]=t):t=n[0];const[l,r]=a.useState(t);let s;if(n[1]===Symbol.for("react.memo_cache_sentinel")){const o=function(c){r(c)};s=e.jsx(x,{targetType:"list",isIgnoreFolder:!0,onSelect:o,className:"mt-4"}),n[1]=s}else s=n[1];let i;return n[2]!==l?(i=e.jsxs(e.Fragment,{children:[s,e.jsx(f,{className:"mt-4!",jsonClassName:"max-h-100 overflow-auto",children:l})]}),n[2]=l,n[3]=i):i=n[3],i}const P=`import { useState } from 'react'
import FilesSelect from '@/components/FilesSelect'
import type { FileTreeItem } from '@/types/files'
import JsonView from '@/components/JsonView'

function FileSelectListIgnoreFolder() {
  const [listData, setListData] = useState<FileTreeItem[]>([])

  function onSelect(fileList: FileTreeItem[]) {
    setListData(fileList)
  }

  return (
    <>
      <FilesSelect targetType='list' isIgnoreFolder={true} onSelect={onSelect} className='mt-4'></FilesSelect>
      <JsonView className='mt-4!' jsonClassName='max-h-100 overflow-auto'>
        {listData}
      </JsonView>
    </>
  )
}

export default FileSelectListIgnoreFolder
`;function S(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...j(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"filesselect",children:"FilesSelect"}),`
`,e.jsx(t.p,{children:"The FileSelect component is used to select a list of files, supporting file selection, folder selection (including root directory), and folder selection (excluding root directory)."}),`
`,e.jsx(t.h2,{id:"toc",children:"TOC"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"#api",children:"API"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#parameters-props",children:"Parameters Props"})}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"#demos",children:"Demos"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#file-list",children:"File List"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#ignore-folders-in-file-list",children:"Ignore Folders in File List"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#file-tree",children:"File Tree"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#upload-filesfolders",children:"Upload Files/Folders"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(t.h3,{id:"parameters-props",children:"Parameters Props"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`export type FileType = 'file' | 'folder'
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
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`export type FilesSelectProps = {
  targetType?: TargetType,
  onSelect: (fileTrees: FileTreeItem[]) => void
  isIgnoreFolder?: boolean // 当 targetType 为 'list' 时，是否忽略文件夹，比如说上传文件的时候，只需要上传文件，不需要上传文件夹
  isUpload?: boolean
  className?: string
  children?: React.ReactNode
}
`})}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Parameter"}),e.jsx(t.th,{children:"Description"}),e.jsx(t.th,{children:"Type"}),e.jsx(t.th,{children:"Default"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"targetType"})}),e.jsx(t.td,{children:"Execution parameter type of onSelect, tree for file tree, list for file list"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"'tree' | 'list'"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"'tree'"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"onSelect"})}),e.jsx(t.td,{children:"Callback function after file/folder selection"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"(fileTrees: FileTreeItem[]) => void"})}),e.jsx(t.td,{children:"-"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"isIgnoreFolder"})}),e.jsx(t.td,{children:"Whether to ignore folders when targetType is 'list', for example, when uploading files, only files need to be uploaded, not folders"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"false"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"isUpload"})}),e.jsx(t.td,{children:"Whether to upload files/folders, only used to change the text of the select/upload button"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"false"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"className"})}),e.jsx(t.td,{children:"Custom class name"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"-"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"children"})}),e.jsx(t.td,{children:"Child elements"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"React.ReactNode"})}),e.jsx(t.td,{children:"-"})]})]})]}),`
`,e.jsx(t.h2,{id:"demos",children:"Demos"}),`
`,e.jsx(t.h3,{id:"file-list",children:"File List"}),`
`,e.jsx(p,{code:v,title:"File List",description:"Select file list.",children:e.jsx(V,{})}),`
`,e.jsx(t.h3,{id:"ignore-folders-in-file-list",children:"Ignore Folders in File List"}),`
`,e.jsx(p,{code:P,title:"Ignore Folders in File List",description:"Select file list, ignore folders.",children:e.jsx(O,{})}),`
`,e.jsx(t.h3,{id:"file-tree",children:"File Tree"}),`
`,e.jsx(p,{code:A,title:"File Tree",description:"Select file tree.",children:e.jsx(C,{})}),`
`,e.jsx(t.h3,{id:"upload-filesfolders",children:"Upload Files/Folders"}),`
`,e.jsx(p,{code:J,title:"Upload Files/Folders",description:"Select files/folders, then upload them directly.",children:e.jsx(U,{})})]})}function R(n={}){const{wrapper:t}={...j(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(S,{...n})}):S(n)}function ce(){const n=h.c(2),t=T();let l;return n[0]!==t?(l=e.jsx("div",{className:"px-4 pb-4",children:e.jsx(g,{children:t==="zh"?e.jsx(B,{}):e.jsx(R,{})})}),n[0]=t,n[1]=l):l=n[1],l}export{ce as default};
