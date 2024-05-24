import { revalidateTag } from 'next/cache';

const BASE_URL = 'http://localhost:3001/api';

export const getOrders = async () => {
  const response = await fetch(`${BASE_URL}/orders`);
  return response.json();
};

export const getOrderById = async (orderId) => {
  const response = await fetch(`${BASE_URL}/order/${orderId}`);
  return response.json();
};

export const getOrderContentById = async (contentId) => {
  const response = await fetch(`${BASE_URL}/content/${contentId}`);
  return response.json();
};

export const updateOrderById = async (contentId, data) => {
  const requestOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };

  await fetch(`${BASE_URL}/content/${contentId}`, requestOptions);
  revalidateTag('content');
};

export const createOrder = async (data) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };

  await fetch(`${BASE_URL}/order`, requestOptions);
  revalidateTag('order');
};

export const deleteOrderById = async (orderId) => {
  console.log('delete', orderId);
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    // body: JSON.stringify(orderId),
  };

  await fetch(`${BASE_URL}/order/${orderId}`, requestOptions);
  revalidateTag('order');
};
