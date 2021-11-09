import React from 'react';
import { Card } from 'react-bootstrap';

function projectsInfoNew() {
  return (
    <aside className="projectsRepo">
      <Card style={ { width: '18rem' } }>
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
              Link para o repositório
            </Card.Link>
          </div>
          <div className="rickApp">
            <Card.Link
              href="https://tarcisio-menezes.github.io/rickandmortpage/"
              target="_blank"
              rel="noreferrer"
            >
              Link para a aplicação
            </Card.Link>
          </div>
        </Card.Body>
      </Card>
      <Card style={ { width: '18rem' } }>
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
              Link para o repositório
            </Card.Link>
          </div>
        </Card.Body>
      </Card>
    </aside>
  );
}

export default projectsInfoNew;
