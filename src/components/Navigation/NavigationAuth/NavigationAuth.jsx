import { NavLink } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useToken } from 'shared/hooks/useToken';

export const NavigationAuth = () => {
  const token = useToken();

  return (
    <div className="ms-auto">
      {token ? (
        <UserMenu />
      ) : (
        <>
          <NavLink
            className="me-2 text-uppercase text-decoration-none"
            to="/register"
          >
            Sign up
          </NavLink>
          <NavLink className="text-uppercase text-decoration-none" to="/login">
            Login
          </NavLink>
        </>
      )}
    </div>
  );
};
