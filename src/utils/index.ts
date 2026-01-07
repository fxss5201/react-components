/**
 * @description 判断当前环境是否为浏览器环境。|| Check if the current environment is a browser environment.
 * @returns {boolean} true=浏览器环境，false=非浏览器环境。|| true=Browser environment, false=Non-browser environment.
 */
export function isBrowser(): boolean {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement)
}

/**
 * @description 判断资源URL是否相对于当前页面跨域。|| Check if the resource URL is cross-origin relative to the current page.
 * @param {string} url URL（支持绝对路径、相对路径）。|| The URL (supports absolute path and relative path).
 * @returns {boolean} true=跨域，false=同源。|| true=Cross-origin, false=Same-origin.
 */
export function isCrossOrigin(url: string): boolean {
  // 创建a标签，利用浏览器原生解析URL（处理相对路径/绝对路径）
  const link = document.createElement('a')
  link.href = url // 浏览器会自动将相对路径转为绝对路径
  
  const currentOrigin = {
    protocol: window.location.protocol,
    host: window.location.hostname,
    port: window.location.port || (window.location.protocol === 'https:' ? '443' : '80')
  }

  const urlOrigin = {
    protocol: link.protocol,
    host: link.hostname,
    port: link.port || (link.protocol === 'https:' ? '443' : '80')
  };

  // 对比三者：协议、域名、端口，任一不同则跨域
  const isSameProtocol = currentOrigin.protocol === urlOrigin.protocol
  const isSameHost = currentOrigin.host === urlOrigin.host
  const isSamePort = currentOrigin.port === urlOrigin.port

  // 返回是否跨域（不同源即为跨域）
  return !(isSameProtocol && isSameHost && isSamePort)
}

/**
 * @description 下载Blob对象为文件。|| Download the Blob object as a file.
 * @param {Blob} blob Blob对象。|| The Blob object.
 * @param {string} fileName 文件名（默认：'download'）。|| The file name (default: 'download').
 */
export function aDownloadBlob(blob: Blob | MediaSource, fileName: string = 'download'): void {
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = fileName
  a.click()
  URL.revokeObjectURL(a.href)
}

/**
 * @description 根据输入的字节大小转换为可读的文件大小（需要从TB、GB、MB、KB转换，保留2位小数）。|| Convert the input byte size to a readable file size.
 * @param {number} byteSize 字节大小。|| The byte size.
 * @returns {string} 可读的文件大小。|| The readable file size.
 */
export function convertByteToReadableSize(byteSize: number): string {
  if (byteSize < 1024) {
    return `${byteSize.toFixed(2)} B`
  }
  const kbSize = byteSize / 1024
  if (kbSize < 1024) {
    return `${kbSize.toFixed(2)} KB`
  }
  const mbSize = kbSize / 1024
  if (mbSize < 1024) {
    return `${mbSize.toFixed(2)} MB`
  }
  const gbSize = mbSize / 1024
  if (gbSize < 1024) {
    return `${gbSize.toFixed(2)} GB`
  }
  const tbSize = gbSize / 1024
  return `${tbSize.toFixed(2)} TB`
}

/**
 * 兼容型提取Blob文本内容（优先Blob.text()，降级FileReader）
 * @param {Blob} blob - 待提取文本的Blob对象
 * @param {string} [encoding='UTF-8'] - 文本编码（如UTF-8、GBK、GB2312等）
 * @returns {Promise<string>} 提取的文本内容（Promise形式）
 */
export async function getTextFromBlob(blob: Blob, encoding = 'UTF-8'): Promise<string> {
  try {
    if ('text' in Blob.prototype) {
      if (encoding.toUpperCase() === 'UTF-8') {
        return await blob.text()
      } else {
        const arrayBuffer = await blob.arrayBuffer()
        const decoder = new TextDecoder(encoding)
        return decoder.decode(arrayBuffer)
      }
    } else {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = function (e) {
          resolve(e.target?.result as string)
        }
        reader.onerror = function (error) {
          reject(new Error(`FileReader读取失败：${error}`))
        }
        reader.readAsText(blob, encoding)
      })
    }
  } catch (error: any) {
    throw new Error(error.message)
  }
}