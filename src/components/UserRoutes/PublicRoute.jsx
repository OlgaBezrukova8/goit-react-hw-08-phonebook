import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { getLoggedIn } from '../../redux/auth/auth-selectors';

const PublicRoute = ({ restricted }) => {
  const isLoggedIn = useSelector(getLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
