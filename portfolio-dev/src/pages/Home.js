import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Nav from '../components/nav';
import Footer from '../components/footer';

function Home() {
  return (
    <div>
      <Nav />
      <h1>
        Tarcísio A R Menezes
      </h1>
      <p>
      Desenvolvedor Full-Stack com experiência em Node JS, MongoDB, MySQL, 
      JavaScript, React, HTML, Jest, CSS dentre outras tecnologias.
      </p>
      <Link to="/sobre">
        <Button 
          variant="outline-secondary"
        >
          Conheça mais
        </Button>
      </Link>
      <Footer />
    </div>
  );
}

export default Home;
