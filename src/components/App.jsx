import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { useToken } from 'shared/hooks/useToken';
import { getCurrentUser } from 'redux/auth/auth-operations';
import { getContact } from 'redux/contacts/contacts-operations';
import { UserRoutes } from './UserRoutes/UserRoutes';

import 'bootstrap/dist/css/bootstrap.min.css';

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
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <UserRoutes />
    </BrowserRouter>
  );
};
