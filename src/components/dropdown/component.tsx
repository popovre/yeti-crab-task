import clsx from 'clsx';
import styles from './style.module.scss';

const Dropdown = ({ children, onClose }) => {
  return (
    <div className={clsx(styles.root)}>
      <button
        className={clsx(styles.button)}
        onClick={() => {
          onClose();
        }}
      >
        Закрыть
      </button>
      {children}
    </div>
  );
};

export default Dropdown;
