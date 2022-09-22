import { Link, NavLink } from 'react-router-dom';
import { AiOutlineQq } from 'react-icons/ai';

// import { getNavigationClassName } from 'shared/getNavigationClassName';
import { useToken } from 'shared/hooks/useToken';

import { navLinks } from './navLinks';

// import styles from '../NavigationMenu/navigationMenu.module.css';
import { Navbar } from 'react-bootstrap';

export const NavigationMenu = () => {
  const token = useToken();

  const links = navLinks.map(({ to, name }) => (
    <li key={name}>
      <NavLink to={to}>{name}</NavLink>
    </li>
  ));

  return (
    <div>
      <Navbar.Brand>
        <Link to="/">
          <AiOutlineQq /> Phonebook
        </Link>
      </Navbar.Brand>
      <Navbar.Text>{token && <ul>{links}</ul>}</Navbar.Text>
    </div>
  );
};
