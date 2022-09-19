import { Notify } from 'notiflix';
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
      if (payload.error) {
        switch (payload.error.status) {
          case 400:
            Notify.failure("Can't create user or user exists");
            break;

          case 500:
          default:
            Notify.failure('Server is unavaliable');
            break;
        }
      } else {
        Notify.success('Success registration');
      }
    } catch (error) {
      Notify.failure('Unexpected error');
      console.log(error);
    }
  };

  return <RegisterForm onSubmit={handleSubmit} />;
};

export default RegisterPage;
