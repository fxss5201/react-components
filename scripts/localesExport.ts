import { resolve, extname } from 'path'
import { readdir, readFile, access, constants } from 'fs/promises'
import { outputFile } from 'fs-extra'
import { localeList } from '../src/config'
import { flattenObject } from './utils'
import xlsx, { type WorkSheet } from 'node-xlsx'
import { consola } from 'consola'
import chalk from 'chalk'
import { Command } from 'commander'

/**
 * 导出本地语言文件
 * npx tsx scripts/localesExport.ts
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
  .option('-s, --source <path>', 'Language file directory | 语言文件目录', './src/locales')
  .option('-o, --output <path>', 'Output file path | 输出文件路径', './dist/locales')
  .option('-f, --format <type>', 'Output format, optional values: excel, json, md | 输出格式，可选值：excel, json, md', 'excel')
  .option('-a, --all', 'Export all language files, including system.json | 导出所有语言文件，包含 system.json', false)

program.action(async (options) => {
  const sourceDir = resolve(resolve(), options.source)
  const outputPath = resolve(options.output)
  let outputFormat = options.format
  if (!['excel', 'json', 'md'].includes(outputFormat)) {
    outputFormat = 'excel'
  }
  await localesExport(sourceDir, outputPath, outputFormat, options.all)
})

program.parse(process.argv)

async function localesExport(sourceDir: string, outputPath: string, format: string, isAll: boolean = false) {
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
      const data = localesContent.map((item) => [item.file, item.key, item.name, ...localeList.map((locale) => item[locale])])
      const buffer = xlsx.build([{
        name: 'locales',
        data: [headers, ...data]
      } as WorkSheet<string>])
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
