import { type TextEditorProps } from 'json-edit-react'
import CodeMirror from '@uiw/react-codemirror'
import { json } from '@codemirror/lang-json'
import { markdown } from '@codemirror/lang-markdown'
import { javascript } from '@codemirror/lang-javascript'
import { html } from '@codemirror/lang-html'
import { githubLight, githubDark } from '@uiw/codemirror-theme-github'
import { useTheme } from '@/storeHooks/useTheme'

export type CodeEditorProps = Omit<TextEditorProps, 'onKeyDown'> & {
  style?: React.CSSProperties
  className?: string
  onKeyDown?: TextEditorProps['onKeyDown']
}
function CodeEditor({ value, onChange, onKeyDown, className, style }: CodeEditorProps) {
  const { theme } = useTheme()
  const codeTheme = theme === 'dark' ? githubDark : githubLight
  return (
    <CodeMirror
      theme={codeTheme}
      value={value}
      width="100%"
      extensions={[json(), markdown(), javascript({ jsx: true }), html()]}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className={className}
      style={style}
    />
  )
}

export default CodeEditor
