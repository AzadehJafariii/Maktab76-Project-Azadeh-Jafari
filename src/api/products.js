import { PRODUCTS_URL } from "config/api";
import axiosPrivate from "./http";

export const fetchAllProductsRequest = async (number = 1) => {
  try {
    const response = await axiosPrivate.get(
      `${PRODUCTS_URL}?_page=${number}&_limit=5`
    );
    return response.data;
    // Promise.all
    // const response = await Promise.all(
    //   [POSTS, "/cities"].map((endpoint) => axios.get(endpoint))
    // );
    // const [{ data: posts }, { data: cities }] = response;
    //Abort Controller
    // const controller = new AbortController();
    // const response = await axios.get(`${POSTS}`, {
    //   signal: controller.signal,
    // });
    // return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateProductRequest = async (id, selectedProduct) => {
  try {
    const response = await axiosPrivate.put(
      `${PRODUCTS_URL}/${id}`,
      selectedProduct
    );
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createProductRequest = async (newProduct) => {
  try {
    const response = await axiosPrivate.post(`${PRODUCTS_URL}`, newProduct);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteProductRequest = async (id) => {
  try {
    const response = await axiosPrivate.delete(`${PRODUCTS_URL}/${id}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
