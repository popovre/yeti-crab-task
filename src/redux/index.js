import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { api } from './services/api';
import { amountSlice } from './slices/amount';
import { adminSlice } from './slices/admin';

export const store = configureStore({
  reducer: combineSlices(api, amountSlice, adminSlice),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
