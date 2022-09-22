import { Outlet } from 'react-router-dom';
import { NavigationMenu } from '../Navigation/NavigationMenu/NavigationMenu';
import { NavigationAuth } from '../Navigation/NavigationAuth/NavigationAuth';

import { Navbar } from 'react-bootstrap';

const Navigation = () => {
  return (
    <>
      <Navbar className="bg-light">
        <NavigationMenu />
        <Navbar.Collapse className="justify-content-end d-flex">
          <NavigationAuth />
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Navigation;
