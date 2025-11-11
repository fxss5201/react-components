export type AlgorithmType = 'SHA-1' | 'SHA-256' | 'SHA-384' | 'SHA-512'

export async function calculateFileHashHex(file: File, algorithm: AlgorithmType = 'SHA-256'): Promise<string> {
  const arrayBuffer = await file.arrayBuffer()
  const hashBuffer = await window.crypto.subtle.digest(algorithm, arrayBuffer)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
  return hashHex
}
