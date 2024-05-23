import React from 'react';
import OrderRow from './component';
import { getOrderById, updateOrderById } from '@/services/api';

const OrderRowContainer = async (props) => {
  const onUpdate = async (orderId, updatedOrder) => {
    'use server';
    await updateOrderById(orderId, updatedOrder);
  };

  return <OrderRow {...props} onUpdate={onUpdate} />;
};

export default OrderRowContainer;
