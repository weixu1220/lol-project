import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  myChamps: [],
}

export const ChampsSlice = createSlice({
  name: 'myChamps',
  initialState,
  reducers: {
    AddChamp:(state,action) => {
        let newChamp = {
            champName: action.payload.champName,
            imgUrl: action.payload.imgUrl
        }
        state.myChamps.push(newChamp)
    }
  },
})

export const { AddChamp } = ChampsSlice.actions

export default ChampsSlice.reducer