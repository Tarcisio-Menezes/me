import React from 'react';
import Nav from '../components/nav';
import { Carousel } from 'react-bootstrap';
import talkerProject from '../images/talker.png';
import rickProject from '../images/rickandmorty.png';
import walletProject from '../images/wallet.png'
import mysqlProject from '../images/spotifyclone.png'
import repoGit from '../images/repo.png';
import walletLogo from '../images/walletLogo.png';
import rickLogo from '../images/rickLogo.png';
import Footer from '../components/footer';
import '../css/projetos.css';
import { Link } from 'react-router-dom';

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
            </Carousel>
          </div>
          <aside className="projectsRepo">
            <h3>Trybe Wallet</h3>
            <article>
              Nesta aplicação é possível registrar e converter despesas, 
              em diferentes taxas de câmbio, para o real, de forma simples e organizada.
            </article>
            <div class="walletRepo">
              <img src={ repoGit } width="5%" alt="Logo do repositório Git " />
              <a 
                href="https://github.com/Tarcisio-Menezes/trybeWallet"
                target="_blank" 
                rel="noreferrer"
              >
                <p>Link para o repositório</p>
              </a>
            </div>
            <div className="walletApp">
              <img src={ walletLogo } width="5%" alt="Logo da aplicação Wallet" />
              <a 
                href="https://tarcisio-menezes.github.io/trybeWallet/"
                target="_blank" 
                rel="noreferrer"
              >
                <p>Link para a aplicação</p>
              </a>
            </div>
            <h3>Talker Manager</h3>
            <article>
              Talker Manager é uma API CRUD (Create, Read, Update e Delete) de 
              palestrantes, que utiliza o módulo fs, sem qualquer interação 
              com banco de dados.
            </article>
            <div className="talkerRepo">
              <img src={ repoGit } width="5%" alt="Logo do repositório Git " />
              <a 
                href="https://github.com/Tarcisio-Menezes/Project-Talker-Manager"
                target="_blank" 
                rel="noreferrer"
              >
                <p>Link para o repositório</p>
              </a>
            </div>
            <h3>Rick and Morty Page</h3>
            <article>
              Procure pelos seus personagens favoritos e alguns episódios 
              do seriado Rick and Morty.
            </article>
            <div className="rickRepo">
              <img src={ repoGit } width="5%" alt="Logo do repositório Git " />
              <a 
                href="https://github.com/Tarcisio-Menezes/rickandmortpage"
                target="_blank" 
                rel="noreferrer"
              >
                <p>Link para o repositório</p>
              </a>
            </div>
            <div className="rickApp">
              <img src={ rickLogo } width="8%" alt="Logo da aplicação Rick and Morty page" />
              <a 
                href="https://tarcisio-menezes.github.io/rickandmortpage/"
                target="_blank" 
                rel="noreferrer"
              >
                <p>Link para a aplicação</p>
              </a>
            </div>
            <h3>Spotify Simple Clone</h3>
            <article> 
              Spotify Simple Clone é uma série de comandos e queries 
              que modela um banco de dados MySQL.
            </article>
            <div className="spotRepo">
              <img src={ repoGit } width="5%" alt="Logo do repositório Git " />
              <a 
                href="https://github.com/Tarcisio-Menezes/MySql-One-for-all"
                target="_blank" 
                rel="noreferrer"
              >
                <p>Link para o repositório</p>
              </a>
            </div>
          </aside>
        </section>
      <Footer />
    </div>
  );
}

export default Projects;
