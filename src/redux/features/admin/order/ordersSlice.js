import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "config/api";

const initialState = {
  ordersList: [],
  loading: false,
  error: "",
};
export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (delivered, number = 1) => {
    return await fetch(
      `${BASE_URL}/orders?delivered=${delivered}&page=${number}&limit=5`
    )
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => error.message);
  }
);

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  extraReducers: {
    [fetchOrders.pending]: (state) => {
      state.loading = true;
    },
    [fetchOrders.fulfilled]: (state, action) => {
      state.loading = false;
      state.ordersList = action.payload;
    },

    [fetchOrders.rejected]: (state, action) => {
      state.loading = false;
      state.error = "wrong...";
    },
  },
});

export default ordersSlice.reducer;
