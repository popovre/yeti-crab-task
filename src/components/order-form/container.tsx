'use client';

import { useSelector } from 'react-redux';
import OrderForm from './component';

const OrderFormContainer = (props) => {
  return <OrderForm {...props} />;
};

export default OrderFormContainer;
