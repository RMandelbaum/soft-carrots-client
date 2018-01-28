import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from '../components/NavBar';
import Jokes from './Jokes';
import Home from '../components/Home'
import Random from '../components/Random'
import JokeForm from './JokeForm'
import { Link } from 'react-router-dom';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="TopNav">
            <h1><Link to="/">Soft Carrots</Link></h1>
          </div>
          <Navbar />
          <Switch>
            <Route exact path = '/' component = {Home} />
            <Route exact path = '/random' component = {Random} />
            <Route exact path = '/jokes' component = {Jokes} />
            <Route exact path = '/jokes/new' component = {JokeForm} />
           </Switch>
        </div>
     </Router>

    );
  }
}

export default App;
