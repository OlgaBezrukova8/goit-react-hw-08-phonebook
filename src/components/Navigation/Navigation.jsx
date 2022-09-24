import { Outlet } from 'react-router-dom';
import { NavigationMenu } from '../Navigation/NavigationMenu/NavigationMenu';
import { NavigationAuth } from '../Navigation/NavigationAuth/NavigationAuth';

import { Container, Navbar } from 'react-bootstrap';

export const Navigation = () => {
  return (
    <>
      <Navbar className="navbar sticky-top bg-light">
        <Container className="container" fluid>
          <NavigationMenu />
          <Navbar.Collapse>
            <NavigationAuth />
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
};
