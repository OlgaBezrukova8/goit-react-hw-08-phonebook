import { LoginForm } from '../../components/LoginForm/LoginForm';
import { useLogInMutation } from '../../redux/auth/auth-slice';

const LoginPage = () => {
  const [loginUser] = useLogInMutation();

  const handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = event.target;
    const user = { email: email.value, password: password.value };

    try {
      const payload = await loginUser(user);
      console.log(payload);
    } catch (error) {
      console.log(error);
    }
  };

  return <LoginForm onSubmit={handleSubmit} />;
};

export default LoginPage;
