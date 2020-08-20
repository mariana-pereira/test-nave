import React, { useState, useEffect } from 'react';

import closeIcon from '../../assets/Close-Icon.png';

import { Container, Content } from './styles';

interface ModalProps {
  visible: boolean;
  title: string;
  message: string;
}

const ConfirmationModal: React.FC<ModalProps> = ({
  visible,
  title,
  message,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    setModalIsOpen(visible);
  }, [visible]);

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  return (
    <Container open={modalIsOpen}>
      <Content>
        <div className="message">
          <h1>{title}</h1>
          <span>{message}</span>
        </div>
        <div className="close">
          <button onClick={handleModalClose} type="button">
            <img src={closeIcon} alt="Fechar" />
          </button>
        </div>
      </Content>
    </Container>
  );
};

export default ConfirmationModal;
