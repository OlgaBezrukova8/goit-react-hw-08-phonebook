import { NavLink } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useToken } from 'shared/hooks/useToken';

export const NavigationAuth = () => {
  const token = useToken();

  return (
    <div>
      {token ? (
        <UserMenu />
      ) : (
        <>
          <NavLink to="/register">Sign up</NavLink>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
    </div>
  );
};
