import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from 'components/SharedLayout/SharedLayout.module.scss';

const SharedLayout = () => {
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
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
