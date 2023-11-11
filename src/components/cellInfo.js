import React from 'react';
import goku from '../images/goku.gif';
import '../css/cellInfo.css';

function CellInfo() {


  return (
    <section className='cellInfo'>
        <p className="paragraphCellInfo">
          Poxa que pena! A experiência foi projetada para 
          telas maiores. Mas deixe aí nos favoritos para
          abrir quando estiver no pc!
        </p>
      <img
          src={ goku }
          width="45%"
          alt="Goku chateado por não poder ajudar"
        />
    </section>
  )
}

export default CellInfo;
