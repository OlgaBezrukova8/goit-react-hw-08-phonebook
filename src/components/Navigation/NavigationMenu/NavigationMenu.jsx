import { NavLink } from 'react-router-dom';
import { AiOutlineQq } from 'react-icons/ai';
import Navbar from 'react-bootstrap/Navbar';

import { useToken } from 'shared/hooks/useToken';

export const NavigationMenu = () => {
  const token = useToken();

  return (
    <div className="d-flex align-items-center">
      <Navbar.Brand>
        <NavLink to="/" className="text-uppercase text-decoration-none">
          <AiOutlineQq className="" /> Phonebook
        </NavLink>

        {token && (
          <NavLink
            to="/contacts"
            className="text-uppercase text-decoration-none"
          >
            Contacts
          </NavLink>
        )}
      </Navbar.Brand>
    </div>
  );
};
