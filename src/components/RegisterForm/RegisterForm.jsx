import { useState } from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

import { signUp } from 'redux/auth/auth-operations';
import { BasicButton } from 'components/BasicButton/BasicButton';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        return setName(value);

      case 'email':
        return setEmail(value);

      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(signUp({ name, email, password }));
  };

  const handleReset = event => {
    if (handleSubmit(event)) {
      setName('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <Form onSubmit={handleReset} className=" mt-3">
      <Form.Group className="col-md-6 mb-3 mx-auto" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter user name"
          onChange={handleChange}
          value={name}
          required
        />
      </Form.Group>

      <Form.Group className="col-md-6 mb-3 mx-auto" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter user email"
          onChange={handleChange}
          value={email}
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group
        className="col-md-6 mb-3 mx-auto"
        controlId="formBasicPassword"
      >
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Enter user password"
          onChange={handleChange}
          value={password}
          required
        />
        <Form.Text className="text-muted">
          We'll never share your password with anyone else.
        </Form.Text>
      </Form.Group>

      <BasicButton type="submit">Sign up</BasicButton>
    </Form>
  );
};

RegisterForm.propTypes = {
  value: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};
