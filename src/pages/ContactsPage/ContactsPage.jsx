import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { addContact } from '../../redux/items/items-actions';
import { getItems } from '../../redux/items/items-selectors';

import { ContactForm } from '../../components/ContactForm/ContactForm';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getItems);

  const isExists = contactName => {
    const arrayFilter = contacts.filter(
      contact => contact.name === contactName
    );
    return arrayFilter.length !== 0;
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { name, tel } = event.target;

    if (isExists(name.value)) {
      Notify.warning(`${name.value} is already in contacts`);
      return false;
    } else {
      const contact = { id: name.value, name: name.value, number: tel.value };
      dispatch(addContact(contact));
      return true;
    }
  };

  return <ContactForm onSubmit={handleSubmit} />;
};
