import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const initialState = {
  processor: null,
  motherboard: null,
  ram: null,
  powerSupply: null,
  storage: null,
  monitor: null,
};

// Define a service using a base URL and expected endpoints
export const apiSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToBuild: (state, action) => {
      if (action.payload.category === "processor") {
        state.processor = action.payload;
      }
      if (action.payload.category === "motherboard") {
        state.motherboard = action.payload;
      }

      if (action.payload.category === "ram") {
        state.ram = action.payload;
      }
      if (action.payload.category === "monitor") {
        state.monitor = action.payload;
      }
      if (action.payload.category === "storage") {
        state.storage = action.payload;
      }
      if (action.payload.category === "powerSupply") {
        state.powerSupply = action.payload;
      }
    },
  },
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { addToBuild } = apiSlice.actions;

export default apiSlice.reducer;
