import{b as g,j as t}from"./@uiw/react-codemirror-dimZJgSu.js";import{c as D,S as L,u as C}from"./index-CwDalt6B.js";import{M as E}from"./MDXRender--j0cKFwg.js";import{P as N}from"./Playground-XZt4ylVh.js";import{D as b}from"./DropElement-C0NNM9yT.js";import{J as P}from"./JsonView-DtypalN_.js";import{S as _}from"./index-C7j3i05K.js";import{u as A}from"./@mdx-js/react-BwGmxI0N.js";import"./react-syntax-highlighter-DW6ulm9l.js";import"./markdown-plugins-CqPL4kxN.js";import"./react-markdown-U0gPFawi.js";import"./index-BSg5Lc9Y.js";import"./isBrowser-BdZk1G-M.js";import"./JsonEditor-C8Qw5Tcq.js";import"./CodeEditor-DCLYA5gR.js";import"./JsonRender-CBqOC-Sc.js";import"./use-undo.m-DQTOi8z5.js";async function B(e,n="SHA-256"){const i=await e.arrayBuffer(),S=await window.crypto.subtle.digest(n,i);return Array.from(new Uint8Array(S)).map(h=>h.toString(16).padStart(2,"0")).join("")}function J(){const e=D.c(19);let n;e[0]===Symbol.for("react.memo_cache_sentinel")?(n=[],e[0]=n):n=e[0];const[i,S]=g.useState(n),[s,F]=g.useState("SHA-256"),[h,j]=g.useState(!1);let a;if(e[1]!==s){a=async function(x){j(!0),S(await v(x)),j(!1)};async function v(y){const x=[];for(let H=0;H<y.length;H++){const m=y[H],T=await B(m.file,s);x.push({type:m.type,file:m.file,name:m.name,filePath:m.filePath,folderPath:m.folderPath,hashHex:T})}return x}e[1]=s,e[2]=a}else a=e[2];let f;e[3]===Symbol.for("react.memo_cache_sentinel")?(f=t.jsx("div",{children:"加密算法："}),e[3]=f):f=e[3];let d;e[4]===Symbol.for("react.memo_cache_sentinel")?(d=["SHA-1","SHA-256","SHA-384","SHA-512"].map(M),e[4]=d):d=e[4];let l;e[5]!==s?(l=t.jsxs("div",{className:"flex items-center",children:[f,t.jsx(L,{value:s,onChange:F,options:d,className:"w-30"})]}),e[5]=s,e[6]=l):l=e[6];let p;e[7]===Symbol.for("react.memo_cache_sentinel")?(p=t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-2xl",children:"文件哈希计算器"}),t.jsx("div",{className:"text-sm mt-4",children:"拖拽文件/文件夹到此处，即可计算文件的哈希值。"})]}),e[7]=p):p=e[7];let o;e[8]!==a?(o=t.jsx(b,{targetType:"list",isIgnoreFolder:!0,onSelect:a,className:"mt-4",children:p}),e[8]=a,e[9]=o):o=e[9];let r;e[10]!==i?(r=t.jsx(P,{className:"mt-4!",jsonClassName:"max-h-100 overflow-auto",children:i}),e[10]=i,e[11]=r):r=e[11];let c;e[12]!==h||e[13]!==r?(c=t.jsx(_,{spinning:h,children:r}),e[12]=h,e[13]=r,e[14]=c):c=e[14];let u;return e[15]!==l||e[16]!==o||e[17]!==c?(u=t.jsxs(t.Fragment,{children:[l,o,c]}),e[15]=l,e[16]=o,e[17]=c,e[18]=u):u=e[18],u}function M(e){return{value:e,label:e}}const V=`import { useState } from 'react'
import { Select, Spin } from 'antd'
import DropElement from '@/components/DropElement'
import type { FileTreeItem, FileItemType } from '@/types/files'
import JsonView from '@/components/JsonView'
import { calculateFileHashHex, type AlgorithmType } from '@/utils/calculateFileHashHex'

type FileHashItemType = FileItemType & {
  hashHex: string
}

function FileHashDemo() {
  const [listData, setListData] = useState<FileHashItemType[]>([])
  const [algorithm, setAlgorithm] = useState<AlgorithmType>('SHA-256')
  const [loading, setLoading] = useState<boolean>(false)

  async function onDropList(fileList: FileTreeItem[]) {
    setLoading(true)
    setListData(await changeFileTreeItemToFileItemType(fileList))
    setLoading(false)
  }
  async function changeFileTreeItemToFileItemType(fileList: FileTreeItem[]): Promise<FileHashItemType[]> {
    const fileHashItemList: FileHashItemType[] = []
    for (let index = 0; index < fileList.length; index++) {
      const item = fileList[index]
      const hashHex = await calculateFileHashHex(item.file as File, algorithm)
      fileHashItemList.push({
        type: item.type,
        file: item.file,
        name: item.name,
        filePath: item.filePath,
        folderPath: item.folderPath,
        hashHex,
      })
    }
    return fileHashItemList
  }

  return (
    <>
      <div className='flex items-center'>
        <div>加密算法：</div>
        <Select
          value={algorithm}
          onChange={setAlgorithm}
          options={['SHA-1', 'SHA-256', 'SHA-384', 'SHA-512'].map(x => ({ value: x, label: x }))}
          className='w-30'
        />
      </div>
      <DropElement targetType='list' isIgnoreFolder={true} onSelect={onDropList} className='mt-4'>
        <div className='text-center'>
          <div className='text-2xl'>文件哈希计算器</div>
          <div className='text-sm mt-4'>拖拽文件/文件夹到此处，即可计算文件的哈希值。</div>
        </div>
      </DropElement>
      <Spin spinning={loading}>
        <JsonView className='mt-4!' jsonClassName='max-h-100 overflow-auto'>
          {listData}
        </JsonView>
      </Spin>
    </>
  )
}

export default FileHashDemo
`;function w(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...A(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n.h1,{id:"filehash",children:"FileHash"}),`
`,t.jsx(n.h2,{id:"目录",children:"目录"}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsx(n.li,{children:t.jsx(n.a,{href:"#%E6%BA%90%E4%BB%A3%E7%A0%81",children:"源代码"})}),`
`,t.jsx(n.li,{children:t.jsx(n.a,{href:"#%E7%A4%BA%E4%BE%8B",children:"示例"})}),`
`]}),`
`,t.jsx(n.h2,{id:"源代码",children:"源代码"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-ts",children:`export type AlgorithmType = 'SHA-1' | 'SHA-256' | 'SHA-384' | 'SHA-512'

export async function calculateFileHashHex(file: File, algorithm: AlgorithmType = 'SHA-256'): Promise<string> {
  const arrayBuffer = await file.arrayBuffer()
  const hashBuffer = await window.crypto.subtle.digest(algorithm, arrayBuffer)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
  return hashHex
}
`})}),`
`,t.jsx(n.h2,{id:"示例",children:"示例"}),`
`,t.jsx(N,{code:V,title:"文件哈希",description:"拖拽文件/文件夹到此处，即可计算文件的哈希值（支持递归计算文件夹下所有文件的哈希值， 文件哈希值可以作为文件内容的唯一标识）。",children:t.jsx(J,{})})]})}function $(e={}){const{wrapper:n}={...A(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(w,{...e})}):w(e)}function X(){const e=D.c(19);let n;e[0]===Symbol.for("react.memo_cache_sentinel")?(n=[],e[0]=n):n=e[0];const[i,S]=g.useState(n),[s,F]=g.useState("SHA-256"),[h,j]=g.useState(!1);let a;if(e[1]!==s){a=async function(x){j(!0),S(await v(x)),j(!1)};async function v(y){const x=[];for(let H=0;H<y.length;H++){const m=y[H],T=await B(m.file,s);x.push({type:m.type,file:m.file,name:m.name,filePath:m.filePath,folderPath:m.folderPath,hashHex:T})}return x}e[1]=s,e[2]=a}else a=e[2];let f;e[3]===Symbol.for("react.memo_cache_sentinel")?(f=t.jsx("div",{children:"encryption algorithm: "}),e[3]=f):f=e[3];let d;e[4]===Symbol.for("react.memo_cache_sentinel")?(d=["SHA-1","SHA-256","SHA-384","SHA-512"].map(R),e[4]=d):d=e[4];let l;e[5]!==s?(l=t.jsxs("div",{className:"flex items-center",children:[f,t.jsx(L,{value:s,onChange:F,options:d,className:"w-30"})]}),e[5]=s,e[6]=l):l=e[6];let p;e[7]===Symbol.for("react.memo_cache_sentinel")?(p=t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-2xl",children:"File Hash Calculator"}),t.jsx("div",{className:"text-sm mt-4",children:"Drag files/folders to here, and you can calculate the hash value of the files."})]}),e[7]=p):p=e[7];let o;e[8]!==a?(o=t.jsx(b,{targetType:"list",isIgnoreFolder:!0,onSelect:a,className:"mt-4",children:p}),e[8]=a,e[9]=o):o=e[9];let r;e[10]!==i?(r=t.jsx(P,{className:"mt-4!",jsonClassName:"max-h-100 overflow-auto",children:i}),e[10]=i,e[11]=r):r=e[11];let c;e[12]!==h||e[13]!==r?(c=t.jsx(_,{spinning:h,children:r}),e[12]=h,e[13]=r,e[14]=c):c=e[14];let u;return e[15]!==l||e[16]!==o||e[17]!==c?(u=t.jsxs(t.Fragment,{children:[l,o,c]}),e[15]=l,e[16]=o,e[17]=c,e[18]=u):u=e[18],u}function R(e){return{value:e,label:e}}const U=`import { useState } from 'react'
import { Select, Spin } from 'antd'
import DropElement from '@/components/DropElement'
import type { FileTreeItem, FileItemType } from '@/types/files'
import JsonView from '@/components/JsonView'
import { calculateFileHashHex, type AlgorithmType } from '@/utils/calculateFileHashHex'

type FileHashItemType = FileItemType & {
  hashHex: string
}

function FileHashDemo() {
  const [listData, setListData] = useState<FileHashItemType[]>([])
  const [algorithm, setAlgorithm] = useState<AlgorithmType>('SHA-256')
  const [loading, setLoading] = useState<boolean>(false)

  async function onDropList(fileList: FileTreeItem[]) {
    setLoading(true)
    setListData(await changeFileTreeItemToFileItemType(fileList))
    setLoading(false)
  }
  async function changeFileTreeItemToFileItemType(fileList: FileTreeItem[]): Promise<FileHashItemType[]> {
    const fileHashItemList: FileHashItemType[] = []
    for (let index = 0; index < fileList.length; index++) {
      const item = fileList[index]
      const hashHex = await calculateFileHashHex(item.file as File, algorithm)
      fileHashItemList.push({
        type: item.type,
        file: item.file,
        name: item.name,
        filePath: item.filePath,
        folderPath: item.folderPath,
        hashHex,
      })
    }
    return fileHashItemList
  }

  return (
    <>
      <div className='flex items-center'>
        <div>encryption algorithm: </div>
        <Select
          value={algorithm}
          onChange={setAlgorithm}
          options={['SHA-1', 'SHA-256', 'SHA-384', 'SHA-512'].map(x => ({ value: x, label: x }))}
          className='w-30'
        />
      </div>
      <DropElement targetType='list' isIgnoreFolder={true} onSelect={onDropList} className='mt-4'>
        <div className='text-center'>
          <div className='text-2xl'>File Hash Calculator</div>
          <div className='text-sm mt-4'>Drag files/folders to here, and you can calculate the hash value of the files.</div>
        </div>
      </DropElement>
      <Spin spinning={loading}>
        <JsonView className='mt-4!' jsonClassName='max-h-100 overflow-auto'>
          {listData}
        </JsonView>
      </Spin>
    </>
  )
}

export default FileHashDemo
`;function I(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...A(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n.h1,{id:"filehash",children:"FileHash"}),`
`,t.jsx(n.h2,{id:"toc",children:"TOC"}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsx(n.li,{children:t.jsx(n.a,{href:"#source-code",children:"Source Code"})}),`
`,t.jsx(n.li,{children:t.jsx(n.a,{href:"#demo",children:"Demo"})}),`
`]}),`
`,t.jsx(n.h2,{id:"source-code",children:"Source Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-ts",children:`export type AlgorithmType = 'SHA-1' | 'SHA-256' | 'SHA-384' | 'SHA-512'

export async function calculateFileHashHex(file: File, algorithm: AlgorithmType = 'SHA-256'): Promise<string> {
  const arrayBuffer = await file.arrayBuffer()
  const hashBuffer = await window.crypto.subtle.digest(algorithm, arrayBuffer)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
  return hashHex
}
`})}),`
`,t.jsx(n.h2,{id:"demo",children:"Demo"}),`
`,t.jsx(N,{code:U,title:"File Hash Calculator",description:"Drag files or folders to calculate their hash values (supports recursive calculation of hash values for all files in a folder, file hash values can be used as unique identifiers for file content).",children:t.jsx(X,{})})]})}function q(e={}){const{wrapper:n}={...A(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(I,{...e})}):I(e)}function re(){const e=D.c(2),n=C();let i;return e[0]!==n?(i=t.jsx("div",{className:"px-4 pb-4",children:t.jsx(E,{children:n==="zh"?t.jsx($,{}):t.jsx(q,{})})}),e[0]=n,e[1]=i):i=e[1],i}export{re as default};
