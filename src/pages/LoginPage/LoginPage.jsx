import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { useLogInMutation } from '../../redux/auth/auth-slice';
import { setUser } from '../../redux/user/user-actions';

const LoginPage = () => {
  const [loginUser] = useLogInMutation();
  const dispatch = useDispatch();

  const handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = event.target;
    const user = { email: email.value, password: password.value };

    try {
      const payload = await loginUser(user);
      if (payload.error) {
        switch (payload.error.status) {
          case 400:
            Notify.failure("Can't login user");
            break;

          case 500:
          default:
            Notify.failure('Server is unavaliable');
            break;
        }
      } else {
        Notify.success('Success login');
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

  return <LoginForm onSubmit={handleSubmit} />;
};

export default LoginPage;
