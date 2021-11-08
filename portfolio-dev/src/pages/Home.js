import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Nav from '../components/nav';
import '../css/home.css';

function Home() {
  return (
    <div className="home">
      <Nav />
      <h1>
        Tarcísio A R Menezes
      </h1>
      <hr />
      <p className="paragraphHome">
        Desenvolvedor Full-Stack com experiência em Node JS, MongoDB, MySQL,
        JavaScript, React, HTML, Jest, CSS dentre outras tecnologias.
      </p>
      <Link to="/sobre">
        <Button
          variant="outline-secondary"
        >
          Conheça mais
        </Button>
      </Link>
      <footer className="homeFooter">
        <p>
          Copyright © 2021 - Tarcísio Menezes Desenvolvedor Full-Stack
        </p>
      </footer>
    </div>
  );
}

export default Home;
