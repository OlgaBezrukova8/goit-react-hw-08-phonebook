import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { getUsers } from '../../redux/users/selectors';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';

export const PhonebookPage = () => {
  const [filter, setFilter] = useState('');
  // const users = useSelector(getUsers);

  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  // );

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const handleFilter = event => {
    setFilter(event.target.value);
  };

  // const getFilterName = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return users.filter(el => el.name.toLowerCase().includes(normalizedFilter));
  // };

  // const deleteContact = useCallback(
  //   contactId => {
  //     setContacts(prevState => prevState.filter(({ id }) => id !== contactId));
  //   },
  //   [setContacts]
  // );

  // const visibleName = getFilterName();

  return (
    <>
      <Filter value={filter} onChange={handleFilter} />
      <ContactList />
    </>
  );
};
