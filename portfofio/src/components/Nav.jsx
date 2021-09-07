import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css';

class Nav extends React.Component {

  render() {
    return(
      <header>
        <nav className="navigator">
          <Link to="/">Inicio</Link>
          <Link to="/works">Trabalhos</Link>
          <Link to="/contact">Contato</Link>
          <Link to="/about">Sobre</Link>
        </nav>
      </header>
    );
  }
}

export default Nav;
