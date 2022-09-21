import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLoggedIn } from '../../redux/auth/auth-selectors';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const isLoggedIn = useSelector(getLoggedIn);

  return <>{isLoggedIn ? <Navigate to="/contacts" /> : <RegisterForm />}</>;
};

export default RegisterPage;
