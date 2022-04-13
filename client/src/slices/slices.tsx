import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  search: '',
  productList: [{name: '', line: '', deviceId: ''}],
  format: 'list'
}

export const gameSlice = createSlice({
  name: "appReducer",
  initialState,
  reducers: {
    setList: (state, action) => {
      return {
        search: state.search,
        productList: action.payload,
        format: state.format
      };
    },
    setSearch: (state, action) => {
      return {
        search: action.payload,
        productList: state.productList,
        format: state.format
      };
    },
    setFormat: (state, action) => {
      return {
        search: state.search,
        productList: state.productList,
        format: action.payload
      };
    },
  },
});

export const {
  setList,
  setSearch,
  setFormat
} = gameSlice.actions;
export default gameSlice.reducer;