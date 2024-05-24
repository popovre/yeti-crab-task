'use client';

import { useDispatch, useSelector } from 'react-redux';
import { increment, setAmount } from '@/redux/slices/amount';
import { useEffect } from 'react';

const AmountCounter = ({ initialAmount }) => {
  const dispatch = useDispatch();
  const amount = useSelector((state) => state.amount.ordersAmount);
  useEffect(() => {
    dispatch(setAmount(initialAmount));
  });

  return <div>Заказов: {amount}</div>;
};

export default AmountCounter;
