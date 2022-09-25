import { Link } from 'react-router-dom';

import { WelcomeContainer } from 'components/WelcomeContainer/WelcomeContainer';
import { LoginForm } from 'components/LoginForm/LoginForm';

import { useAuth } from 'shared/hooks/useAuth';
import Container from 'react-bootstrap/Container';

const WelcomePage = () => {
  const isLoggedIn = useAuth();

  return (
    <Container className="pt-4">
      {isLoggedIn ? (
        <>
          <WelcomeContainer
            header="You are successfully logged into your account, enjoy :)"
            text="You can now add and update contacts."
          />
          <Link className="text-decoration-none text-uppercase" to="/contacts">
            Add new contacts
          </Link>
        </>
      ) : (
        <>
          <WelcomeContainer
            header="Welcome to the phone  book :)"
            text="Here you can store all the contacts you need to keep in touch. You can also easily update or delete contacts that are out of date."
          />
          <LoginForm />
          <p className="mt-4">
            If you're not registered -{' '}
            <Link className="text-decoration-none" to="/register">
              sign up
            </Link>{' '}
            now.
          </p>
        </>
      )}
    </Container>
  );
};

export default WelcomePage;
