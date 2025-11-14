import{r as w,c as E,u as P,j as e,a6 as L,a7 as N}from"./index-CIGk9ZnJ.js";import{P as R}from"./Playground-BNwi_gF4.js";import{C as T}from"./CodeEditor-DvkJBADL.js";import{S as y}from"./index-Cr7gtoGR.js";var D=function(n){return function(o,t){var a=w.useRef(!1);n(function(){return function(){a.current=!1}},[]),n(function(){if(!a.current)a.current=!0;else return o()},t)}};const I=D(w.useEffect),C=`# 这是一个 Markdown 页面

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
`,v=`# This is a Markdown Page

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
`;function O(){const n=E.c(28),o=P(),[t,a]=w.useState(o==="en"?v:C);let r,d;n[0]!==o?(r=()=>{a(o==="en"?v:C)},d=[o,C,v],n[0]=o,n[1]=r,n[2]=d):(r=n[1],d=n[2]),I(r,d);const[s,j]=w.useState(!0),b=o==="en"?"Markdown Editor":"Markdown 编辑";let l;n[3]!==b?(l=e.jsx("div",{className:"text-lg font-bold",children:b}),n[3]=b,n[4]=l):l=n[4];let g;n[5]===Symbol.for("react.memo_cache_sentinel")?(g=S=>j(S.target.checked),n[5]=g):g=n[5];const h=o==="en"?"Enable Copy":"启用复制";let c;n[6]!==s||n[7]!==h?(c=e.jsx(L,{checked:s,onChange:g,children:h}),n[6]=s,n[7]=h,n[8]=c):c=n[8];let i;n[9]!==l||n[10]!==c?(i=e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[l,c]}),n[9]=l,n[10]=c,n[11]=i):i=n[11];let m;n[12]!==t?(m=e.jsx(T,{value:t,onChange:a,className:"border border-gray-300 dark:border-gray-700"}),n[12]=t,n[13]=m):m=n[13];let p;n[14]!==i||n[15]!==m?(p=e.jsx(y.Panel,{collapsible:!0,children:e.jsxs("div",{className:"p-4",children:[i,m]})}),n[14]=i,n[15]=m,n[16]=p):p=n[16];const x=o==="en"?"Markdown Preview (Content Inside Border)":"Markdown 预览（边框内的内容）";let f;n[17]!==x?(f=e.jsx("div",{className:"text-lg font-bold mb-3",children:x}),n[17]=x,n[18]=f):f=n[18];let u;n[19]!==s||n[20]!==t?(u=e.jsx("div",{className:"border border-gray-300 dark:border-gray-700 rounded p-4",children:e.jsx(N,{enableCopy:s,children:t})}),n[19]=s,n[20]=t,n[21]=u):u=n[21];let k;n[22]!==f||n[23]!==u?(k=e.jsx(y.Panel,{collapsible:!0,children:e.jsxs("div",{className:"p-4",children:[f,u]})}),n[22]=f,n[23]=u,n[24]=k):k=n[24];let M;return n[25]!==k||n[26]!==p?(M=e.jsxs(y,{className:"h-[50vh]",children:[p,k]}),n[25]=k,n[26]=p,n[27]=M):M=n[27],M}const U=`import { useState } from 'react'
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
`;function $(){const n=E.c(4),o=P(),t=o==="zh"?"Markdown 演示示例":"Markdown Demo",a=o==="zh"?"Markdown 组件的演示示例，展示了如何使用 Markdown 组件渲染 Markdown 内容。":"Demo of Markdown component, showing how to use Markdown component to render Markdown content.";let r;n[0]===Symbol.for("react.memo_cache_sentinel")?(r=e.jsx(O,{}),n[0]=r):r=n[0];let d;return n[1]!==t||n[2]!==a?(d=e.jsx("div",{className:"px-4 pb-4",children:e.jsx(R,{code:U,title:t,description:a,children:r})}),n[1]=t,n[2]=a,n[3]=d):d=n[3],d}export{$ as default};
