import React from 'react';
import { useHistory } from 'react-router-dom';
import { logout } from '../../services/auth';

import logoImg from '../../assets/logo.png';

import { Container } from './styles';

const Header: React.FC = () => {
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push('/');
  };

  return (
    <Container>
      <img src={logoImg} alt="Nave" />
      <button onClick={handleLogout} type="button">
        Sair
      </button>
    </Container>
  );
};

export default Header;
