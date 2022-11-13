import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    loading: false,
    error: null,
  },
  reducers: {
    getAllOrderRequest(state, action) {
      state.loading = true;
      state.error = null;
    },
    getAllOrderSuccess(state, action) {
      state.orders = action.payload;
      state.loading = false;
      state.error = null;
    },
    getAllOrderFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    createOrderRequest(state, action) {
      state.error = null;
      state.loading = true;
    },
    createOrderFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default orderSlice;
