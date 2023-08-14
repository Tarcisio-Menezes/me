import React from 'react';
import { Badge } from 'react-bootstrap';
import '../css/dateInfo.css';

function DateInfo() {

  const fomatedDate = '13-08-23';

  return (
    <section className='dateInfo'>
      <p className="paragraphDateInfo">
        Agora vou começar a escrever aqui sempre que possível!
        Até mais!
        <Badge variant="secondary">
          {`Última atualização: ${fomatedDate}`}
        </Badge>
      </p>
    </section>
  )
}

export default DateInfo;
