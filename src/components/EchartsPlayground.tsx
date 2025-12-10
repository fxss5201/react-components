import { useContext, useRef, useState } from 'react'
import EchartsBlock, { type EchartsBlockProps } from '@/components/EchartsBlock'
import { Splitter, Button, Tooltip } from 'antd'
import CodeEditor from '@/components/CodeEditor'
import useUndo from 'use-undo'
import { RedoOutlined, UndoOutlined, ReloadOutlined, PlayCircleOutlined, FullscreenOutlined, FullscreenExitOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import LocaleContext from '@/context/LocaleContext'
import { type LocaleType } from '@/config'
import { useFullscreen } from 'ahooks'
import cn from 'classnames'
import { theme as antdTheme } from 'antd'

export type EchartsPlaygroundProps = {
  children: EchartsBlockProps
  locale?: LocaleType
  live?: boolean
}

function EchartsPlayground ({
  children,
  locale,
  live = true,
}: EchartsPlaygroundProps) {
  const { token } = antdTheme.useToken()
  const localeContext = useContext(LocaleContext)
  const currentLocale = locale || localeContext || 'zh'
  const [
    { present: echartsData },
    { set: setData, reset: resetData, undo: undoData, redo: redoData, canUndo, canRedo },
  ] = useUndo(children)
  function onChangeFn (value: string) {
    try {
      const newData = JSON.parse(value)
      setData(newData)
    } catch (error) {
      console.error('Invalid JSON:', error)
    }
  }
  const echartsPlaygroundRef = useRef<HTMLDivElement>(null)
  const [isFullscreen, { toggleFullscreen, isEnabled }] = useFullscreen(() => echartsPlaygroundRef.current)
  const [echartsBlockProps, setEchartsBlockProps] = useState<EchartsBlockProps>(children)

  return (
    <div ref={echartsPlaygroundRef} style={{ backgroundColor: token.colorBgContainer }}>
      <Splitter style={{ height: isFullscreen ? screen.height : 400, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <Splitter.Panel defaultSize='50%' min='30%' max='70%' collapsible>
          <div className='flex flex-col items-stretch h-full'>
            <div className='flex flex-row items-center justify-between w-full h-8 shrink-0'>
              <div className='flex flex-row items-center'>
                <Tooltip
                  placement="bottom"
                  title={currentLocale === 'zh' ? '撤销' : 'Undo'}
                  getPopupContainer={() => echartsPlaygroundRef.current!}
                >
                  <Button type="text" onClick={undoData} disabled={!canUndo}><UndoOutlined /></Button>
                </Tooltip>
                <Tooltip
                  placement="bottom"
                  title={currentLocale === 'zh' ? '重做' : 'Redo'}
                  getPopupContainer={() => echartsPlaygroundRef.current!}
                >
                  <Button type="text" onClick={redoData} disabled={!canRedo}><RedoOutlined /></Button>
                </Tooltip>
                <Tooltip
                  placement="bottom"
                  title={currentLocale === 'zh' ? '重置' : 'Reset'}
                  getPopupContainer={() => echartsPlaygroundRef.current!}
                >
                  <Button type="text" onClick={() => resetData(children)} disabled={!canUndo}><ReloadOutlined /></Button>
                </Tooltip>
              </div>
              <div className='flex flex-row items-center'>
                <Tooltip
                  placement="bottom"
                  title={currentLocale === 'zh' ? isFullscreen ? '退出全屏' : '进入全屏' : isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
                  getPopupContainer={() => echartsPlaygroundRef.current!}
                >
                  <Button type="text" onClick={toggleFullscreen} disabled={!isEnabled}>{ isFullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined /> }</Button>
                </Tooltip>
                {!live && (
                  <>
                    <Tooltip
                      placement="bottom"
                      title={currentLocale === 'zh' ? '修改代码之后不会直接生效，需要点击执行按钮' : 'Click the play button to apply the changes'}
                      getPopupContainer={() => echartsPlaygroundRef.current!}
                    >
                      <Button type="text"><QuestionCircleOutlined /></Button>
                    </Tooltip>
                    <Tooltip
                      placement="bottom"
                      title={currentLocale === 'zh' ? '执行' : 'Play'}
                      getPopupContainer={() => echartsPlaygroundRef.current!}
                    >
                      <Button type="primary" onClick={() => setEchartsBlockProps(echartsData)}><PlayCircleOutlined /></Button>
                    </Tooltip>
                  </>
                )}
              </div>
            </div>
            <CodeEditor
              value={JSON.stringify(echartsData, null, 2)}
              onChange={onChangeFn}
              className='border flex-auto overflow-auto'
              style={{ borderColor: token.colorBorder }} />
          </div>
        </Splitter.Panel>
        <Splitter.Panel defaultSize='50%' min='30%' max='70%' collapsible>
          <div className={cn('w-full')} style={{ height: isFullscreen ? screen.height : 400 }}>
            <EchartsBlock {...(live ? echartsData : echartsBlockProps)} />
          </div>
        </Splitter.Panel>
      </Splitter>
    </div>
  )
}

export default EchartsPlayground
