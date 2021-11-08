/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Nav from '../components/nav';
import talkerProject from '../images/talker.png';
import rickProject from '../images/rickandmorty.png';
import walletProject from '../images/wallet.png';
import mysqlProject from '../images/spotifyclone.png';
import taskProject from '../images/task.png';
import projectsInfo from '../components/projectsInfos';
import projectsInfoNew from '../components/projectsInfoNew';
import '../css/projetos.css';

function Projects() {
  return (
    <div>
      <Nav />
      <section className="titleProject">
        <h2>
          Alguns dos meus projetos
        </h2>
        <Link to="/Contato">
          <p>
            Conheça sobre meus trabalhos mais atuais visitando minhas redes.
          </p>
        </Link>
      </section>
      <section className="projectsInfo">
        <div className="slidesProjects">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ walletProject }
                alt="First slide - Project Trybe Wallet"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ talkerProject }
                alt="Second slide - Project Talker Manager"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ rickProject }
                alt="Three slide - Rick and Morty page"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ mysqlProject }
                alt="Four slide - Spotfy clone"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ taskProject }
                alt="Five slide - Task List"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        { projectsInfo() }
        { projectsInfoNew() }
      </section>
    </div>
  );
}

export default Projects;
