import{a9 as m,ac as C,r as u,aa as e,ad as x,aI as b}from"./index-cjC2bwRP.js";import{I as v}from"./index-QDsUESVP.js";import"./index-DPiOXi4Y.js";import"./useVariants-D0tdvtoC.js";import"./EyeOutlined-DUF69Oev.js";const f=`# 复制到剪贴板

复制到剪贴板 用于将文本、代码或其他内容复制到剪贴板，以便在其他应用程序或文档中使用。

\`\`\`tsx
import { useState } from 'react'
import { Input } from 'antd'
import CopyToClipboard from '../components/CopyToClipboard'

const { TextArea } = Input

function CopyToClipboardPage() {
  const [content, setContent] = useState('')
  
  return (
    <div className='relative'>
      <div className='absolute top-0 right-0 z-10'>
        <CopyToClipboard text={content} />
      </div>
      <TextArea rows={10} value={content} onChange={e => setContent(e.target.value)} />
    </div>
  )
}
\`\`\`
`,y=`# Copy to Clipboard

Copy to clipboard is used to copy text, code, or other content to the clipboard for use in other applications or documents.

\`\`\`tsx
import { useState } from 'react'
import { Input } from 'antd'
import CopyToClipboard from '../components/CopyToClipboard'

const { TextArea } = Input

function CopyToClipboardPage() {
  const [content, setContent] = useState('')
  
  return (
    <div className='relative'>
      <div className='absolute top-0 right-0 z-10'>
        <CopyToClipboard text={content} />
      </div>
      <TextArea rows={10} value={content} onChange={e => setContent(e.target.value)} />
    </div>
  )
}
\`\`\`
`,{TextArea:T}=v;function A(){const t=m.c(13),p=C()==="en"?y:f,[o,c]=u.useState("Copy to Clipboard");let n;t[0]!==p?(n=e.jsx(x,{md:p}),t[0]=p,t[1]=n):n=t[1];let a;t[2]!==o?(a=e.jsx("div",{className:"absolute top-0 right-0 z-10",children:e.jsx(b,{text:o})}),t[2]=o,t[3]=a):a=t[3];let i;t[4]===Symbol.for("react.memo_cache_sentinel")?(i=d=>c(d.target.value),t[4]=i):i=t[4];let s;t[5]!==o?(s=e.jsx(T,{rows:10,value:o,onChange:i}),t[5]=o,t[6]=s):s=t[6];let r;t[7]!==a||t[8]!==s?(r=e.jsx("div",{className:"mt-4",children:e.jsxs("div",{className:"relative",children:[a,s]})}),t[7]=a,t[8]=s,t[9]=r):r=t[9];let l;return t[10]!==n||t[11]!==r?(l=e.jsxs("div",{className:"px-4 pb-4 markdown-body",children:[n,r]}),t[10]=n,t[11]=r,t[12]=l):l=t[12],l}export{A as default};
