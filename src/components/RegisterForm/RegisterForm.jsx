import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/auth/auth-operations';
import { Container, Label, Input } from './registerForm.module';

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