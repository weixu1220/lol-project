import { configureStore } from '@reduxjs/toolkit'
import ChampsReducer from './ChampsSlice'

export const store = configureStore({
  reducer: {
    champs: ChampsReducer,
  },
})