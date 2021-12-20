import React from 'react';
import { Card } from 'react-bootstrap';

function projectsInfo() {
  const repo = <p>Link para o repositório</p>;
  const aplication = <p>Link para a aplicação</p>;
  return (
    <aside className="projectsRepo">
      <Card style={ { width: '13rem' } } className="card">
        <Card.Body>
          <Card.Title>Full-Stack Task-List</Card.Title>
          <Card.Text>
            Esta aplicação utiliza a stack MERN e consiste no gerenciamento de
            tarefas rápidas. Ideal para tornar o ambiente de trabalho mais organizado
            e consequentemente mais produtivo.
          </Card.Text>
          <div className="spotRepo">
            <Card.Link
              href="https://github.com/Tarcisio-Menezes/project-TaskList"
              target="_blank"
              rel="noreferrer"
            >
              { repo }
            </Card.Link>
          </div>
        </Card.Body>
      </Card>
      <Card style={ { width: '13rem' } } className="card">
        <Card.Body>
          <Card.Title>Mars Explorer</Card.Title>
          <Card.Text>
          MarsExplorer é uma aplicação full-stack, desenvolvida em Node.js, 
          MySQL e React.js, que proporciona uma viagem ao planeta vermelho sem sair da cadeira,
          a todas pessoas cadastradas.
          </Card.Text>
          <div className="spotRepo">
            <Card.Link
              href="https://github.com/Tarcisio-Menezes/MarsExplorer"
              target="_blank"
              rel="noreferrer"
            >
              { repo }
            </Card.Link>
          </div>
        </Card.Body>
      </Card>
      <Card style={ { width: '13rem' } } className="card">
        <Card.Body>
          <Card.Title>Digital Republic Bank</Card.Title>
          <Card.Text>
          Digital Republic Bank é uma aplicação desenvolvida em Node.js, 
          Express, MySQL e Sequelize que disponibiliza funções essênciais 
          relacionadas ao gerenciamento de contas bancárias.
          </Card.Text>
          <div className="spotRepo">
            <Card.Link
              href="https://github.com/Tarcisio-Menezes/digitalRepublicBank"
              target="_blank"
              rel="noreferrer"
            >
              { repo }
            </Card.Link>
          </div>
        </Card.Body>
      </Card>
      <Card style={ { width: '13rem' } } className="card">
        <Card.Body>
          <Card.Title>Trybe Wallet</Card.Title>
          <Card.Text>
            Nesta aplicação é possível registrar e converter despesas,
            em diferentes taxas de câmbio, para o real, de forma simples e organizada.
          </Card.Text>
          <div className="walletRepo">
            <Card.Link
              href="https://github.com/Tarcisio-Menezes/trybeWallet"
              target="_blank"
              rel="noreferrer"
            >
              { repo }
            </Card.Link>
          </div>
          <div className="walletApp">
            <Card.Link
              href="https://tarcisio-menezes.github.io/trybeWallet/"
              target="_blank"
              rel="noreferrer"
            >
              { aplication }
            </Card.Link>
          </div>
        </Card.Body>
      </Card>
      <Card style={ { width: '13rem' } } className="card">
        <Card.Body>
          <Card.Title>Talker Manager</Card.Title>
          <Card.Text>
            Talker Manager é uma API CRUD (Create, Read, Update e Delete) de
            palestrantes, que utiliza o módulo fs, sem qualquer interação
            com banco de dados.
          </Card.Text>
          <div className="talkerRepo">
            <Card.Link
              href="https://github.com/Tarcisio-Menezes/Project-Talker-Manager"
              target="_blank"
              rel="noreferrer"
            >
              { repo }
            </Card.Link>
          </div>
        </Card.Body>
      </Card>
      <Card style={ { width: '13rem' } } className="card">
        <Card.Body>
          <Card.Title>Rick and Morty Page</Card.Title>
          <Card.Text>
            Procure pelos seus personagens favoritos e alguns episódios
            do seriado Rick and Morty.
          </Card.Text>
          <div className="rickRepo">
            <Card.Link
              href="https://github.com/Tarcisio-Menezes/rickandmortpage"
              target="_blank"
              rel="noreferrer"
            >
              { repo }
            </Card.Link>
          </div>
          <div className="rickApp">
            <Card.Link
              href="https://tarcisio-menezes.github.io/rickandmortpage/"
              target="_blank"
              rel="noreferrer"
            >
              { aplication }
            </Card.Link>
          </div>
        </Card.Body>
      </Card>
      <Card style={ { width: '13rem' } } className="card">
        <Card.Body>
          <Card.Title>Spotify Simple Clone</Card.Title>
          <Card.Text>
            Spotify Simple Clone é uma série de comandos e queries
            que modela um banco de dados MySQL.
          </Card.Text>
          <div className="spotRepo">
            <Card.Link
              href="https://github.com/Tarcisio-Menezes/MySql-One-for-all"
              target="_blank"
              rel="noreferrer"
            >
              { repo }
            </Card.Link>
          </div>
        </Card.Body>
      </Card>
    </aside>
  );
}

export default projectsInfo;
