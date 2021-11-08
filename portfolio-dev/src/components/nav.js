import React from 'react';
import { Link } from 'react-router-dom';
import '../css/nav.css';

function Nav() {
  return (
    <section className="navigator">
      <h3>
        Desenvolvedor Full Stack
      </h3>
      <nav>
        <Link to="/">
          Home
        </Link>
      </nav>
      <nav>
        <Link to="/sobre">
          Sobre
        </Link>
      </nav>
      <nav>
        <Link to="/projetos">
          Projetos
        </Link>
      </nav>
      <nav>
        <Link to="/contato">
          Contato
        </Link>
      </nav>
    </section>
  );
}

export default Nav;
