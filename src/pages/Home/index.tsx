import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import Header from '../../components/Header';
import NaverModal from '../../components/NaverModal';
import DeleteModal from '../../components/DeleteModal';

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
  const [naverModalIsOpen, setNavModalIsOpen] = useState(false);
  const [naverModalId, setNaverModalId] = useState('');

  useEffect(() => {
    api.get('/navers').then((response) => {
      setNavers(response.data);
    });
  }, []);

  const handleOpenNaverModal = (id: string) => {
    setNavModalIsOpen(true);
    setNaverModalId(id);
  };

  return (
    <>
      <Header />
      <Container>
        <div className="header">
          <h1>Navers</h1>
          <button type="button">
            <Link to="/new-naver">Adicionar Naver</Link>
          </button>
        </div>
        <Navers>
          {navers &&
            navers.map((naver: Naver) => (
              <Naver
                onClick={() => handleOpenNaverModal(naver.id)}
                key={naver.id}
              >
                <img src={naver.url} alt={naver.name} />
                <strong>{naver.name}</strong>
                <span>{naver.job_role}</span>
                <div>
                  <img src={deleteIcon} alt="Excluir" />
                  <Link to={`edit-naver/${naver.id}`}>
                    <img src={editIcon} alt="Editar" />
                  </Link>
                </div>
              </Naver>
            ))}
        </Navers>
      </Container>
      <NaverModal visible={naverModalIsOpen} naver_id={naverModalId} />
      <DeleteModal visible={false} />
    </>
  );
};

export default Home;
