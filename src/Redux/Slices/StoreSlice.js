import { createSlice } from "@reduxjs/toolkit";

const initialState =[]

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    storeDataSlice: (state, action) => {
      console.log("kljkll", action.payload);
      //let a= [...action.payload]
      //state.SourceName = action.payload.values[action.payload.index].query; 
      //state.valueArray = [...action.payload];
      return [...action.payload]
    },
    removeDataSlice: (state, action) => {
      //state.data = null;
        return [...action.payload];
    },
  },
});

export const { storeDataSlice, removeDataSlice } = storeSlice.actions;

export default storeSlice.reducer;
