import { useSelector, useDispatch } from 'react-redux';

import { getFilter } from '../../redux/filter/filter-selectors';
import { setFilter } from '../../redux/filter/filter-actions';

import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';

export const PhonebookPage = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  // );

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <>
      <Filter value={filter} onChange={onSetFilter} />
      <ContactList />
    </>
  );
};
