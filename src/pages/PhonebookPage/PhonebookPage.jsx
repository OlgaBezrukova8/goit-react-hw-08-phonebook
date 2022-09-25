import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getFilter } from 'redux/filter/filter-selectors';
import { setFilter } from 'redux/filter/filter-actions';

import { Loader } from 'components/Loader/Loader';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';

import { useAuth } from 'shared/hooks/useAuth';
import { useContacts } from 'shared/hooks/useContacts';

import Container from 'react-bootstrap/Container';

const PhonebookPage = () => {
  const filter = useSelector(getFilter);
  const isLoggedIn = useAuth();
  const isLoading = useContacts();
  const dispatch = useDispatch();

  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <Container className="d-flex pt-4">
      {isLoading && <Loader />}
      {!isLoggedIn ? (
        <Navigate to="/" />
      ) : (
        <>
          <div className="w-50 me-5">
            <Filter value={filter} onChange={onSetFilter} />
            <ContactList />
          </div>
          <div className="w-50">
            <ContactForm />
          </div>
        </>
      )}
    </Container>
  );
};

export default PhonebookPage;
