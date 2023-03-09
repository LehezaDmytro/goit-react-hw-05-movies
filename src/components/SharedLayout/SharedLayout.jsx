import { NavLink, Outlet } from 'react-router-dom';
import styles from 'components/SharedLayout/SharedLayout.module.scss';

export const SharedLayout = () => {
  return (
    <>
      <header className={styles.header}>
        <NavLink to={'/'} className={styles.link}>
          Home
        </NavLink>
        <NavLink to={'/movies'} className={styles.link}>
          Movies
        </NavLink>
      </header>
      <Outlet />
    </>
  );
};
