import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { getLoggedIn } from '../../redux/auth/auth-selectors';

const PrivateRoute = () => {
  const isLoggedIn = useSelector(getLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;