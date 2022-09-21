import { Item, Button, Text } from '../ContactList.module';
import { getFilteredContacts } from '../../../redux/filter/filter-selectors';
import { deleteContact } from '../../../redux/contacts/contacts-operations';

export const ContactItem = ({ data }) => {
  return (
    <>
      {getFilteredContacts(data).map(({ id, name, number }) => (
        <Item key={id}>
          <Text>
            {name}: {number}
          </Text>
          {/* {TODO: add disabled={isLoading} to button} */}

          {/* <Button onClick={() => deleteContact(id)} disabled={isLoading}> */}
          <Button onClick={() => deleteContact(id)}>Delete</Button>
        </Item>
      ))}
    </>
  );
};
