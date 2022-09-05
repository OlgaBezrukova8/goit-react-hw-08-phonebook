import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { getFilteredContacts } from '../../redux/filter/filter-selectors';
import { deleteContact } from '../../redux/items/items-actions';

import { ContactItem } from './ContactItem/ContactItem';
import { Container } from './ContactList.module';

export const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const contactsMap = contacts.map(({ id, name, number }) => (
    <ContactItem
      key={id}
      name={name}
      number={number}
      onDeleteContact={() => dispatch(deleteContact(id))}
    />
  ));

  return (
    <Container>
      <ul>{contactsMap}</ul>
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
