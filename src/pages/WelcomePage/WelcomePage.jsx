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
          <WelcomeContainer header="Register" text="Register" />
          <Link to="/register">Add new contacts</Link>
        </>
      ) : (
        <>
          <WelcomeContainer header="Welcome" text="Welcome" />
          <Link to="/register">Register now</Link>
        </>
      )}
    </>
  );
};

export default WelcomePage;
