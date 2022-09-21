import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/filter/filter-selectors';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { useContacts } from 'shared/hooks/useContacts';
import { Item, Button, Text } from '../ContactList.module';
import { ContactModal } from 'components/ContactModal/ContactModal';

export const ContactItem = ({ data }) => {
  const [contact, setContact] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const isLoading = useContacts();

  return (
    <>
      <ContactModal
        showModal={showModal}
        contact={contact}
        hideModal={() => setShowModal(false)}
      />
      {getFilteredContacts(data).map(({ id, name, number }) => (
        <Item key={id}>
          <Text>
            {name}: {number}
          </Text>
          <Button
            onClick={() => dispatch(deleteContact(id))}
            disabled={isLoading}
          >
            Delete
          </Button>
          <Button
            onClick={() => {
              setContact({ id, name, number });
              setShowModal(true);
            }}
            disabled={isLoading}
          >
            Update
          </Button>
        </Item>
      ))}
    </>
  );
};
