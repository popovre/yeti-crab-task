'use client';

import clsx from 'clsx';
import styles from './style.module.scss';
import { toggleAdmin } from '@/redux/slices/admin';
import { useDispatch, useSelector } from 'react-redux';

const AdminButton = ({ children }) => {
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.admin.admin);
  return (
    <button
      onClick={() => {
        dispatch(toggleAdmin());
      }}
      className={clsx(styles.adminButton)}
    >
      {children}
    </button>
  );
};

export default AdminButton;
