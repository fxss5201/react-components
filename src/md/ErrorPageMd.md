# ErrorPage

错误页面只能在本地复现，可以将下面 第12行 代码解注：

```tsx
import MdRender from '../components/MdRender'
import { useLocale } from '../Hooks/useLocale'
import errorPageMd from '../md/ErrorPageMd.md?raw'
import errorPageMdEn from '../md/en/ErrorPageMd.md?raw'

function ErrorPage() {
  const locale = useLocale()
  
  return (
    <div className="px-4 pt-2">
      <MdRender md={locale === 'en' ? errorPageMdEn : errorPageMd} />
      {/* <div>{aaa}</div> */}
    </div>
  )
}

export default ErrorPage
```
