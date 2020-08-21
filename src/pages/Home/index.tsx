import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  const [naver, setNaver] = useState<Naver>({} as Naver);
  const [naverId, setNaverId] = useState('');
  const [naverModalIsOpen, setNaverModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [confirmationModalIsOpen, setConfirmationModalIsOpen] = useState(false);

  useEffect(() => {
    api.get('/navers').then((response) => {
      setNavers(response.data);
    });
  }, []);

  const handleOpenNaverModal = async (id: string) => {
    const response = await api.get(`/navers/${id}`);
    setNaverModalIsOpen(true);
    setNaver(response.data);
  };

  const handleDeleteNaver = async () => {
    await api.delete(`navers/${naverId}`);
    setDeleteModalIsOpen(false);
    setConfirmationModalIsOpen(true);

    setNavers(navers.filter((item: Naver) => item.id !== naverId));
  };

  const handleOpenDeleteModal = (id: string) => {
    setNaverId(id);
    setDeleteModalIsOpen(true);
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
            navers.map((item: Naver) => (
              <Naver key={item.id}>
                <button
                  onClick={() => handleOpenNaverModal(item.id)}
                  type="button"
                >
                  <img src={item.url} alt={item.name} />
                </button>
                <strong>{item.name}</strong>
                <span>{item.job_role}</span>
                <div>
                  <button
                    onClick={() => handleOpenDeleteModal(item.id)}
                    type="button"
                  >
                    <img src={deleteIcon} alt="Excluir" />
                  </button>
                  <Link to={`edit-naver/${item.id}`}>
                    <img src={editIcon} alt="Editar" />
                  </Link>
                </div>
              </Naver>
            ))}
        </Navers>
      </Container>
      <NaverModal
        visible={naverModalIsOpen}
        naver={naver}
        closeModal={() => setNaverModalIsOpen(false)}
      />
      <DeleteModal
        visible={deleteModalIsOpen}
        closeModal={() => setDeleteModalIsOpen(false)}
        deleteNaver={handleDeleteNaver}
      />
      <ConfirmationModal
        title="Naver excluído"
        message="Naver excluído com sucesso"
        closeModal={() => setConfirmationModalIsOpen(false)}
        visible={confirmationModalIsOpen}
      />
    </>
  );
};

export default Home;
