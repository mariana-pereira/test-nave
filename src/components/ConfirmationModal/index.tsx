import React from 'react';

import closeIcon from '../../assets/Close-Icon.png';

import { Container, Content } from './styles';

interface ModalProps {
  visible: boolean;
}

const ConfirmationModal: React.FC<ModalProps> = ({ visible }) => {
  return (
    <Container open={visible}>
      <Content>
        <div className="message">
          <h1>Naver excluído</h1>
          <span>Naver excluído com sucesso!</span>
        </div>
        <div className="close">
          <img src={closeIcon} alt="Fechar" />
        </div>
      </Content>
    </Container>
  );
};

export default ConfirmationModal;
