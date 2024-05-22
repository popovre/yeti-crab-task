import { createSelector, createSlice } from '@reduxjs/toolkit';

export const adminSlice = createSlice({
  name: 'admin',
  initialState: { admin: false },
  reducers: {
    toggleAdmin(state) {
      state.admin = !state.admin;
    },
  },
});

export const { toggleAdmin } = adminSlice.actions;
