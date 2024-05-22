'use client';

import clsx from 'clsx';
import React from 'react';
import styles from './style.module.scss';

const OrderRow = ({ order }) => {
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
      <button onClick={() => {}}>подробнее</button>
    </div>
  );
};

export default OrderRow;
