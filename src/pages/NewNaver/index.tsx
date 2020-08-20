import React from 'react';

import Header from '../../components/Header';
import Icon from '../../assets/Vector.png';

import { Container, Form } from './styles';

const NewNaver: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Form>
          <div className="form-header">
            <img src={Icon} alt="Voltar" />
            <h1>Adicionar Naver</h1>
          </div>
          <div className="input-container">
            <div>
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" placeholder="Nome" />
            </div>
            <div>
              <label htmlFor="role">Cargo</label>
              <input type="text" id="role" placeholder="Cargo" />
            </div>
            <div>
              <label htmlFor="age">Idade</label>
              <input type="text" id="age" placeholder="Idade" />
            </div>
            <div>
              <label htmlFor="time">Tempo de empresa</label>
              <input type="text" id="time" placeholder="Tempo de empresa" />
            </div>
            <div>
              <label htmlFor="projects">Projetos que participou</label>
              <input
                type="text"
                id="projects"
                placeholder="Projetos que participou"
              />
            </div>
            <div>
              <label htmlFor="avatar">URL da foto do Naver</label>
              <input
                type="text"
                id="avatar"
                placeholder="URL da foto do Naver"
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
