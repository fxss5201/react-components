export function isBrowser(): boolean {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement)
}

/**
 * 判断资源URL是否相对于当前页面跨域
 * @param {string} url URL（支持绝对路径、相对路径）
 * @returns {boolean} true=跨域，false=同源
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

