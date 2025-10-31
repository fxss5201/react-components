import{c as a,u as d,j as o,W as t}from"./index-BFMmcQtt.js";const c=`# ErrorPage

错误页面只能在本地复现，可以将下面 第12行 代码解注：

\`\`\`tsx
import MdRender from '../components/MdRender'
import { useLocale } from '../Hooks/useLocale'
import errorPageMd from '../md/ErrorPageMd.md?raw'
import errorPageMdEn from '../md/en/ErrorPageMd.md?raw'

function ErrorPage() {
  const locale = useLocale()
  
  return (
    <div className="px-4 pt-2">
      <MdRender>{locale === 'en' ? errorPageMdEn : errorPageMd}</MdRender>
      {/* <div>{aaa}</div> */}
    </div>
  )
}

export default ErrorPage
\`\`\`
`,l=`# ErrorPage

The error page can only be reproduced locally. You can annotate the following line 12 code:

\`\`\`tsx
import MdRender from '../components/MdRender'
import { useLocale } from '../Hooks/useLocale'
import errorPageMd from '../md/ErrorPageMd.md?raw'
import errorPageMdEn from '../md/en/ErrorPageMd.md?raw'

function ErrorPage() {
  const locale = useLocale()
  
  return (
    <div className="px-4 pt-2">
      <MdRender>{locale === 'en' ? errorPageMdEn : errorPageMd}</MdRender>
      {/* <div>{aaa}</div> */}
    </div>
  )
}

export default ErrorPage
\`\`\`
`;function i(){const r=a.c(2),n=d()==="en"?l:c;let e;return r[0]!==n?(e=o.jsx("div",{className:"px-4 pb-4",children:o.jsx(t,{children:n})}),r[0]=n,r[1]=e):e=r[1],e}export{i as default};
