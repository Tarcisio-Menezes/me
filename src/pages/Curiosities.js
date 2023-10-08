import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Nav from '../components/nav';
import projectsInfo from '../components/projectsInfos';
import whereAmI from '../utils/whereAmI';
import '../css/curiosities.css';

function Projects() {
  useEffect(() => {
    whereAmI('curiosities');
  }, []);

  return (
    <div className="projects">
      <Nav />
      <section className="titleProject">
        <h2>
          Algumas de minhas primeiras criações
        </h2>
        <Link to="/Contato">
          <p>
            Conheça mais projetos curiosos visitando minhas redes.
          </p>
        </Link>
        <p>
            Com o fim do plano free do Heroku algumas saíram do ar! :/
        </p>
      </section>
      <section className="projectsInfo">
        { projectsInfo() }
      </section>
    </div>
  );
}

export default Projects;
