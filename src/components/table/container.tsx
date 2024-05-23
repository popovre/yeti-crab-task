import Table from './component';
import { getOrders } from '@/services/api';

const TableContainer = async (props) => {
  const orders = await getOrders();
  return <Table {...props} orders={orders} initialAmount={orders?.length} />;
};

export default TableContainer;
