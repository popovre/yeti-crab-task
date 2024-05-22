const BASE_URL = 'http://localhost:3001/api';

export const getOrders = async () => {
  const response = await fetch(`${BASE_URL}/orders`);
  return response.json();
};
