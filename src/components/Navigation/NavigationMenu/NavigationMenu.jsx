import { NavLink } from 'react-router-dom';
import { AiOutlineQq } from 'react-icons/ai';
import Navbar from 'react-bootstrap/Navbar';

import { useToken } from 'shared/hooks/useToken';

export const NavigationMenu = () => {
  const token = useToken();

  return (
    <div className="d-flex align-items-center">
      <Navbar.Brand>
        <AiOutlineQq className="d-block text-primary" size="23" />
      </Navbar.Brand>

      <NavLink to="/" className="text-uppercase text-decoration-none">
        Phonebook
      </NavLink>

      {token && (
        <NavLink
          to="/contacts"
          className="ms-3 text-uppercase text-decoration-none"
        >
          Contacts
        </NavLink>
      )}
    </div>
  );
};
