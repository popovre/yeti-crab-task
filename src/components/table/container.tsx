import Table from './component';
import { getOrders, createOrder } from '@/services/api';

const TableContainer = async (props) => {
  const orders = await getOrders();

  const createNewOrder = async (content) => {
    'use server';
    await createOrder(content);
  };

  return (
    <Table
      {...props}
      createNewOrder={createNewOrder}
      orders={orders}
      initialAmount={orders?.length}
    />
  );
};

export default TableContainer;
