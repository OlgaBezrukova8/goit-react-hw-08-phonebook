import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ContactItem } from './ContactItem/ContactItem';
import { Loader } from '../Loader/Loader';
import { Container } from './ContactList.module';
import {
  getFilteredContacts,
  getFilter,
} from '../../redux/filter/filter-selectors';
import { useGetContactQuery } from '../../redux/contacts/contacts-slice';

export const ContactList = () => {
  const { data, error, isFetching } = useGetContactQuery();
  const filter = useSelector(getFilter);

  return (
    <Container>
      <ul>
        {error && <p>{error.message}</p>}
        {isFetching ? (
          <Loader />
        ) : (
          <ContactItem data={getFilteredContacts(data, filter)} />
        )}
      </ul>
    </Container>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
