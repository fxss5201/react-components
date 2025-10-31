import{c as j,r as c,j as e,u as T}from"./index-BFMmcQtt.js";import{u as a,P as u,M as g}from"./Playground-piR_5RSu.js";import{F}from"./FilesUploadDrawer-BAd4EwvD.js";import{F as y}from"./FilesSelect-BYWqLiog.js";import"./index-BJzs7o3g.js";import"./UpOutlined-BB8b5Q6d.js";import"./EyeOutlined-Dod80o9I.js";import"./index-DbZkjGOZ.js";function S(){const t=j.c(6),[n,l]=c.useState(!1);let s;t[0]===Symbol.for("react.memo_cache_sentinel")?(s=[],t[0]=s):s=t[0];const[o,p]=c.useState(s);let i;t[1]===Symbol.for("react.memo_cache_sentinel")?(i=x=>{p(x),l(!0)},t[1]=i):i=t[1];const h=i;let r;t[2]===Symbol.for("react.memo_cache_sentinel")?(r=e.jsx(y,{targetType:"list",isUpload:!0,onSelect:h}),t[2]=r):r=t[2];let d;return t[3]!==n||t[4]!==o?(d=e.jsxs("div",{className:"px-4 pb-4",children:[r,e.jsx(F,{open:n,list:o,setOpen:l})]}),t[3]=n,t[4]=o,t[5]=d):d=t[5],d}const w=`import { useState } from 'react'
import FilesUploadDrawer from '../../components/FilesUploadDrawer'
import FilesSelect from '../../components/FilesSelect'
import type { FileItemType } from '../../types/files'

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
        open={drawerOpen}
        list={fileList}
        setOpen={setDrawerOpen}
      />
    </div>
  )
}

export default FilesListUpload
`;function m(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"filesuploaddrawer",children:"FilesUploadDrawer"}),`
`,e.jsxs(n.p,{children:["FilesUploadDrawer 组件用于展示上传多个文件/文件夹的抽屉，因为涉及到上传文件/文件夹的操作，所以使用此组件的时候需要手动处理上传文件和上传文件夹（如果不需要文件夹，则需要手动过滤文件夹或者使用 ",e.jsx(n.code,{children:"FilesSelect"})," 组件设置 ",e.jsx(n.code,{children:"isIgnoreFolder"})," 为 ",e.jsx(n.code,{children:"true"}),"）的函数逻辑。"]}),`
`,e.jsx(n.p,{children:"当父文件夹上传失败的时候，内部的子文件/文件夹直接上传失败。"}),`
`,e.jsx(n.h2,{id:"目录",children:"目录"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#api",children:"API"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#%E5%8F%82%E6%95%B0-props",children:"参数 Props"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#%E6%BC%94%E7%A4%BA%E7%A4%BA%E4%BE%8B",children:"演示示例"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#%E4%B8%8A%E4%BC%A0%E6%96%87%E4%BB%B6%E6%96%87%E4%BB%B6%E5%A4%B9",children:"上传文件/文件夹"})}),`
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
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type UploadFileItemType = FileItemType & {
  icon: React.ReactNode,
  percent: number,
  percentStatus: ProgressProps['status'],
}

export type FilesUploadDrawerProps = {
  title?: string,
  open: boolean,
  setOpen: (open: boolean) => void,
  list?: FileItemType[],
  locale?: LocaleType,
  onSuccess?: (item: UploadFileItemType[]) => void,
}
`})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"属性"}),e.jsx(n.th,{children:"说明"}),e.jsx(n.th,{children:"类型"}),e.jsx(n.th,{children:"默认值"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"title"}),e.jsx(n.td,{children:"抽屉标题"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"'上传文件/文件夹'"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"open"}),e.jsx(n.td,{children:"是否打开抽屉"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"setOpen"}),e.jsx(n.td,{children:"打开/关闭抽屉的回调函数"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(open: boolean) => void"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"list"}),e.jsx(n.td,{children:"上传文件/文件夹列表"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"FileItemType[]"})}),e.jsx(n.td,{children:"[]"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"locale"}),e.jsx(n.td,{children:"语言"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'zh' | 'en'"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'zh'"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"onSuccess"}),e.jsx(n.td,{children:"上传成功回调函数"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(item: UploadFileItemType[]) => void"})}),e.jsx(n.td,{children:"-"})]})]})]}),`
`,e.jsx(n.h2,{id:"演示示例",children:"演示示例"}),`
`,e.jsx(n.h3,{id:"上传文件文件夹",children:"上传文件/文件夹"}),`
`,e.jsx(u,{code:w,title:"上传文件/文件夹",description:"选择之后直接上传文件/文件夹。",children:e.jsx(S,{})})]})}function I(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(m,{...t})}):m(t)}function b(){const t=j.c(6),[n,l]=c.useState(!1);let s;t[0]===Symbol.for("react.memo_cache_sentinel")?(s=[],t[0]=s):s=t[0];const[o,p]=c.useState(s);let i;t[1]===Symbol.for("react.memo_cache_sentinel")?(i=x=>{p(x),l(!0)},t[1]=i):i=t[1];const h=i;let r;t[2]===Symbol.for("react.memo_cache_sentinel")?(r=e.jsx(y,{targetType:"list",isUpload:!0,onSelect:h}),t[2]=r):r=t[2];let d;return t[3]!==n||t[4]!==o?(d=e.jsxs("div",{className:"px-4 pb-4",children:[r,e.jsx(F,{title:"Upload Files/Folders",open:n,list:o,setOpen:l,onSuccess:U})]}),t[3]=n,t[4]=o,t[5]=d):d=t[5],d}function U(t){return console.log("success",t)}const D=`import { useState } from 'react'
import FilesUploadDrawer from '../../../components/FilesUploadDrawer'
import FilesSelect from '../../../components/FilesSelect'
import type { FileItemType } from '../../../types/files'

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
        title='Upload Files/Folders'
        open={drawerOpen}
        list={fileList}
        setOpen={setDrawerOpen}
        onSuccess={(list) => console.log('success', list)}
      />
    </div>
  )
}

export default FilesListUpload
`;function f(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"filesuploaddrawer",children:"FilesUploadDrawer"}),`
`,e.jsx(n.p,{children:"The FilesUploadDrawer component is used to display drawers for uploading multiple files/folders. As it involves the operation of uploading files/folders, when using this component, it is necessary to manually handle the function logic of uploading files and folders (if folders are not needed, they need to be manually filtered or set 'isIgnoreFolder' to 'true' using the 'FilesSelect' component)."}),`
`,e.jsx(n.p,{children:"When the parent folder fails to upload, the internal child files/folders fail to upload directly."}),`
`,e.jsx(n.h2,{id:"toc",children:"TOC"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#api",children:"API"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#parameters-props",children:"Parameters Props"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#demos",children:"Demos"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#upload-filesfolders",children:"Upload Files/Folders"})}),`
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
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type UploadFileItemType = FileItemType & {
  icon: React.ReactNode,
  percent: number,
  percentStatus: ProgressProps['status'],
}

export type FilesUploadDrawerProps = {
  title?: string,
  open: boolean,
  setOpen: (open: boolean) => void,
  list?: FileItemType[],
  locale?: LocaleType,
  onSuccess?: (item: UploadFileItemType[]) => void,
}
`})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Description"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"title"}),e.jsx(n.td,{children:"Drawer title"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"'上传文件/文件夹'"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"open"}),e.jsx(n.td,{children:"Whether the drawer is open"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"setOpen"}),e.jsx(n.td,{children:"Callback function to open/close the drawer"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(open: boolean) => void"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"list"}),e.jsx(n.td,{children:"List of files/folders to upload"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"FileItemType[]"})}),e.jsx(n.td,{children:"[]"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"locale"}),e.jsx(n.td,{children:"Language"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'zh' | 'en'"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'zh'"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"onSuccess"}),e.jsx(n.td,{children:"Callback function when upload succeeds"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(item: UploadFileItemType[]) => void"})}),e.jsx(n.td,{children:"-"})]})]})]}),`
`,e.jsx(n.h2,{id:"demos",children:"Demos"}),`
`,e.jsx(n.h3,{id:"upload-filesfolders",children:"Upload Files/Folders"}),`
`,e.jsx(u,{code:D,title:"Upload Files/Folders",description:"After selecting, the files/folders will be uploaded directly.",children:e.jsx(b,{})})]})}function L(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(f,{...t})}):f(t)}function C(){const t=j.c(2),n=T();let l;return t[0]!==n?(l=e.jsx("div",{className:"px-4 pb-4",children:e.jsx(g,{children:n==="zh"?e.jsx(I,{}):e.jsx(L,{})})}),t[0]=n,t[1]=l):l=t[1],l}export{C as default};
