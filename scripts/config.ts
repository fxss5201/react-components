import { type ScriptsConfig } from './type'

export const config: ScriptsConfig = {
  /*
   * 执行 localesExport 或 localesImport 时的配置
   * localesImport 执行的时候，取的 source 和 output 取反
   */
  locales: {
    // 源文件目录
    source: './src/locales',
    // 输出目录
    output: './dist',
    // 输出格式
    format: 'excel',
    // 是否导出所有语言
    all: true,
    // 合并相同文件名，仅在 format 为 excel 时有效
    merge: true,
    // 是否使用配置文件
    config: false,
  },
}
