import { Activity, useState } from 'react'
import { Switch, Input } from 'antd'
import InputBox from './InputBox'
import { useTranslation } from 'react-i18next'

function ActivityIndex() {
  const [activity, setActivity] = useState(true)
  const [activity1, setActivity1] = useState(true)
  const [activity2, setActivity2] = useState(true)
  const [activity3, setActivity3] = useState(true)
  const { t } = useTranslation()

  return (
    <div className='px-4 pb-4'>
      <h2 className='text-2xl font-bold'>{t('ActivityIndex.no-activity')}</h2>
      <div className='py-4 border-b border-gray-300'>
        <h3 className='text-lg font-bold'>{t('ActivityIndex.uncontrolled')}</h3>
        <div className='flex items-center mb-3 h-10'>
          <Switch checked={activity} onChange={setActivity} />
          {activity && <Input className='ml-4' placeholder='请输入' />}
        </div>
        <h3 className='text-lg font-bold'>{t('ActivityIndex.controlled')}</h3>
        <div className='flex items-center h-10'>
          <Switch checked={activity1} onChange={setActivity1} />
          {activity1 && <InputBox />}
        </div>
      </div>
      <h2 className='text-2xl font-bold mt-4'>{t('ActivityIndex.add-activity')}</h2>
      <div className='py-4'>
        <h3 className='text-lg font-bold'>{t('ActivityIndex.uncontrolled')}</h3>
        <div className='flex items-center mb-3 h-10'>
          <Switch checked={activity2} onChange={setActivity2} />
          <Activity mode={activity2 ? 'visible' : 'hidden'}>
            <Input className='ml-4' placeholder='请输入' />
          </Activity>
        </div>
        <h3 className='text-lg font-bold'>{t('ActivityIndex.controlled')}</h3>
        <div className='flex items-center h-10'>
          <Switch checked={activity3} onChange={setActivity3} />
          <Activity mode={activity3 ? 'visible' : 'hidden'}>
            <InputBox />
          </Activity>
        </div>
      </div>
    </div>
  )
}

export default ActivityIndex
