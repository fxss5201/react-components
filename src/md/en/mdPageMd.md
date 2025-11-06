# This is a Markdown Page

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

```md
[Markdown](md-page)

[Markdown](/md-page)

[Markdown](/react-components/md-page)

[Markdown](react-components/md-page)

[多文件上传](file-upload/files-upload)

[复制到剪贴板](/copy-to-clipboard-page)

[复制到剪贴板](/react-components/copy-to-clipboard-page)
```

[Markdown](md-page)

[Markdown](/md-page)

[Markdown](/react-components/md-page)

[Markdown](react-components/md-page)

[多文件上传](file-upload/files-upload)

[复制到剪贴板](/copy-to-clipboard-page)

[复制到剪贴板](/react-components/copy-to-clipboard-page)

## Code Snippets

### Inline code

In-line code: `<hello>` `world`

### Multi-line code

```js
for (let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i)
  }, i * 1000)
}
```

```tsx
import { useState, useRef, useCallback, useEffect } from 'react'
import copy from 'copy-to-clipboard'
import { Button, Tooltip } from 'antd'
import { CopyOutlined, CheckOutlined } from '@ant-design/icons'
```
