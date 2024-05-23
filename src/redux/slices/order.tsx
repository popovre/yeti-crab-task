import { createSelector, createSlice } from '@reduxjs/toolkit';

interface OrderState {
  id: string;
  comments: [];
  status: string;
  number: number;
  date: number;
  client: string;
  driver: string;
  code: number;
  clientName: string;
}

const initialState: OrderState = {
  id: '',
  comments: [],
  status: '',
  number: 0,
  date: 0,
  client: '',
  driver: '',
  code: 0,
  clientName: '',
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
});

// export const { increment, decrement, setAmount } = amountSlice.actions;
