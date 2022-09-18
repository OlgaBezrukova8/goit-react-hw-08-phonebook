import { useSignUpMutation } from '../../redux/auth/auth-slice';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const [addUser] = useSignUpMutation();

  const handleSubmit = async event => {
    event.preventDefault();

    const { name, email, password } = event.target;
    const user = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    try {
      const payload = await addUser(user);
      console.log(payload);
      // TODO: add error handling
    } catch (error) {
      console.log(error);
    }
  };

  return <RegisterForm onSubmit={handleSubmit} />;
};

export default RegisterPage;
