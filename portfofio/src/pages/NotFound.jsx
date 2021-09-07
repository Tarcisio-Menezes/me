import React from 'react';
import Nav from '../components/Nav';
import '../css/NotFound.css';

class NotFound extends React.Component {
  render() {

    return(
      <section>
        <Nav />
        Sou a página não encontrada
      </section>
    );
  }
}

export default NotFound;
