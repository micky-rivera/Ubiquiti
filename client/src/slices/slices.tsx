import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AppState = {
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
  },
  filters: []
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
        chosenProduct: state.chosenProduct,
        filters: state.filters
      };
    },
    setSearch: (state, action) => {
      return {
        search: action.payload,
        productList: state.productList,
        format: state.format,
        chosenProduct: state.chosenProduct,
        filters: state.filters,
      };
    },
    setFormat: (state, action) => {
      return {
        search: state.search,
        productList: state.productList,
        format: action.payload,
        chosenProduct: state.chosenProduct,
        filters: state.filters,
      };
    },
    setChosenProduct: (state, action) => {
      return {
        search: state.search,
        productList: state.productList,
        format: state.format,
        chosenProduct: action.payload,
        filters: state.filters,
      };
    },
    setFilters: (state, action) => {
      return {
        search: state.search,
        productList: state.productList,
        format: state.format,
        chosenProduct: state.chosenProduct,
        filters: action.payload,
      };
    },
  },
});

export const {
  setList,
  setSearch,
  setFormat,
  setChosenProduct,
  setFilters
} = gameSlice.actions;
export default gameSlice.reducer;