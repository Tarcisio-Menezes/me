import React from 'react';
import Nav from '../components/nav';
import nodeLogo from '../images/node.png';
import mysqlLogo from '../images/mysql.png';
import reactLogo from '../images/react.png';
import mongoLogo from '../images/mongo.png';
import cssLogo from '../images/css.png';
import '../css/sobre.css';

function About() {
  return (
    <div className="about">
      <Nav />
      <h2>
        Um pouco sobre mim!
      </h2>
      <p className="paragraphAbout">
        Considero-me um entusiasta da tecnologia,
        principalmente computadores e programação,
        atualmente me encontro em transição de carreira,
        estudando desenvolvimento web
        full-stack pela
        {' '}
        <a href="https://www.betrybe.com">Trybe</a>
        .
      </p>
      <h3 className="subtitle">
        Principais tecnologias de trabalho
      </h3>
      <section className="techs">
        <div>
          <img src={ nodeLogo } alt="Logo NodeJS" width="40%" />
          <p>
            Testes e desenvolvimento de aplicações e APIs.
          </p>
        </div>
        <div>
          <img src={ mysqlLogo } alt="Logo mySQL" width="35%" />
          <p>
            Mais performance em suas queries.
          </p>
        </div>
        <div>
          <img src={ mongoLogo } alt="Logo MongoDB" width="40%" />
          <p>
            Banco de dados não relacional com MongoDB.
          </p>
        </div>
        <div className="reactDiv">
          <img src={ reactLogo } alt="Logo ReactJS" width="35%" />
          <p>
            Páginas ágeis para a sua estrutura front-end.
          </p>
        </div>
        <div>
          <img src={ cssLogo } alt="Logo CSS3" width="40%" />
          <p>
            Estilizações com CSS.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
