import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';

import { Container, Label, Input } from './loginForm.module';

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
    <Container>
      <form onSubmit={handleSubmit}>
        <Label>
          Email
          <Input
            value={email}
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Enter user email"
            required
          />
        </Label>

        <Label>
          Password
          <Input
            value={password}
            onChange={handleChange}
            type="text"
            name="password"
            placeholder="Enter user password"
            required
          />
        </Label>

        <button type="submit">Login</button>
      </form>
    </Container>
  );
};
