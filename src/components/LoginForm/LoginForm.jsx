import { useState } from 'react';
import { Container, Label, Input } from './loginForm.module';

export const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    name === 'email' ? setEmail(value) : setPassword(value);
  };

  const handleReset = event => {
    if (onSubmit(event)) {
      setEmail('');
      setPassword('');
    }
  };

  return (
    <Container>
      <form onSubmit={handleReset}>
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
