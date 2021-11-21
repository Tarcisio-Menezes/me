import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Nav from '../components/nav';
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
        Desenvolvedor Full-stack com experiência em Node JS, MongoDB, MySQL,
        JavaScript, React, HTML, Jest, CSS dentre outras tecnologias.
      </p>
      <Link to="/sobre">
        <Button
          variant="outline-secondary"
        >
          Conheça mais
        </Button>
      </Link>
    </div>
  );
}

export default Home;
