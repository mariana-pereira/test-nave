import React from 'react';

import closeIcon from '../../assets/Close-Icon.png';
import deleteIcon from '../../assets/Delete-Icon.png';
import editIcon from '../../assets/Edit-Icon.png';

import { Container, Content, Naver } from './styles';

interface ModalProps {
  visible: boolean;
}

const NaverModal: React.FC<ModalProps> = ({ visible }) => {
  return (
    <Container open={visible}>
      <Content>
        <img
          src="https://avatars0.githubusercontent.com/u/26336279?s=460&u=5b67ae546af49ac00ca125f373a3bbaf45a5f765&v=4"
          alt="Mariana Pereira"
        />
        <Naver>
          <div className="close">
            <img src={closeIcon} alt="Fechar" />
          </div>
          <div className="naver-info">
            <h1>Mariana Pereira</h1>
            <span>Front-end Developer</span>

            <strong>Idade</strong>
            <span>Lorem Ipsum</span>

            <strong>Tempo de empresa</strong>
            <span>Lorem Ipsum</span>

            <strong>Projetos que participou</strong>
            <span>Lorem Ipsum</span>

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
