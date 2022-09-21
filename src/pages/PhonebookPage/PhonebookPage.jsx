import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getFilter } from '../../redux/filter/filter-selectors';
import { setFilter } from '../../redux/filter/filter-actions';

// import { Loader } from '../../components/Loader/Loader';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { getToken } from '../../redux/auth/auth-selectors';
import styles from './phonebookPage.module.css';

const PhonebookPage = () => {
  const filter = useSelector(getFilter);
  const token = useSelector(getToken);
  const dispatch = useDispatch();

  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div className={styles.container}>
      {/* TODO: add loader to contact list*/}
      {!token ? (
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
      {/* {error && <p>{error.message}</p>}
      {isFetching ? (
        <Loader />
      ) : ( */}

      {/* )} */}
    </div>
  );
};

export default PhonebookPage;
