import { Outlet } from 'react-router-dom';
import { NavigationMenu } from '../Navigation/NavigationMenu/NavigationMenu';
import { NavigationAuth } from '../Navigation/NavigationAuth/NavigationAuth';
import styles from '../Navigation/navigation.module.css';

const Navigation = () => {
  return (
    <>
      <nav className={styles.container}>
        <NavigationMenu />
        <NavigationAuth />
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
