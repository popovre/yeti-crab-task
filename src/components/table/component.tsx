import clsx from 'clsx';
import OrderRowContainer from '../order-row/container';
import styles from './style.module.scss';
import AmountCounter from '../amount-counter/component';

const Table = ({ orders, initialAmount }) => {
  return (
    <div className={clsx(styles.root)}>
      <AmountCounter initialAmount={initialAmount} />
      <ul className={clsx(styles.orders)}>
        {orders.map((order) => (
          <li key={order?.id}>
            <OrderRowContainer order={order} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Table;
