import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <section>
      <h3>
        Desenvolvedor Full Stack
      </h3>
      <nav>
        <Link to="/">
          Home
        </Link>
        <Link to="/sobre">
          Sobre
        </Link>
        <Link to="/projetos">
          Projetos
        </Link>
        <Link to="/contato">
          Contato
        </Link>
      </nav>
    </section>
  );
}

export default Nav;