import { resolve, extname } from 'path'
import { readdir, readFile, access, constants } from 'fs/promises'
import { outputFile } from 'fs-extra'
import { localeList } from '../src/config'
import { flattenObject } from './utils'
import xlsx, { type WorkSheet } from 'node-xlsx'
import { consola } from 'consola'
import chalk from 'chalk'
import { Command } from 'commander'
import { type ScriptsConfig } from './type'
import { config } from './config'

// 注意：config.locales.config 为 true 或 命令行 --config 为 true 时，使用配置文件

/**
 * 导出本地语言文件
 * npm run localesExport -- <参数>
 * 或
 * npx tsx scripts/localesExport.ts -- <参数>
 * 
 * -c, --config Use config file | 使用配置文件，默认 false
 * -s, --source <path> Language file directory | 语言文件目录，默认 ./src/locales
 * -o, --output <path> Output file path | 输出文件路径，默认 ./dist
 * -f, --format <type> Output format, optional values: excel, json, md | 输出格式，可选值：excel, json, md，默认 excel
 * -a, --all Export all language files, including system.json | 导出所有语言文件，包含 system.json，默认 false
 * -m, --merge Merge same file name, only effective when format is excel | 合并相同文件名，仅在 format 为 excel 时有效，默认 false
 * -v, --version Output the current version number | 输出当前版本号
 * -h, --help Show help | 显示帮助
 * 
 * 注意：
 * 1. 语言文件 JSON 的 key 不能包含点号（.）
 * 2. default.json 比较特殊，使用的时候，t(key) 中的 key 为 JSON 中的 key，其他语言文件使用的时候，t(key) 中的 key 为 `${fileName}.${JSON 中的 key}`，相当于每个语言文件作为一个命名空间，减少命名冲突
 * 3. 需要保证 key 的唯一性
 */

type LocaleContentRow = {
  file: string
  key: string
  name: string
  [key: string]: string
}

const program = new Command()
  .name('localesExport')
  .description('Export local language file | 导出本地语言文件')
  .version('0.0.1', '-v, --version', 'Output the current version number | 输出当前版本号')

program
  .option('-c, --config', 'Use config file | 使用配置文件', false)
  .option('-s, --source <path>', 'Language file directory | 语言文件目录', './src/locales')
  .option('-o, --output <path>', 'Output file path | 输出文件路径', './dist')
  .option('-f, --format <type>', 'Output format, optional values: excel, json, md | 输出格式，可选值：excel, json, md', 'excel')
  .option('-a, --all', 'Export all language files, including system.json | 导出所有语言文件，包含 system.json', false)
  .option('-m, --merge', 'Merge same file name, only effective when format is excel | 合并相同文件名，仅在 format 为 excel 时有效', false)

program.action(async (args: ScriptsConfig['locales']) => {
  const useConfig = config.locales.config || args.config
  let options = {
    ...args,
    config: useConfig
  }
  if (useConfig) {
    options = {
      ...config.locales,
      config: useConfig
    }
  }
  console.log(options)
  const sourceDir = resolve(resolve(), options.source)
  const outputPath = resolve(options.output)
  let outputFormat = options.format
  if (!['excel', 'json', 'md'].includes(outputFormat)) {
    outputFormat = 'excel'
  }
  await localesExport(sourceDir, outputPath, outputFormat, options.all, options.merge)
})

program.parse(process.argv)

async function localesExport(sourceDir: string, outputPath: string, format: string, isAll: boolean = false, isMerge: boolean = false) {
  const localesContent: LocaleContentRow[] = []
  try {
    await access(sourceDir, constants.F_OK)
    const localeListDir = localeList.map((locale) => {
      return {
        locale,
        dir: resolve(sourceDir, locale)
      }
    })
    for (const { locale, dir: localeDir } of localeListDir) {
      const files = await readdir(localeDir)
      const jsonFiles = files.filter((file) => extname(file) === '.json')
      let filesList = jsonFiles
      if (!isAll) {
        filesList = filesList.filter((file) => file !== 'system.json')
      }
      for (const file of filesList) {
        const filePath = resolve(localeDir, file)
        const content = await readFile(filePath, 'utf-8')
        const jsonContent = JSON.parse(content)
        const flattenJsonContent = flattenObject(jsonContent)
        for (const key in flattenJsonContent) {
          const fullKey = file === 'default.json' ? key : `${file.split('.')[0]}.${key}`
          const curLocaleContentRowIndex = localesContent.findIndex((item) => item.key === fullKey)
          if (curLocaleContentRowIndex !== -1) {
            localesContent[curLocaleContentRowIndex][locale] = flattenJsonContent[key]
          } else {
            const pathList = key.split('.')
            localesContent.push({
              file,
              key: fullKey,
              name: pathList[pathList.length - 1],
              [locale]: flattenJsonContent[key]
            })
          }
        }
      }
    }
    if (format === 'excel') {
      const headers = ['file Name/文件名', 'Unique key name/唯一键名', 'name/名称', ...localeList]
      const mergesRange = []
      let startIndex = 1
      if (isMerge) {
        for (let idx = 1; idx < localesContent.length; idx++) {
          if (localesContent[idx].file !== localesContent[idx - 1].file) {
            mergesRange.push({s: {c: 0, r: startIndex}, e: {c: 0, r: idx}})
            startIndex = idx + 1
          } else if (idx === localesContent.length - 1) {
            mergesRange.push({s: {c: 0, r: startIndex}, e: {c: 0, r: idx + 1}})
          }
        }
      }
      const data = localesContent.map((item) => [item.file, item.key, item.name, ...localeList.map((locale) => item[locale])])
      const buffer = xlsx.build([{
        name: 'locales',
        data: [headers, ...data]
      } as WorkSheet<string>], {
        sheetOptions: {
          '!cols': [{wch: 20}, {wch: 30}, {wch: 40}, ...localeList.map(() => ({wch: 40}))],
          ...(isMerge ? {
            '!merges': mergesRange
          } : {}),
        }
      })
      const outputPathAll = resolve(outputPath, 'locales.xlsx')
      await outputFile(outputPathAll, buffer)
      consola.success(chalk.green('locales.xlsx') + ' created, path: ' + chalk.blue(outputPathAll))
    } else if (format === 'json') {
      const outputPathAll = resolve(outputPath, 'locales.json')
      await outputFile(outputPathAll, JSON.stringify(localesContent, null, 2))
      consola.success(chalk.green('locales.json') + ' created, path: ' + chalk.blue(outputPathAll))
    } else if (format === 'md') {
      const outputPathAll = resolve(outputPath, 'locales.md')
      const headers = ['file Name/文件名', 'Unique key name/唯一键名', 'name/名称', ...localeList]
      const data = localesContent.map((item) => [item.file, item.key, item.name, ...localeList.map((locale) => item[locale])])
      const mdContent = [
        `# locales`,
        ``,
        `| ${headers.join(' | ')} |`,
        `| --- | --- | --- |${localeList.map(() => ' --- |').join('')}`,
        ...data.map((item) => `| ${item.join(' | ')} |`),
        ``,
      ].join('\n')
      await outputFile(outputPathAll, mdContent)
      consola.success(chalk.green('locales.md') + ' created, path: ' + chalk.blue(outputPathAll))
    }
  } catch (err) {
    consola.error(err)
    return
  }
}
