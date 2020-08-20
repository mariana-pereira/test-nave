import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import closeIcon from '../../assets/Close-Icon.png';
import deleteIcon from '../../assets/Delete-Icon.png';
import editIcon from '../../assets/Edit-Icon.png';

import { Container, Content, Naver } from './styles';

interface ModalProps {
  visible: boolean;
  naver_id: string;
}

interface Naver {
  id: string;
  name: string;
  admission_date: Date;
  job_role: string;
  user_id: string;
  project: string;
  birthdate: Date;
  url: string;
}

const NaverModal: React.FC<ModalProps> = ({ visible, naver_id }) => {
  const [naver, setNaver] = useState<Naver | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    api.get(`navers/${naver_id}`).then((response) => {
      setNaver(response.data);
      setModalIsOpen(visible);
    });
  }, [naver_id, visible]);

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  return (
    <Container open={modalIsOpen}>
      <Content>
        <img src={naver?.url} alt={naver?.name} />
        <Naver>
          <div className="close">
            <button onClick={handleModalClose} type="button">
              <img src={closeIcon} alt="Fechar" />
            </button>
          </div>
          <div className="naver-info">
            <h1>{naver?.name}</h1>
            <span>{naver?.job_role}</span>

            <strong>Idade</strong>
            <span>{naver?.birthdate}</span>

            <strong>Tempo de empresa</strong>
            <span>{naver?.admission_date}</span>

            <strong>Projetos que participou</strong>
            <span>{naver?.project}</span>

            <div>
              <img src={deleteIcon} alt="Excluir" />
              <img src={editIcon} alt="Editar" />
            </div>
          </div>
        </Naver>
      </Content>
    </Container>
  );
};

export default NaverModal;
