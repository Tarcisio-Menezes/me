import React from 'react';
import Nav from '../components/nav';
import goku from '../images/goku.png';
import '../css/errorPage.css';

function ErrorPage() {
  return (
    <div>
      <Nav />
      <section className="errorPage">
        <h2>
          Ooops, não consegui encontrar esta rota!
        </h2>
        <img
          src={ goku }
          width="20%"
          alt="Goku irritado por não encontrar o caminho"
        />
      </section>
      <footer className="errorFooter">
        <p>
          Copyright © 2021 - Tarcísio Menezes Desenvolvedor Full-Stack
        </p>
      </footer>
    </div>
  );
}

export default ErrorPage;
