import React from 'react';
import Nav from '../components/nav';

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
      <button 
        type="button"
        className="btn btn-outline-primary">
          Saiba mais
      </button>
    </div>
  );
}

export default Home;
