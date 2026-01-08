import{b as v,j as e}from"./@uiw/react-codemirror-dimZJgSu.js";import{c as E,u as P,C as L,M as N}from"./index-CwDalt6B.js";import{P as T}from"./Playground-XZt4ylVh.js";import{u as R}from"./index-D6hL_xQQ.js";import{C as D}from"./CodeEditor-DCLYA5gR.js";import{S as x}from"./index-Bnl3auCu.js";import"./react-syntax-highlighter-DW6ulm9l.js";import"./markdown-plugins-CqPL4kxN.js";import"./react-markdown-U0gPFawi.js";const y=`# 这是一个 Markdown 页面

## 目录

## 列表项

### 有序列表

1. 列表1
2. 列表2
3. 列表3

### 无序列表

- 列表1
- 列表2
- 列表3

### 任务列表

- [ ] 任务1
- [x] 任务2
- [ ] 任务3

## 表格

| 姓名 | 年龄 | 性别 |
| ---- | ---- | ---- |
| 张三 | 18   | 男   |
| 李四 | 20   | 女   |
| 王五 | 22   | 男   |

## 链接

### 外部链接

[百度](https://www.baidu.com)

### 内部链接

\`\`\`md
[Markdown](md-page)

[Markdown](/md-page)

[Markdown](/react-components/md-page)

[Markdown](react-components/md-page)

[多文件上传](file-upload/files-upload)

[复制到剪贴板](/copy-to-clipboard-page)

[复制到剪贴板](/react-components/copy-to-clipboard-page)
\`\`\`

[Markdown](md-page)

[Markdown](/md-page)

[Markdown](/react-components/md-page)

[Markdown](react-components/md-page)

[多文件上传](file-upload/files-upload)

[复制到剪贴板](/copy-to-clipboard-page)

[复制到剪贴板](/react-components/copy-to-clipboard-page)

## 代码段

### 行内代码

行内代码：\`<hello>\` \`world\`

### 多行代码

\`\`\`js
for (let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i)
  }, i * 1000)
}
\`\`\`

\`\`\`tsx
import { useState, useRef, useCallback, useEffect } from 'react'
import copy from 'copy-to-clipboard'
import { Button, Tooltip } from 'antd'
import { CopyOutlined, CheckOutlined } from '@ant-design/icons'
\`\`\`
`,C=`# This is a Markdown Page

## TOC

## List Item

### Ordered List

1. List 1
2. List 2
3. List 3

### Unordered List

- List 1
- List 2
- List 3

### Task List

- [ ] Task 1
- [x] Task 2
- [ ] Task 3

## Table

| Name | Age | Gender |
| ---- | ---- | ---- |
| Zhang San | 18   | Male |
| Li Si | 20   | Female |
| Wang Wu | 22   | Male |

## Links

### External Links

[百度](https://www.baidu.com)

### Internal Link

\`\`\`md
[Markdown](md-page)

[Markdown](/md-page)

[Markdown](/react-components/md-page)

[Markdown](react-components/md-page)

[多文件上传](file-upload/files-upload)

[复制到剪贴板](/copy-to-clipboard-page)

[复制到剪贴板](/react-components/copy-to-clipboard-page)
\`\`\`

[Markdown](md-page)

[Markdown](/md-page)

[Markdown](/react-components/md-page)

[Markdown](react-components/md-page)

[多文件上传](file-upload/files-upload)

[复制到剪贴板](/copy-to-clipboard-page)

[复制到剪贴板](/react-components/copy-to-clipboard-page)

## Code Snippets

### Inline code

In-line code: \`<hello>\` \`world\`

### Multi-line code

\`\`\`js
for (let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i)
  }, i * 1000)
}
\`\`\`

\`\`\`tsx
import { useState, useRef, useCallback, useEffect } from 'react'
import copy from 'copy-to-clipboard'
import { Button, Tooltip } from 'antd'
import { CopyOutlined, CheckOutlined } from '@ant-design/icons'
\`\`\`
`;function I(){const n=E.c(28),o=P(),[t,d]=v.useState(o==="en"?C:y);let a,r;n[0]!==o?(a=()=>{d(o==="en"?C:y)},r=[o,y,C],n[0]=o,n[1]=a,n[2]=r):(a=n[1],r=n[2]),R(a,r);const[l,j]=v.useState(!0),b=o==="en"?"Markdown Editor":"Markdown 编辑";let s;n[3]!==b?(s=e.jsx("div",{className:"text-lg font-bold",children:b}),n[3]=b,n[4]=s):s=n[4];let g;n[5]===Symbol.for("react.memo_cache_sentinel")?(g=S=>j(S.target.checked),n[5]=g):g=n[5];const w=o==="en"?"Enable Copy":"启用复制";let i;n[6]!==l||n[7]!==w?(i=e.jsx(L,{checked:l,onChange:g,children:w}),n[6]=l,n[7]=w,n[8]=i):i=n[8];let c;n[9]!==s||n[10]!==i?(c=e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s,i]}),n[9]=s,n[10]=i,n[11]=c):c=n[11];let m;n[12]!==t?(m=e.jsx(D,{value:t,onChange:d,className:"border border-gray-300 dark:border-gray-700"}),n[12]=t,n[13]=m):m=n[13];let p;n[14]!==c||n[15]!==m?(p=e.jsx(x.Panel,{collapsible:!0,children:e.jsxs("div",{className:"p-4",children:[c,m]})}),n[14]=c,n[15]=m,n[16]=p):p=n[16];const h=o==="en"?"Markdown Preview (Content Inside Border)":"Markdown 预览（边框内的内容）";let f;n[17]!==h?(f=e.jsx("div",{className:"text-lg font-bold mb-3",children:h}),n[17]=h,n[18]=f):f=n[18];let k;n[19]!==l||n[20]!==t?(k=e.jsx("div",{className:"border border-gray-300 dark:border-gray-700 rounded p-4",children:e.jsx(N,{enableCopy:l,children:t})}),n[19]=l,n[20]=t,n[21]=k):k=n[21];let u;n[22]!==f||n[23]!==k?(u=e.jsx(x.Panel,{collapsible:!0,children:e.jsxs("div",{className:"p-4",children:[f,k]})}),n[22]=f,n[23]=k,n[24]=u):u=n[24];let M;return n[25]!==u||n[26]!==p?(M=e.jsxs(x,{className:"h-[50vh]",children:[p,u]}),n[25]=u,n[26]=p,n[27]=M):M=n[27],M}const O=`import { useState } from 'react'
import { Splitter, Checkbox } from 'antd'
import MdRender from '@/components/MdRender'
import mdPageMd from '@/md/mdPageMd.md?raw'
import mdPageMdEn from '@/md/en/mdPageMd.md?raw'
import { useLocale } from '@/Hooks/useLocale'
import { useUpdateEffect } from 'ahooks'
import CodeEditor from '@/components/CodeEditor'

function MdDemo() {
  const locale = useLocale()
  const [markdown, setMarkdown] = useState(locale === 'en' ? mdPageMdEn : mdPageMd)
  useUpdateEffect(() => {
    setMarkdown(locale === 'en' ? mdPageMdEn : mdPageMd)
  }, [locale, mdPageMd, mdPageMdEn])
  const [enableCopy, setEnableCopy] = useState(true)

  return (
    <Splitter className='h-[50vh]'>
      <Splitter.Panel collapsible>
        <div className='p-4'>
          <div className='flex items-center justify-between mb-3'>
            <div className='text-lg font-bold'>{ locale === 'en' ? 'Markdown Editor' : 'Markdown 编辑'}</div>
            <Checkbox checked={enableCopy} onChange={(e) => setEnableCopy(e.target.checked)}>{ locale === 'en' ? 'Enable Copy' : '启用复制'}</Checkbox>
          </div>
          <CodeEditor value={markdown} onChange={setMarkdown} className='border border-gray-300 dark:border-gray-700' />
        </div>
      </Splitter.Panel>
      <Splitter.Panel collapsible>
        <div className='p-4'>
          <div className='text-lg font-bold mb-3'>{ locale === 'en' ? 'Markdown Preview (Content Inside Border)' : 'Markdown 预览（边框内的内容）'}</div>
          <div className='border border-gray-300 dark:border-gray-700 rounded p-4'>
            <MdRender enableCopy={enableCopy}>{markdown}</MdRender>
          </div>
        </div>
      </Splitter.Panel>
    </Splitter>
  )
}

export default MdDemo
`;function H(){const n=E.c(4),o=P(),t=o==="zh"?"Markdown 演示示例":"Markdown Demo",d=o==="zh"?"Markdown 组件的演示示例，展示了如何使用 Markdown 组件渲染 Markdown 内容。":"Demo of Markdown component, showing how to use Markdown component to render Markdown content.";let a;n[0]===Symbol.for("react.memo_cache_sentinel")?(a=e.jsx(I,{}),n[0]=a):a=n[0];let r;return n[1]!==t||n[2]!==d?(r=e.jsx("div",{className:"px-4 pb-4",children:e.jsx(T,{code:O,title:t,description:d,children:a})}),n[1]=t,n[2]=d,n[3]=r):r=n[3],r}export{H as default};
