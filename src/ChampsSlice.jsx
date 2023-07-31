import { createSlice } from '@reduxjs/toolkit'


const getInitialState = () => {
  // Check if data exists in localStorage
  const storedState = localStorage.getItem('champsState');
  if (storedState) {
    return JSON.parse(storedState);
  } else {
    return {
      myChamps: [],
    };
  }
};

const initialState = getInitialState();

export const ChampsSlice = createSlice({
  name: 'myChamps',
  initialState,
  reducers: {
    AddChamp:(state,action) => {
      const { champName, imgUrl } = action.payload;
      const newChamp = {
        champName,
        imgUrl,
      };
      state.myChamps.push(newChamp);
      // Update localStorage with the new state
      let myChampsState = JSON.stringify({ myChamps: state.myChamps })
      localStorage.setItem('champsState', myChampsState);
    }
  },
})

export const { AddChamp } = ChampsSlice.actions

export default ChampsSlice.reducer