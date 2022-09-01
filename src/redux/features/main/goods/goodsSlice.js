import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  goods: [],
};

//HEADER
export const categoriesGet = createAsyncThunk(
  "goods/categoriesGet",
  async (categoryId) => {
    const res = await axios.get(
      `http://localhost:3002/products?category=${categoryId}&_limit=1`
    );
    return res.headers["x-total-count"];
  }
);

// GET
export const goodsGet = createAsyncThunk("goods/goodsGet", async (n) => {
  const res = await axios.get(
    `http://localhost:3002/products?category=${n}&_limit=6`
  );
  return res.data;
});

// SLICE
export const goodsSlice = createSlice({
  name: "goods",
  initialState,
  extraReducers: (builder) => {
    // HEADER
    builder.addCase(categoriesGet.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
    });

    // GET
    builder.addCase(goodsGet.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(goodsGet.fulfilled, (state, action) => {
      state.loading = false;
      state.goods = action.payload;
      state.error = "";
    });
    builder.addCase(goodsGet.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default goodsSlice.reducer;
