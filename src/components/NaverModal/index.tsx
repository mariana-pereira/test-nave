import React from 'react';

import closeIcon from '../../assets/Close-Icon.png';
import deleteIcon from '../../assets/Delete-Icon.png';
import editIcon from '../../assets/Edit-Icon.png';

import { Container, Content, Naver } from './styles';

interface ModalProps {
  visible: boolean;
  closeModal(): void;
  naver: Naver;
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

const NaverModal: React.FC<ModalProps> = ({ visible, closeModal, naver }) => {
  return (
    <Container open={visible}>
      <Content>
        <img src={naver?.url} alt={naver?.name} />
        <Naver>
          <div className="close">
            <button onClick={closeModal} type="button">
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
