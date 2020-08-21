import React from 'react';

import { Container, Content } from './styles';

interface ModalProps {
  visible: boolean;
  closeModal(): void;
  deleteNaver(): void;
}

const DeleteModal: React.FC<ModalProps> = ({
  visible,
  closeModal,
  deleteNaver,
}) => {
  return (
    <Container open={visible}>
      <Content>
        <h1>Excluir Naver</h1>
        <span>Tem certeza que deseja excluir este Naver?</span>
        <div>
          <button onClick={closeModal} className="cancel" type="button">
            Cancelar
          </button>
          <button onClick={deleteNaver} className="delete" type="button">
            Excluir
          </button>
        </div>
      </Content>
    </Container>
  );
};

export default DeleteModal;
