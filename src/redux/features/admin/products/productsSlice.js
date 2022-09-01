import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createProductRequest,
  deleteProductRequest,
  fetchAllProductsRequest,
  updateProductRequest,
} from "api/products";

const initialState = {
  products: [],
  loading: false,
  error: "",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  fetchAllProductsRequest
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  (id, selectedProduct) => updateProductRequest(id, selectedProduct)
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  (newProduct) => createProductRequest(newProduct)
);

export const deleteProduct = createAsyncThunk("producs/deleteProduct", (id) =>
  deleteProductRequest(id)
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    // fetch products
    builder.addCase(fetchProducts.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return { ...state, loading: false, products: action.payload };
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      return { products: [], loading: false, error: action.payload };
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
