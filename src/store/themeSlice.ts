import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type ThemeType = 'system' | 'light' | 'dark'

interface ThemeState {
  value: ThemeType
}

const initialState: ThemeState = {
  value: (localStorage.getItem('theme') as ThemeType) || 'light'
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<ThemeType>) => {
      state.value = action.payload
      localStorage.setItem('theme', state.value)
    }
  }
})

export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer
