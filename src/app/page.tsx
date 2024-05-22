import TableContainer from '@/components/table/container';
import styles from './page.module.scss';
import clsx from 'clsx';

export default function Home() {
  return (
    <div className={styles.root}>
      <div className={clsx(styles.tableWrapper)}>
        <h1 className={clsx(styles.title)}>Заявки на доставку</h1>
        <TableContainer />
      </div>
    </div>
  );
}
