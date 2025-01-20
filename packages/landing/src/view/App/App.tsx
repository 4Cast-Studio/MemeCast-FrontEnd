import { Outlet } from 'react-router';
import { ResponsiveNavBar } from '#/component/nav/ResponsiveNavBar';
import { useAnchorScroll } from '#/hook/UseAnchorScroll';

import styles from './App.module.scss';

export function App() {
  useAnchorScroll();

  return (
    <div className={styles.app}>
      <div className={styles.nav}>
        <ResponsiveNavBar />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}
