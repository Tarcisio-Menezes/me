import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';
import ErrorPage from './pages/ErrorPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/sobre" component={ Sobre } />
      <Route path="/projetos" component={ Projetos } />
      <Route path="/contato" component={ Contato } />
      <Route path="/*" component={ ErrorPage } />
    </Switch>
  );
}

export default App;