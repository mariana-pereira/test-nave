import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { login } from '../../services/auth';

import logoImg from '../../assets/logo.png';

import { Container, Form } from './styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const response = await api.post('/users/login', { email, password });
    login(response.data.token);
    history.push('/home');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <img src={logoImg} alt="Nave" />
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            placeholder="E-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
};

export default Login;
