import React from 'react';
import Nav from '../components/nav';
import goku from '../images/goku.png';
import Footer from '../components/footer';

function ErrorPage() {
  return (
    <div>
      <Nav />
      <h2>
        Ooops, não consegui encontrar esta rota!
      </h2>
      <img
        src={ goku }
        width="20%"
        alt="Goku irritado por não encontrar o caminho"
      />
      <Footer />
    </div>
  );
}

export default ErrorPage;
