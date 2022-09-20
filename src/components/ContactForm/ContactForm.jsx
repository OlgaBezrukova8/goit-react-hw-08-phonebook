import { useState } from 'react';
import { Notify } from 'notiflix';
import {
  useAddContactMutation,
  // useGetContactQuery,
} from '../../redux/contacts/contacts-slice';
import { Container, Label, Input } from './ContactForm.module';

export const ContactForm = ({ contacts }) => {
  const [addContact] = useAddContactMutation();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const isExists = contactName => {
    const arrayFilter = contacts.filter(
      contact => contact.name === contactName
    );
    return arrayFilter.length !== 0;
  };

  const handleSubmit = async event => {
    event.preventDefault();

    // const { name, tel } = event.target;
    const contact = { id: name, name: name, number: number };

    if (isExists(name)) {
      Notify.warning(`${name} is already in contacts`);
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

  const handleReset = event => {
    if (handleSubmit(event)) {
      setName('');
      setNumber('');
    }
  };

  return (
    <Container>
      <form onSubmit={handleReset}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            onChange={handleChange}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>

        <Label>
          Number
          <Input
            value={number}
            onChange={handleChange}
            type="number"
            name="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <button type="submit">Add contact</button>
      </form>
    </Container>
  );
};
