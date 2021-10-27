import React from 'react';
import Nav from '../components/nav';
import nodeLogo from '../images/node.png';
import mysqlLogo from '../images/mysql.png';
import reactLogo from '../images/react.png';
import mongoLogo from '../images/mongo.png';
import Footer from '../components/footer';
import '../css/sobre.css';

function About() {
  return (
    <div className="about">
      <Nav />
      <h2>
        Um pouco sobre mim!
      </h2>
      <p>
        Considero-me um entusiasta da tecnologia, principalmente computadores e programação, 
        atualmente me encontro em transição de carreira, estudando desenvolvimento web 
        full-stack pela <a href="https://www.betrybe.com">Trybe</a>.
      </p>
      <h3>
        Tecnologias de trabalho
      </h3>
      <section className="techs">
        <div>
          <img src={ nodeLogo } alt='Logo NodeJS' width="5%" />
          <p>
            Testes e desenvolvimento de aplicações e API's.
          </p>
        </div>
        <div>
          <img src={ mysqlLogo } alt='Logo mySQL' width="5%" />
          <p>
            Mais performance em suas queries.
          </p>
        </div>
        <div>
          <img src={ reactLogo } alt='Logo ReactJS' width="5%" />
          <p>
            Páginas ágeis para a sua estrutura front-end.
          </p>
        </div>
        <div>
          <img src={ mongoLogo } alt='Logo MongoDB' width="5%" />
          <p>
            Precisa de um banco de dados não relacional? 
            MongoDB é um dos sistemas mais utilizados no mundo.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
