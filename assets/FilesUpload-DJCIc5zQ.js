import{c as T,r as f,j as e,u as L}from"./index-CIGk9ZnJ.js";import{u as w,M as O}from"./MDXRender-D9plMhjo.js";import{P as S}from"./Playground-BNwi_gF4.js";import{F as U}from"./FilesUploadDrawer-CAzdWzVU.js";import{F as I}from"./FilesSelect-D4xqUsCv.js";import{J as g}from"./JsonView-C7Lw0-dA.js";import"./JsonEditor-DY1ovXTU.js";import"./CodeEditor-DvkJBADL.js";import"./JsonRender-COIaxv0w.js";import"./use-undo.m-B9bhx3J_.js";function _(){const s=T.c(13),[t,h]=f.useState(!1);let r;s[0]===Symbol.for("react.memo_cache_sentinel")?(r=[],s[0]=r):r=s[0];const[m,u]=f.useState(r);let i;s[1]===Symbol.for("react.memo_cache_sentinel")?(i=[],s[1]=i):i=s[1];const[x,j]=f.useState(i);let o;s[2]===Symbol.for("react.memo_cache_sentinel")?(o=p=>{u(p),h(!0)},s[2]=o):o=s[2];const F=o;let c;s[3]===Symbol.for("react.memo_cache_sentinel")?(c=p=>{console.log("success",p),j(p)},s[3]=c):c=s[3];const y=c;let a;s[4]===Symbol.for("react.memo_cache_sentinel")?(a=e.jsx(I,{targetType:"list",isUpload:!0,onSelect:F}),s[4]=a):a=s[4];let n;s[5]!==t||s[6]!==m?(n=e.jsx(U,{targetType:"list",open:t,list:m,setOpen:h,onSuccess:y}),s[5]=t,s[6]=m,s[7]=n):n=s[7];let l;s[8]!==x?(l=e.jsx(g,{className:"mt-4!",jsonClassName:"max-h-100 overflow-auto",children:x}),s[8]=x,s[9]=l):l=s[9];let d;return s[10]!==n||s[11]!==l?(d=e.jsxs("div",{className:"px-4 pb-4",children:[a,n,l]}),s[10]=n,s[11]=l,s[12]=d):d=s[12],d}const v=`import { useState } from 'react'
import FilesUploadDrawer, { type UploadFileItemType } from '@/components/FilesUploadDrawer'
import FilesSelect from '@/components/FilesSelect'
import type { FileItemType } from '@/types/files'
import JsonView from '@/components/JsonView'

function FilesListUpload() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [fileList, setFileList] = useState<FileItemType[]>([])
  const [listData, setListData] = useState<UploadFileItemType[]>([])

  const onSelectFn = (files: FileItemType[]) => {
    setFileList(files)
    setDrawerOpen(true)
  }
  const onSuccessFn = (list: UploadFileItemType[]) => {
    console.log('success', list)
    setListData(list)
  }

  return (
    <div className='px-4 pb-4'>
      <FilesSelect targetType='list' isUpload={true} onSelect={onSelectFn} />

      <FilesUploadDrawer
        targetType='list'
        open={drawerOpen}
        list={fileList}
        setOpen={setDrawerOpen}
        onSuccess={onSuccessFn}
      />

      <JsonView className='mt-4!' jsonClassName='max-h-100 overflow-auto'>
        {listData}
      </JsonView>
    </div>
  )
}

export default FilesListUpload
`;function N(){const s=T.c(13),[t,h]=f.useState(!1);let r;s[0]===Symbol.for("react.memo_cache_sentinel")?(r=[],s[0]=r):r=s[0];const[m,u]=f.useState(r);let i;s[1]===Symbol.for("react.memo_cache_sentinel")?(i=[],s[1]=i):i=s[1];const[x,j]=f.useState(i);let o;s[2]===Symbol.for("react.memo_cache_sentinel")?(o=p=>{u(p),h(!0)},s[2]=o):o=s[2];const F=o;let c;s[3]===Symbol.for("react.memo_cache_sentinel")?(c=p=>{console.log("success",p),j(p)},s[3]=c):c=s[3];const y=c;let a;s[4]===Symbol.for("react.memo_cache_sentinel")?(a=e.jsx(I,{targetType:"list",isUpload:!0,onSelect:F}),s[4]=a):a=s[4];let n;s[5]!==t||s[6]!==m?(n=e.jsx(U,{targetType:"tree",open:t,list:m,setOpen:h,onSuccess:y}),s[5]=t,s[6]=m,s[7]=n):n=s[7];let l;s[8]!==x?(l=e.jsx(g,{className:"mt-4!",jsonClassName:"max-h-100 overflow-auto",children:x}),s[8]=x,s[9]=l):l=s[9];let d;return s[10]!==n||s[11]!==l?(d=e.jsxs("div",{className:"px-4 pb-4",children:[a,n,l]}),s[10]=n,s[11]=l,s[12]=d):d=s[12],d}const P=`import { useState } from 'react'
import FilesUploadDrawer, { type UploadResultFileTreeItemType } from '@/components/FilesUploadDrawer'
import FilesSelect from '@/components/FilesSelect'
import type { FileItemType } from '@/types/files'
import JsonView from '@/components/JsonView'

function FilesListUploadTree() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [fileList, setFileList] = useState<FileItemType[]>([])
    const [treeData, setTreeData] = useState<UploadResultFileTreeItemType[]>([])

  const onSelectFn = (files: FileItemType[]) => {
    setFileList(files)
    setDrawerOpen(true)
  }
  const onSuccessFn = (tree: UploadResultFileTreeItemType[]) => {
    console.log('success', tree)
    setTreeData(tree)
  }

  return (
    <div className='px-4 pb-4'>
      <FilesSelect targetType='list' isUpload={true} onSelect={onSelectFn} />

      <FilesUploadDrawer
        targetType='tree'
        open={drawerOpen}
        list={fileList}
        setOpen={setDrawerOpen}
        onSuccess={onSuccessFn}
      />

      <JsonView className='mt-4!' jsonClassName='max-h-100 overflow-auto'>
        {treeData}
      </JsonView>
    </div>
  )
}

export default FilesListUploadTree
`;function D(s){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...w(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"filesuploaddrawer",children:"FilesUploadDrawer"}),`
`,e.jsxs(t.p,{children:["FilesUploadDrawer 组件用于展示上传多个文件/文件夹的抽屉，因为涉及到上传文件/文件夹的操作，所以使用此组件的时候需要手动处理上传文件和上传文件夹（如果不需要文件夹，则需要手动过滤文件夹或者使用 ",e.jsx(t.code,{children:"FilesSelect"})," 组件设置 ",e.jsx(t.code,{children:"isIgnoreFolder"})," 为 ",e.jsx(t.code,{children:"true"}),"）的函数逻辑。"]}),`
`,e.jsx(t.p,{children:"当父文件夹上传失败的时候，内部的子文件/文件夹直接上传失败。"}),`
`,e.jsx(t.h2,{id:"目录",children:"目录"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"#api",children:"API"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#%E5%8F%82%E6%95%B0-props",children:"参数 Props"})}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"#%E6%BC%94%E7%A4%BA%E7%A4%BA%E4%BE%8B",children:"演示示例"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#%E4%B8%8A%E4%BC%A0%E6%96%87%E4%BB%B6%E6%96%87%E4%BB%B6%E5%A4%B9",children:"上传文件/文件夹"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#%E4%B8%8A%E4%BC%A0%E6%96%87%E4%BB%B6%E6%96%87%E4%BB%B6%E5%A4%B9%E6%A0%91%E7%BB%93%E6%9E%84",children:"上传文件/文件夹（树结构）"})}),`
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

export type FileTreeFileItem = Omit<FileItemType, 'type'> & {
  type: 'file'
}

export type FolderItemType = {
  type: 'folder'
  name: string
  filePath: string
  folderPath: string
  children: FileTreeItem[]
}
export type FileTreeItem = FileTreeFileItem | FolderItemType

export type TargetType = 'tree' | 'list'
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`export type UploadFileItemType = FileItemType & {
  icon: React.ReactNode,
  percent: number,
  percentStatus: ProgressProps['status'],
}

export type UploadResultFIleItemType = Omit<FileItemType, 'filePath' | 'folderPath'>

export type UploadResultFileTreeItemType = UploadResultFIleItemType & {
  children?: UploadResultFileTreeItemType[]
}

export type FilesUploadDrawerProps<T extends TargetType> = {
  targetType: T,
  title?: string,
  open: boolean,
  setOpen: (open: boolean) => void,
  list?: FileItemType[],
  locale?: LocaleType,
  onSuccess?: (fileTrees: T extends 'list' ? UploadFileItemType[] : UploadResultFileTreeItemType[]) => void,
}
`})}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"属性"}),e.jsx(t.th,{children:"说明"}),e.jsx(t.th,{children:"类型"}),e.jsx(t.th,{children:"默认值"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"targetType"}),e.jsx(t.td,{children:"上传成功回调函数的参数类型"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"'tree' | 'list'"})}),e.jsx(t.td,{children:"-"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"title"}),e.jsx(t.td,{children:"抽屉标题"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"'上传文件/文件夹'"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"open"}),e.jsx(t.td,{children:"是否打开抽屉"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"false"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"setOpen"}),e.jsx(t.td,{children:"打开/关闭抽屉的回调函数"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"(open: boolean) => void"})}),e.jsx(t.td,{children:"-"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"list"}),e.jsx(t.td,{children:"上传文件/文件夹列表"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"FileItemType[]"})}),e.jsx(t.td,{children:"[]"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"locale"}),e.jsx(t.td,{children:"语言"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"'zh' | 'en'"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"'zh'"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"onSuccess"}),e.jsx(t.td,{children:"上传成功回调函数"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"(fileTrees: T extends 'list' ? UploadFileItemType[] : UploadResultFileTreeItemType[]) => void"})}),e.jsx(t.td,{children:"-"})]})]})]}),`
`,e.jsx(t.h2,{id:"演示示例",children:"演示示例"}),`
`,e.jsx(t.h3,{id:"上传文件文件夹",children:"上传文件/文件夹"}),`
`,e.jsx(S,{code:v,title:"上传文件/文件夹",description:"选择之后直接上传文件/文件夹，上传成功之后返回文件/文件夹的列表结构。",children:e.jsx(_,{})}),`
`,e.jsx(t.h3,{id:"上传文件文件夹树结构",children:"上传文件/文件夹（树结构）"}),`
`,e.jsx(S,{code:P,title:"上传文件/文件夹（树结构）",description:"选择之后直接上传文件/文件夹，上传成功之后返回文件/文件夹的树结构。",children:e.jsx(N,{})})]})}function E(s={}){const{wrapper:t}={...w(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(D,{...s})}):D(s)}function R(){const s=T.c(13),[t,h]=f.useState(!1);let r;s[0]===Symbol.for("react.memo_cache_sentinel")?(r=[],s[0]=r):r=s[0];const[m,u]=f.useState(r);let i;s[1]===Symbol.for("react.memo_cache_sentinel")?(i=[],s[1]=i):i=s[1];const[x,j]=f.useState(i);let o;s[2]===Symbol.for("react.memo_cache_sentinel")?(o=p=>{u(p),h(!0)},s[2]=o):o=s[2];const F=o;let c;s[3]===Symbol.for("react.memo_cache_sentinel")?(c=p=>{console.log("success",p),j(p)},s[3]=c):c=s[3];const y=c;let a;s[4]===Symbol.for("react.memo_cache_sentinel")?(a=e.jsx(I,{targetType:"list",isUpload:!0,onSelect:F}),s[4]=a):a=s[4];let n;s[5]!==t||s[6]!==m?(n=e.jsx(U,{targetType:"list",open:t,list:m,setOpen:h,onSuccess:y}),s[5]=t,s[6]=m,s[7]=n):n=s[7];let l;s[8]!==x?(l=e.jsx(g,{className:"mt-4!",jsonClassName:"max-h-100 overflow-auto",children:x}),s[8]=x,s[9]=l):l=s[9];let d;return s[10]!==n||s[11]!==l?(d=e.jsxs("div",{className:"px-4 pb-4",children:[a,n,l]}),s[10]=n,s[11]=l,s[12]=d):d=s[12],d}const B=`import { useState } from 'react'
import FilesUploadDrawer, { type UploadFileItemType } from '@/components/FilesUploadDrawer'
import FilesSelect from '@/components/FilesSelect'
import type { FileItemType } from '@/types/files'
import JsonView from '@/components/JsonView'

function FilesListUpload() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [fileList, setFileList] = useState<FileItemType[]>([])
  const [listData, setListData] = useState<UploadFileItemType[]>([])

  const onSelectFn = (files: FileItemType[]) => {
    setFileList(files)
    setDrawerOpen(true)
  }
  const onSuccessFn = (list: UploadFileItemType[]) => {
    console.log('success', list)
    setListData(list)
  }

  return (
    <div className='px-4 pb-4'>
      <FilesSelect targetType='list' isUpload={true} onSelect={onSelectFn} />

      <FilesUploadDrawer
        targetType='list'
        open={drawerOpen}
        list={fileList}
        setOpen={setDrawerOpen}
        onSuccess={onSuccessFn}
      />

      <JsonView className='mt-4!' jsonClassName='max-h-100 overflow-auto'>
        {listData}
      </JsonView>
    </div>
  )
}

export default FilesListUpload
`;function A(){const s=T.c(13),[t,h]=f.useState(!1);let r;s[0]===Symbol.for("react.memo_cache_sentinel")?(r=[],s[0]=r):r=s[0];const[m,u]=f.useState(r);let i;s[1]===Symbol.for("react.memo_cache_sentinel")?(i=[],s[1]=i):i=s[1];const[x,j]=f.useState(i);let o;s[2]===Symbol.for("react.memo_cache_sentinel")?(o=p=>{u(p),h(!0)},s[2]=o):o=s[2];const F=o;let c;s[3]===Symbol.for("react.memo_cache_sentinel")?(c=p=>{console.log("success",p),j(p)},s[3]=c):c=s[3];const y=c;let a;s[4]===Symbol.for("react.memo_cache_sentinel")?(a=e.jsx(I,{targetType:"list",isUpload:!0,onSelect:F}),s[4]=a):a=s[4];let n;s[5]!==t||s[6]!==m?(n=e.jsx(U,{targetType:"tree",open:t,list:m,setOpen:h,onSuccess:y}),s[5]=t,s[6]=m,s[7]=n):n=s[7];let l;s[8]!==x?(l=e.jsx(g,{className:"mt-4!",jsonClassName:"max-h-100 overflow-auto",children:x}),s[8]=x,s[9]=l):l=s[9];let d;return s[10]!==n||s[11]!==l?(d=e.jsxs("div",{className:"px-4 pb-4",children:[a,n,l]}),s[10]=n,s[11]=l,s[12]=d):d=s[12],d}const C=`import { useState } from 'react'
import FilesUploadDrawer, { type UploadResultFileTreeItemType } from '@/components/FilesUploadDrawer'
import FilesSelect from '@/components/FilesSelect'
import type { FileItemType } from '@/types/files'
import JsonView from '@/components/JsonView'

function FilesListUploadTree() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [fileList, setFileList] = useState<FileItemType[]>([])
    const [treeData, setTreeData] = useState<UploadResultFileTreeItemType[]>([])

  const onSelectFn = (files: FileItemType[]) => {
    setFileList(files)
    setDrawerOpen(true)
  }
  const onSuccessFn = (tree: UploadResultFileTreeItemType[]) => {
    console.log('success', tree)
    setTreeData(tree)
  }

  return (
    <div className='px-4 pb-4'>
      <FilesSelect targetType='list' isUpload={true} onSelect={onSelectFn} />

      <FilesUploadDrawer
        targetType='tree'
        open={drawerOpen}
        list={fileList}
        setOpen={setDrawerOpen}
        onSuccess={onSuccessFn}
      />

      <JsonView className='mt-4!' jsonClassName='max-h-100 overflow-auto'>
        {treeData}
      </JsonView>
    </div>
  )
}

export default FilesListUploadTree
`;function b(s){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...w(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"filesuploaddrawer",children:"FilesUploadDrawer"}),`
`,e.jsx(t.p,{children:"The FilesUploadDrawer component is used to display drawers for uploading multiple files/folders. As it involves the operation of uploading files/folders, when using this component, it is necessary to manually handle the function logic of uploading files and folders (if folders are not needed, they need to be manually filtered or set 'isIgnoreFolder' to 'true' using the 'FilesSelect' component)."}),`
`,e.jsx(t.p,{children:"When the parent folder fails to upload, the internal child files/folders fail to upload directly."}),`
`,e.jsx(t.h2,{id:"toc",children:"TOC"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"#api",children:"API"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#parameters-props",children:"Parameters Props"})}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"#demos",children:"Demos"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#upload-filesfolders",children:"Upload Files/Folders"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#upload-filesfolders-tree",children:"Upload Files/Folders Tree"})}),`
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

export type FileTreeFileItem = Omit<FileItemType, 'type'> & {
  type: 'file'
}

export type FolderItemType = {
  type: 'folder'
  name: string
  filePath: string
  folderPath: string
  children: FileTreeItem[]
}
export type FileTreeItem = FileTreeFileItem | FolderItemType

export type TargetType = 'tree' | 'list'
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`export type UploadFileItemType = FileItemType & {
  icon: React.ReactNode,
  percent: number,
  percentStatus: ProgressProps['status'],
}

export type UploadResultFIleItemType = Omit<FileItemType, 'filePath' | 'folderPath'>

export type UploadResultFileTreeItemType = UploadResultFIleItemType & {
  children?: UploadResultFileTreeItemType[]
}

export type FilesUploadDrawerProps<T extends TargetType> = {
  targetType: T,
  title?: string,
  open: boolean,
  setOpen: (open: boolean) => void,
  list?: FileItemType[],
  locale?: LocaleType,
  onSuccess?: (fileTrees: T extends 'list' ? UploadFileItemType[] : UploadResultFileTreeItemType[]) => void,
}
`})}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Parameter"}),e.jsx(t.th,{children:"Description"}),e.jsx(t.th,{children:"Type"}),e.jsx(t.th,{children:"Default"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"targetType"}),e.jsx(t.td,{children:"The parameter type of the callback function for successful upload"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"'tree' | 'list'"})}),e.jsx(t.td,{children:"-"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"title"}),e.jsx(t.td,{children:"Drawer title"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"'上传文件/文件夹'"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"open"}),e.jsx(t.td,{children:"Whether the drawer is open"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"false"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"setOpen"}),e.jsx(t.td,{children:"Callback function to open/close the drawer"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"(open: boolean) => void"})}),e.jsx(t.td,{children:"-"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"list"}),e.jsx(t.td,{children:"List of files/folders to upload"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"FileItemType[]"})}),e.jsx(t.td,{children:"[]"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"locale"}),e.jsx(t.td,{children:"Language"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"'zh' | 'en'"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"'zh'"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"onSuccess"}),e.jsx(t.td,{children:"Callback function when upload succeeds"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"(item: UploadFileItemType[]) => void"})}),e.jsx(t.td,{children:"-"})]})]})]}),`
`,e.jsx(t.h2,{id:"demos",children:"Demos"}),`
`,e.jsx(t.h3,{id:"upload-filesfolders",children:"Upload Files/Folders"}),`
`,e.jsx(S,{code:B,title:"Upload Files/Folders",description:"After selection, directly upload the file/folder. After successful upload, return the list structure of the file/folder.",children:e.jsx(R,{})}),`
`,e.jsx(t.h3,{id:"upload-filesfolders-tree",children:"Upload Files/Folders Tree"}),`
`,e.jsx(S,{code:C,title:"Upload Files/Folders Tree",description:"After selection, directly upload the file/folder. After successful upload, return the tree structure of the file/folder.",children:e.jsx(A,{})})]})}function J(s={}){const{wrapper:t}={...w(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(b,{...s})}):b(s)}function K(){const s=T.c(2),t=L();let h;return s[0]!==t?(h=e.jsx("div",{className:"px-4 pb-4",children:e.jsx(O,{children:t==="zh"?e.jsx(E,{}):e.jsx(J,{})})}),s[0]=t,s[1]=h):h=s[1],h}export{K as default};
