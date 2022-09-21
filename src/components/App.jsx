import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getToken } from '../redux/auth/auth-selectors';
import { getCurrentUser } from '../redux/auth/auth-operations';
import { getContact } from '../redux/contacts/contacts-operations';
import { UserRoutes } from '../components/UserRoutes/UserRoutes';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(getToken);

  useEffect(() => {
    if (token !== '') {
      dispatch(getCurrentUser());
      dispatch(getContact());
    }
  }, [dispatch, token]);

  return <UserRoutes />;
};
