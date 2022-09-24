import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { updateContact } from 'redux/contacts/contacts-operations';

import { BasicButton } from '../BasicButton/BasicButton';
import { Container, Form } from 'react-bootstrap';

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
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="mb-1">Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter new user name"
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
            name="number"
            placeholder="Enter new user number"
            onChange={handleChange}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Form.Group>

        <BasicButton
          variant="outline-success"
          type="submit"
          onClick={() => onUpdateContact}
        >
          Update
        </BasicButton>
        <BasicButton
          className="ms-3"
          variant="outline-warning"
          type="submit"
          onClick={() => hideModal()}
        >
          Cancel
        </BasicButton>
      </Form>
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
