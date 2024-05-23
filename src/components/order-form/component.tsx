import React, { useState } from 'react';
import { useReviewForm } from './use-order-form';
import clsx from 'clsx';
import styles from './style.module.scss';
import { Loader } from '../loader/component';

const OrderForm = ({ order, onUpdate }) => {
  const initialState = { driver: order.driver };
  const {
    form,
    // setPhone,
    // setId,
    // setClientName,
    // setCode,
    // setDate,
    setDriver,
    // setNumber,
    // setStatus,
    // setComment,
  } = useReviewForm(initialState, order.id);
  console.log(form);

  const [loader, setLoader] = useState(false);

  const handleUpdateClick = () => {
    console.log('click');
    setLoader(true);
    console.log(order.id, 'id');
    onUpdate(order.id, form)
      .then((resolve) => {
        console.log('then');
        setLoader(false);
      })
      .catch((error) => {
        setLoader(false);
        console.log(error);
      });
  };

  return loader ? (
    <Loader />
  ) : (
    <div>
      {/* <div className={clsx(styles.field)}>
        <label htmlFor="id">Id</label>
        <input
          className={clsx(styles.input)}
          id="id"
          type="text"
          value={form.id}
          onChange={(e) => setId(e)}
        />
      </div> */}
      <div className={clsx(styles.field)}>
        <label htmlFor="driver">Driver</label>
        <input
          className={clsx(styles.input)}
          id="driver"
          type="text"
          value={form.driver}
          onChange={(e) => setDriver(e)}
        />
      </div>
      {/* <div className={clsx(styles.field)}>
        <label htmlFor="status">Status</label>
        <input
          className={clsx(styles.input)}
          id="status"
          type="text"
          value={form.status}
          onChange={(e) => setStatus(e)}
        />
      </div>
      <div className={clsx(styles.field)}>
        <label htmlFor="number">Number</label>
        <input
          className={clsx(styles.input)}
          id="number"
          type="text"
          value={form.number}
          onChange={(e) => setNumber(e)}
        />
      </div>
      <div className={clsx(styles.field)}>
        <label htmlFor="date">Date</label>
        <input
          className={clsx(styles.input)}
          id="date"
          type="text"
          value={form.date}
          onChange={(e) => setDate(e)}
        />
      </div>
      <div className={clsx(styles.field)}>
        <label htmlFor="clientName">Client</label>
        <input
          className={clsx(styles.input)}
          id="clientName"
          type="text"
          value={form.clientName}
          onChange={(e) => setClientName(e)}
        />
      </div>
      <div className={clsx(styles.field)}>
        <label htmlFor="phone">Phone number</label>
        <input
          className={clsx(styles.input)}
          id="phone"
          type="text"
          value={form.phone}
          onChange={(e) => setPhone(e)}
        />
      </div>
      <div className={clsx(styles.field)}>
        <label htmlFor="code">Code</label>
        <input
          className={clsx(styles.input)}
          id="code"
          type="text"
          value={form.code}
          onChange={(e) => setCode(e)}
        />
      </div> */}
      <button
        onClick={() => {
          handleUpdateClick();
        }}
      >
        Update
      </button>
    </div>
  );
};

export default OrderForm;
