import { Children, FC, ReactNode } from 'react';

import styles from './Navbar.module.css';

const Navbar: FC = () => {
  return (
    <nav className={styles.nav}>
      <a href="/" className={styles.siteTitle}>
        Site Name
      </a>
      <ul>
        <CustomLink href="/pricing">Pricing</CustomLink>
        <CustomLink href="/about">About</CustomLink>
      </ul>
    </nav>
  );
};

const CustomLink: FC<{ href: string; children: ReactNode }> = ({
  href,
  children,
  ...props
}) => {
  const path = window.location.pathname;
  return (
    <li className={path === href ? styles.active : ''}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  );
};

export default Navbar;
