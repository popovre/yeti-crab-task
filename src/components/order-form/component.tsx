import React, { useState } from 'react';
import { useReviewForm } from './use-order-form';
import clsx from 'clsx';
import styles from './style.module.scss';
import Loader from '../loader/component';

const OrderForm = ({ content, onUpdate }) => {
  console.log('render', content);
  const initialState = { ...content };
  const { form, setPhone, setClientName, setDriver } = useReviewForm(
    initialState,
    content?.id
  );

  const [loader, setLoader] = useState(false);

  const handleUpdateClick = () => {
    setLoader(true);
    onUpdate(content.id, form)
      .then((resolve) => {
        setLoader(false);
      })
      .catch((error) => {
        setLoader(false);
        console.log(error);
      });
  };

  return loader ? (
    <Loader classNames={['insideOrderContent']} />
  ) : (
    <div className={clsx(styles.root)}>
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
