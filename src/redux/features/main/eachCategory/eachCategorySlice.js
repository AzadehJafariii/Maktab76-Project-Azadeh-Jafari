import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  eachCategory: [],
};

//HEADER
export const eachCategoriesGet = createAsyncThunk(
  "goods/eachCategoriesGet",
  (categoryId) => {
    return axios
      .get(`http://localhost:3002/products?category=${categoryId}&_limit=1`)
      .then((res) => res.headers["x-total-count"]);
  }
);

// GET
export const eachGoodsGet = createAsyncThunk("goods/eachGoodsGet", (n) => {
  return axios
    .get(`http://localhost:3002/products?category=${n}&_limit=10`)
    .then((res) => res.data);
});

// SLICE
export const eachCategorySlice = createSlice({
  name: "eachCategory",
  initialState,
  extraReducers: (builder) => {
    // HEADER
    builder.addCase(eachCategoriesGet.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
    });

    // GET
    builder.addCase(eachGoodsGet.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(eachGoodsGet.fulfilled, (state, action) => {
      state.loading = false;
      state.eachCategory = action.payload;
      state.error = "";
    });
    builder.addCase(eachGoodsGet.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default eachCategorySlice.reducer;
