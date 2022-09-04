// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { ContactForm } from '../../components/ContactForm/ContactForm';
import { addContact } from '../../redux/users/actions';
import { getUsers } from '../../redux/users/selectors';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUsers);

  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  // );

  const isExists = contactName => {
    console.log(users);
    const arrayFilter = users.filter(contact => contact.name === contactName);
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
    }
  };

  return <ContactForm onSubmit={handleSubmit} />;
};
