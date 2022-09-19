import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { UserMenu } from '../../UserMenu/UserMenu';
import { getUser } from '../../../redux/user/user-selectors';

export const NavigationAuth = () => {
  const user = useSelector(getUser);

  return (
    <div>
      {user.token ? (
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
