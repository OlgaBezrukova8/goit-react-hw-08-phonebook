import { Navigate } from 'react-router-dom';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import { useAuth } from 'shared/hooks/useAuth';
import Container from 'react-bootstrap/Container';

const RegisterPage = () => {
  const isLoggedIn = useAuth();

  return (
    <Container className="pt-4">
      {isLoggedIn ? <Navigate to="/contacts" /> : <RegisterForm />}
    </Container>
  );
};

export default RegisterPage;
