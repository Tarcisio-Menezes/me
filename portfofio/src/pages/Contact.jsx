import React from 'react';
import Nav from '../components/Nav';
import { FaPhoneAlt, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import '../css/Contact.css';


class Contact extends React.Component {
  render() {

    return(
      <div className="mainContact">
        <Nav />
        <section className="classContact">
          <div>
            <h1>Entre em contato!</h1>
            <section>
              <p> <BiMessageRounded /> tarcisioquim@gmail.com</p>
              <FaPhoneAlt /> 16 996314645
              <br /> <br />
              <a href="https://github.com/Tarcisio-Menezes" target="blank"><FaGithub /> GitHub</a>
              <br /> <br />
              <a href="https://www.linkedin.com/in/tarcísio-menezes/" target="blank"><FaLinkedinIn /> Linkedin</a>
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
