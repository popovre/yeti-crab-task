import React from 'react';
import OrderRow from './component';
import { getOrderContentById, updateOrderById } from '@/services/api';

const OrderRowContainer = async (props) => {
  const onUpdate = async (contentId, updatedContent) => {
    'use server';
    await updateOrderById(contentId, updatedContent);
  };

  const onGetContent = async (contentId) => {
    'use server';
    return await getOrderContentById(contentId);
  };

  return (
    <OrderRow {...props} onUpdate={onUpdate} onGetContent={onGetContent} />
  );
};

export default OrderRowContainer;
