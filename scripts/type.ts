export type FormatType = 'excel' | 'json' | 'md'

export type ScriptsConfig = {
  locales: {
    source: string
    output: string
    format: FormatType
    all: boolean
    merge: boolean
    config: boolean
  }
}
