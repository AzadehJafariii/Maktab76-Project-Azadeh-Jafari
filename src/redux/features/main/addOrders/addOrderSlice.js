import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  orders: [],
};

export const addOrders = createAsyncThunk(
  "orders/addOrders",
  async (clientData) => {
    const res = await axios.post(`http://localhost:3002/orders`, clientData);
    return res.data;
  }
);

export const addOrdersSlice = createSlice({
  name: "orders",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addOrders.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.orders = action.payload;
      localStorage.clear();
      state.error = "";
    });
    builder.addCase(addOrders.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default addOrdersSlice.reducer;
