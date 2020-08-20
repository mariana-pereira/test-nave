import React from 'react';

import { Container, Content } from './styles';

interface ModalProps {
  visible: boolean;
}

const DeleteModal: React.FC<ModalProps> = ({ visible }) => {
  return (
    <Container open={visible}>
      <Content>
        <h1>Excluir Naver</h1>
        <span>Tem certeza que deseja excluir este Naver?</span>
        <div>
          <button className="cancel" type="button">
            Cancelar
          </button>
          <button className="delete" type="button">
            Excluir
          </button>
        </div>
      </Content>
    </Container>
  );
};

export default DeleteModal;
