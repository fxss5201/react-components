import{b as j,j as e}from"./@uiw/react-codemirror-dimZJgSu.js";import{c as S,B as U,u as _}from"./index-CwDalt6B.js";import{M as E}from"./MDXRender--j0cKFwg.js";import{P as b}from"./Playground-XZt4ylVh.js";import{F as O}from"./FilesUploadDrawer-yJjplDqt.js";import"./FilesDrawer-DH-ydRHZ.js";import{F as P}from"./FilesDropSelect-Byb8B8Lb.js";import{J as g}from"./JsonView-DtypalN_.js";import{F as L}from"./FilesDownloadDrawer-DqzSFIQO.js";import{S as N}from"./index-abs6yZev.js";import{u as I}from"./@mdx-js/react-BwGmxI0N.js";import"./react-syntax-highlighter-DW6ulm9l.js";import"./markdown-plugins-CqPL4kxN.js";import"./react-markdown-U0gPFawi.js";import"./use-immer.module-BUjbJLOH.js";import"./index-DvjyObLV.js";import"./progress-B267_-79.js";import"./DropElement-C0NNM9yT.js";import"./index-BSg5Lc9Y.js";import"./isBrowser-BdZk1G-M.js";import"./FilesSelect-CtUSxN8E.js";import"./index-C1Uc0xMy.js";import"./JsonEditor-C8Qw5Tcq.js";import"./CodeEditor-DCLYA5gR.js";import"./JsonRender-CBqOC-Sc.js";import"./use-undo.m-DQTOi8z5.js";import"./index-C7j3i05K.js";import"./index-B3cNn7YV.js";function B(){const t=S.c(13),[n,x]=j.useState(!1);let c;t[0]===Symbol.for("react.memo_cache_sentinel")?(c=[],t[0]=c):c=t[0];const[d,f]=j.useState(c);let p;t[1]===Symbol.for("react.memo_cache_sentinel")?(p=[],t[1]=p):p=t[1];const[a,F]=j.useState(p);let h;t[2]===Symbol.for("react.memo_cache_sentinel")?(h=o=>{f(o),x(!0)},t[2]=h):h=t[2];const u=h;let m;t[3]===Symbol.for("react.memo_cache_sentinel")?(m=o=>{console.log("success",o),F(o)},t[3]=m):m=t[3];const w=m;let l;t[4]===Symbol.for("react.memo_cache_sentinel")?(l=e.jsx(P,{targetType:"list",isUpload:!0,onSelect:u}),t[4]=l):l=t[4];let s;t[5]!==n||t[6]!==d?(s=e.jsx(O,{targetType:"list",title:"上传文件/文件夹",open:n,list:d,setOpen:x,onSuccess:w}),t[5]=n,t[6]=d,t[7]=s):s=t[7];let r;t[8]!==a?(r=e.jsx(g,{className:"mt-4!",jsonClassName:"max-h-100 overflow-auto",children:a}),t[8]=a,t[9]=r):r=t[9];let i;return t[10]!==s||t[11]!==r?(i=e.jsxs("div",{className:"px-4 pb-4",children:[l,s,r]}),t[10]=s,t[11]=r,t[12]=i):i=t[12],i}const R=`import { useState } from 'react'
import FilesUploadDrawer from '@/components/FilesUploadDrawer'
import { type DrawerFileItemType } from '@/components/FilesDrawer'
import FilesDropSelect from '@/components/FilesDropSelect'
import type { FileItemType } from '@/types/files'
import JsonView from '@/components/JsonView'

function FilesListUpload() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [fileList, setFileList] = useState<FileItemType[]>([])
  const [listData, setListData] = useState<DrawerFileItemType[]>([])

  const onSelectFn = (files: FileItemType[]) => {
    setFileList(files)
    setDrawerOpen(true)
  }
  const onSuccessFn = (list: DrawerFileItemType[]) => {
    console.log('success', list)
    setListData(list)
  }

  return (
    <div className='px-4 pb-4'>
      <FilesDropSelect targetType='list' isUpload={true} onSelect={onSelectFn} />

      <FilesUploadDrawer
        targetType='list'
        title='上传文件/文件夹'
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
`;function H(){const t=S.c(13),[n,x]=j.useState(!1);let c;t[0]===Symbol.for("react.memo_cache_sentinel")?(c=[],t[0]=c):c=t[0];const[d,f]=j.useState(c);let p;t[1]===Symbol.for("react.memo_cache_sentinel")?(p=[],t[1]=p):p=t[1];const[a,F]=j.useState(p);let h;t[2]===Symbol.for("react.memo_cache_sentinel")?(h=o=>{f(o),x(!0)},t[2]=h):h=t[2];const u=h;let m;t[3]===Symbol.for("react.memo_cache_sentinel")?(m=o=>{console.log("success",o),F(o)},t[3]=m):m=t[3];const w=m;let l;t[4]===Symbol.for("react.memo_cache_sentinel")?(l=e.jsx(P,{targetType:"list",isUpload:!0,onSelect:u}),t[4]=l):l=t[4];let s;t[5]!==n||t[6]!==d?(s=e.jsx(O,{targetType:"tree",title:"上传文件/文件夹",open:n,list:d,setOpen:x,onSuccess:w}),t[5]=n,t[6]=d,t[7]=s):s=t[7];let r;t[8]!==a?(r=e.jsx(g,{className:"mt-4!",jsonClassName:"max-h-100 overflow-auto",children:a}),t[8]=a,t[9]=r):r=t[9];let i;return t[10]!==s||t[11]!==r?(i=e.jsxs("div",{className:"px-4 pb-4",children:[l,s,r]}),t[10]=s,t[11]=r,t[12]=i):i=t[12],i}const A=`import { useState } from 'react'
import FilesUploadDrawer from '@/components/FilesUploadDrawer'
import { type DrawerResultFileTreeItemType } from '@/components/FilesDrawer'
import FilesDropSelect from '@/components/FilesDropSelect'
import type { FileItemType } from '@/types/files'
import JsonView from '@/components/JsonView'

function FilesListUploadTree() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [fileList, setFileList] = useState<FileItemType[]>([])
  const [treeData, setTreeData] = useState<DrawerResultFileTreeItemType[]>([])

  const onSelectFn = (files: FileItemType[]) => {
    setFileList(files)
    setDrawerOpen(true)
  }
  const onSuccessFn = (tree: DrawerResultFileTreeItemType[]) => {
    console.log('success', tree)
    setTreeData(tree)
  }

  return (
    <div className='px-4 pb-4'>
      <FilesDropSelect targetType='list' isUpload={true} onSelect={onSelectFn} />

      <FilesUploadDrawer
        targetType='tree'
        title='上传文件/文件夹'
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
`,k="/react-components/assets/FilesDrawer-whdMZwxM.png";function V(){const t=S.c(22),[n,x]=j.useState(!1);let c;t[0]===Symbol.for("react.memo_cache_sentinel")?(c=[{name:"vite.svg",type:"file",filePath:"/vite.svg",folderPath:"/",url:"/react-components/vite.svg"},{name:"logo123.png",type:"file",filePath:"/logo123.png",folderPath:"/",url:"https://blog.fxss.work/logo123.png"},{name:"logo.png",type:"file",filePath:"/logo.png",folderPath:"/",url:"https://blog.fxss.work/logo.png"},{name:"aaa.png",type:"file",filePath:"/dir/bb/aaa.png",folderPath:"/dir/bb",url:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f80fb055-eaa7-4008-b0c3-05194e370800/26671f33-7f69-40e8-af57-cc66a8d437cf.png"}],t[0]=c):c=t[0];const[d]=j.useState(c),[f,p]=j.useState(!0);let a;t[1]===Symbol.for("react.memo_cache_sentinel")?(a=[],t[1]=a):a=t[1];const[F,h]=j.useState(a);let u;t[2]===Symbol.for("react.memo_cache_sentinel")?(u=T=>{console.log("success",T),h(T)},t[2]=u):u=t[2];const m=u;let w;t[3]===Symbol.for("react.memo_cache_sentinel")?(w=e.jsx("div",{className:"mb-4!",children:"网络内容："}),t[3]=w):w=t[3];let l;t[4]!==d?(l=e.jsx(g,{className:"mb-4!",jsonClassName:"max-h-100 overflow-auto",children:d}),t[4]=d,t[5]=l):l=t[5];let s;t[6]!==f?(s=e.jsx(N,{checkedChildren:"文件夹下载",unCheckedChildren:"普通下载",checked:f,onChange:p}),t[6]=f,t[7]=s):s=t[7];let r;t[8]===Symbol.for("react.memo_cache_sentinel")?(r=e.jsx(U,{onClick:()=>x(!0),className:"ml-4",children:"下载文件/文件夹"}),t[8]=r):r=t[8];let i;t[9]!==s?(i=e.jsxs("div",{className:"flex items-center",children:[s,r]}),t[9]=s,t[10]=i):i=t[10];let o;t[11]!==n||t[12]!==d||t[13]!==f?(o=e.jsx(L,{targetType:"list",title:"下载文件/文件夹",open:n,list:d,setOpen:x,onSuccess:m,isSelectFolder:f}),t[11]=n,t[12]=d,t[13]=f,t[14]=o):o=t[14];let D;t[15]!==F?(D=e.jsx(g,{className:"mt-4!",jsonClassName:"max-h-100 overflow-auto",children:F}),t[15]=F,t[16]=D):D=t[16];let y;return t[17]!==l||t[18]!==i||t[19]!==o||t[20]!==D?(y=e.jsxs(e.Fragment,{children:[w,l,i,o,D]}),t[17]=l,t[18]=i,t[19]=o,t[20]=D,t[21]=y):y=t[21],y}const J=`import { useState } from 'react'
import FilesDownloadDrawer from '@/components/FilesDownloadDrawer'
import { type DrawerFileItemType } from '@/components/FilesDrawer'
import type { FileDownloadItemType } from '@/types/files'
import JsonView from '@/components/JsonView'
import { Button, Switch } from 'antd'

function FilesDownload() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [fileList] = useState<FileDownloadItemType[]>([
    {
      name: 'vite.svg',
      type: 'file',
      filePath: '/vite.svg',
      folderPath: '/',
      url: '/react-components/vite.svg',
    },
    {
      name: 'logo123.png',
      type: 'file',
      filePath: '/logo123.png',
      folderPath: '/',
      url: 'https://blog.fxss.work/logo123.png',
    },
    {
      name: 'logo.png',
      type: 'file',
      filePath: '/logo.png',
      folderPath: '/',
      url: 'https://blog.fxss.work/logo.png',
    },
    {
      name: 'aaa.png',
      type: 'file',
      filePath: '/dir/bb/aaa.png',
      folderPath: '/dir/bb',
      url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f80fb055-eaa7-4008-b0c3-05194e370800/26671f33-7f69-40e8-af57-cc66a8d437cf.png',
    },
  ])
  const [isSelectFolder, setIsSelectFolder] = useState(true)
  const [listData, setListData] = useState<DrawerFileItemType[]>([])
  const onSuccessFn = (list: DrawerFileItemType[]) => {
    console.log('success', list)
    setListData(list)
  }

  return (
    <>
      <div className='mb-4!'>网络内容：</div>
      <JsonView className='mb-4!' jsonClassName='max-h-100 overflow-auto'>
        {fileList}
      </JsonView>
      <div className='flex items-center'>
        <Switch checkedChildren="文件夹下载" unCheckedChildren="普通下载" checked={isSelectFolder} onChange={setIsSelectFolder} />
        <Button onClick={() => setDrawerOpen(true)} className='ml-4'>下载文件/文件夹</Button>
      </div>
      <FilesDownloadDrawer
        targetType='list'
        title='下载文件/文件夹'
        open={drawerOpen}
        list={fileList}
        setOpen={setDrawerOpen}
        onSuccess={onSuccessFn}
        isSelectFolder={isSelectFolder}
      />
      <JsonView className='mt-4!' jsonClassName='max-h-100 overflow-auto'>
        {listData}
      </JsonView>
    </>
  )
}

export default FilesDownload
`;function v(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...I(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"filesdrawer",children:"FilesDrawer"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"FilesDrawer"})," 组件是视图抽象层，提供样式和内部逻辑，可以用于文件/文件夹的上传、下载、压缩等，样式如下："]}),`
`,e.jsx("img",{src:k,alt:"FilesDrawer"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"注意：当父文件夹失败的时候，内部的子文件/文件夹直接失败。"})}),`
`,e.jsx(n.h2,{id:"目录",children:"目录"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#api",children:"API"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#%E5%8F%82%E6%95%B0-props",children:"参数 Props"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#%E5%85%B7%E4%BD%93%E5%AE%9E%E7%8E%B0",children:"具体实现"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#filesuploaddrawer",children:"FilesUploadDrawer"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#%E5%8F%82%E6%95%B0-props-1",children:"参数 Props"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#%E6%BA%90%E4%BB%A3%E7%A0%81",children:"源代码"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#%E4%B8%8A%E4%BC%A0%E6%96%87%E4%BB%B6%E6%96%87%E4%BB%B6%E5%A4%B9",children:"上传文件/文件夹"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#%E4%B8%8A%E4%BC%A0%E6%96%87%E4%BB%B6%E6%96%87%E4%BB%B6%E5%A4%B9%E6%A0%91%E7%BB%93%E6%9E%84",children:"上传文件/文件夹（树结构）"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#filesdownloaddrawer",children:"FilesDownloadDrawer"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#%E5%8F%82%E6%95%B0-props-2",children:"参数 Props"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#%E6%BA%90%E4%BB%A3%E7%A0%81-1",children:"源代码"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#%E4%B8%8B%E8%BD%BD%E6%96%87%E4%BB%B6%E6%96%87%E4%BB%B6%E5%A4%B9",children:"下载文件/文件夹"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(n.h3,{id:"参数-props",children:"参数 Props"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export type DrawerFileItemType = FileItemType & {
  icon?: React.ReactNode,
  percent?: number,
  percentStatus?: ProgressProps['status'],
}

export type DrawerResultFileTreeItemType = DrawerFileItemType & {
  children?: DrawerResultFileTreeItemType[]
}

export type FilesDrawerProps = {
  targetType?: TargetType,
  title?: string,
  open: boolean,
  setOpen: (open: boolean) => void,
  list: FileItemType[],
  doneFile: (fileItem: DrawerFileItemType) => Promise<void>,
  onSuccess?: (fileTrees: DrawerResultFileTreeItemType[]) => void,
}
`})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"属性"}),e.jsx(n.th,{children:"说明"}),e.jsx(n.th,{children:"类型"}),e.jsx(n.th,{children:"默认值"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"targetType"})}),e.jsx(n.td,{children:"成功回调函数的参数类型"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"tree | list"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"list"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"title"})}),e.jsx(n.td,{children:"抽屉标题"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"open"})}),e.jsx(n.td,{children:"是否打开抽屉"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"setOpen"})}),e.jsx(n.td,{children:"打开/关闭抽屉的回调函数"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(open: boolean) => void"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"list"})}),e.jsx(n.td,{children:"文件/文件夹列表"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"FileItemType[]"})}),e.jsx(n.td,{children:"[]"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"doneFile"})}),e.jsx(n.td,{children:"处理文件/文件夹的回调函数"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(fileItem: DrawerFileItemType) => Promise<void>"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onSuccess"})}),e.jsx(n.td,{children:"上传成功回调函数"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(fileTrees: DrawerResultFileTreeItemType[]) => void"})}),e.jsx(n.td,{children:"-"})]})]})]}),`
`,e.jsx(n.h2,{id:"具体实现",children:"具体实现"}),`
`,e.jsx(n.h3,{id:"filesuploaddrawer",children:"FilesUploadDrawer"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"FilesUploadDrawer"})," 组件是 ",e.jsx(n.code,{children:"FilesDrawer"})," 组件的具体实现，在内部实现了文件/文件夹的上传逻辑。"]}),`
`,e.jsx(n.h4,{id:"参数-props-1",children:"参数 Props"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export type FilesUploadDrawerProps = Omit<FilesDrawerProps, 'title' | 'doneFile'> & {
  title?: string,
}
`})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"属性"}),e.jsx(n.th,{children:"说明"}),e.jsx(n.th,{children:"类型"}),e.jsx(n.th,{children:"默认值"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"targetType"})}),e.jsx(n.td,{children:"成功回调函数的参数类型"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"tree | list"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"list"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"title"})}),e.jsx(n.td,{children:"抽屉标题"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"open"})}),e.jsx(n.td,{children:"是否打开抽屉"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"setOpen"})}),e.jsx(n.td,{children:"打开/关闭抽屉的回调函数"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(open: boolean) => void"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"list"})}),e.jsx(n.td,{children:"文件/文件夹列表"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"FileItemType[]"})}),e.jsx(n.td,{children:"[]"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onSuccess"})}),e.jsx(n.td,{children:"上传成功回调函数"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(fileTrees: DrawerResultFileTreeItemType[]) => void"})}),e.jsx(n.td,{children:"-"})]})]})]}),`
`,e.jsx(n.h4,{id:"源代码",children:"源代码"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import FilesDrawer, { type FilesDrawerProps, type DrawerFileItemType } from '@/components/FilesDrawer'
import fileUploadMock from '@/common/fileUploadMock'
import { useCallback } from 'react'

export type FilesUploadDrawerProps = Omit<FilesDrawerProps, 'title' | 'doneFile'> & {
  title?: string,
}

function FilesUploadDrawer({
  targetType = 'list',
  title = '上传文件/文件夹',
  open = false,
  setOpen,
  list = [],
  onSuccess
}: FilesUploadDrawerProps) {
  const doneFile = useCallback(async (item: DrawerFileItemType) => {
    if (item.type === 'file') {
      await fileUploadMock()
    } else {
      await fileUploadMock()
    }
  }, [])

  return (
    <FilesDrawer
      targetType={targetType}
      title={title}
      open={open}
      setOpen={setOpen}
      list={list}
      doneFile={doneFile}
      onSuccess={onSuccess}
    />
  )
}

export default FilesUploadDrawer
`})}),`
`,e.jsx(n.h4,{id:"上传文件文件夹",children:"上传文件/文件夹"}),`
`,e.jsx(b,{code:R,title:"上传文件/文件夹",description:"选择之后直接上传文件/文件夹，上传成功之后返回文件/文件夹的列表结构。",children:e.jsx(B,{})}),`
`,e.jsx(n.h4,{id:"上传文件文件夹树结构",children:"上传文件/文件夹（树结构）"}),`
`,e.jsx(b,{code:A,title:"上传文件/文件夹（树结构）",description:"选择之后直接上传文件/文件夹，上传成功之后返回文件/文件夹的树结构。",children:e.jsx(H,{})}),`
`,e.jsx(n.h3,{id:"filesdownloaddrawer",children:"FilesDownloadDrawer"}),`
`,e.jsx(n.h4,{id:"参数-props-2",children:"参数 Props"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export type FileDownloadItemType = Omit<FileItemType, 'file' | 'url'> & {
  url: string
}

export type FilesDownloadDrawerProps = Omit<FilesDrawerProps, 'title' | 'doneFile' | 'list'> & {
  title?: string
  list: FileDownloadItemType[]
  isSelectFolder?: boolean
}
`})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"属性"}),e.jsx(n.th,{children:"说明"}),e.jsx(n.th,{children:"类型"}),e.jsx(n.th,{children:"默认值"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"targetType"})}),e.jsx(n.td,{children:"成功回调函数的参数类型"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"tree | list"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"list"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"title"})}),e.jsx(n.td,{children:"抽屉标题"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"open"})}),e.jsx(n.td,{children:"是否打开抽屉"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"setOpen"})}),e.jsx(n.td,{children:"打开/关闭抽屉的回调函数"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(open: boolean) => void"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"list"})}),e.jsx(n.td,{children:"文件/文件夹列表"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"FileDownloadItemType[]"})}),e.jsx(n.td,{children:"[]"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onSuccess"})}),e.jsx(n.td,{children:"上传成功回调函数"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(fileTrees: DrawerResultFileTreeItemType[]) => void"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"isSelectFolder"})}),e.jsxs(n.td,{children:["是否选择文件夹进行下载，如果设置为 ",e.jsx(n.code,{children:"false"}),"，则会使用普通下载，设置为 ",e.jsx(n.code,{children:"true"})," 时，会提示用户选择文件夹，如果浏览器不支持文件夹选择，也会使用普通下载"]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"true"})})]})]})]}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["注意：下载的时候，每个文件必须有对应的 ",e.jsx(n.code,{children:"url"})," 属性，否则会跳过。会根据文件/文件夹的路径，在用户选择的文件夹下创建对应的文件/文件夹。"]})}),`
`,e.jsx(n.h4,{id:"源代码-1",children:"源代码"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import FilesDrawer, { type FilesDrawerProps, type DrawerFileItemType } from '@/components/FilesDrawer'
import type { FileDownloadItemType } from '@/types/files'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { App } from 'antd'
import { isCrossOrigin } from '@/utils'

export type FilesDownloadDrawerProps = Omit<FilesDrawerProps, 'title' | 'doneFile' | 'list'> & {
  title?: string
  list: FileDownloadItemType[]
  isSelectFolder?: boolean
}

function FilesDownloadDrawer({
  targetType = 'list',
  title = '下载文件/文件夹',
  open = false,
  setOpen,
  list = [],
  onSuccess,
  isSelectFolder = true
}: FilesDownloadDrawerProps) {
  const { t } = useTranslation()
  const { message } = App.useApp()
  const [drawerOpen, setDrawerOpen] = useState(open)
  const [canSelectFolder, setCanSelectFolder] = useState(isSelectFolder)
  useEffect(() => {
    setCanSelectFolder(isSelectFolder)
  }, [isSelectFolder])

  const directoryHandle = useRef<FileSystemDirectoryHandle>(null)
  useEffect(() => {
    const getDirectoryHandle = async () => {
      if (!window.showDirectoryPicker) {
        message.warning(t('components.FilesDownloadDrawer.noSupport', { defaultValue: '当前浏览器不支持选择文件夹，将使用普通下载' }))
        setCanSelectFolder(false)
        setDrawerOpen(true)
        return
      }
      try {
        const dirHandle = await window.showDirectoryPicker({
          mode: 'readwrite',
          id: 'FilesDownloadDrawer',
        })
        if (!dirHandle) {
          return
        }
        directoryHandle.current = dirHandle
        setDrawerOpen(true)
      } catch (error) {
        setOpen(false)
        if (error instanceof Error && error.message.includes('aborted')) {
          message.warning(t('components.FilesDownloadDrawer.chooseFolder', { defaultValue: '请选择文件夹' }))
        } else {
          console.log("🚀 ~ selectDirectoryStoreFn ~ error:", error)
        }
      }
    }

    if (open) {
      if (isSelectFolder) {
        getDirectoryHandle()
      } else {
        setDrawerOpen(true)
      }
    } else {
      setDrawerOpen(false)
    }
    return () => {
      directoryHandle.current = null
    }
  }, [open, isSelectFolder, t, message, setOpen])

  const doneFile = useCallback(async (item: DrawerFileItemType) => {
    const downloadResourceAsBlob = async (url: string) => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(\`error: \${response.status} \${response.statusText}\`)
        }
        return await response.blob()
      } catch (error) {
        throw new Error(\`download error: \${error}\`)
      }
    }

    const writeFile = async (item: DrawerFileItemType) => {
      if (!directoryHandle.current) {
        return
      }
      if (item.folderPath === '/') {
        const fileHandle = await directoryHandle.current.getFileHandle(item.name, { create: true })
        const writable = await fileHandle.createWritable()
        await writable.write(await downloadResourceAsBlob(item.url!))
        await writable.close()
      } else {
        const folderPath = item.folderPath.split('/').filter(x => x !== '')
        let currentDirHandle = directoryHandle.current
        for (const folder of folderPath) {
          currentDirHandle = await currentDirHandle.getDirectoryHandle(folder, { create: true })
        }
        const fileHandle = await currentDirHandle.getFileHandle(item.name, { create: true })
        const writable = await fileHandle.createWritable()
        await writable.write(await downloadResourceAsBlob(item.url!))
        await writable.close()
      }
    }

    const downloadFile = async (item: DrawerFileItemType) => {
      console.log('downloadFile', item)
      const isCross = isCrossOrigin(item.url!)
      let url = item.url!
      if (isCross) {
        const blob = await downloadResourceAsBlob(item.url!)
        url = URL.createObjectURL(blob)
      }
      const a = document.createElement('a')
      a.href = url
      a.target = '_blank'
      a.download = item.name
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      if (isCross) URL.revokeObjectURL(url)
    }
    if (item.url) {
      if (canSelectFolder) {
        await writeFile(item)
      } else {
        await downloadFile(item)
      }
    }
  }, [canSelectFolder])

  return (
    <FilesDrawer
      targetType={targetType}
      title={title}
      open={drawerOpen}
      setOpen={setOpen}
      list={list}
      doneFile={doneFile}
      onSuccess={onSuccess}
    />
  )
}

export default FilesDownloadDrawer
`})}),`
`,e.jsx(n.h4,{id:"下载文件文件夹",children:"下载文件/文件夹"}),`
`,e.jsx(b,{code:J,title:"下载文件/文件夹",description:"选择文件夹下载或者普通下载，查看下载效果。",children:e.jsx(V,{})})]})}function $(t={}){const{wrapper:n}={...I(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(v,{...t})}):v(t)}function M(){const t=S.c(13),[n,x]=j.useState(!1);let c;t[0]===Symbol.for("react.memo_cache_sentinel")?(c=[],t[0]=c):c=t[0];const[d,f]=j.useState(c);let p;t[1]===Symbol.for("react.memo_cache_sentinel")?(p=[],t[1]=p):p=t[1];const[a,F]=j.useState(p);let h;t[2]===Symbol.for("react.memo_cache_sentinel")?(h=o=>{f(o),x(!0)},t[2]=h):h=t[2];const u=h;let m;t[3]===Symbol.for("react.memo_cache_sentinel")?(m=o=>{console.log("success",o),F(o)},t[3]=m):m=t[3];const w=m;let l;t[4]===Symbol.for("react.memo_cache_sentinel")?(l=e.jsx(P,{targetType:"list",isUpload:!0,onSelect:u}),t[4]=l):l=t[4];let s;t[5]!==n||t[6]!==d?(s=e.jsx(O,{targetType:"list",title:"Upload Files/Folders",open:n,list:d,setOpen:x,onSuccess:w}),t[5]=n,t[6]=d,t[7]=s):s=t[7];let r;t[8]!==a?(r=e.jsx(g,{className:"mt-4!",jsonClassName:"max-h-100 overflow-auto",children:a}),t[8]=a,t[9]=r):r=t[9];let i;return t[10]!==s||t[11]!==r?(i=e.jsxs("div",{className:"px-4 pb-4",children:[l,s,r]}),t[10]=s,t[11]=r,t[12]=i):i=t[12],i}const W=`import { useState } from 'react'
import FilesUploadDrawer from '@/components/FilesUploadDrawer'
import { type DrawerFileItemType } from '@/components/FilesDrawer'
import FilesDropSelect from '@/components/FilesDropSelect'
import type { FileItemType } from '@/types/files'
import JsonView from '@/components/JsonView'

function FilesListUpload() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [fileList, setFileList] = useState<FileItemType[]>([])
  const [listData, setListData] = useState<DrawerFileItemType[]>([])

  const onSelectFn = (files: FileItemType[]) => {
    setFileList(files)
    setDrawerOpen(true)
  }
  const onSuccessFn = (list: DrawerFileItemType[]) => {
    console.log('success', list)
    setListData(list)
  }

  return (
    <div className='px-4 pb-4'>
      <FilesDropSelect targetType='list' isUpload={true} onSelect={onSelectFn} />

      <FilesUploadDrawer
        targetType='list'
        title='Upload Files/Folders'
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
`;function X(){const t=S.c(13),[n,x]=j.useState(!1);let c;t[0]===Symbol.for("react.memo_cache_sentinel")?(c=[],t[0]=c):c=t[0];const[d,f]=j.useState(c);let p;t[1]===Symbol.for("react.memo_cache_sentinel")?(p=[],t[1]=p):p=t[1];const[a,F]=j.useState(p);let h;t[2]===Symbol.for("react.memo_cache_sentinel")?(h=o=>{f(o),x(!0)},t[2]=h):h=t[2];const u=h;let m;t[3]===Symbol.for("react.memo_cache_sentinel")?(m=o=>{console.log("success",o),F(o)},t[3]=m):m=t[3];const w=m;let l;t[4]===Symbol.for("react.memo_cache_sentinel")?(l=e.jsx(P,{targetType:"list",isUpload:!0,onSelect:u}),t[4]=l):l=t[4];let s;t[5]!==n||t[6]!==d?(s=e.jsx(O,{targetType:"tree",title:"Upload Files/Folders",open:n,list:d,setOpen:x,onSuccess:w}),t[5]=n,t[6]=d,t[7]=s):s=t[7];let r;t[8]!==a?(r=e.jsx(g,{className:"mt-4!",jsonClassName:"max-h-100 overflow-auto",children:a}),t[8]=a,t[9]=r):r=t[9];let i;return t[10]!==s||t[11]!==r?(i=e.jsxs("div",{className:"px-4 pb-4",children:[l,s,r]}),t[10]=s,t[11]=r,t[12]=i):i=t[12],i}const G=`import { useState } from 'react'
import FilesUploadDrawer from '@/components/FilesUploadDrawer'
import { type DrawerResultFileTreeItemType } from '@/components/FilesDrawer'
import FilesDropSelect from '@/components/FilesDropSelect'
import type { FileItemType } from '@/types/files'
import JsonView from '@/components/JsonView'

function FilesListUploadTree() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [fileList, setFileList] = useState<FileItemType[]>([])
  const [treeData, setTreeData] = useState<DrawerResultFileTreeItemType[]>([])

  const onSelectFn = (files: FileItemType[]) => {
    setFileList(files)
    setDrawerOpen(true)
  }
  const onSuccessFn = (tree: DrawerResultFileTreeItemType[]) => {
    console.log('success', tree)
    setTreeData(tree)
  }

  return (
    <div className='px-4 pb-4'>
      <FilesDropSelect targetType='list' isUpload={true} onSelect={onSelectFn} />

      <FilesUploadDrawer
        targetType='tree'
        title='Upload Files/Folders'
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
`;function K(){const t=S.c(22),[n,x]=j.useState(!1);let c;t[0]===Symbol.for("react.memo_cache_sentinel")?(c=[{name:"vite.svg",type:"file",filePath:"/vite.svg",folderPath:"/",url:"/react-components/vite.svg"},{name:"logo123.png",type:"file",filePath:"/logo123.png",folderPath:"/",url:"https://blog.fxss.work/logo123.png"},{name:"logo.png",type:"file",filePath:"/logo.png",folderPath:"/",url:"https://blog.fxss.work/logo.png"},{name:"aaa.png",type:"file",filePath:"/dir/bb/aaa.png",folderPath:"/dir/bb",url:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f80fb055-eaa7-4008-b0c3-05194e370800/26671f33-7f69-40e8-af57-cc66a8d437cf.png"}],t[0]=c):c=t[0];const[d]=j.useState(c),[f,p]=j.useState(!0);let a;t[1]===Symbol.for("react.memo_cache_sentinel")?(a=[],t[1]=a):a=t[1];const[F,h]=j.useState(a);let u;t[2]===Symbol.for("react.memo_cache_sentinel")?(u=T=>{console.log("success",T),h(T)},t[2]=u):u=t[2];const m=u;let w;t[3]===Symbol.for("react.memo_cache_sentinel")?(w=e.jsx("div",{className:"mb-4!",children:"Network Content:"}),t[3]=w):w=t[3];let l;t[4]!==d?(l=e.jsx(g,{className:"mb-4!",jsonClassName:"max-h-100 overflow-auto",children:d}),t[4]=d,t[5]=l):l=t[5];let s;t[6]!==f?(s=e.jsx(N,{checkedChildren:"Folder Download",unCheckedChildren:"Normal Download",checked:f,onChange:p}),t[6]=f,t[7]=s):s=t[7];let r;t[8]===Symbol.for("react.memo_cache_sentinel")?(r=e.jsx(U,{onClick:()=>x(!0),className:"ml-4",children:"Download Files/Folders"}),t[8]=r):r=t[8];let i;t[9]!==s?(i=e.jsxs("div",{className:"flex items-center",children:[s,r]}),t[9]=s,t[10]=i):i=t[10];let o;t[11]!==n||t[12]!==d||t[13]!==f?(o=e.jsx(L,{targetType:"list",title:"Download Files/Folders",open:n,list:d,setOpen:x,onSuccess:m,isSelectFolder:f}),t[11]=n,t[12]=d,t[13]=f,t[14]=o):o=t[14];let D;t[15]!==F?(D=e.jsx(g,{className:"mt-4!",jsonClassName:"max-h-100 overflow-auto",children:F}),t[15]=F,t[16]=D):D=t[16];let y;return t[17]!==l||t[18]!==i||t[19]!==o||t[20]!==D?(y=e.jsxs(e.Fragment,{children:[w,l,i,o,D]}),t[17]=l,t[18]=i,t[19]=o,t[20]=D,t[21]=y):y=t[21],y}const Y=`import { useState } from 'react'
import FilesDownloadDrawer from '@/components/FilesDownloadDrawer'
import { type DrawerFileItemType } from '@/components/FilesDrawer'
import type { FileDownloadItemType } from '@/types/files'
import JsonView from '@/components/JsonView'
import { Button, Switch } from 'antd'

function FilesDownload() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [fileList] = useState<FileDownloadItemType[]>([
    {
      name: 'vite.svg',
      type: 'file',
      filePath: '/vite.svg',
      folderPath: '/',
      url: '/react-components/vite.svg',
    },
    {
      name: 'logo123.png',
      type: 'file',
      filePath: '/logo123.png',
      folderPath: '/',
      url: 'https://blog.fxss.work/logo123.png',
    },
    {
      name: 'logo.png',
      type: 'file',
      filePath: '/logo.png',
      folderPath: '/',
      url: 'https://blog.fxss.work/logo.png',
    },
    {
      name: 'aaa.png',
      type: 'file',
      filePath: '/dir/bb/aaa.png',
      folderPath: '/dir/bb',
      url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f80fb055-eaa7-4008-b0c3-05194e370800/26671f33-7f69-40e8-af57-cc66a8d437cf.png',
    },
  ])
  const [isSelectFolder, setIsSelectFolder] = useState(true)
  const [listData, setListData] = useState<DrawerFileItemType[]>([])
  const onSuccessFn = (list: DrawerFileItemType[]) => {
    console.log('success', list)
    setListData(list)
  }

  return (
    <>
      <div className='mb-4!'>Network Content:</div>
      <JsonView className='mb-4!' jsonClassName='max-h-100 overflow-auto'>
        {fileList}
      </JsonView>
      <div className='flex items-center'>
        <Switch checkedChildren="Folder Download" unCheckedChildren="Normal Download" checked={isSelectFolder} onChange={setIsSelectFolder} />
        <Button onClick={() => setDrawerOpen(true)} className='ml-4'>Download Files/Folders</Button>
      </div>
      <FilesDownloadDrawer
        targetType='list'
        title='Download Files/Folders'
        open={drawerOpen}
        list={fileList}
        setOpen={setDrawerOpen}
        onSuccess={onSuccessFn}
        isSelectFolder={isSelectFolder}
      />
      <JsonView className='mt-4!' jsonClassName='max-h-100 overflow-auto'>
        {listData}
      </JsonView>
    </>
  )
}

export default FilesDownload
`;function C(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...I(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"filesdrawer",children:"FilesDrawer"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"FilesDrawer"})," is a view abstract layer that provides styles and internal logic for uploading, downloading, compressing, etc. of files/folders. The style is as follows:"]}),`
`,e.jsx("img",{src:k,alt:"FilesDrawer"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Note: When the parent folder fails to upload, the internal child files/folders fail to upload directly."})}),`
`,e.jsx(n.h2,{id:"toc",children:"TOC"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#api",children:"API"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#parameters-props",children:"Parameters Props"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#usage",children:"Usage"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#filesuploaddrawer",children:"FilesUploadDrawer"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#parameters-props-1",children:"Parameters Props"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#source-code",children:"Source Code"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#upload-filesfolders",children:"Upload Files/Folders"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#upload-filesfolders-tree",children:"Upload Files/Folders Tree"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#filesdownloaddrawer",children:"FilesDownloadDrawer"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#parameters-props-2",children:"Parameters Props"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#source-code-1",children:"Source Code"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#download-filesfolders",children:"Download Files/Folders"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(n.h3,{id:"parameters-props",children:"Parameters Props"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export type DrawerFileItemType = FileItemType & {
  icon?: React.ReactNode,
  percent?: number,
  percentStatus?: ProgressProps['status'],
}

export type DrawerResultFileTreeItemType = DrawerFileItemType & {
  children?: DrawerResultFileTreeItemType[]
}

export type FilesDrawerProps = {
  targetType?: TargetType,
  title?: string,
  open: boolean,
  setOpen: (open: boolean) => void,
  list: FileItemType[],
  doneFile: (fileItem: DrawerFileItemType) => Promise<void>,
  onSuccess?: (fileTrees: DrawerResultFileTreeItemType[]) => void,
}
`})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Description"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"targetType"})}),e.jsx(n.td,{children:"The parameter type of the callback function for successful upload"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"tree | list"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"list"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"title"})}),e.jsx(n.td,{children:"Drawer title"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"open"})}),e.jsx(n.td,{children:"Whether the drawer is open"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"setOpen"})}),e.jsx(n.td,{children:"Callback function to open/close the drawer"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(open: boolean) => void"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"list"})}),e.jsx(n.td,{children:"List of files/folders to upload"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"FileItemType[]"})}),e.jsx(n.td,{children:"[]"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"doneFile"})}),e.jsx(n.td,{children:"Callback function to handle files/folders"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(fileItem: DrawerFileItemType) => Promise<void>"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onSuccess"})}),e.jsx(n.td,{children:"Callback function when upload succeeds"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(fileTrees: DrawerResultFileTreeItemType[]) => void"})}),e.jsx(n.td,{children:"-"})]})]})]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"filesuploaddrawer",children:"FilesUploadDrawer"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"FilesUploadDrawer"})," is a concrete implementation of the ",e.jsx(n.code,{children:"FilesDrawer"})," component, which internally implements the logic of uploading files/folders."]}),`
`,e.jsx(n.h4,{id:"parameters-props-1",children:"Parameters Props"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export type FilesUploadDrawerProps = Omit<FilesDrawerProps, 'title' | 'doneFile'> & {
  title?: string,
}
`})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Description"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"targetType"})}),e.jsx(n.td,{children:"The parameter type of the callback function for successful upload"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"tree | list"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"list"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"title"})}),e.jsx(n.td,{children:"Drawer title"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"open"})}),e.jsx(n.td,{children:"Whether the drawer is open"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"setOpen"})}),e.jsx(n.td,{children:"Callback function to open/close the drawer"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(open: boolean) => void"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"list"})}),e.jsx(n.td,{children:"List of files/folders to upload"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"FileItemType[]"})}),e.jsx(n.td,{children:"[]"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onSuccess"})}),e.jsx(n.td,{children:"Callback function when upload succeeds"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(fileTrees: DrawerResultFileTreeItemType[]) => void"})}),e.jsx(n.td,{children:"-"})]})]})]}),`
`,e.jsx(n.h4,{id:"source-code",children:"Source Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import FilesDrawer, { type FilesDrawerProps, type DrawerFileItemType } from '@/components/FilesDrawer'
import fileUploadMock from '@/common/fileUploadMock'
import { useCallback } from 'react'

export type FilesUploadDrawerProps = Omit<FilesDrawerProps, 'title' | 'doneFile'> & {
  title?: string,
}

function FilesUploadDrawer({
  targetType = 'list',
  title = '上传文件/文件夹',
  open = false,
  setOpen,
  list = [],
  onSuccess
}: FilesUploadDrawerProps) {
  const doneFile = useCallback(async (item: DrawerFileItemType) => {
    if (item.type === 'file') {
      await fileUploadMock()
    } else {
      await fileUploadMock()
    }
  }, [])

  return (
    <FilesDrawer
      targetType={targetType}
      title={title}
      open={open}
      setOpen={setOpen}
      list={list}
      doneFile={doneFile}
      onSuccess={onSuccess}
    />
  )
}

export default FilesUploadDrawer
`})}),`
`,e.jsx(n.h4,{id:"upload-filesfolders",children:"Upload Files/Folders"}),`
`,e.jsx(b,{code:W,title:"Upload Files/Folders",description:"After selection, directly upload the file/folder. After successful upload, return the list structure of the file/folder.",children:e.jsx(M,{})}),`
`,e.jsx(n.h4,{id:"upload-filesfolders-tree",children:"Upload Files/Folders Tree"}),`
`,e.jsx(b,{code:G,title:"Upload Files/Folders Tree",description:"After selection, directly upload the file/folder. After successful upload, return the tree structure of the file/folder.",children:e.jsx(X,{})}),`
`,e.jsx(n.h3,{id:"filesdownloaddrawer",children:"FilesDownloadDrawer"}),`
`,e.jsx(n.h4,{id:"parameters-props-2",children:"Parameters Props"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export type FileDownloadItemType = Omit<FileItemType, 'file' | 'url'> & {
  url: string
}

export type FilesDownloadDrawerProps = Omit<FilesDrawerProps, 'title' | 'doneFile' | 'list'> & {
  title?: string
  list: FileDownloadItemType[]
  isSelectFolder?: boolean
}
`})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Description"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"targetType"})}),e.jsx(n.td,{children:"The parameter type of the callback function for successful upload"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"tree | list"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"list"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"title"})}),e.jsx(n.td,{children:"Drawer title"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"open"})}),e.jsx(n.td,{children:"Whether the drawer is open"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"setOpen"})}),e.jsx(n.td,{children:"Callback function to open/close the drawer"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(open: boolean) => void"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"list"})}),e.jsx(n.td,{children:"List of files/folders to upload"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"FileItemType[]"})}),e.jsx(n.td,{children:"[]"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onSuccess"})}),e.jsx(n.td,{children:"Callback function when upload succeeds"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(fileTrees: DrawerResultFileTreeItemType[]) => void"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"isSelectFolder"})}),e.jsxs(n.td,{children:["Whether to select a folder for download. If set to ",e.jsx(n.code,{children:"false"}),", normal download will be used. If set to ",e.jsx(n.code,{children:"true"}),", the user will be prompted to select a folder. If the browser does not support folder selection, normal download will also be used."]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"true"})})]})]})]}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["Note: When downloading, each file must have a corresponding ",e.jsx(n.code,{children:"url"})," property, otherwise it will be skipped. The file/folder will be created in the user-selected folder based on its path."]})}),`
`,e.jsx(n.h4,{id:"source-code-1",children:"Source Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import FilesDrawer, { type FilesDrawerProps, type DrawerFileItemType } from '@/components/FilesDrawer'
import type { FileDownloadItemType } from '@/types/files'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { App } from 'antd'
import { isCrossOrigin } from '@/utils'

export type FilesDownloadDrawerProps = Omit<FilesDrawerProps, 'title' | 'doneFile' | 'list'> & {
  title?: string
  list: FileDownloadItemType[]
  isSelectFolder?: boolean
}

function FilesDownloadDrawer({
  targetType = 'list',
  title = '下载文件/文件夹',
  open = false,
  setOpen,
  list = [],
  onSuccess,
  isSelectFolder = true
}: FilesDownloadDrawerProps) {
  const { t } = useTranslation()
  const { message } = App.useApp()
  const [drawerOpen, setDrawerOpen] = useState(open)
  const [canSelectFolder, setCanSelectFolder] = useState(isSelectFolder)
  useEffect(() => {
    setCanSelectFolder(isSelectFolder)
  }, [isSelectFolder])

  const directoryHandle = useRef<FileSystemDirectoryHandle>(null)
  useEffect(() => {
    const getDirectoryHandle = async () => {
      if (!window.showDirectoryPicker) {
        message.warning(t('components.FilesDownloadDrawer.noSupport', { defaultValue: '当前浏览器不支持选择文件夹，将使用普通下载' }))
        setCanSelectFolder(false)
        setDrawerOpen(true)
        return
      }
      try {
        const dirHandle = await window.showDirectoryPicker({
          mode: 'readwrite',
          id: 'FilesDownloadDrawer',
        })
        if (!dirHandle) {
          return
        }
        directoryHandle.current = dirHandle
        setDrawerOpen(true)
      } catch (error) {
        setOpen(false)
        if (error instanceof Error && error.message.includes('aborted')) {
          message.warning(t('components.FilesDownloadDrawer.chooseFolder', { defaultValue: '请选择文件夹' }))
        } else {
          console.log("🚀 ~ selectDirectoryStoreFn ~ error:", error)
        }
      }
    }

    if (open) {
      if (isSelectFolder) {
        getDirectoryHandle()
      } else {
        setDrawerOpen(true)
      }
    } else {
      setDrawerOpen(false)
    }
    return () => {
      directoryHandle.current = null
    }
  }, [open, isSelectFolder, t, message, setOpen])

  const doneFile = useCallback(async (item: DrawerFileItemType) => {
    const downloadResourceAsBlob = async (url: string) => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(\`error: \${response.status} \${response.statusText}\`)
        }
        return await response.blob()
      } catch (error) {
        throw new Error(\`download error: \${error}\`)
      }
    }

    const writeFile = async (item: DrawerFileItemType) => {
      if (!directoryHandle.current) {
        return
      }
      if (item.folderPath === '/') {
        const fileHandle = await directoryHandle.current.getFileHandle(item.name, { create: true })
        const writable = await fileHandle.createWritable()
        await writable.write(await downloadResourceAsBlob(item.url!))
        await writable.close()
      } else {
        const folderPath = item.folderPath.split('/').filter(x => x !== '')
        let currentDirHandle = directoryHandle.current
        for (const folder of folderPath) {
          currentDirHandle = await currentDirHandle.getDirectoryHandle(folder, { create: true })
        }
        const fileHandle = await currentDirHandle.getFileHandle(item.name, { create: true })
        const writable = await fileHandle.createWritable()
        await writable.write(await downloadResourceAsBlob(item.url!))
        await writable.close()
      }
    }

    const downloadFile = async (item: DrawerFileItemType) => {
      console.log('downloadFile', item)
      const isCross = isCrossOrigin(item.url!)
      let url = item.url!
      if (isCross) {
        const blob = await downloadResourceAsBlob(item.url!)
        url = URL.createObjectURL(blob)
      }
      const a = document.createElement('a')
      a.href = url
      a.target = '_blank'
      a.download = item.name
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      if (isCross) URL.revokeObjectURL(url)
    }
    if (item.url) {
      if (canSelectFolder) {
        await writeFile(item)
      } else {
        await downloadFile(item)
      }
    }
  }, [canSelectFolder])

  return (
    <FilesDrawer
      targetType={targetType}
      title={title}
      open={drawerOpen}
      setOpen={setOpen}
      list={list}
      doneFile={doneFile}
      onSuccess={onSuccess}
    />
  )
}

export default FilesDownloadDrawer
`})}),`
`,e.jsx(n.h4,{id:"download-filesfolders",children:"Download Files/Folders"}),`
`,e.jsx(b,{code:Y,title:"Download Files/Folders",description:"Select folder download or normal download, and view the download effect.",children:e.jsx(K,{})})]})}function z(t={}){const{wrapper:n}={...I(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(C,{...t})}):C(t)}function Te(){const t=S.c(2),n=_();let x;return t[0]!==n?(x=e.jsx("div",{className:"px-4 pb-4",children:e.jsx(E,{children:n==="zh"?e.jsx($,{}):e.jsx(z,{})})}),t[0]=n,t[1]=x):x=t[1],x}export{Te as default};
