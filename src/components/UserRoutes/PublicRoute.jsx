import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'shared/hooks/useAuth';

const PublicRoute = () => {
  const isLoggedIn = useAuth();

  return isLoggedIn ? <Navigate to="/contacts" /> : <Outlet />;
};

export default PublicRoute;
