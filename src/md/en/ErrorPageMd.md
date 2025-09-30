# ErrorPage

The error page can only be reproduced locally. You can annotate the following line 12 code:

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
