import { useDeleteContactMutation } from '../../../redux/contacts/contacts-slice';
import { Item, Button, Text } from '../ContactList.module';
import { getFilteredContacts } from '../../../redux/filter/filter-selectors';

export const ContactItem = ({ data }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <>
      {getFilteredContacts(data).map(({ id, name, number }) => (
        <Item key={id}>
          <Text>
            {name}: {number}
          </Text>
          <Button onClick={() => deleteContact(id)} disabled={isLoading}>
            Delete
          </Button>
        </Item>
      ))}
    </>
  );
};
