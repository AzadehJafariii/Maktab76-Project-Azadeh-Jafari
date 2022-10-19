import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  goods: [],
  totalCount: 0,
};

// GET
export const goodsGet = createAsyncThunk("goods/goodsGet", async (n) => {
  const res = await axios.get(
    `http://localhost:3002/products?category=${n}&_limit=6`
  );
  return res.data;
});

//sidebar
export const eachCategoriesGet = createAsyncThunk(
  "goods/eachCategoriesGet",
  async (categoryId) => {
    const res = await axios.get(
      `http://localhost:3002/products?category=${categoryId}&_limit=1`
    );
    return res.data;
  }
);

export const eachGoodsGet = createAsyncThunk(
  "goods/eachGoodsGet",
  async ({ categoriesId, page }) => {
    const res = await axios.get(
      `http://localhost:3002/products?category=${categoriesId}&_page=${page}&_limit=5`
    );
    return { data: res.data, headers: res.headers["x-total-count"] };
  }
);

export const goodGet = createAsyncThunk("goods/goodGet", async (productId) => {
  const res = await axios.get(`http://localhost:3002/products/${productId}`);
  return res.data;
});

// SLICE
export const goodsSlice = createSlice({
  name: "goods",
  initialState,
  extraReducers: (builder) => {
    // fetch goods
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

    // fetch eachCategories
    builder.addCase(eachCategoriesGet.fulfilled, (state, action) => {
      state.loading = false;
      state.goods = action.payload;
      state.error = "";
    });

    // fetch eachGoods
    builder.addCase(eachGoodsGet.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(eachGoodsGet.fulfilled, (state, action) => {
      state.loading = false;
      state.goods = action.payload.data;
      state.totalCount = action.payload.headers;
      state.error = "";
    });
    builder.addCase(eachGoodsGet.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // fetch good
    builder.addCase(goodGet.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(goodGet.fulfilled, (state, action) => {
      state.loading = false;
      state.goods = action.payload;
      state.error = "";
    });
    builder.addCase(goodGet.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default goodsSlice.reducer;
