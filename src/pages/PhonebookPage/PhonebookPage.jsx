import { useSelector, useDispatch } from 'react-redux';

import { getFilter } from '../../redux/filter/filter-selectors';
import { setFilter } from '../../redux/filter/filter-actions';

import { Loader } from '../../components/Loader/Loader';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { useGetContactQuery } from '../../redux/contacts/contacts-slice';
import styles from './phonebookPage.module.css';

const PhonebookPage = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const { data, error, isFetching } = useGetContactQuery();

  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div className={styles.container}>
      {/* TODO: add loader to contact list*/}

      {error && <p>{error.message}</p>}
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <div>
            <Filter value={filter} onChange={onSetFilter} />
            <ContactList contacts={data} />
          </div>
          <div>
            <ContactForm contacts={data} />
          </div>
        </>
      )}
    </div>
  );
};

export default PhonebookPage;
