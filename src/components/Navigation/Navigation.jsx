import { NavLink, Outlet } from 'react-router-dom';
import { getNavigationClassName } from '../../functions/getNavigationClassName';
import styles from '../Navigation/navigation.module.css';

const Navigation = () => {
  return (
    <>
      <nav className={styles.container}>
        <ul className={styles.list}>
          <li>
            <NavLink className={getNavigationClassName} to="/">
              Phonebook
            </NavLink>
          </li>
          <li>
            <NavLink className={getNavigationClassName} to="/add">
              Add contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
