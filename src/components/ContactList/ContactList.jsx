import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ContactItem } from './ContactItem/ContactItem';
import { getFilteredContacts, getFilter } from 'redux/filter/filter-selectors';
import { getContact } from 'redux/contacts/contacts-selectors';

import ListGroup from 'react-bootstrap/ListGroup';

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContact);

  return (
    <ListGroup variant="flush">
      <ContactItem data={getFilteredContacts(contacts, filter)} />
    </ListGroup>
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
