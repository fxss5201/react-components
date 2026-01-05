import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import config, { type ThemeType } from '@/config'
import TabCommunication from '@/utils/TabCommunication'

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
      TabCommunication.postMessage({
        type: 'theme_channel',
        data: state.value
      })
    },
    onlyChangeTheme: (state, action: PayloadAction<ThemeType>) => {
      state.value = action.payload
    }
  }
})

export const { changeTheme, onlyChangeTheme } = themeSlice.actions

export default themeSlice.reducer
