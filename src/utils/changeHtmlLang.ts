import { type LocaleType } from '@/config'

/**
 * @description 改变HTML标签的lang属性。|| Change the lang attribute of the HTML tag.
 * @param {LocaleType} locale 语言类型（zh/en）。|| The language type (zh/en).
 */
export function changeHtmlLang(locale: LocaleType) {
  const htmlElement = document.documentElement
  const langMap = {
    zh: 'zh-CN',
    en: 'en-US'
  }
  htmlElement.setAttribute('lang', langMap[locale])
}