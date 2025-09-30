import { createContext } from 'react'
import config from '../config'

const LocaleContext = createContext(config.defaultLocale)

export default LocaleContext
