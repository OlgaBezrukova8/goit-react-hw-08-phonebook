import { Navigate } from 'react-router-dom';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import { useAuth } from 'shared/hooks/useAuth';

const RegisterPage = () => {
  const isLoggedIn = useAuth();

  return <>{isLoggedIn ? <Navigate to="/contacts" /> : <RegisterForm />}</>;
};

export default RegisterPage;
