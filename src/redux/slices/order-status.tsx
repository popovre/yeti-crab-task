import { createSelector, createSlice } from '@reduxjs/toolkit';

export const orderStatusSlice = createSlice({
  name: 'orderStatus',
  initialState: {},
  reducers: {
    setStatus(state, { payload: status }) {
      state = { ...state, ...status };
    },
  },
});

export const { setStatus } = orderStatusSlice.actions;
