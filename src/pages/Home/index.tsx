import React from 'react';

import Header from '../../components/Header';
import NaverModal from '../../components/NaverModal';
import DeleteModal from '../../components/DeleteModal';

import deleteIcon from '../../assets/Delete-Icon.png';
import editIcon from '../../assets/Edit-Icon.png';

import { Container, Navers, Naver } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="header">
          <h1>Navers</h1>
          <button type="button">Adicionar Naver</button>
        </div>
        <Navers>
          <Naver>
            <img
              src="https://avatars0.githubusercontent.com/u/26336279?s=460&u=5b67ae546af49ac00ca125f373a3bbaf45a5f765&v=4"
              alt="Mariana Pereira"
            />
            <strong>Mariana Pereira</strong>
            <span>Front-end Developer</span>
            <div>
              <img src={deleteIcon} alt="Excluir" />
              <img src={editIcon} alt="Editar" />
            </div>
          </Naver>

          <Naver>
            <img
              src="https://avatars0.githubusercontent.com/u/26336279?s=460&u=5b67ae546af49ac00ca125f373a3bbaf45a5f765&v=4"
              alt="Mariana Pereira"
            />
            <strong>Mariana Pereira</strong>
            <span>Front-end Developer</span>
            <div>
              <img src={deleteIcon} alt="Excluir" />
              <img src={editIcon} alt="Editar" />
            </div>
          </Naver>

          <Naver>
            <img
              src="https://avatars0.githubusercontent.com/u/26336279?s=460&u=5b67ae546af49ac00ca125f373a3bbaf45a5f765&v=4"
              alt="Mariana Pereira"
            />
            <strong>Mariana Pereira</strong>
            <span>Front-end Developer</span>
            <div>
              <img src={deleteIcon} alt="Excluir" />
              <img src={editIcon} alt="Editar" />
            </div>
          </Naver>

          <Naver>
            <img
              src="https://avatars0.githubusercontent.com/u/26336279?s=460&u=5b67ae546af49ac00ca125f373a3bbaf45a5f765&v=4"
              alt="Mariana Pereira"
            />
            <strong>Mariana Pereira</strong>
            <span>Front-end Developer</span>
            <div>
              <img src={deleteIcon} alt="Excluir" />
              <img src={editIcon} alt="Editar" />
            </div>
          </Naver>
        </Navers>
      </Container>
      <NaverModal visible={false} />
      <DeleteModal visible={false} />
    </>
  );
};

export default Home;
