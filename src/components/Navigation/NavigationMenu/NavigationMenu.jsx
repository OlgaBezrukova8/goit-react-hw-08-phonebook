import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AiOutlineQq } from 'react-icons/ai';
import { getNavigationClassName } from '../../../shared/getNavigationClassName';
import { navLinks } from './navLinks';
import { getToken } from '../../../redux/auth/auth-selectors';
import styles from '../NavigationMenu/navigationMenu.module.css';

export const NavigationMenu = () => {
  const token = useSelector(getToken);

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
