import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';
import ErrorPage from './pages/ErrorPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/sobre" component={ Sobre } />
        <Route exact path="/projetos" component={ Projetos } />
        <Route exact path="/contato" component={ Contato } />
        <Route path="/*" component={ ErrorPage } />
      </Switch>
    </Provider>
  );
}

export default App;
