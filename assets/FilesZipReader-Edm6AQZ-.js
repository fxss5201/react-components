import{j as r,b as d}from"./@uiw/react-codemirror-dimZJgSu.js";import{c as J,aj as ve,M as Te,Q as De,F as re,I as ce,B as M,an as Be}from"./index-CwDalt6B.js";import{M as Le}from"./MDXRender--j0cKFwg.js";import{P as Ce}from"./Playground-XZt4ylVh.js";import{Z as Ne,aZ as ze,aY as G}from"./zip-fs-wasm-CLf83jnj.js";import{g as Ee,c as fe,a as Re}from"./index-B3cNn7YV.js";import{F as me}from"./FilesDrawer-DH-ydRHZ.js";import{F as ke}from"./FilesDownloadDrawer-DqzSFIQO.js";import{I as Me}from"./index-DvjyObLV.js";import{S as _e}from"./index-C7j3i05K.js";import{F as Oe}from"./Table-NZRh8s1K.js";import{P as Ze}from"./progress-B267_-79.js";import{u as pe}from"./@mdx-js/react-BwGmxI0N.js";import"./react-syntax-highlighter-DW6ulm9l.js";import"./markdown-plugins-CqPL4kxN.js";import"./react-markdown-U0gPFawi.js";import"./use-immer.module-BUjbJLOH.js";import"./iconUtil-nk-7A3wh.js";import"./index-C1Uc0xMy.js";import"./Pagination-tZ5961FD.js";import"./index-D7f8rzsr.js";const ue=["jpg","jpeg","png","gif","bmp","webp","svg"],ye=["txt","md","json","xml","html","css","js","ts","tsx","vue","jsx","log","scss","sass","less","styl","sql","sh","bat"];function Ae(t){const e=J.c(9),{url:o,onClose:a}=t;let u;e[0]===Symbol.for("react.memo_cache_sentinel")?(u={display:"none"},e[0]=u):u=e[0];let f;e[1]!==a?(f=()=>{a()},e[1]=a,e[2]=f):f=e[2];let h;e[3]!==f||e[4]!==o?(h={open:!0,src:o,onOpenChange:f},e[3]=f,e[4]=o,e[5]=h):h=e[5];let y;return e[6]!==h||e[7]!==o?(y=r.jsx(Me,{width:200,style:u,alt:"img",src:o,preview:h}),e[6]=h,e[7]=o,e[8]=y):y=e[8],y}function Ye(t){const e=J.c(26),{blob:o,name:a,onClose:u}=t,[f,h]=d.useState("");let y;e[0]===Symbol.for("react.memo_cache_sentinel")?(y={open:!1,title:"",content:null},e[0]=y):y=e[0];const[C,v]=d.useState(y);let c,w,N;e[1]!==a?(c=a.split(".").pop()?.toLowerCase()||"",w=ue.includes(c),N=ye.includes(c),e[1]=a,e[2]=c,e[3]=w,e[4]=N):(c=e[2],w=e[3],N=e[4]);const B=N;let p,j;e[5]!==o||e[6]!==c||e[7]!==w||e[8]!==B||e[9]!==a?(p=()=>(async function(){if(w)h(URL.createObjectURL(o));else if(B){const te=await Ee(o);v({open:!0,title:a,content:r.jsx(Te,{children:`\`\`\` ${c}
${te}
\`\`\``})})}}(),()=>{v({open:!1,title:"",content:null})}),j=[w,B,c,a,o],e[5]=o,e[6]=c,e[7]=w,e[8]=B,e[9]=a,e[10]=p,e[11]=j):(p=e[10],j=e[11]),d.useEffect(p,j);let x;e[12]!==w||e[13]!==u||e[14]!==f?(x=w&&f&&r.jsx(Ae,{url:f,onClose:()=>{URL.revokeObjectURL(f),h(""),u()}}),e[12]=w,e[13]=u,e[14]=f,e[15]=x):x=e[15];const L=C?.open,T=C?.title;let P;e[16]!==u?(P=()=>{v({open:!1,title:"",content:null}),u()},e[16]=u,e[17]=P):P=e[17];const D=C?.content;let S;e[18]!==L||e[19]!==T||e[20]!==P||e[21]!==D?(S=r.jsx(ve,{open:L,title:T,width:"68vw",closable:!0,footer:null,onCancel:P,children:D}),e[18]=L,e[19]=T,e[20]=P,e[21]=D,e[22]=S):S=e[22];let z;return e[23]!==S||e[24]!==x?(z=r.jsxs(r.Fragment,{children:[x,S]}),e[23]=S,e[24]=x,e[25]=z):z=e[25],z}function Ue(){const t=J.c(25),[e,o]=d.useState(!1),[a,u]=d.useState(""),[f,h]=d.useState(0),[y,C]=d.useState(!1);let v;t[0]===Symbol.for("react.memo_cache_sentinel")?(v=[],t[0]=v):v=t[0];const[c,w]=d.useState(v),[N,B]=d.useState(!1),p=d.useRef(""),j=d.useRef([]);let x;t[1]===Symbol.for("react.memo_cache_sentinel")?(x=[],t[1]=x):x=t[1];const[L,T]=d.useState(x);let P;t[2]===Symbol.for("react.memo_cache_sentinel")?(P=[],t[2]=P):P=t[2];const[D,S]=d.useState(P),{modal:z,message:ne}=De.useApp(),[ee]=re.useForm(),[te,se]=d.useState(!1);let _;t[3]===Symbol.for("react.memo_cache_sentinel")?(_=[],t[3]=_):_=t[3];const[Fe,O]=d.useState(_),[Z,E]=d.useState(),[ie,he]=d.useState(""),we=async function(s){u(""),C(!0),B(!1),h(0);const i=s.target.files;if(i){const n=i[0],m=n.name.split(".");m.pop(),p.current=m.join(".");const g=await new Ne(new ze(n)).getEntries({onprogress:async(I,F,R)=>{h(I/F*100),console.log(R)}});w(g),C(!1),B(!0),j.current=be(g),T(j.current),S([{name:n.name,filePath:"/"}]),g[0].encrypted&&!a&&z.confirm({title:"密码提示",content:r.jsx(re,{form:ee,layout:"vertical",preserve:!1,initialValues:{password:""},clearOnDestroy:!0,className:"mt-4",children:r.jsx(re.Item,{name:"password",rules:[{required:!0,message:"请输入密码"}],children:r.jsx(ce.Password,{placeholder:"请输入密码"})})}),closable:!0,destroyOnHidden:!0,okButtonProps:{autoFocus:!0,htmlType:"submit"},onOk:async()=>{try{const I=await ee.validateFields();u(I.password)}catch(I){const F=I;return Promise.reject(F)}}})}};function be(l){const s=[];return l.forEach(i=>{const n=i.filename.split("/");let m=s;n.forEach((b,g)=>{if(b){const I=g===n.length-1,F=m.find(k=>k.name===b),R=I?i.directory?"folder":"file":"folder";if(F)I?(F.type=R,F.filePath=n.slice(0,g+1).join("/"),F.folderPath=n.slice(0,g).join("/"),R==="file"&&(F.encrypted=i.encrypted,F.compressedSize=i.compressedSize,F.uncompressedSize=i.uncompressedSize,F.lastModDate=i.lastModDate)):m=F.children||[];else{const k={type:R,name:b,filePath:n.slice(0,g+1).join("/"),folderPath:n.slice(0,g).join("/"),...R==="file"?{encrypted:i.encrypted,compressedSize:i.compressedSize,uncompressedSize:i.uncompressedSize,lastModDate:i.lastModDate}:{}};I||(k.children=[]),m.push(k),m=k.children||[]}}})}),console.log("tree",s),s}let A;t[4]!==c||t[5]!==a?(A=async function(s){if(s.type==="folder")return;const i=s.filePath,n=c.find(b=>b.filename===i);if(!n)return;o(!0);const m=await n.getData(new G,{password:a});o(!1),Re(m,s.name)},t[4]=c,t[5]=a,t[6]=A):A=t[6];const Y=A;let U;t[7]===Symbol.for("react.memo_cache_sentinel")?(U=function(s){const i=s.name.split(".").pop()||"";return s.type==="file"&&(ue.includes(i)||ye.includes(i))},t[7]=U):U=t[7];const le=U;let H;t[8]!==c||t[9]!==a||t[10]!==E?(H=async function(s){if(s.type==="folder")return;const i=s.filePath,n=c.find(b=>b.filename===i);if(!n)return;o(!0);const m=await n.getData(new G,{password:a});o(!1),he(s.name),E(m)},t[8]=c,t[9]=a,t[10]=E,t[11]=H):H=t[11];const $=H;let W;t[12]!==Y||t[13]!==$?(W=function(s){s.type!=="folder"&&(le(s)?$(s):Y(s))},t[12]=Y,t[13]=$,t[14]=W):W=t[14];const ge=W,xe=function(s){if(s.type==="file")return;const i=[...D,{name:s.name,filePath:s.filePath}];S(i),T(oe(i))};function oe(l){let s=j.current;return l.forEach(i=>{const n=s.find(m=>m.filePath===i.filePath);n&&(s=n.children||[])}),s}const Pe=function(s,i){if(s.filePath==="/"){S([{name:p.current,filePath:"/"}]),T(j.current);return}const n=D.slice(0,i+1);S(n),T(oe(n))},Se=async function(){se(!0),O([]);const s=[];o(!0);for(const i of c){const n=i.filename.split("/"),m=n[n.length-1];if(i.directory)s.push({name:n[n.length-2],type:"folder",filePath:[p.current,...n.slice(0)].join("/"),folderPath:[p.current,...n.slice(0,-1)].join("/"),url:""});else{const b=await i.getData(new G,{password:a});s.push({name:m,type:"file",filePath:[p.current,...n.slice(0)].join("/"),folderPath:[p.current,...n.slice(0,-1)].join("/"),url:b})}}o(!1),O(s)};let X;t[15]===Symbol.for("react.memo_cache_sentinel")?(X=function(s){console.log("onSuccessFn",s)},t[15]=X):X=t[15];const Ie=X,je=async function(){if(L.length===0){ne.info("当前目录下无内容");return}se(!0),O([]);const s=[];o(!0),await ae(L,s),o(!1),O(s)};async function ae(l,s){for(const i of l)if(i.type==="file"){const n=i.filePath,m=c.find(I=>I.filename===n);if(!m)return;const b=await m.getData(new G,{password:a}),g=n.split("/");s.push({name:i.name,type:"file",filePath:[p.current,...g.slice(0)].join("/"),folderPath:[p.current,...g.slice(0,-1)].join("/"),url:URL.createObjectURL(b)})}else if(i.type==="folder")if(i.children&&i.children.length>0)await ae(i.children,s);else{const n=i.filePath.split("/");s.push({name:i.name,type:"folder",filePath:[p.current,...n.slice(0)].join("/"),folderPath:[p.current,...n.slice(0,-1)].join("/"),url:""})}}let q;t[16]===Symbol.for("react.memo_cache_sentinel")?(q=r.jsx("div",{className:"flex-shrink-0 w-30",children:"选择zip文件："}),t[16]=q):q=t[16];let K;t[17]===Symbol.for("react.memo_cache_sentinel")?(K={cursor:"pointer"},t[17]=K):K=t[17];let V;t[18]!==f||t[19]!==y?(V=y&&r.jsx("div",{className:"mt-4",children:r.jsx(Ze,{percent:f})}),t[18]=f,t[19]=y,t[20]=V):V=t[20];let Q;return t[21]!==Z||t[22]!==ie||t[23]!==E?(Q=Z&&r.jsx(Ye,{blob:Z,name:ie,onClose:()=>E(void 0)}),t[21]=Z,t[22]=ie,t[23]=E,t[24]=Q):Q=t[24],r.jsxs(_e,{spinning:e,delay:500,size:"large",tip:"解压中...",children:[r.jsxs("div",{className:"flex items-center",children:[q,r.jsx(ce,{type:"file",accept:".zip",style:K,onChange:we})]}),V,N&&r.jsxs("div",{className:"mt-4",children:[r.jsxs("div",{className:"flex items-center",children:[r.jsx("span",{className:"font-bold",children:"目录："}),D.map((l,s)=>r.jsxs("div",{onClick:()=>Pe(l,s),children:[r.jsx(M,{type:"text",size:"small",children:l.name}),s<D.length-1&&r.jsx("span",{className:"mx-1",children:"/"})]},l.filePath))]}),r.jsxs("div",{className:"my-4 flex items-center",children:[r.jsx(M,{onClick:Se,children:"全部解压"}),r.jsx(M,{className:"ml-4",onClick:je,children:"解压当前目录"})]}),r.jsx(Oe,{rowKey:Ke,columns:[{title:"文件名",dataIndex:"name",render:qe},{title:"压缩大小",dataIndex:"compressedSize",render:Xe},{title:"解压大小",dataIndex:"uncompressedSize",render:We},{title:"最后修改时间",dataIndex:"lastModDate",render:$e},{title:"操作",dataIndex:"action",render:(l,s)=>s.type==="file"?r.jsxs(r.Fragment,{children:[r.jsx(M,{type:"text",size:"small",onClick:i=>{i.stopPropagation(),Y(s)},children:"下载"}),le(s)&&r.jsx(M,{type:"text",size:"small",onClick:i=>{i.stopPropagation(),$(s)},children:"查看"})]}):null}],dataSource:L.map(He),onRow:l=>({onClick:()=>{l.type==="file"?ge(l):l.type==="folder"&&xe(l)}}),pagination:!1}),r.jsx(ke,{targetType:"list",title:"解压文件/文件夹",open:te,list:Fe,setOpen:se,onSuccess:Ie,isSelectFolder:!0})]}),Q]})}function He(t){return{...t,children:void 0}}function $e(t){return t?Be(t).format("YYYY-MM-DD HH:mm:ss"):"-"}function We(t,e){return e.type==="file"?fe(t):"-"}function Xe(t,e){return e.type==="file"?fe(t):"-"}function qe(t,e){return r.jsxs("div",{className:"flex items-center",children:[e.type==="file"?r.jsx(me,{fileName:t}):r.jsx(me,{fileName:t,type:"folder"}),r.jsx("span",{className:"ml-1",children:t})]})}function Ke(t){return t.filePath}const Ve=`import { useRef, useState } from 'react'
import { Button, Input, Progress, Table, App, Form, Spin } from 'antd'
import { ZipReader, BlobWriter, BlobReader, type Entry, type FileEntry } from '@zip.js/zip.js'
import dayjs from 'dayjs'
import { convertByteToReadableSize } from '@/utils'
import { aDownloadBlob } from '@/utils'
import FileIcon from '@/components/FileIcon'
import FilesDownloadDrawer from '@/components/FilesDownloadDrawer'
import type { FileDownloadItemType } from '@/types/files'
import { type DrawerFileItemType } from '@/components/FilesDrawer'
import { imgTypes, textTypes } from '@/FileTypes'
import PreviewFile from '@/components/PreviewFile'

export type FileTreeItem = {
  type: 'folder' | 'file'
  name: string
  filePath: string
  folderPath: string
  encrypted?: boolean
  compressedSize?: number
  uncompressedSize?: number
  lastModDate?: Date
  children?: FileTreeItem[]
}
export type BreadcrumbItemsType = {
  name: string
  filePath: string
}

function FilesZipReader() {
  const [loading, setLoading] = useState(false)
  const [password, setPassword] = useState('')
  const [progress, setProgress] = useState(0)
  const [showProgress, setShowProgress] = useState(false)
  const [entries, setEntries] = useState<Entry[]>([])
  const [showEntries, setShowEntries] = useState(false)
  const oldFileName = useRef<string>('')
  const allFileTree = useRef<FileTreeItem[]>([])
  const [fileTree, setFileTree] = useState<FileTreeItem[]>([])
  const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbItemsType[]>([])
  const { modal, message } = App.useApp()
  const [form] = Form.useForm()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [fileList, setFileList] = useState<FileDownloadItemType[]>([])
  const [previewFileBlob, setPreviewFileBlob] = useState<Blob>()
  const [previewFileName, setPreviewFileName] = useState('')

  async function openFileFn(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword('')
    setShowProgress(true)
    setShowEntries(false)
    setProgress(0)
    const files = e.target.files
    if (files) {
      const file = files[0]
      const fileNames = file.name.split('.')
      fileNames.pop()
      oldFileName.current = fileNames.join('.')
      const zipReader = new ZipReader(new BlobReader(file))
      const entries = await zipReader.getEntries({
        onprogress: async(progress, total, entry) => {
          setProgress((progress / total) * 100)
          console.log(entry)
        }
      })
      setEntries(entries)
      setShowProgress(false)
      setShowEntries(true)
      allFileTree.current = buildFileTree(entries)
      setFileTree(allFileTree.current)
      setBreadcrumbItems([{
        name: file.name,
        filePath: '/',
      }])
      if (entries[0].encrypted && !password) {
        modal.confirm({
          title: '密码提示',
          content: (
            <Form
              form={form}
              layout='vertical'
              preserve={false}
              initialValues={{ password: '' }}
              clearOnDestroy
              className='mt-4'
            >
              <Form.Item
                name='password'
                rules={[{ required: true, message: '请输入密码' }]}
              >
                <Input.Password placeholder='请输入密码' />
              </Form.Item>
            </Form>
          ),
          closable: true,
          destroyOnHidden: true,
          okButtonProps: { autoFocus: true, htmlType: 'submit' },
          onOk: async () => {
            try {
              const values = await form.validateFields()
              setPassword(values.password)
            } catch (error) {
              return Promise.reject(error)
            }
          },
        })
      }
    }
  }
  function buildFileTree(items: Entry[]): FileTreeItem[] {
    const tree: FileTreeItem[] = []
    items.forEach((item) => {
      const parts = item.filename.split('/')
      let currentLevel = tree
      parts.forEach((part, index) => {
        if (part) {
          const isLast = index === parts.length - 1
          const existingItem = currentLevel.find((i) => i.name === part)
          const type = isLast ? item.directory ? 'folder' : 'file' : 'folder'
          if (existingItem) {
            if (isLast) {
              existingItem.type = type
              existingItem.filePath = parts.slice(0, index + 1).join('/')
              existingItem.folderPath = parts.slice(0, index).join('/')
              if (type === 'file') {
                existingItem.encrypted = item.encrypted
                existingItem.compressedSize = item.compressedSize
                existingItem.uncompressedSize = item.uncompressedSize
                existingItem.lastModDate = item.lastModDate
              }
            } else {
              currentLevel = existingItem.children || []
            }
          } else {
            const newItem: FileTreeItem = {
              type: type,
              name: part,
              filePath: parts.slice(0, index + 1).join('/'),
              folderPath: parts.slice(0, index).join('/'),
              ...(type === 'file' ? {
                encrypted: item.encrypted,
                compressedSize: item.compressedSize,
                uncompressedSize: item.uncompressedSize,
                lastModDate: item.lastModDate,
              } : {})
            }
            if (!isLast) {
              newItem.children = []
            }
            currentLevel.push(newItem)
            currentLevel = newItem.children || []
          }
        }
      })
    })
      console.log('tree', tree)
    return tree
  }

  async function downloadFile(item: FileTreeItem) {
    if (item.type === 'folder') {
      return
    }
    const filePath = item.filePath
    const fileEntry: FileEntry = entries.find(x => x.filename === filePath) as FileEntry
    if (!fileEntry) {
      return
    }
    setLoading(true)
    const blobData = await fileEntry.getData(new BlobWriter(), {
      password,
    })
    setLoading(false)
    aDownloadBlob(blobData, item.name)
  }
  function isCanShowPreview(item: FileTreeItem) {
    const fileType = item.name.split('.').pop() || ''
    return item.type === 'file' && (imgTypes.includes(fileType) || textTypes.includes(fileType))
  }
  async function previewFile(item: FileTreeItem) {
    if (item.type === 'folder') {
      return
    }
    const filePath = item.filePath
    const fileEntry: FileEntry = entries.find(x => x.filename === filePath) as FileEntry
    if (!fileEntry) {
      return
    }
    setLoading(true)
    const blobData = await fileEntry.getData(new BlobWriter(), {
      password,
    })
    setLoading(false)
    setPreviewFileName(item.name)
    setPreviewFileBlob(blobData)
  }
  function doRowFileClick(item: FileTreeItem) {
    if (item.type === 'folder') {
      return
    }
    if (isCanShowPreview(item)) {
      previewFile(item)
    } else {
      downloadFile(item)
    }
  }

  function doFolderClick(item: FileTreeItem) {
    if (item.type === 'file') {
      return
    }
    const newBreadcrumbItems = [...breadcrumbItems!, { name: item.name, filePath: item.filePath }]
    setBreadcrumbItems(newBreadcrumbItems)
    setFileTree(getFileTrees(newBreadcrumbItems))
  }
  function getFileTrees(breadcrumbItems: BreadcrumbItemsType[]): FileTreeItem[] {
    let allFileTrees = allFileTree.current
    breadcrumbItems.forEach((breadcrumbItem) => {
      const folder = allFileTrees.find(x => x.filePath === breadcrumbItem.filePath)
      if (folder) {
        allFileTrees = folder.children || []
      }
    })
    return allFileTrees
  }
  function doBreadcrumbClick(item: BreadcrumbItemsType, index: number) {
    if (item.filePath === '/') {
      setBreadcrumbItems([{ name: oldFileName.current, filePath: '/' }])
      setFileTree(allFileTree.current)
      return
    }
    const newBreadcrumbItems = breadcrumbItems!.slice(0, index + 1)
    setBreadcrumbItems(newBreadcrumbItems)
    setFileTree(getFileTrees(newBreadcrumbItems))
  }

  async function downloadAllFile() {
    setDrawerOpen(true)
    setFileList([])
    const allFileList: FileDownloadItemType[] = []
    setLoading(true)
    for (const entry of entries) {
      const parts = entry.filename.split('/')
      const name = parts[parts.length - 1]
      if (entry.directory) {
        allFileList.push({
          name: parts[parts.length - 2],
          type: 'folder',
          filePath:  [oldFileName.current, ...parts.slice(0)].join('/'),
          folderPath: [oldFileName.current, ...parts.slice(0, -1)].join('/'),
          url: '',
        })
      } else {
        const blobData = await entry.getData(new BlobWriter(), {
          password,
        })
        allFileList.push({
          name,
          type: 'file',
          filePath:  [oldFileName.current, ...parts.slice(0)].join('/'),
          folderPath: [oldFileName.current, ...parts.slice(0, -1)].join('/'),
          url: blobData,
        })
      }
    }
    setLoading(false)
    setFileList(allFileList)
  }
  function onSuccessFn(list: DrawerFileItemType[]) {
    console.log('onSuccessFn', list)
  }
  async function downloadCurrentFolder() {
    if (fileTree.length === 0) {
      message.info('当前目录下无内容')
      return
    }
    setDrawerOpen(true)
    setFileList([])
    const fileList: FileDownloadItemType[] = []
    setLoading(true)
    await getCurrentFolderFileList(fileTree, fileList)
    setLoading(false)
    setFileList(fileList)
  }
  async function getCurrentFolderFileList(fileTree: FileTreeItem[], fileList: FileDownloadItemType[]) {
    for (const item of fileTree) {
      if (item.type === 'file') {
        const filePath = item.filePath
        const fileEntry: FileEntry = entries.find(x => x.filename === filePath) as FileEntry
        if (!fileEntry) {
          return
        }
        const blobData = await fileEntry.getData(new BlobWriter(), {
          password,
        })
        const parts = filePath.split('/')
        fileList.push({
          name: item.name,
          type: 'file',
          filePath:  [oldFileName.current, ...parts.slice(0)].join('/'),
          folderPath: [oldFileName.current, ...parts.slice(0, -1)].join('/'),
          url: URL.createObjectURL(blobData),
        })
      } else if (item.type === 'folder') {
        if (item.children && item.children.length > 0) {
          await getCurrentFolderFileList(item.children, fileList)
        } else {
          const parts = item.filePath.split('/')
          fileList.push({
            name: item.name,
            type: 'folder',
            filePath:  [oldFileName.current, ...parts.slice(0)].join('/'),
            folderPath: [oldFileName.current, ...parts.slice(0, -1)].join('/'),
            url: '',
          })
        }
      }
    }
  }
  
  return (
    <Spin spinning={loading} delay={500} size='large' tip='解压中...'>
      <div className='flex items-center'>
        <div className='flex-shrink-0 w-30'>选择zip文件：</div>
        <Input type='file' accept='.zip' style={{ cursor: 'pointer' }} onChange={openFileFn} />
      </div>
      {showProgress && (
        <div className='mt-4'>
          <Progress percent={progress} />
        </div>
      )}
      {showEntries && (
        <div className='mt-4'>
          <div className='flex items-center'>
            <span className='font-bold'>目录：</span>
            {breadcrumbItems.map((item, index) => (
              <div key={item.filePath} onClick={() => doBreadcrumbClick(item, index)}>
                <Button type='text' size='small'>{item.name}</Button>
                {index < breadcrumbItems.length - 1 && <span className='mx-1'>/</span>}
              </div>
            ))}
          </div>
          <div className='my-4 flex items-center'>
            <Button onClick={downloadAllFile}>全部解压</Button>
            <Button className='ml-4' onClick={downloadCurrentFolder}>解压当前目录</Button>
          </div>
          <Table<FileTreeItem>
            rowKey={(record) => record.filePath}
            columns={[
              {
                title: '文件名',
                dataIndex: 'name',
                render: (name, record) => <div className='flex items-center'>{ record.type === 'file' ? <FileIcon fileName={name} /> : <FileIcon fileName={name} type="folder" /> }<span className='ml-1'>{name}</span></div>,
              },
              {
                title: '压缩大小',
                dataIndex: 'compressedSize',
                render: (compressedSize, record) => record.type === 'file' ? convertByteToReadableSize(compressedSize) : '-',
              },
              {
                title: '解压大小',
                dataIndex: 'uncompressedSize',
                render: (uncompressedSize, record) => record.type === 'file' ? convertByteToReadableSize(uncompressedSize) : '-',
              },
              {
                title: '最后修改时间',
                dataIndex: 'lastModDate',
                render: (lastModDate) => lastModDate ? dayjs(lastModDate).format('YYYY-MM-DD HH:mm:ss') : '-',
              },
              {
                title: '操作',
                dataIndex: 'action',
                render: (_, record) => record.type === 'file'
                  ? <>
                      <Button type='text' size='small' onClick={(e) => {
                        e.stopPropagation()
                        downloadFile(record)
                      }}>下载</Button>
                      {isCanShowPreview(record) && <Button type='text' size='small' onClick={(e) => {
                        e.stopPropagation()
                        previewFile(record)
                      }}>查看</Button>}
                    </>
                  : null,
              }
            ]}
            dataSource={fileTree.map(x => ({ ...x, children: undefined }))}
            onRow={(record) => {
              return {
                onClick: () => {
                  if (record.type === 'file') {
                    doRowFileClick(record)
                  } else if (record.type === 'folder') {
                    doFolderClick(record)
                  }
                }
              };
            }}
            pagination={false} />
          <FilesDownloadDrawer
            targetType='list'
            title='解压文件/文件夹'
            open={drawerOpen}
            list={fileList}
            setOpen={setDrawerOpen}
            onSuccess={onSuccessFn}
            isSelectFolder={true}
          />
        </div>
      )}
      {previewFileBlob && <PreviewFile
        blob={previewFileBlob}
        name={previewFileName}
        onClose={() => setPreviewFileBlob(undefined)} />}
    </Spin>
  )
}

export default FilesZipReader
`;function de(t){const e={h1:"h1",...pe(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"fileszipreader",children:"FilesZipReader"}),`
`,r.jsx(Ce,{code:Ve,title:"文件解压",description:"选择 zip 文件，解压为文件列表。",children:r.jsx(Ue,{})})]})}function Qe(t={}){const{wrapper:e}={...pe(),...t.components};return e?r.jsx(e,{...t,children:r.jsx(de,{...t})}):de(t)}function bt(){const t=J.c(1);let e;return t[0]===Symbol.for("react.memo_cache_sentinel")?(e=r.jsx("div",{className:"px-4 pb-4",children:r.jsx(Le,{children:r.jsx(Qe,{})})}),t[0]=e):e=t[0],e}export{bt as default};
