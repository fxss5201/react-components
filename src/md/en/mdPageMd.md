# This is a Markdown Page

## List Item

1. List 1
2. List 2
3. List 3

- List 1
- List 2
- List 3

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

```md
[Markdown](md-page)

[Markdown](/md-page)

[Markdown](/react-components/md-page)

[Markdown](react-components/md-page)

[多文件上传](files-upload)

[复制到剪贴板](/copy-to-clipboard-page)

[复制到剪贴板](/react-components/copy-to-clipboard-page)
```

[Markdown](md-page)

[Markdown](/md-page)

[Markdown](/react-components/md-page)

[Markdown](react-components/md-page)

[多文件上传](files-upload)

[复制到剪贴板](/copy-to-clipboard-page)

[复制到剪贴板](/react-components/copy-to-clipboard-page)

## Code Snippets

### Inline code

In-line code: `<hello>` `world`

### Multi-line code

```js
for (var i = 1; i <= 5; i++) {
  (function(j) {
    setTimeout(function timer() {
      console.log(j);
    }, j * 1000);
  })(i);
}
```

```tsx
import { useState, useRef, useCallback, useEffect } from 'react'
import copy from 'copy-to-clipboard'
import { Button, Tooltip } from 'antd'
import { CopyOutlined, CheckOutlined } from '@ant-design/icons'
```
