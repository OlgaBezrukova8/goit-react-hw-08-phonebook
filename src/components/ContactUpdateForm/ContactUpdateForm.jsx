import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { updateContact } from 'redux/contacts/contacts-operations';

import { Container, Label, Input } from '../LoginForm/loginForm.module';

export const ContactUpdateForm = ({ contact, hideModal }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const onUpdateContact = id => {
    dispatch(updateContact({ id, name, number }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    onUpdateContact(contact.id);
    hideModal();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Update user email"
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
            type="text"
            name="number"
            placeholder="Update user password"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <button type="submit" onClick={() => onUpdateContact}>
          Update
        </button>
        <button type="submit" onClick={() => hideModal()}>
          Cancel
        </button>
      </form>
    </Container>
  );
};

ContactUpdateForm.propTypes = {
  value: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
