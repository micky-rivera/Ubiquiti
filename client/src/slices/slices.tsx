import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {productList: []}

export const gameSlice = createSlice({
  name: "appReducer",
  initialState,
  reducers: {
    setList: (state, action) => {
      return {
        productList: action.payload,
      };
    },
  },
});

export const {
  setList,
} = gameSlice.actions;
export default gameSlice.reducer;