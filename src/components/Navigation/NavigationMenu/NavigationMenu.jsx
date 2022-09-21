import { Link, NavLink } from 'react-router-dom';
import { AiOutlineQq } from 'react-icons/ai';

import { getNavigationClassName } from 'shared/getNavigationClassName';
import { useToken } from 'shared/hooks/useToken';

import { navLinks } from './navLinks';

import styles from '../NavigationMenu/navigationMenu.module.css';

export const NavigationMenu = () => {
  const token = useToken();

  const links = navLinks.map(({ to, name }) => (
    <li className={styles.item} key={name}>
      <NavLink className={getNavigationClassName} to={to}>
        {name}
      </NavLink>
    </li>
  ));

  return (
    <div className={styles.navLinks}>
      <Link to="/">
        <AiOutlineQq className={styles.logo} />
      </Link>
      <Link to="/">Phonebook</Link>

      {token && <ul className={styles.list}>{links}</ul>}
    </div>
  );
};
