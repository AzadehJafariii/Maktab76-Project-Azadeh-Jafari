import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../api/constants";

const initialState = {
  ordersList: [],
  loading: false,
  error: "",
};
export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (number = 1) => {
    return await fetch(`${BASE_URL}/orders?_page=${number}&_limit=5`)
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => error.message);
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState,
  extraReducers: {
    [fetchOrders.pending]: (state) => {
      state.loading = true;
    },
    [fetchOrders.fulfilled]: (state, action) => {
      state.loading = false;
      state.productsList = action.payload;
    },

    [fetchOrders.rejected]: (state, action) => {
      state.loading = false;
      state.error = "wrong...";
    },
  },
});

export default orderSlice.reducer;
