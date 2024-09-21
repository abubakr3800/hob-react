import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    lan: localStorage.getItem('lan'),
}

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        italian: (state) => {
            state.lan = 'it'
            localStorage.setItem('lan','it')
        },
        english: (state) => {
            state.lan = 'en'
            localStorage.setItem('lan','en')
        },
        arabic: (state) => {
            state.lan = 'ar'
            localStorage.setItem('lan','ar')
        },
    },
})

// Action creators are generated for each case reducer function
export const { italian, english, arabic } = languageSlice.actions

export default languageSlice.reducer