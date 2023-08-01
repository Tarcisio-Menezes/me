import React, { useEffect } from 'react';
import Nav from '../components/nav';
import { Link } from 'react-router-dom';
import whereAmI from '../utils/whereAmI';
import DateInfo from '../components/dateInfo'
import '../css/sobre.css';

function About() {
  useEffect(() => {
    whereAmI('about');
  }, []);

  return (
    <div className="about">
      <Nav />
      <h2>
        Minha história
      </h2>
      <p className="paragraphAbout">
        Sou uma pessoa que sempre curtiu computadores,
        no ensino médio cursei informática no Centro Paula Souza
        em Mococa - SP, eu e meu amigo de longa data Kleber. Lá 
        começamos com C++, aqueles conhecidos programinhas que
        rodam em um terminal, tipo fórmula de Bháskara, mas Logo
        conhecemos o Delphi, mais especificamente o Delphi 7, daí
        foi só alegria! Eram janelas e botões pra tudo que é lado!
        Foi apenas no começo do terceiro colegial, naquela famosa
        época dos vestibulares que decidi seguir rumos diferentes
        e cursar Química, aqui eu vislumbrava a experimentação e 
        logo passei a gostar e vivenciar o ambiente escolar; e também 
        a educação em si! Entretanto, com 17 anos ainda somos muito
        jovens para escolhermos uma profissão!
      </p>
      <p className="paragraphAbout">
        Na Química me graduei e me tornei mestre em Quḿica Ananlítica.
        Fiz muitas coisas no tempo em que morei em Alfenas - MG.
        A Unifal me propiciou experiências incríveis, fui bolsista de 
        iniciação a docência durante 4 anos. Trabalhei com Química
        Inorgânica; sendo bolsista de iniciação científca em
        um projeto de caracterização de complexos de paládio IV.
        Também fui bolsista de extensão universitária em um projeto
        de divulgação científica chamado Casa Ciência. Além disso conheci
        pessoas incríveis que se tornaram amigos para toda a vida.
        Conheci minha gata S2.
        E ali, sempre com o note rodando alguma distro nova de 
        alugm sabor de Ubuntu, fazendo gambiarras pra rodar
        sistemas de 64 bits em um note com apenas 2 GB de RAM (
          terrível o dia que o plugin do Netflix parou de rodar
          nos browsers de computadores de 32 bits
        ). No mestrado ainda tive a oportunidade de conhecer o
        versátil editor Latéx. Até que após um tempo trabalhando
        em uma fábrica de produtos de limpeza, e impulsionado
        por amigos, decidi estudar programação e dar um giro em
        minha carreira.
      </p>
      <p className='paragraphAbout'>
        Cursei então a formação de desenvolvimento web da Trybe,
        em 2021, o curso nessa época era sensacional, aprendi um
        pouco sobre a base da programação e um tanto bom de JavaScript!
        Aqui acabei encanando com back-end, minhas apis ficavam demais.
        Quem quiser é só checar na aba de <Link to="/projetos">ínicio de carreira </Link>.
        Isso foi no ano da pandemia de covid 19, ano terrível,
        mas no fim dele conesegui minha primeira oportunidade
        como desenvolvedor back-end. Começaria então minha jornada na
        Digital Republic, trabalhando alocado na até então
        Donus, Soluções de pagamentos...
      </p>
      <DateInfo />
    </div>
  );
}

export default About;
