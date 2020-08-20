import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import Header from '../../components/Header';
import NaverModal from '../../components/NaverModal';
import DeleteModal from '../../components/DeleteModal';
import ConfirmationModal from '../../components/ConfirmationModal';

import deleteIcon from '../../assets/Delete-Icon.png';
import editIcon from '../../assets/Edit-Icon.png';

import { Container, Navers, Naver } from './styles';

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

const Home: React.FC = () => {
  const [navers, setNavers] = useState([]);

  useEffect(() => {
    api.get('/navers').then((response) => {
      setNavers(response.data);
    });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <div className="header">
          <h1>Navers</h1>
          <button type="button">Adicionar Naver</button>
        </div>
        <Navers>
          {navers &&
            navers.map((naver: Naver) => (
              <Naver key={naver.id}>
                <img src={naver.url} alt={naver.name} />
                <strong>{naver.name}</strong>
                <span>{naver.job_role}</span>
                <div>
                  <img src={deleteIcon} alt="Excluir" />
                  <img src={editIcon} alt="Editar" />
                </div>
              </Naver>
            ))}
        </Navers>
      </Container>
      <NaverModal visible={false} />
      <DeleteModal visible={false} />
      <ConfirmationModal visible={false} />
    </>
  );
};

export default Home;
