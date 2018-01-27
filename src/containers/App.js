import React, { Component } from 'react';
//import { BrowserRouter as Router, Route} from 'react-router-dom';
//import NavBar from '../components/NavBar';
import Jokes from './Jokes';
//import ChocolatesPage from './ChocolatesPage';

import './App.css';



class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      jokes: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3001/api/jokes')
      .then(response => response.json())
      .then(jokes => this.setState({ jokes }))
  }

  render() {

    console.log(this.state)
    return (
        <div className="App">
          <Jokes jokes={this.state.jokes} />
       </div>
    );
  }
}

export default App;
