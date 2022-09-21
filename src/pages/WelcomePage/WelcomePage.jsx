import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { WelcomeContainer } from '../../components/WelcomeContainer/WelcomeContainer';
import { getLoggedIn } from '../../redux/auth/auth-selectors';

const WelcomePage = () => {
  const isLoggedIn = useSelector(getLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <>
          <WelcomeContainer
            header="You are successfully logged into your account, enjoy"
            text="You can now add and update contacts."
          />
          <Link to="/contacts">Add new contacts</Link>
        </>
      ) : (
        <>
          <WelcomeContainer
            header="Welcome to the phone  book :)"
            text="Here you can store all the contacts you need to keep in touch. You can also easily update or delete contacts that are out of date."
          />
          <div>
            <p>If you're not already registered, go to</p>
            <Link to="/register">Register now</Link>
          </div>
        </>
      )}
    </>
  );
};

export default WelcomePage;
