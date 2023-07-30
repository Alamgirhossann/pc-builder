import { configureStore } from "@reduxjs/toolkit";
import apiSliceReducer from "./api/productSlice";

export const store = configureStore({
  reducer: {
    product: apiSliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
