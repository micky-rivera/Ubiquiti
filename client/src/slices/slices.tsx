import { createSlice } from "@reduxjs/toolkit";

const initialState: AppState = {
  search: '',
  productList: [{name: '', line: '', deviceId: '06a25b40-ef1f-463a-82d9-13236866ea3d', details: []}],
  format: 'list',
  chosenProduct: {
    name: '',
    line: '',
    deviceId: '06a25b40-ef1f-463a-82d9-13236866ea3d',
    details: [{
      label: '',
      content: ''
    }]
  },
  filters: []
}

export const gameSlice = createSlice({
  name: "appReducer",
  initialState,
  reducers: {
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
  setSearch,
  setFormat,
  setChosenProduct,
  setFilters
} = gameSlice.actions;
export default gameSlice.reducer;