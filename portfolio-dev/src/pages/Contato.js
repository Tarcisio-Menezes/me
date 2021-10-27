import React from 'react';
import { Button } from 'react-bootstrap';
import Nav from '../components/nav';
import gitLogo from '../images/git.png';
import linkedinLogo from '../images/linkedin.png';

function Contact() {
  return (
    <div>
      <Nav />
      <h1>
        Fale comigo!
      </h1>
      <h3>
        Se procura alguém para desenvolver aplicações web com o que há 
        de mais moderno no mundo dev, entre em contato!
      </h3>
      <section>
      <a
        href="https://github.com/Tarcisio-Menezes"
        target="_blank" rel="noreferrer"
      >
        <img 
          src={ gitLogo }
          width="7%"
          alt="Git logo"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/tarcísio-menezes/"
        target="_blank" rel="noreferrer"
      >
      <img 
        src={ linkedinLogo } 
        width="5%"
        alt="Linkedin logo"
      />
      </a>
      </section>
      <section>
        <Button 
          variant="outline-secondary"
          href="http://api.whatsapp.com/send?1=pt_BR&phone=5516996314645"
          target="_blank"
        >
          Enviar uma mensagem no WhatsApp
        </Button>
      </section>
    </div>
  );
}

export default Contact;
