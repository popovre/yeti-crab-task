'use client';

import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import OrderFormContainer from '../order-form/container';
import Link from 'next/link';
import DropdownContainer from '../dropdown/container';
import ClientOnlyPortal from '../portal/container';
import StatusMenu from '../status-menu/component';
import { setStatus } from '@/redux/slices/order-status';

const OrderRow = ({
  order,
  onUpdate,
  onGetContent,
  deleteOrder,
  updateStatus,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);
  const dispatch = useDispatch();
  console.log('render', order.status);

  // useEffect(() => {
  //   console.log('effect', order.status);
  //   dispatch(setStatus());
  // }, [order]);

  // const status = useSelector((state) => state.orderStatus.orderStatus);
  // console.log(status, 'status Order');

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
          <Link
            className={clsx(styles.linkAti)}
            target={'_blank'}
            href={`https://ati.su/firms/${order.code}/info`}
          >
            <span>ATI:</span>
            <span>{order?.code}</span>
          </Link>
        </div>
        <div className={clsx(styles.status)}>
          <button
            onClick={() => {
              if (admin) setIsDropDown(!isDropDown);
            }}
          >
            {order?.status}
          </button>
          {isDropDown && (
            <DropdownContainer onClose={() => setIsDropDown(false)}>
              <StatusMenu
                status={order?.status}
                orderId={order.id}
                updateStatus={updateStatus}
              />
            </DropdownContainer>
          )}
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
