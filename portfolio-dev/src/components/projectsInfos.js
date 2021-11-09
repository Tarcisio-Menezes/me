import React from 'react';
import { Card } from 'react-bootstrap';

function projectsInfo() {
  const repo = <p>Link para o repositório</p>;
  return (
    <aside className="projectsRepo">
      <Card style={ { width: '18rem' } }>
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
      <Card style={ { width: '18rem' } }>
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
              Link para a aplicação
            </Card.Link>
          </div>
        </Card.Body>
      </Card>
      <Card style={ { width: '18rem' } }>
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
    </aside>
  );
}

export default projectsInfo;
