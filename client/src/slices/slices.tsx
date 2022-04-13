import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  search: '',
  productList: [{name: '', line: '', deviceId: ''}],
  format: 'list',
  chosenProduct: {
    name: '',
    line: '',
    lineId: '',
    deviceId: '',
    shortName: '',
    maxPower: '',
    speed: '',
    numOfPorts: '',
  }
}

export const gameSlice = createSlice({
  name: "appReducer",
  initialState,
  reducers: {
    setList: (state, action) => {
      return {
        search: state.search,
        productList: action.payload,
        format: state.format,
        chosenProduct: state.chosenProduct
      };
    },
    setSearch: (state, action) => {
      return {
        search: action.payload,
        productList: state.productList,
        format: state.format,
        chosenProduct: state.chosenProduct
      };
    },
    setFormat: (state, action) => {
      return {
        search: state.search,
        productList: state.productList,
        format: action.payload,
        chosenProduct: state.chosenProduct
      };
    },
    setChosenProduct: (state, action) => {
      return {
        search: state.search,
        productList: state.productList,
        format: state.format,
        chosenProduct: action.payload
      };
    },
  },
});

export const {
  setList,
  setSearch,
  setFormat,
  setChosenProduct
} = gameSlice.actions;
export default gameSlice.reducer;