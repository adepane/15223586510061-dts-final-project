import { configureStore } from "@reduxjs/toolkit";

import { hotelApi } from "../services/hotelApi";

const store = configureStore({
  reducer: {
    [hotelApi.reducerPath]: hotelApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hotelApi.middleware),
});

export default store;
