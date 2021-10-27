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

function Projects() {
  return (
    <div>
      <Nav />
      <section>
        <h2>
          Sobre meus projetos
        </h2>
      </section>
      <section className="projectsRepo">
        <h3>Trybe Wallet</h3>
        <p>
          <img src={ repoGit } width="1.5%" alt="Logo do repositório Git " />
          <a 
            href="https://github.com/Tarcisio-Menezes/trybeWallet"
            target="_blank" 
            rel="noreferrer"
          >
            Link para o repositório
          </a>
          <img src={ walletLogo } width="1.5%" alt="Logo da aplicação Wallet" />
          <a 
            href="https://tarcisio-menezes.github.io/trybeWallet/"
            target="_blank" 
            rel="noreferrer"
          >
            Link para a aplicação
          </a>
        </p>
        <h3>Talker Manager</h3>
        <p>
          <img src={ repoGit } width="1.5%" alt="Logo do repositório Git " />
          <a 
            href="https://github.com/Tarcisio-Menezes/Project-Talker-Manager"
            target="_blank" 
            rel="noreferrer"
          >
            Link para o repositório
          </a>
        </p>
        <h3>Rick and Morty Page</h3>
        <p>
          <img src={ repoGit } width="1.5%" alt="Logo do repositório Git " />
          <a 
            href="https://github.com/Tarcisio-Menezes/rickandmortpage"
            target="_blank" 
            rel="noreferrer"
          >
            Link para o repositório
          </a>
          <img src={ rickLogo } width="3%" alt="Logo da aplicação Rick and Morty page" />
          <a 
            href="https://tarcisio-menezes.github.io/rickandmortpage/"
            target="_blank" 
            rel="noreferrer"
          >
            Link para a aplicação
          </a>
        </p>
        <h3>Spotify Simple Clone</h3>
        <p>
          <img src={ repoGit } width="1.5%" alt="Logo do repositório Git " />
          <a 
            href="https://github.com/Tarcisio-Menezes/MySql-One-for-all"
            target="_blank" 
            rel="noreferrer"
          >
            Link para o repositório
          </a>
        </p>
        <div className="slidesProjects">
          <Carousel>
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
                alt="Three slide - Rick and Morty page"
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
                alt="Four slide - Spotfy clone"
              />
              <Carousel.Caption  className ="mysqlP">
                <h3>Spotfy Clone</h3>
                <p>
                Spotify Simple Clone é uma série de comandos e queries 
                que modela um banco de dados MySQL.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
      <div className="moreJobs">
        <h3> 
          <a 
            href="https://github.com/Tarcisio-Menezes"
            target="_blank" 
            rel="noreferrer"
          > 
            Conheça meus projetos mais atuais visitando minha página no gitHub
          </a>
        </h3>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
