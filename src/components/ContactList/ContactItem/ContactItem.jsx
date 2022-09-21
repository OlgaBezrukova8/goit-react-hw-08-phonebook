import { useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/filter/filter-selectors';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { useContacts } from 'shared/hooks/useContacts';
import { Item, Button, Text } from '../ContactList.module';

export const ContactItem = ({ data }) => {
  const dispatch = useDispatch();
  const isLoading = useContacts();

  return (
    <>
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
        </Item>
      ))}
    </>
  );
};
