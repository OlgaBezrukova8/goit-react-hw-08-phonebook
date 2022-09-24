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

const PhonebookPage = () => {
  const filter = useSelector(getFilter);
  const isLoggedIn = useAuth();
  const isLoading = useContacts();
  const dispatch = useDispatch();

  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div className="container d-flex justify-content-between">
      {isLoading && <Loader />}
      {!isLoggedIn ? (
        <Navigate to="/" />
      ) : (
        <>
          <div>
            <Filter value={filter} onChange={onSetFilter} />
            <ContactList />
          </div>
          <div>
            <ContactForm />
          </div>
        </>
      )}
    </div>
  );
};

export default PhonebookPage;
