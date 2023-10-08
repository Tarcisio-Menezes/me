import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Curiosities from './pages/Curiosities';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Ideas from './pages/Ideas';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/about" component={ About } />
      <Route exact path="/curiosities" component={ Curiosities } />
      <Route exact path="/contact" component={ Contact } />
      <Route exact path="/ideas" component={ Ideas } />
      <Route path="/*" component={ ErrorPage } />
    </Switch>
  );
}

export default App;
