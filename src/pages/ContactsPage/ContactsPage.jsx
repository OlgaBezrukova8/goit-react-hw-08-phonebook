import { Notify } from 'notiflix';
import { ContactForm } from '../../components/ContactForm/ContactForm';

import { useAddContactMutation } from '../../redux/contacts/contactsSliceApi';
import { useGetContactQuery } from '../../redux/contacts/contactsSliceApi';

export const ContactsPage = () => {
  const [addContact] = useAddContactMutation();
  const { data: contacts } = useGetContactQuery();

  const isExists = contactName => {
    const arrayFilter = contacts.filter(
      contact => contact.name === contactName
    );
    return arrayFilter.length !== 0;
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const { name, tel } = event.target;
    const contact = { id: name.value, name: name.value, number: tel.value };

    if (isExists(name.value)) {
      Notify.warning(`${name.value} is already in contacts`);
      return false;
    }
    try {
      await addContact(contact);
      Notify.success('Contact added');
    } catch (error) {
      Notify.failure('Error adding contact');
      console.log(error);
    }
  };

  return <ContactForm onSubmit={handleSubmit} />;
};
