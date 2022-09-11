import { useSelector, useDispatch } from 'react-redux';

import { getFilter } from '../../redux/filter/filter-selectors';
import { setFilter } from '../../redux/filter/filter-actions';

import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';

const PhonebookPage = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <>
      <Filter value={filter} onChange={onSetFilter} />
      <ContactList />
    </>
  );
};

export default PhonebookPage;
