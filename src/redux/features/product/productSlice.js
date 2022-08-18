import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../api/constants";

const initialState = {
  productsList: [],
  loading: false,
  error: "",
};
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (number = 1) => {
    return await fetch(`${BASE_URL}/products?_page=${number}&_limit=5`)
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => error.message);
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.productsList = action.payload;
    },

    [fetchProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = "wrong...";
    },
  },
});

export default productSlice.reducer;
