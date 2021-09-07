import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Nav from '../components/Nav';
import '../css/About.css';

class About extends React.Component {
  render() {

    return(
      <Container fluid="md">
        <Nav />
        <section>
          <h1>Sou a página Sobre</h1>
        </section>
      </Container>
    );
  }
}

export default About;
