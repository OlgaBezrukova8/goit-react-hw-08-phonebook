import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { logIn } from 'redux/auth/auth-operations';

import { BasicButton } from 'components/BasicButton/BasicButton';
import { Form, Row, Col } from 'react-bootstrap';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    name === 'email' ? setEmail(value) : setPassword(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-3">
      <Row>
        <Col md>
          <Form.Group className="mb-3" controlId="formBasicEmail">
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
        </Col>

        <Col md>
          <Form.Group className="mb-3" controlId="formBasicPassword">
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
        </Col>
      </Row>
      <div className="d-grid">
        <BasicButton className="mt-1" size="md" type="submit">
          Login
        </BasicButton>
      </div>
    </Form>
  );
};

LoginForm.propTypes = {
  value: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};
