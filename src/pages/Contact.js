import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Nav from '../components/nav';
import gitLogo from '../images/git.png';
import linkedinLogo from '../images/linkedin.png';
import whatsLogo from '../images/whats.png';
import whereAmI from '../utils/whereAmI';
import '../css/contact.css';

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
          Aqui ainda está um pouco desatualizado, mas estou trabalhando
          para melhorar. Qualquer dúvida consulte o meu Linkedin, ou melhor,
          me mande um whats.
        </p>
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
