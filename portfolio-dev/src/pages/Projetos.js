import React from 'react';
import Nav from '../components/nav';
import { Carousel } from 'react-bootstrap';
import jorelProject from '../images/jorel.png'
import recipesProject from '../images/recipes.png'
import starWarsProject from '../images/starwars.png'
import walletProject from '../images/wallet.png'
import aggregationsProject from '../images/mongosh.png'
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
                  Conversor de taxas de câmbio, desenvolvido com ReactJS, Redux e Redux-thunk.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ recipesProject }
                alt="Second slide - Project Recipes App"
              />
              <Carousel.Caption className ="recipesP">
                <h3>Project Recipes App</h3>
                <p>
                  App de receitas versão mobile, desenvolvido com ReactJS, ContextAPI e Hooks.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ starWarsProject }
                alt="Third slide - Star Wars Planets"
              />
              <Carousel.Caption className ="starwarsP">
                <h3>Star Wars Planets</h3>
                <p>
                  Buscador de planetas de Star Wars, desenvolvido com ReactJS, ContextAPI e Hooks.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ jorelProject }
                alt="Four slide - Irmão do Jorel fã page"
              />
              <Carousel.Caption className ="jorelP">
                <h3>Irmão do Jorel fã page</h3>
                <p>
                  Buscador de personagens de Irmão do Jorel, desenvolvido com ReactJS, ContextAPI e Hooks.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ aggregationsProject }
                alt="Five slide - MongoDB Aggregations"
              />
              <Carousel.Caption  className ="mongoP">
                <h3>MongoDB Aggregations</h3>
                <p>
                  Queries aggregations MongoDB.
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
                  Normalização de tabelas e estruturação de banco de dados com mySQL.
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
