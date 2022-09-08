import PropTypes from 'prop-types';

// import { getFilteredContacts } from '../../redux/filter/filter-selectors';
// import { deleteContact } from '../../redux/items/items-actions';

import { ContactItem } from './ContactItem/ContactItem';
import { Loader } from '../Loader/Loader';
import { Container } from './ContactList.module';

import { useGetContactQuery } from '../../redux/contactsSliceApi';

export const ContactList = () => {
  const { data, error, isLoading } = useGetContactQuery();

  return (
    <Container>
      <ul>
        {error && <p></p>}
        {isLoading ? (
          <Loader />
        ) : (
          data.map(({ id, name, number }) => (
            <ContactItem
              key={id}
              name={name}
              number={number}
              // onDeleteContact={() => dispatch(deleteContact(id))}
              onDeleteContact={() => null}
            />
          ))
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
