import React from 'react';

function projectsInfo() {
  const repo = <p>Link para o repositório</p>;
  return (
    <aside className="projectsRepo">
      <h3>Full-Stack Task-List</h3>
      <article>
        Esta aplicação utiliza a stack MERN e consiste no gerenciamento de
        tarefas rápidas. Ideal para o tornar o ambiente de trabalho mais organizado
        e consequentemente mais produtivo.
      </article>
      <div className="spotRepo">
        <a
          href="https://github.com/Tarcisio-Menezes/project-TaskList"
          target="_blank"
          rel="noreferrer"
        >
          { repo }
        </a>
      </div>
      <h3>Trybe Wallet</h3>
      <article>
        Nesta aplicação é possível registrar e converter despesas,
        em diferentes taxas de câmbio, para o real, de forma simples e organizada.
      </article>
      <div className="walletRepo">
        <a
          href="https://github.com/Tarcisio-Menezes/trybeWallet"
          target="_blank"
          rel="noreferrer"
        >
          { repo }
        </a>
      </div>
      <div className="walletApp">
        <a
          href="https://tarcisio-menezes.github.io/trybeWallet/"
          target="_blank"
          rel="noreferrer"
        >
          <p>Link para a aplicação</p>
        </a>
      </div>
      <h3>Talker Manager</h3>
      <article>
        Talker Manager é uma API CRUD (Create, Read, Update e Delete) de
        palestrantes, que utiliza o módulo fs, sem qualquer interação
        com banco de dados.
      </article>
      <div className="talkerRepo">
        <a
          href="https://github.com/Tarcisio-Menezes/Project-Talker-Manager"
          target="_blank"
          rel="noreferrer"
        >
          { repo }
        </a>
      </div>
    </aside>
  );
}

export default projectsInfo;
