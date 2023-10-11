import React from 'react';
import Nav from '../components/nav';
import { Link } from 'react-router-dom';
import goku from '../images/goku.gif';
import '../css/errorPage.css';

function ErrorPage() {
  return (
    <div className="error">
      <Nav />
      <section className="errorPage">
        <h4>
          Ooops, essa rota mudou! Clique
          <Link to="/"> aqui </Link>
          para acessar o novo endereço!
        </h4>
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
