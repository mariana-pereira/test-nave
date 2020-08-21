import React from 'react';

import closeIcon from '../../assets/Close-Icon.png';

import { Container, Content } from './styles';

interface ModalProps {
  visible: boolean;
  closeModal(): void;
  title: string;
  message: string;
}

const ConfirmationModal: React.FC<ModalProps> = ({
  visible,
  closeModal,
  title,
  message,
}) => {
  return (
    <Container open={visible}>
      <Content>
        <div className="message">
          <h1>{title}</h1>
          <span>{message}</span>
        </div>
        <div className="close">
          <button onClick={closeModal} type="button">
            <img src={closeIcon} alt="Fechar" />
          </button>
        </div>
      </Content>
    </Container>
  );
};

export default ConfirmationModal;
