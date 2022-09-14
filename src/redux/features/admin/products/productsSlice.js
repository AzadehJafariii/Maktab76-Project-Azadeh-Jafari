import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PRODUCTS_URL } from "config/api";
import axiosPrivate from "api/http";

const initialState = {
  products: [],
  loading: false,
  error: "",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (page) => {
    try {
      const res = await axiosPrivate.get(
        `${PRODUCTS_URL}?_page=${page}&_limit=5`
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

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, entiresData }) => {
    try {
      const response = await axiosPrivate.patch(
        `${PRODUCTS_URL}/${id}`,
        entiresData
      );
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);
export const updateEditedProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ currentId, selectedProduct }) => {
    try {
      const response = await axiosPrivate.patch(
        `${PRODUCTS_URL}/${currentId}`,
        selectedProduct
      );
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const updateOrder = createAsyncThunk(
  "products/updateOrder",
  async ({ id, data }) => {
    try {
      const response = await axiosPrivate.patch(`orders/${id}`, data);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (newProduct) => {
    try {
      const response = await axiosPrivate.post(`${PRODUCTS_URL}`, newProduct);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "producs/deleteProduct",
  async (id) => {
    try {
      const response = await axiosPrivate.delete(`${PRODUCTS_URL}/${id}`);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    // fetch products
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload.data;
      state.totalCount = action.payload.headers;
      state.error = "";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    // update product
    builder.addCase(updateProduct.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      return { ...state, loading: false };
    });
    builder.addCase(updateProduct.rejected, (state, action) => {
      return { products: [], loading: false, error: action.payload };
    });
    // update order
    builder.addCase(updateOrder.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(updateOrder.fulfilled, (state, action) => {
      return { ...state, loading: false };
    });
    builder.addCase(updateOrder.rejected, (state, action) => {
      return { loading: false, error: action.payload };
    });
    // create product
    builder.addCase(createProduct.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      return { ...state, loading: false };
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      return { ...state, loading: false, error: action.payload };
    });
    // delete product
    builder.addCase(deleteProduct.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      return { ...state, loading: false };
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      return { ...state, loading: false, error: action.payload };
    });
  },
});

export default productsSlice.reducer;
