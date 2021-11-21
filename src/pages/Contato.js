import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Nav from '../components/nav';
import gitLogo from '../images/git.png';
import linkedinLogo from '../images/linkedin.png';
import whatsLogo from '../images/whats.png';
import whereAmI from '../utils/whereAmI';
import '../css/contato.css';

function Contact() {
  useEffect(() => {
    whereAmI('contact');
  }, []);

  return (
    <div className="contact">
      <Nav />
      <div className="contactTitle">
        <br />
        <h1>
          Fale comigo!
        </h1>
        <p className="contactSub">
          Se procura alguém para desenvolver aplicações web com o que há
          de mais moderno no mundo dev, entre em contato!
        </p>
        <h4 className="contactSub">
          <a
            href="https://drive.google.com/file/d/17742Bb21UoxP3vmzahjZzW7tJTI8t9Pz/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Baixe o meu currículo aqui.
          </a>
        </h4>
      </div>
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
          <img
            src={ whatsLogo }
            width="10%"
            alt="WhatsApp logo"
          />
          Enviar uma mensagem
        </Button>
        <div className="contactTel">
          <p>
            (16) 996314645 - tarcisioquim@gmail.com
          </p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
