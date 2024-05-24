'use client';

import { getOrderContentById } from '@/services/api';
import OrderForm from './component';
import { useEffect, useState } from 'react';
import Loader from '../loader/component';

const OrderFormContainer = ({ contentId, onUpdate, onGetContent }) => {
  const [content, setContent] = useState();

  useEffect(() => {
    console.log('use effect');
    onGetContent(contentId)
      .then((data) => {
        setContent(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return content ? (
    <OrderForm content={content} onUpdate={onUpdate} />
  ) : (
    <Loader classNames={[]} />
  );
};

export default OrderFormContainer;
