import { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeTheme } from '../store/themeSlice'
import { type RootState, type AppDispatch } from '../store'
import { type ThemeType } from '../store/themeSlice'
import config from '../config'

export const useTheme = () => {
  const storeTheme = useSelector((state: RootState) => state.theme.value)
  let newTheme = storeTheme
  if (newTheme === 'system') {
    newTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const [theme, setTheme] = useState(newTheme)
  if (theme !== newTheme) {
    setTheme(newTheme)
  }
  document.documentElement.classList.toggle(
    'dark',
    theme === 'dark'
  )
  useEffect(() => {
    if (storeTheme === 'system') {
      const themeQuery = window.matchMedia('(prefers-color-scheme: dark)')
      function themeQueryFn(e: MediaQueryListEvent) {
        if (config.autoChangeTheme) {
          setTheme(e.matches ? 'dark' : 'light')
        }
      }
      themeQuery.addEventListener('change', themeQueryFn)
      return () => {
        themeQuery.removeEventListener('change', themeQueryFn)
      }
    }
  }, [storeTheme])

  const dispatch = useDispatch<AppDispatch>()
  const changeThemeCallback = useCallback((value: ThemeType) => dispatch(changeTheme(value)), [dispatch])

  return { theme, storeTheme, changeTheme: changeThemeCallback }
}
