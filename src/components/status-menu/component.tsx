'use client';

import clsx from 'clsx';
import styles from './style.module.scss';
import { statusMenuStructure } from './structure';
import { useSelector } from 'react-redux';
import Loader from '../loader/component';
import { useState } from 'react';

const StatusMenu = ({ orderId, updateStatus, status }) => {
  const [loading, setLoading] = useState(false);
  // const status = useSelector((state) => state.orderStatus.orderStatus);
  // console.log(status, 'status Menu');

  const handleButtonClick = (status) => {
    setLoading(true);
    updateStatus(orderId, status)
      .then(() => {
        setLoading(false);
        console.log('updated');
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <div className={clsx(styles.root)}>
      {loading ? (
        <Loader classNames={[]} />
      ) : (
        <ul className={clsx(styles.statusMenu)}>
          {statusMenuStructure.map((option) => (
            <li key={option.id}>
              <button
                onClick={() => {
                  handleButtonClick({ status: option.value });
                }}
                disabled={option.value == status}
                className={clsx(styles.option, {
                  [styles.active]: option.value == status,
                })}
              >
                {option.value}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StatusMenu;
