import{R as g,j as e,b as m}from"./@uiw/react-codemirror-dimZJgSu.js";import{c as p,u as L}from"./index-CwDalt6B.js";import{M as P}from"./MDXRender--j0cKFwg.js";import{D as x}from"./DropElement-C0NNM9yT.js";import{F as I}from"./FilesDrawer-DH-ydRHZ.js";import{T as w}from"./index-D7f8rzsr.js";import{F as E}from"./FilesUploadDrawer-yJjplDqt.js";import{J as N}from"./JsonView-DtypalN_.js";import{P as f}from"./Playground-XZt4ylVh.js";import{u as j}from"./@mdx-js/react-BwGmxI0N.js";import"./react-syntax-highlighter-DW6ulm9l.js";import"./markdown-plugins-CqPL4kxN.js";import"./react-markdown-U0gPFawi.js";import"./index-BSg5Lc9Y.js";import"./isBrowser-BdZk1G-M.js";import"./use-immer.module-BUjbJLOH.js";import"./index-DvjyObLV.js";import"./progress-B267_-79.js";import"./iconUtil-nk-7A3wh.js";import"./JsonEditor-C8Qw5Tcq.js";import"./CodeEditor-DCLYA5gR.js";import"./JsonRender-CBqOC-Sc.js";import"./use-undo.m-DQTOi8z5.js";import"./index-C7j3i05K.js";function S(){const n=p.c(6);let t;n[0]===Symbol.for("react.memo_cache_sentinel")?(t=[],n[0]=t):t=n[0];const[r,d]=g.useState(t);let s;if(n[1]===Symbol.for("react.memo_cache_sentinel")){const o=function(a){console.log("fileTrees",a),d(a)};s=e.jsx(x,{targetType:"tree",onSelect:o,className:"h-30!"}),n[1]=s}else s=n[1];let l;n[2]!==r?(l=r.length>0&&e.jsx(w,{fieldNames:{title:"name",key:"filePath",children:"children"},treeData:r,showLine:!0,defaultExpandAll:!0,height:320,showIcon:!0,icon:b,className:"mt-4 h-80"}),n[2]=r,n[3]=l):l=n[3];let i;return n[4]!==l?(i=e.jsxs(e.Fragment,{children:[s,l]}),n[4]=l,n[5]=i):i=n[5],i}function b(n){return e.jsx(I,{fileName:n.title,type:n.type==="file"?"file":"folder"})}const _=`import React from 'react'
import { Tree } from 'antd'
import DropElement from '@/components/DropElement'
import type { FileTreeItem } from '@/types/files'
import FileIcon from '@/components/FileIcon'

function DropUpload() {
  const [treeData, setTreeData] = React.useState<FileTreeItem[]>([])
  
  function onDropTree(fileTrees: FileTreeItem[]) {
    console.log('fileTrees', fileTrees)
    setTreeData(fileTrees)
  }

  return (
    <>
      <DropElement targetType='tree' onSelect={onDropTree} className='h-30!'></DropElement>
      {treeData.length > 0 && (
        <Tree
          fieldNames={{
            title: 'name',
            key: 'filePath',
            children: 'children'
          }}
          // @ts-ignore
          treeData={treeData}
          showLine={true}
          defaultExpandAll
          height={320}
          showIcon
          icon={(props: any) => {
            return <FileIcon fileName={props.title} type={props.type === 'file' ? 'file' : 'folder'}></FileIcon>
          }}
          className='mt-4 h-80'
        />
      )}
    </>
  )
}

export default DropUpload
`;function R(){const n=p.c(10);let t;n[0]===Symbol.for("react.memo_cache_sentinel")?(t=[],n[0]=t):t=n[0];const[r,d]=m.useState(t),[s,l]=m.useState(!1);let i;if(n[1]===Symbol.for("react.memo_cache_sentinel")){let u=function(h){return h.map(O)};const T=function(y){d(u(y)),l(!0)};i=e.jsx(x,{targetType:"list",onSelect:T,className:"mt-4"}),n[1]=i}else i=n[1];let o;n[2]!==r?(o=e.jsx(N,{className:"mt-4!",jsonClassName:"max-h-100 overflow-auto",children:r}),n[2]=r,n[3]=o):o=n[3];let c;n[4]!==s||n[5]!==r?(c=e.jsx(E,{targetType:"list",open:s,list:r,setOpen:l}),n[4]=s,n[5]=r,n[6]=c):c=n[6];let a;return n[7]!==o||n[8]!==c?(a=e.jsxs(e.Fragment,{children:[i,o,c]}),n[7]=o,n[8]=c,n[9]=a):a=n[9],a}function O(n){return{type:n.type,file:n.file,name:n.name,filePath:n.filePath,folderPath:n.folderPath}}const U=`import { useState } from 'react'
import DropElement from '@/components/DropElement'
import type { FileItemType, FileTreeItem } from '@/types/files'
import FilesUploadDrawer from '@/components/FilesUploadDrawer'
import JsonView from '@/components/JsonView'

function FileList() {
  const [listData, setListData] = useState<FileItemType[]>([])
  const [drawerOpen, setDrawerOpen] = useState(false)

  function onDropList(fileList: FileTreeItem[]) {
    setListData(changeFileTreeItemToFileItemType(fileList))
    setDrawerOpen(true)
  }
  function changeFileTreeItemToFileItemType(fileList: FileTreeItem[]): FileItemType[] {
    return fileList.map(item => ({
      type: item.type,
      file: item.file,
      name: item.name,
      filePath: item.filePath,
      folderPath: item.folderPath,
    }))
  }

  return (
    <>
      <DropElement targetType='list' onSelect={onDropList} className='mt-4'></DropElement>
      <JsonView className='mt-4!' jsonClassName='max-h-100 overflow-auto'>
        {listData}
      </JsonView>
      <FilesUploadDrawer
        targetType='list'
        open={drawerOpen}
        list={listData}
        setOpen={setDrawerOpen}
      />
    </>
  )
}

export default FileList
`;function D(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...j(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"dropelement",children:"DropElement"}),`
`,e.jsx(t.p,{children:"拖拽组件，支持拖拽多个文件/文件夹，可以指定回调函数的参数类型是 文件树 还是 文件列表。"}),`
`,e.jsx(t.h2,{id:"目录",children:"目录"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"#api",children:"API"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#%E5%8F%82%E6%95%B0-props",children:"参数 Props"})}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"#%E6%BC%94%E7%A4%BA%E7%A4%BA%E4%BE%8B",children:"演示示例"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#%E6%96%87%E4%BB%B6%E6%A0%91",children:"文件树"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#%E6%96%87%E4%BB%B6%E5%88%97%E8%A1%A8",children:"文件列表"})}),`
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
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`export type DropElementProps = {
  targetType?: TargetType // 执行 onSelect 时，参数的类型， tree 时为文件树，list 时为文件列表
  isIgnoreFolder?: boolean // 当 targetType 为 'list' 时，是否忽略文件夹，比如说上传文件的时候，只需要上传文件，不需要上传文件夹
  isUpload?: boolean
  onSelect: (fileTrees: FileTreeItem[]) => void
  className?: string
  children?: React.ReactNode
}
`})}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"属性"}),e.jsx(t.th,{children:"说明"}),e.jsx(t.th,{children:"类型"}),e.jsx(t.th,{children:"默认值"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"targetType"})}),e.jsx(t.td,{children:"回调函数参数类型"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"'tree' | 'list'"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"'tree'"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"isIgnoreFolder"})}),e.jsx(t.td,{children:"当 targetType 为 'list' 时，是否忽略文件夹，比如说上传文件的时候，只需要上传文件，不需要上传文件夹"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"false"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"isUpload"})}),e.jsx(t.td,{children:"是否上传文件/文件夹，仅用于文案"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"false"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"onSelect"})}),e.jsx(t.td,{children:"拖拽结束后的回调函数"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"(fileTrees: FileTreeItem[]) => void"})}),e.jsx(t.td,{children:"-"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"className"})}),e.jsx(t.td,{children:"自定义class类名"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"-"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"children"})}),e.jsx(t.td,{children:"自定义内容"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"React.ReactNode"})}),e.jsx(t.td,{children:"-"})]})]})]}),`
`,e.jsx(t.h2,{id:"演示示例",children:"演示示例"}),`
`,e.jsx(t.h3,{id:"文件树",children:"文件树"}),`
`,e.jsx(f,{code:_,title:"文件树",description:"拖拽文件/文件夹到此处，使用文件树查看文件结构。",children:e.jsx(S,{})}),`
`,e.jsx(t.h3,{id:"文件列表",children:"文件列表"}),`
`,e.jsx(f,{code:U,title:"文件列表",description:"拖拽文件/文件夹到此处，使用文件列表直接上传。",children:e.jsx(R,{})})]})}function A(n={}){const{wrapper:t}={...j(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(D,{...n})}):D(n)}function C(){const n=p.c(6);let t;n[0]===Symbol.for("react.memo_cache_sentinel")?(t=[],n[0]=t):t=n[0];const[r,d]=g.useState(t);let s;if(n[1]===Symbol.for("react.memo_cache_sentinel")){const o=function(a){console.log("fileTrees",a),d(a)};s=e.jsx(x,{targetType:"tree",onSelect:o,className:"h-30!"}),n[1]=s}else s=n[1];let l;n[2]!==r?(l=r.length>0&&e.jsx(w,{fieldNames:{title:"name",key:"filePath",children:"children"},treeData:r,showLine:!0,defaultExpandAll:!0,height:320,showIcon:!0,icon:$,className:"mt-4 h-80"}),n[2]=r,n[3]=l):l=n[3];let i;return n[4]!==l?(i=e.jsxs(e.Fragment,{children:[s,l]}),n[4]=l,n[5]=i):i=n[5],i}function $(n){return e.jsx(I,{fileName:n.title,type:n.type==="file"?"file":"folder"})}const B=`import React from 'react'
import { Tree } from 'antd'
import DropElement from '@/components/DropElement'
import type { FileTreeItem } from '@/types/files'
import FileIcon from '@/components/FileIcon'

function DropUpload() {
  const [treeData, setTreeData] = React.useState<FileTreeItem[]>([])
  
  function onDropTree(fileTrees: FileTreeItem[]) {
    console.log('fileTrees', fileTrees)
    setTreeData(fileTrees)
  }

  return (
    <>
      <DropElement targetType='tree' onSelect={onDropTree} className='h-30!'></DropElement>
      {treeData.length > 0 && (
        <Tree
          fieldNames={{
            title: 'name',
            key: 'filePath',
            children: 'children'
          }}
          // @ts-ignore
          treeData={treeData}
          showLine={true}
          defaultExpandAll
          height={320}
          showIcon
          icon={(props: any) => {
            return <FileIcon fileName={props.title} type={props.type === 'file' ? 'file' : 'folder'}></FileIcon>
          }}
          className='mt-4 h-80'
        />
      )}
    </>
  )
}

export default DropUpload
`;function v(){const n=p.c(10);let t;n[0]===Symbol.for("react.memo_cache_sentinel")?(t=[],n[0]=t):t=n[0];const[r,d]=m.useState(t),[s,l]=m.useState(!1);let i;if(n[1]===Symbol.for("react.memo_cache_sentinel")){let u=function(h){return h.map(J)};const T=function(y){d(u(y)),l(!0)};i=e.jsx(x,{targetType:"list",onSelect:T,className:"mt-4"}),n[1]=i}else i=n[1];let o;n[2]!==r?(o=e.jsx(N,{className:"mt-4!",jsonClassName:"max-h-100 overflow-auto",children:r}),n[2]=r,n[3]=o):o=n[3];let c;n[4]!==s||n[5]!==r?(c=e.jsx(E,{targetType:"list",open:s,list:r,setOpen:l}),n[4]=s,n[5]=r,n[6]=c):c=n[6];let a;return n[7]!==o||n[8]!==c?(a=e.jsxs(e.Fragment,{children:[i,o,c]}),n[7]=o,n[8]=c,n[9]=a):a=n[9],a}function J(n){return{type:n.type,file:n.file,name:n.name,filePath:n.filePath,folderPath:n.folderPath}}const M=`import { useState } from 'react'
import DropElement from '@/components/DropElement'
import type { FileItemType, FileTreeItem } from '@/types/files'
import FilesUploadDrawer from '@/components/FilesUploadDrawer'
import JsonView from '@/components/JsonView'

function FileList() {
  const [listData, setListData] = useState<FileItemType[]>([])
  const [drawerOpen, setDrawerOpen] = useState(false)

  function onDropList(fileList: FileTreeItem[]) {
    setListData(changeFileTreeItemToFileItemType(fileList))
    setDrawerOpen(true)
  }
  function changeFileTreeItemToFileItemType(fileList: FileTreeItem[]): FileItemType[] {
    return fileList.map(item => ({
      type: item.type,
      file: item.file,
      name: item.name,
      filePath: item.filePath,
      folderPath: item.folderPath,
    }))
  }

  return (
    <>
      <DropElement targetType='list' onSelect={onDropList} className='mt-4'></DropElement>
      <JsonView className='mt-4!' jsonClassName='max-h-100 overflow-auto'>
        {listData}
      </JsonView>
      <FilesUploadDrawer
        targetType='list'
        open={drawerOpen}
        list={listData}
        setOpen={setDrawerOpen}
      />
    </>
  )
}

export default FileList
`;function F(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...j(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"dropelement",children:"DropElement"}),`
`,e.jsx(t.p,{children:"DropElement is a drag and drop component, which supports dragging multiple files/folders, and can specify whether the parameter type of the callback function is a file tree or a file list."}),`
`,e.jsx(t.h2,{id:"toc",children:"TOC"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"#api",children:"API"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#parameters-props",children:"Parameters Props"})}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"#demos",children:"Demos"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#file-tree",children:"File Tree"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#file-list",children:"File List"})}),`
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
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`export type DropElementProps = {
  targetType?: TargetType // 执行 onSelect 时，参数的类型， tree 时为文件树，list 时为文件列表
  isIgnoreFolder?: boolean // 当 targetType 为 'list' 时，是否忽略文件夹，比如说上传文件的时候，只需要上传文件，不需要上传文件夹
  isUpload?: boolean
  onSelect: (fileTrees: FileTreeItem[]) => void
  className?: string
  children?: React.ReactNode
}
`})}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Parameter"}),e.jsx(t.th,{children:"Description"}),e.jsx(t.th,{children:"Type"}),e.jsx(t.th,{children:"Default"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"targetType"})}),e.jsx(t.td,{children:"Execution parameter type of onSelect, tree for file tree, list for file list"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"'tree' | 'list'"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"tree"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"isIgnoreFolder"})}),e.jsx(t.td,{children:"Whether to ignore folders when targetType is 'list', for example, when uploading files, only files need to be uploaded, not folders"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"false"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"isUpload"})}),e.jsx(t.td,{children:"Whether to upload files/folders, only used to change the text of the select/upload button"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"false"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"onSelect"})}),e.jsx(t.td,{children:"Callback function when files/folders are dropped"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"(fileTrees: FileTreeItem[]) => void"})}),e.jsx(t.td,{children:"-"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"className"})}),e.jsx(t.td,{children:"Custom class name"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"-"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"children"})}),e.jsx(t.td,{children:"Custom children"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"React.ReactNode"})}),e.jsx(t.td,{children:"-"})]})]})]}),`
`,e.jsx(t.h2,{id:"demos",children:"Demos"}),`
`,e.jsx(t.h3,{id:"file-tree",children:"File Tree"}),`
`,e.jsx(f,{code:B,title:"File Tree",description:"Drag and drop files/folders to view the file structure.",children:e.jsx(C,{})}),`
`,e.jsx(t.h3,{id:"file-list",children:"File List"}),`
`,e.jsx(f,{code:M,title:"File List",description:"Drag and drop files/folders to upload directly.",children:e.jsx(v,{})})]})}function V(n={}){const{wrapper:t}={...j(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(F,{...n})}):F(n)}function me(){const n=p.c(2),t=L();let r;return n[0]!==t?(r=e.jsx("div",{className:"px-4 pb-4",children:e.jsx(P,{children:t==="zh"?e.jsx(A,{}):e.jsx(V,{})})}),n[0]=t,n[1]=r):r=n[1],r}export{me as default};
