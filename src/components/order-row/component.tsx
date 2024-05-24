'use client';

import clsx from 'clsx';
import React, { useState } from 'react';
import styles from './style.module.scss';
import { useSelector } from 'react-redux';
import OrderFormContainer from '../order-form/container';

const OrderRow = ({ order, onUpdate, onGetContent, deleteOrder }) => {
  const [showForm, setShowForm] = useState(false);

  const handleMoreButtonClick = () => {
    setShowForm(!showForm);
  };

  const handleDeleteClick = () => {
    deleteOrder(order.id)
      .then(() => {
        console.log('deleted');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const admin = useSelector((state) => state.admin.admin);

  return (
    <div className={clsx(styles.root)}>
      {admin && (
        <button
          className={clsx(styles.deleteButton)}
          onClick={() => {
            handleDeleteClick();
          }}
        >
          Удалить заявку
        </button>
      )}
      <div className={clsx(styles.contentWrapper)}>
        <div className={clsx(styles.number)}>
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
          <div>
            <span>ATI:</span>
            <span>{order?.code}</span>
          </div>
        </div>
        <div className={clsx(styles.status)}>
          <span>{order?.status}</span>
        </div>
      </div>
      {admin && (
        <button
          className={clsx(styles.buttonMore, { [styles.active]: showForm })}
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
