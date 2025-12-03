import { resolve } from 'path'
import { readFile, access, constants } from 'fs/promises'
import { outputFile } from 'fs-extra'
import { localeList } from '../src/config'
import { transformFlatObject } from './utils'
import xlsx from 'node-xlsx'
import { consola } from 'consola'
import chalk from 'chalk'
import { Command } from 'commander'
import { type ScriptsConfig } from './type'
import { config } from './config'

// 注意：config.locales.config 为 true 或 命令行 --config 为 true 时，使用配置文件

/**
 * 导入本地语言文件
 * npm run localesImport -- <参数>
 * 或
 * npx tsx scripts/localesImport.ts -- <参数>
 * 
 * -c, --config Use config file | 使用配置文件，默认 false
 * -s, --source <path> Language file directory | 语言文件目录，默认 ./dist
 * -o, --output <path> Output file path | 输出文件路径，默认 ./src/locales
 * -f, --format <type> Import format, optional values: excel, json, md | 导入格式，可选值：excel, json, md，默认 excel
 * -a, --all Import all language files, including system.json | 导入所有语言文件，包含 system.json，默认 false
 * -v, --version Output the current version number | 输出当前版本号
 * -h, --help Show help | 显示帮助
 * 
 * 注意：
 * 1. 需要保证 Unique key name/唯一键名 唯一性，否则后面的会覆盖前面的
 */

type LocaleContentRow = {
  file: string
  key: string
  name: string
  [key: string]: string
}

const program = new Command()
  .name('localesImport')
  .description('Import local language file | 导入本地语言文件')
  .version('0.0.1', '-v, --version', 'Output the current version number | 输出当前版本号')

program
  .option('-c, --config', 'Use config file | 使用配置文件', false)
  .option('-s, --source <path>', 'Language file directory | 语言文件目录', './dist')
  .option('-o, --output <path>', 'Output file path | 输出文件路径', './src/locales')
  .option('-f, --format <type>', 'Import format, optional values: excel, json, md | 导入格式，可选值：excel, json, md', 'excel')
  .option('-a, --all', 'Import all language files, including system.json | 导入所有语言文件，包含 system.json', false)

program.action(async (args: ScriptsConfig['locales']) => {
  const useConfig = config.locales.config || args.config
  let options = {
    ...args,
    config: useConfig
  }
  if (useConfig) {
    options = {
      ...config.locales,
      source: config.locales.output,
      output: config.locales.source,
      config: useConfig
    }
  }
  console.log(options)
  const sourceDir = resolve(resolve(), options.source)
  const outputPath = resolve(options.output)
  let importFormat = options.format
  if (!['excel', 'json', 'md'].includes(importFormat)) {
    importFormat = 'excel'
  }
  await localesImport(sourceDir, outputPath, importFormat, options.all)
})

program.parse(process.argv)

async function localesImport(sourceDir: string, outputPath: string, format: string, isAll: boolean = false) {
  const localesContent: LocaleContentRow[] = []
  try {
    const importFilePath = resolve(sourceDir, `locales.${format === 'excel' ? 'xlsx' : format}`)
    await access(importFilePath, constants.F_OK)
    if (format === 'excel') {
      const fileContent = xlsx.parse(importFilePath)
      const sheet = fileContent[0]
      const data = sheet.data
      for (let idx = 0; idx < data.length; idx++) {
        const row = data[idx]
        if (idx === 0) {
          continue
        }
        const localeObj: {
          [key: string]: string
        } = {}
        localeList.forEach((x, i) => (localeObj[x] = row[i + 3] as string))
        const fileName = row[0] ? row[0] : data[idx - 1][0]
        localesContent.push({
          file: fileName,
          key: row[1],
          name: row[2],
          ...localeObj
        })
      }
      // console.log(localesContent)
    } else if (format === 'json') {
      const jsonContent = await readFile(importFilePath, 'utf-8')
      localesContent.push(...JSON.parse(jsonContent))
      // console.log(localesContent)
    } else if (format === 'md') {
      const mdContent = await readFile(importFilePath, 'utf-8')
      const mdLines = mdContent.split('\n').filter((line) => line.trim() !== '' && line.trim().startsWith('|'))
      mdLines.slice(2).forEach((line) => {
        const columns = line.split('|').map((x) => x.trim()).filter((x) => x !== '')
        const localeObj: {
          [key: string]: string
        } = {}
        localeList.forEach((x, i) => (localeObj[x] = columns[i + 3]))
        localesContent.push({
          file: columns[0],
          key: columns[1],
          name: columns[2],
          ...localeObj
        })
      })
      // console.log(localesContent)
    }
    
    type FileContent = {
      [key: string]: string
    }
    const fileObjs: {
      [key: string]: {
        [key: string]: FileContent
      }
    } = {}
    localeList.forEach((locale) => {
      if (!fileObjs[locale]) {
        fileObjs[locale] = {}
      }
      localesContent.forEach((item) => {
        const { file, key } = item
        if (!fileObjs[locale][file]) {
          fileObjs[locale][file] = {}
        }
        const fileName = file.split('.')[0]
        fileObjs[locale][file][file === 'default.json' ? key : key.replace(`${fileName}.`, '') ] = item[locale]
      })
    })
    for (const locale of localeList) {
      for (const file of Object.keys(fileObjs[locale])) {
        if (!isAll && file === 'system.json') {
          continue
        }
        const fileContent = fileObjs[locale][file]
        const nestedContent = transformFlatObject(fileContent)
        const outputFilePath = resolve(outputPath, locale, file)
        await outputFile(outputFilePath, JSON.stringify(nestedContent, null, 2))
        consola.success(chalk.green(`Import success`) + ', path: ' + chalk.blue(outputFilePath))
      }
    }
  } catch (err) {
    consola.error(err)
    return
  }
}
