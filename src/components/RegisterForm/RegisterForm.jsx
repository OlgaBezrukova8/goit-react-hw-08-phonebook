import { useState } from 'react';
import { Container, Label, Input } from './registerForm.module';

export const RegisterForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleReset = event => {
    if (onSubmit(event)) {
      setName('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <Container>
      <form onSubmit={handleReset}>
        <Label>
          Name
          <Input
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Enter user name"
            required
          />
        </Label>

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

        <button type="submit">Sign up</button>
      </form>
    </Container>
  );
};
