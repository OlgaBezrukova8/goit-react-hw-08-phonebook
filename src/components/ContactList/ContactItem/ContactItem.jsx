import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from '../../../redux/filter/filter-selectors';
import { deleteContact } from '../../../redux/contacts/contacts-operations';
import { getIsLoading } from '../../../redux/contacts/contacts-selectors';
import { Item, Button, Text } from '../ContactList.module';

export const ContactItem = ({ data }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

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
