import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import PropTypes from 'prop-types';

import { addContact } from 'redux/contacts/contacts-operations';
import { getContact } from 'redux/contacts/contacts-selectors';
import { useContacts } from 'shared/hooks/useContacts';

import { BasicButton } from 'components/BasicButton/BasicButton';
import { Form } from 'react-bootstrap';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContact);
  const isLoading = useContacts();

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

  const handleSubmit = event => {
    event.preventDefault();

    if (isExists(name)) {
      Notify.warning(`${name} is already in contacts`);
      return false;
    }

    dispatch(addContact({ name, number }));
    return true;
  };

  const handleReset = event => {
    if (handleSubmit(event)) {
      setName('');
      setNumber('');
    }
  };

  return (
    <Form onSubmit={handleReset}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label className="mb-1">Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter name"
          onChange={handleChange}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label className="mb-1">Number</Form.Label>
        <Form.Control
          type="number"
          name="tel"
          placeholder="Enter number"
          onChange={handleChange}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Form.Group>
      <div className="d-grid">
        <BasicButton
          className="mt-1"
          size="md"
          type="submit"
          disabled={isLoading}
        >
          Add contact
        </BasicButton>
      </div>
    </Form>
  );
};

ContactForm.propTypes = {
  value: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
