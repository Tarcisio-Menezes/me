import React from 'react';
import Nav from '../components/nav';
import goku from '../images/goku.png';
import '../css/errorPage.css';

function ErrorPage() {
  return (
    <div className="error">
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
    </div>
  );
}

export default ErrorPage;