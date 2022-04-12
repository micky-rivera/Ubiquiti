import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    search: '',
    productList: [{name: '', line: '', deviceId: ''}]
}

export const gameSlice = createSlice({
  name: "appReducer",
  initialState,
  reducers: {
    setList: (state, action) => {
      return {
        search: state.search,
        productList: action.payload,
      };
    },
    setSearch: (state, action) => {
      return {
        search: action.payload,
        productList: state.productList,
      };
    },
  },
});

export const {
  setList,
  setSearch
} = gameSlice.actions;
export default gameSlice.reducer;