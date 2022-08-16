import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './components/Landing';
import Home from './components/Home';
import CreateDog from './components/CreateDog';
import Details from  './components/Details';
import NotFound from './components/NotFound';
import Favorites from './components/Favorites';

function App() {
  return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component= {Landing}/>
            <Route exact path='/home' component= {Home}/>
            <Route path='/create' component= {CreateDog}/>
            <Route path='/home/:id' component= {Details}/>
            <Route path='/favorites' component= {Favorites}/>
            <Route path='*' component={NotFound} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
