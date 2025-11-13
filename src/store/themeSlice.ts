import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import config, { type ThemeType } from '@/config'

interface ThemeState {
  value: ThemeType
}

let initialTheme = config.defaultTheme
if (config.theme) {
  initialTheme = (localStorage.getItem(config.themeLocalStorageKey) as ThemeType) || config.defaultTheme
  if (!config.autoChangeTheme && initialTheme === 'system') {
    initialTheme = config.defaultTheme
  }
}

const initialState: ThemeState = {
  value: initialTheme
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<ThemeType>) => {
      state.value = action.payload
      localStorage.setItem(config.themeLocalStorageKey, state.value)
    }
  }
})

export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer
