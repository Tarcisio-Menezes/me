import React from 'react';
import { Link } from 'react-router-dom';
import '../css/nav.css';

function Nav() {
  return (
    <section className="navigator">
      <h3>
        <Link to="/">
          Desenvolvedor Full-stack
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
          Projetos
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
