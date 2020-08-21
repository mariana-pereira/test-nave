import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { Container, Content } from './styles';
import ConfirmationModal from '../ConfirmationModal';

interface ModalProps {
  visible: boolean;
  naver_id: string;
}

const DeleteModal: React.FC<ModalProps> = ({ visible, naver_id }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [confirmationModalIsOpen, setConfirmationModalIsOpen] = useState(false);

  useEffect(() => {
    setModalIsOpen(visible);
  }, [visible]);

  const handleDeleteNaver = async () => {
    setModalIsOpen(false);
    await api.delete(`navers/${naver_id}`);
    setConfirmationModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Container open={modalIsOpen}>
      <Content>
        <h1>Excluir Naver</h1>
        <span>Tem certeza que deseja excluir este Naver?</span>
        <div>
          <button onClick={handleCloseModal} className="cancel" type="button">
            Cancelar
          </button>
          <button onClick={handleDeleteNaver} className="delete" type="button">
            Excluir
          </button>
        </div>
      </Content>
      <ConfirmationModal
        title="Naver excluído"
        message="Naver excluído com sucesso!"
        visible={confirmationModalIsOpen}
      />
    </Container>
  );
};

export default DeleteModal;
