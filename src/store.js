import { configureStore } from '@reduxjs/toolkit';
import { providerApi } from "./api/providerApi.jsx"

export const store = configureStore({
  reducer: {
    [providerApi.reducerPath]: providerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(providerApi.middleware),
});

export default store;