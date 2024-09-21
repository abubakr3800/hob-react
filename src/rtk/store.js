import { configureStore } from '@reduxjs/toolkit'
import languageSlice from './languageSlice'
import enSlice from './enSlice'
import itSlice from './itSlice'
import arSlice from './arSlice'
import destinationsSlice from './destinationsSlice'
import offersSlice from './offersSlice'

export const store = configureStore({
    reducer: {
        language : languageSlice,
        en:enSlice,
        it:itSlice,
        ar:arSlice,
        destinations:destinationsSlice,
        offers:offersSlice
    },
})