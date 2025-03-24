import { configureStore } from '@reduxjs/toolkit';
import providerApi  from "./api/providerApi.jsx"
import userApi  from "./api/userApi.jsx"
export const store = configureStore({
  reducer: {
    [providerApi.reducerPath]: providerApi.reducer,
    [userApi.reducerPath]: userApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(providerApi.middleware),
});

export default store;