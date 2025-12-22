export type AlgorithmType = 'SHA-1' | 'SHA-256' | 'SHA-384' | 'SHA-512'

/**
 * @description 计算文件的哈希值（16进制字符串）。|| Calculate the hash value of the file (hexadecimal string).
 * @param file 文件对象。|| The file object.
 * @param algorithm 哈希算法，默认 SHA-256，可选值：SHA-1, SHA-256, SHA-384, SHA-512。|| The hash algorithm, default is SHA-256, optional values are SHA-1, SHA-256, SHA-384, SHA-512.
 * @returns 哈希值（16进制字符串）。|| The hash value (hexadecimal string).
 */
export async function calculateFileHashHex(file: File, algorithm: AlgorithmType = 'SHA-256'): Promise<string> {
  const arrayBuffer = await file.arrayBuffer()
  const hashBuffer = await window.crypto.subtle.digest(algorithm, arrayBuffer)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
  return hashHex
}
