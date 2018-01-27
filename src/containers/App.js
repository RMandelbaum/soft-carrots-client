import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Jokes from './Jokes';
import Home from '../components/Home'
import About from '../components/About'
import JokeShow from './JokeShow'
import JokeForm from './JokeForm'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <Switch>
            <Route exact path = '/' component = {Home} />
            <Route exact path = '/about' component = {About} />
            <Route exact path = '/jokes' component = {Jokes} />
            <Route exact path = '/jokes/new' component = {JokeForm} />
            <Route exact path = '/jokes/:id' component = {JokeShow} />
           </Switch>
        </div>
     </Router>

    );
  }
}

export default App;
