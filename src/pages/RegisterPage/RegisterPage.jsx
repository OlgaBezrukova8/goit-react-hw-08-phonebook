import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix';
import { useSignUpMutation } from '../../redux/auth/auth-slice';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import { setUser } from '../../redux/user/user-actions';

const RegisterPage = () => {
  const [addUser] = useSignUpMutation();
  const dispatch = useDispatch();

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
        const { user, token } = payload.data;

        const userLoggedIn = {
          name: user.name,
          email: user.email,
          token: token,
        };

        dispatch(setUser(userLoggedIn));
      }
    } catch (error) {
      Notify.failure('Unexpected error');
      console.log(error);
    }
  };

  return <RegisterForm onSubmit={handleSubmit} />;
};

export default RegisterPage;
