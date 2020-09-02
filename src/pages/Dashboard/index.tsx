import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import { Title, Form, Repositories } from './styles'

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt='Github Explorer' />
      <Title>Explore repositórios no Github.</Title>
      <Form>
        <input placeholder='Digite o nome do repositório' />
        <button type='submit'>Pesquisar</button>
      </Form>
      <Repositories>
        <a href='test'>
          <img
            src='https://avatars1.githubusercontent.com/u/13820189?s=460&u=e5e784a3f0ea7c00ea0062508fb96b87b165f56d&v=4'
            alt='Marcos Rodrigues'
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy description test</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href='test'>
          <img
            src='https://avatars1.githubusercontent.com/u/13820189?s=460&u=e5e784a3f0ea7c00ea0062508fb96b87b165f56d&v=4'
            alt='Marcos Rodrigues'
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy description test</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href='test'>
          <img
            src='https://avatars1.githubusercontent.com/u/13820189?s=460&u=e5e784a3f0ea7c00ea0062508fb96b87b165f56d&v=4'
            alt='Marcos Rodrigues'
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy description test</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard
