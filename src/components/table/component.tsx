import clsx from 'clsx';
import OrderRowContainer from '../order-row/container';
import styles from './style.module.scss';
import AmountCounter from '../amount-counter/component';
import AddButton from '../add-button/component';

const Table = ({ orders, initialAmount, createNewOrder }) => {
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
      <AddButton createNewOrder={createNewOrder}>Добавить заявку</AddButton>
    </div>
  );
};

export default Table;
