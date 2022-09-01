import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "config/api";
import axios from "axios";

const initialState = {
  categoryList: [],
  loadings: false,
  error: "",
};

export const fetchCategory = createAsyncThunk(
  "category/fetchCategory",
  async () => {
    const res = await axios.get(`${BASE_URL}/category`);
    return res.data;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: {
    // FETCH GET
    [fetchCategory.pending]: (state) => {
      state.loadings = true;
    },
    [fetchCategory.fulfilled]: (state, action) => {
      state.loadings = false;
      state.categoryList = action.payload;
    },
    [fetchCategory.rejected]: (state) => {
      state.loadings = false;
      state.error = "something went wrong...";
    },
  },
});

export default categorySlice.reducer;
