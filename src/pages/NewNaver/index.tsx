import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import Header from '../../components/Header';
import Icon from '../../assets/Vector.png';

import { Container, Form } from './styles';

const NewNaver: React.FC = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [age, setAge] = useState('');
  const [time, setTime] = useState('');
  const [project, setProject] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await api.post('/navers', {
      job_role: role,
      admission_date: time,
      birthdate: age,
      project,
      name,
      url,
    });

    setName('');
    setRole('');
    setAge('');
    setTime('');
    setProject('');
    setUrl('');
  };

  return (
    <>
      <Header />
      <Container>
        <Form onSubmit={handleSubmit}>
          <div className="form-header">
            <Link to="/home">
              <img src={Icon} alt="Voltar" />
            </Link>
            <h1>Adicionar Naver</h1>
          </div>
          <div className="input-container">
            <div>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                placeholder="Nome"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="role">Cargo</label>
              <input
                type="text"
                id="role"
                placeholder="Cargo"
                value={role}
                onChange={(event) => setRole(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="age">Idade</label>
              <input
                type="text"
                id="age"
                placeholder="Idade"
                value={age}
                onChange={(event) => setAge(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="time">Tempo de empresa</label>
              <input
                type="text"
                id="time"
                placeholder="Tempo de empresa"
                value={time}
                onChange={(event) => setTime(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="projects">Projetos que participou</label>
              <input
                type="text"
                id="projects"
                placeholder="Projetos que participou"
                value={project}
                onChange={(event) => setProject(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="avatar">URL da foto do Naver</label>
              <input
                type="text"
                id="avatar"
                placeholder="URL da foto do Naver"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
              />
            </div>
          </div>
          <div className="button-container">
            <button type="submit">Salvar</button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default NewNaver;
