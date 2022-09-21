import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ContactItem } from './ContactItem/ContactItem';
// import { Loader } from '../Loader/Loader';
import { Container } from './ContactList.module';
import {
  getFilteredContacts,
  getFilter,
} from '../../redux/filter/filter-selectors';
import { getContact } from '../../redux/contacts/contacts-selectors';

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContact);

  return (
    <Container>
      <ul>
        <ContactItem data={getFilteredContacts(contacts, filter)} />
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
