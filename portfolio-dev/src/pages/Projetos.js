import React from 'react';
import Nav from '../components/nav';
import { Carousel } from 'react-bootstrap';
import talkerProject from '../images/talker.png';
import rickProject from '../images/rickAndMority.png';
import walletProject from '../images/wallet.png'
import mysqlProject from '../images/mysqlwork.png'
import '../css/projetos.css';

function Projects() {
  return (
    <div>
      <Nav />
      <section>
        <h2>
          Sobre meus projetos
        </h2>
        <div className="slidesProjects">
          <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ walletProject }
                alt="First slide - Project Trybe Wallet"
              />
              <Carousel.Caption className="walletP">
                <h3>Project Trybe Wallet</h3>
                <p>
                Nesta aplicação é possível registrar e converter despesas, 
                em diferentes taxas de câmbio, para o real, de forma simples e organizada.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ talkerProject }
                alt="Second slide - Project Talker Manager"
              />
              <Carousel.Caption className ="recipesP">
                <h3>Project Talker Manager</h3>
                <p>
                Talker Manager é uma API CRUD (Create, Read, Update e Delete) de 
                palestrantes, que utiliza o módulo fs, sem qualquer interação 
                com banco de dados.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ rickProject }
                alt="Third slide - Star Wars Planets"
              />
              <Carousel.Caption className ="rickP">
                <h3>Rick and Morty page</h3>
                <p>
                Procure pelos seus personagens favoritos e alguns episódios 
                do seriado Rick and Morty.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ mysqlProject }
                alt="Six slide - Spotfy clone"
              />
              <Carousel.Caption  className ="mysqlP">
                <h3>Spotfy clone</h3>
                <p>
                Spotify Simple Clone é uma série de comandos e queries 
                que modela um banco de dados MySQL.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </div>
  );
}

export default Projects;
