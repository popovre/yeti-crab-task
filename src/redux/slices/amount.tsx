import { createSelector, createSlice } from '@reduxjs/toolkit';

export const amountSlice = createSlice({
  name: 'amount',
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

export const { increment, decrement, setAmount } = amountSlice.actions;
