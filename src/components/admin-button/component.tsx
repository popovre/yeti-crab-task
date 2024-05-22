import clsx from 'clsx';
import styles from './style.module.scss';

const AdminButton = ({ children }) => {
  return <button className={clsx(styles.adminButton)}>{children}</button>;
};

export default AdminButton;
