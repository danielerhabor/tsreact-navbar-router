import { FC, ReactNode } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

import styles from './Navbar.module.css';

const Navbar: FC = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.siteTitle}>
        Site Name
      </Link>
      <ul>
        <CustomLink to="/pricing">Pricing</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
    </nav>
  );
};

const CustomLink: FC<{ to: string; children: ReactNode }> = ({
  to,
  children,
  ...props
}) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? styles.active : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};

export default Navbar;
