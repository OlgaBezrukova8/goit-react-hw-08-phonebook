import { Outlet } from 'react-router-dom';
import { NavigationMenu } from './NavigationMenu/NavigationMenu';
import { NavigationAuth } from './NavigationAuth/NavigationAuth';

import { Container, Navbar, Nav } from 'react-bootstrap';

export const Navigation = () => {
  return (
    <>
      <Navbar
        expand="lg"
        className="navbar sticky-top"
        bg="dark"
      >
        <Container>
          <Nav className="me-auto">
            <NavigationMenu />
          </Nav>
          <Nav>
            <NavigationAuth />
          </Nav>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
};
