import React from 'react';
import { Link } from 'react-router-dom';
import '../css/nav.css';

function Nav() {
  return (
    <section className="navigator">
      <h3>
        <Link to="/">
          Desenvolvedor Back-End
        </Link>
      </h3>
      <nav className="homeLink">
        <Link to="/">
          Home
        </Link>
      </nav>
      <nav className="aboutLink">
        <Link to="/sobre">
          Sobre
        </Link>
      </nav>
      <nav className="projectsLink">
        <Link to="/projetos">
          Início de Carreira
        </Link>
      </nav>
      <nav className="contactLink">
        <Link to="/contato">
          Contato
        </Link>
      </nav>
    </section>
  );
}

export default Nav;
