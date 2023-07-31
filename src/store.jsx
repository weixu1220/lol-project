import { configureStore } from '@reduxjs/toolkit'
import ChampsReducer from './ChampsSlice'

export const store = configureStore({
  reducer: {
    champs: ChampsReducer,
  },
})
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('myChampsState', JSON.stringify(state.myChamps));
});