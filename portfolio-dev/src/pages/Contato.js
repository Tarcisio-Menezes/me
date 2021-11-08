import React from 'react';
import { Button } from 'react-bootstrap';
import Nav from '../components/nav';
import gitLogo from '../images/git.png';
import linkedinLogo from '../images/linkedin.png';
import telLogo from '../images/tel.png';
import '../css/contato.css';

function Contact() {
  return (
    <div>
      <Nav />
      <div className="contactTitle">
        <br />
        <h1>
          Fale comigo!
        </h1>
        <h3 className="contactSub">
          Se procura alguém para desenvolver aplicações web com o que há
          de mais moderno no mundo dev, entre em contato!
        </h3>
        <h4 className="contactSub">
          <a
            href="https://drive.google.com/file/d/1IUxqWsJYDk0Se4z738YgorJ-DJNccdK_/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Baixe o meu currículo aqui.
          </a>
        </h4>
      </div>
      <br />
      <section className="contactLogos">
        <a
          href="https://github.com/Tarcisio-Menezes"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={ gitLogo }
            width="7%"
            alt="Git logo"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/tarcísio-menezes/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={ linkedinLogo }
            width="5%"
            alt="Linkedin logo"
          />
        </a>
      </section>
      <section className="contactButton">
        <Button
          variant="outline-secondary"
          href="http://api.whatsapp.com/send?1=pt_BR&phone=5516996314645"
          target="_blank"
        >
          Enviar uma mensagem no WhatsApp
        </Button>
        <div className="contactTel">
          <img
            src={ telLogo }
            width="2%"
            alt="Smartphone logo"
          />
          <p>(16) 996314645</p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
