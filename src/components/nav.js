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
        <Link to="/about">
          About
        </Link>
      </nav>
      <nav className="curiositiesLink">
        <Link to="/curiosities">
          First creations
        </Link>
      </nav>
      <nav className="ideasLink">
        <Link to="/ideas">
          Ideas
        </Link>
      </nav>
      <nav className="contactLink">
        <Link to="/contact">
          Contact
        </Link>
      </nav>
    </section>
  );
}

export default Nav;
