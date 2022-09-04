import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getUsers } from '../../redux/users/selectors';
import { deleteContact } from '../../redux/users/actions';
import { ContactItem } from './ContactItem/ContactItem';
import { Container } from './ContactList.module';

export const ContactList = () => {
  const users = useSelector(getUsers);
  const dispatch = useDispatch();

  const contactsMap = users.map(({ id, name, number }) => (
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
