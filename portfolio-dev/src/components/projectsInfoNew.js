import React from 'react';

function projectsInfoNew() {
  return (
    <aside className="projectsRepo">
      <h3>Rick and Morty Page</h3>
      <article>
        Procure pelos seus personagens favoritos e alguns episódios
        do seriado Rick and Morty.
      </article>
      <div className="rickRepo">
        <a
          href="https://github.com/Tarcisio-Menezes/rickandmortpage"
          target="_blank"
          rel="noreferrer"
        >
          <p>Link para o repositório</p>
        </a>
      </div>
      <div className="rickApp">
        <a
          href="https://tarcisio-menezes.github.io/rickandmortpage/"
          target="_blank"
          rel="noreferrer"
        >
          <p>Link para a aplicação</p>
        </a>
      </div>
      <h3>Spotify Simple Clone</h3>
      <article>
        Spotify Simple Clone é uma série de comandos e queries
        que modela um banco de dados MySQL.
      </article>
      <div className="spotRepo">
        <a
          href="https://github.com/Tarcisio-Menezes/MySql-One-for-all"
          target="_blank"
          rel="noreferrer"
        >
          <p>Link para o repositório</p>
        </a>
      </div>
    </aside>
  );
}

export default projectsInfoNew;
