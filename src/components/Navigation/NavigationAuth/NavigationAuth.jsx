import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { UserMenu } from '../../UserMenu/UserMenu';
import { getToken } from '../../../redux/auth/auth-selectors';

export const NavigationAuth = () => {
  const token = useSelector(getToken);

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
