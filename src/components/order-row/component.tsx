'use client';

import clsx from 'clsx';
import React, { useState } from 'react';
import styles from './style.module.scss';
import { useSelector } from 'react-redux';
import OrderFormContainer from '../order-form/container';

const OrderRow = ({ order, onUpdate }) => {
  const [showForm, setShowForm] = useState(false);

  const admin = useSelector((state) => state.admin.admin);

  return (
    <div className={clsx(styles.root)}>
      <div className={clsx(styles.contentWrapper)}>
        <div>
          <span>Number:</span>
          <span>{order?.number}</span>
        </div>
        <div className={clsx(styles.data)}>
          <div>
            <span>id:</span>
            {order?.id}
          </div>
          <div>
            <span>From:</span>
            <span>{order?.clientName}</span>
          </div>
        </div>
        <div className={clsx(styles.status)}>
          <span>{order.status}</span>
        </div>
      </div>
      {admin && (
        <button
          onClick={() => {
            setShowForm(!showForm);
          }}
        >
          подробнее
        </button>
      )}
      {admin && showForm && (
        <OrderFormContainer onUpdate={onUpdate} order={order} />
      )}
    </div>
  );
};

export default OrderRow;
