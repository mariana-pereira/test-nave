import React from 'react';

import logoImg from '../../assets/logo.png';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logoImg} alt="Nave" />
      <button type="button">Sair</button>
    </Container>
  );
};

export default Header;
