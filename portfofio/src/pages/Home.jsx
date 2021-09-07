import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Nav from '../components/Nav';
import '../css/Home.css';

class Home extends React.Component {
  render() {

    return(
      <Container fluid="md">
        <div className="mainHome">
          <section className="classHome">
            <Nav />
            <div>
              <h1>
                Sej@ bem vind@ a minha página!
              </h1>
              <h3>
                Tarcísio Menezes - Desenvolvedor Full-Stack
              </h3>
            </div>
          </section>
        </div>
      </Container>
    );
  }
}

export default Home;
