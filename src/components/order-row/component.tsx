'use client';

import clsx from 'clsx';
import React, { useState } from 'react';
import styles from './style.module.scss';
import { useSelector } from 'react-redux';
import OrderFormContainer from '../order-form/container';
import Loader from '../loader/component';

const OrderRow = ({ order, onUpdate, onGetContent }) => {
  const [showForm, setShowForm] = useState(false);

  const handleMoreButtonClick = () => {
    setShowForm(!showForm);
  };

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
            <span>Date:</span>
            <span>{order?.date}</span>
          </div>
        </div>
        <div className={clsx(styles.status)}>
          <span>{order?.status}</span>
        </div>
      </div>
      {admin && (
        <button
          onClick={() => {
            handleMoreButtonClick();
          }}
        >
          подробнее
        </button>
      )}
      {admin && showForm && (
        <OrderFormContainer
          contentId={order?.content}
          onUpdate={onUpdate}
          onGetContent={onGetContent}
        />
      )}
    </div>
  );
};

export default OrderRow;
