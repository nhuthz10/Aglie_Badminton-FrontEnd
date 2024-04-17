import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadingProduct: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { loadingProduct } = productSlice.actions;

export default productSlice.reducer;
