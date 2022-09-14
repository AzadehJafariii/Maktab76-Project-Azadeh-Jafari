import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosPrivate from "api/http";
import { BASE_URL } from "config/api";

const initialState = {
  ordersList: [],
  loading: false,
  error: "",
};

export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async ({ delivered, page }) => {
    try {
      const res = await axiosPrivate.get(
        `${BASE_URL}/orders?delivered=${delivered}&_page=${page}&_limit=3`
      );
      return {
        data: res.data,
        headers: res.headers["x-total-count"],
      };
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  extraReducers: (builder) => {
    // fetch products
    builder.addCase(fetchOrders.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.ordersList = action.payload.data;
      state.totalCount = action.payload.headers;
      state.error = "";
    });
    builder.addCase(fetchOrders.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default ordersSlice.reducer;
