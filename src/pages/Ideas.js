import React, { useEffect } from 'react';
import Nav from '../components/nav';
import whereAmI from '../utils/whereAmI';
import DateInfo from '../components/dateInfo';
import '../css/ideas.css';

function Work() {
  useEffect(() => {
    whereAmI('ideas');
  }, []);

  return (
    <div className="ideas">
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
      <h2>
        Tipagem
      </h2>
      <p className="paragraphWork">
        Ela pode soar como estranha em um primeiro momento,
        como assim precisar especificar o retorno de uma função?
        Mas, nossa, como faz todo o sentido! Após trabalhar minimamente
        com uma linguagem fortemente tipada fica praticamente
        impossível não vê-la como algo fundamental!
        Essa é a minha humilde opinião! Tanto que ao voltar a mexer
        nesse código da página é algo que me incomoda fortemente.
        Futuramente preciso aprender typescript para dar uma refatorada
        legal aqui ...
      </p>
      <h2>
        Testes unitários e integrados
      </h2>
      <p className="paragraphWork">
        Trabalhar com testes é algo indispensável no mundo do
        desenvolvimento. Foi um ponto que talvez não tenha me 
        desenvolvido o suficiente durante minha formação inicial
        na trybe. Via como algo "avançado" e difícil de ser realizado.
        Entretanto, quando inciei na Donus, agora BEES Bank, me deparei
        com um cenário que não existia código novo sem que houvesse
        um teste para cobrir as novas linhas escritas.
        Em pouco tempo me tornei amigo dos testes e hoje curto
        muito pensar testes, principalmente de integração.
        Com eles além de obviamente, testarmos as features entregues,
        podemos pegar cenários de borda e entender por completo
        o fluxo desenvolvido, determinando o comportamento para
        100% daquilo que se é esperado...
      </p>
      <DateInfo />
    </div>
  );
}

export default Work;
