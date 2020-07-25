import React from 'react';

import logoImg from '../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi'

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer"/>
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input type="text" placeholder="Nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://avatars2.githubusercontent.com/u/41126285?s=460&u=cff67ee02f89e5c6652d2a0a6df5ca99317c8388&v=4" alt="Carlos Henrique"/>
          <div>
            <strong>dev-rodrigues/github-explorer</strong>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
          </div>

          <FiChevronRight size={20} />

        </a>
        <a href="teste">
          <img src="https://avatars2.githubusercontent.com/u/41126285?s=460&u=cff67ee02f89e5c6652d2a0a6df5ca99317c8388&v=4" alt="Carlos Henrique"/>
          <div>
            <strong>dev-rodrigues/github-explorer</strong>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
          </div>

          <FiChevronRight size={20} />

        </a>
        <a href="teste">
          <img src="https://avatars2.githubusercontent.com/u/41126285?s=460&u=cff67ee02f89e5c6652d2a0a6df5ca99317c8388&v=4" alt="Carlos Henrique"/>
          <div>
            <strong>dev-rodrigues/github-explorer</strong>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
          </div>

          <FiChevronRight size={20} />

        </a>
      </Repositories>
    </>
  );
}

export default Dashboard;
