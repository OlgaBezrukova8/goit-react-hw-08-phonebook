import { NavLink } from 'react-router-dom';

export const NavigationAuth = () => {
  return (
    <div>
      <NavLink to="/register">Sign up</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};
