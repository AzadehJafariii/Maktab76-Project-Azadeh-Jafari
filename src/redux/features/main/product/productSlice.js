import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  product: {},
};
export const productGet = createAsyncThunk(
  "product/productGet",
  async (productId) => {
    return await fetch(`http://localhost:3002/products/${productId}`)
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => error.message);
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: {
    [productGet.pending]: (state) => {
      state.loadings = true;
    },
    [productGet.fulfilled]: (state, action) => {
      state.loadings = false;
      state.product = action.payload;
    },
    [productGet.rejected]: (state) => {
      state.loadings = false;
      state.error = "something went wrong...";
    },
  },
});

export default productSlice.reducer;
