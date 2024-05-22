import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { api } from './services/api';
import { tableSlice } from './slices/table';
import { adminSlice } from './slices/admin';

export const store = configureStore({
  reducer: combineSlices(api, tableSlice, adminSlice),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
