import React from 'react';
import OrderRow from './component';
import {
  deleteOrderById,
  getOrderContentById,
  updateOrderById,
} from '@/services/api';

const OrderRowContainer = async (props) => {
  const onUpdate = async (contentId, updatedContent) => {
    'use server';
    await updateOrderById(contentId, updatedContent);
  };

  const onGetContent = async (contentId) => {
    'use server';
    return await getOrderContentById(contentId);
  };

  const deleteOrder = async (orderId) => {
    'use server';
    await deleteOrderById(orderId);
  };

  return (
    <OrderRow
      {...props}
      deleteOrder={deleteOrder}
      onUpdate={onUpdate}
      onGetContent={onGetContent}
    />
  );
};

export default OrderRowContainer;
