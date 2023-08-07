import React, { useEffect } from 'react';
import Nav from '../components/nav';
import whereAmI from '../utils/whereAmI';
import DateInfo from '../components/dateInfo';
import '../css/trabalho.css';

function Work() {
  useEffect(() => {
    whereAmI('work');
  }, []);

  return (
    <div className="work">
      <Nav />
      <h2>
        O kotlin e a orientação a objetos
      </h2>
      <p className="paragraphWork">
        A orientação a objetos, famigerada (POO), é o 
        primeiro ponto que chama a atenção de um programador
        em início de carreira, que veio de um contexto bastante
        funcional ali do JavaScript, com express, react ...
      </p>
      <DateInfo />
    </div>
  );
}

export default Work;
