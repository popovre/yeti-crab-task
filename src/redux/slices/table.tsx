import { createSelector, createSlice } from '@reduxjs/toolkit';

export const tableSlice = createSlice({
  name: 'table',
  initialState: { ordersAmount: 0 },
  reducers: {
    increment(state) {
      state.ordersAmount++;
    },
    decrement(state) {
      state.ordersAmount--;
    },
    setAmount(state, { payload: amount }) {
      state.ordersAmount = amount;
    },
  },
});

export const { increment, decrement, setAmount } = tableSlice.actions;
