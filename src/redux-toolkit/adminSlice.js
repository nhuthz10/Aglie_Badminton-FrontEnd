import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  handleGetAllProductService,
  handleGetAllProductSizeService,
} from "../services/productService";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  allProduct: [],
  allProductSize: [],
  productData: {},
  searchTextProductAdmin: null,
};

export const fetchAllProductRedux = createAsyncThunk(
  "admin/fetchAllProductRedux",
  async (params, thunkAPI) => {
    try {
      let res = await handleGetAllProductService(
        params?.limit,
        params?.page,
        params?.name
      );
      if (res && res.errCode === 0) {
        thunkAPI.dispatch(fetchAllProductSuccess(res));
      } else {
        thunkAPI.dispatch(fetchAllProductFailed());
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      thunkAPI.dispatch(fetchAllProductFailed());
      console.log(error);
    }
  }
);

export const fetchAllProductSizeRedux = createAsyncThunk(
  "admin/fetchAllBrandRedux",
  async (params, thunkAPI) => {
    try {
      let res = await handleGetAllProductSizeService(
        params?.productId,
        params?.limit,
        params?.page
      );
      if (res && res.errCode === 0) {
        thunkAPI.dispatch(fetchAllProductSizeSuccess(res));
      } else {
        thunkAPI.dispatch(fetchAllProductSizeFailed());
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      thunkAPI.dispatch(fetchAllProductSizeFailed());
      console.log(error);
    }
  }
);

export const userSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    loadingAdmin: (state, action) => {
      state.isLoading = action.payload;
    },
    fetchAllProductSuccess: (state, action) => {
      state.allProduct = action.payload;
    },
    fetchAllProductFailed: (state, action) => {
      state.allProduct = [];
    },
    fetchAllProductSizeSuccess: (state, action) => {
      state.allProductSize = action.payload;
    },
    fetchAllProductSizeFailed: (state, action) => {
      state.allProductSize = [];
    },
    CRUDProductSize: (state, action) => {
      state.productData = action.payload;
    },
  },
});

export const {
  loadingAdmin,
  CRUDProductSize,
  fetchAllProductSuccess,
  fetchAllProductFailed,
  fetchAllProductSizeSuccess,
  fetchAllProductSizeFailed,
  CRUDProuctSize,
} = userSlice.actions;

export default userSlice.reducer;
