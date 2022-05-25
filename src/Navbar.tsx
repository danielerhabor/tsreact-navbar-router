import { FC } from 'react';

import styles from './Navbar.module.css';

const Navbar: FC = () => {
  return (
    <nav className={styles.nav}>
      <a href="/" className={styles.siteTitle}>
        Site Name
      </a>
      <ul>
        <li className={styles.active}>
          <a href="/about">About</a>
        </li>

        <li>
          <a href="/pricing">Pricing</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
