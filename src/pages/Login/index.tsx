import React from 'react';

import logoImg from '../../assets/logo.png';

import { Container, Form } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <Form>
        <img src={logoImg} alt="Nave" />
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" placeholder="E-mail" />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="Senha" />
        </div>
        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
};

export default Login;
