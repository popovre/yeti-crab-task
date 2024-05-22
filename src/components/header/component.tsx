import clsx from 'clsx';
import styles from './style.module.scss';
import Link from 'next/link';
import AdminButtonContainer from '../admin-button/container';

const Header = (props) => {
  return (
    <header>
      <div className={clsx(styles.root)}>
        <div className={clsx(styles.navigation)}>
          <Link href={'/'} className={clsx(styles.logo)}>
            Главная
          </Link>
          <Link href={'/'} className={clsx(styles.orders)}>
            Заявки
          </Link>
          <AdminButtonContainer>Администратор?</AdminButtonContainer>
        </div>
      </div>
    </header>
  );
};

export default Header;
