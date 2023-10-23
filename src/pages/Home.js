import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Nav from '../components/nav';
import CellInfo from '../components/cellInfo';
import perfilPhoto from '../images/perfil.jpeg';
import whereAmI from '../utils/whereAmI';
import '../css/home.css';

function Home() {
  useEffect(() => {
    whereAmI('home');
  }, []);

  return (
    <div className="home">
      <Nav />
      <img
        className="homePerfil"
        src={ perfilPhoto }
        alt="Foto de perfil de Tarcísio"
      />
      <h1>
        Tarcísio Menezes
      </h1>
      <hr />
      <p className="paragraphHome">
        Desenvolvedor Back-End com experiência em Kotlin, PostgreeSQL,
        Spring e um pouco de JavaScript. Atualmente trabalhando na
        BEES Bank Brasil, uma empresa AB-Inbev.
      </p>
      <Link to="/about">
        <Button
          variant="outline-secondary"
        >
          Conheça mais
        </Button>
      </Link>
      <CellInfo />
    </div>
  );
}

export default Home;
