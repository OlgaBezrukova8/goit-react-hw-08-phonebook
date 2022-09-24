import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useToken } from 'shared/hooks/useToken';
import { getCurrentUser } from 'redux/auth/auth-operations';
import { getContact } from 'redux/contacts/contacts-operations';
import { Navigation } from './Navigation/Navigation';
import { UserRoutes } from './UserRoutes/UserRoutes';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

export const App = () => {
  const dispatch = useDispatch();
  const token = useToken();

  useEffect(() => {
    if (token !== '') {
      dispatch(getCurrentUser(token));
      dispatch(getContact());
    }
  }, [dispatch, token]);

  return (
    <>
      <Navigation />
      <Container className='pt-4' fluid>
        <UserRoutes />
      </Container>
    </>
  );
};
