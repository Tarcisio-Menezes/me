import React, { useEffect } from 'react';
import Nav from '../components/nav';
import nodeLogo from '../images/node.png';
import mysqlLogo from '../images/mysql.png';
import reactLogo from '../images/react.png';
import mongoLogo from '../images/mongo.png';
import cssLogo from '../images/css.png';
import whereAmI from '../utils/whereAmI';
import '../css/sobre.css';

function About() {
  useEffect(() => {
    whereAmI('about');
  }, []);

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
          <a
            href="https://nodejs.org/en/docs/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ nodeLogo } alt="Logo NodeJS" width="40%" />
          </a>
          <p>
            Testes e desenvolvimento de aplicações e APIs.
          </p>
        </div>
        <div>
          <a
            href="https://dev.mysql.com/doc/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ mysqlLogo } alt="Logo mySQL" width="35%" />
          </a>
          <p>
            Mais performance em suas queries.
          </p>
        </div>
        <div>
          <a
            href="https://docs.mongodb.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ mongoLogo } alt="Logo MongoDB" width="40%" />
          </a>
          <p>
            Banco de dados não relacional com MongoDB.
          </p>
        </div>
        <div className="reactDiv">
          <a
            href="https://pt-br.reactjs.org/docs/getting-started.html"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ reactLogo } alt="Logo ReactJS" width="35%" />
          </a>
          <p>
            Páginas ágeis para a sua estrutura front-end.
          </p>
        </div>
        <div>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ cssLogo } alt="Logo CSS3" width="40%" />
          </a>
          <p>
            Estilizações com CSS.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
