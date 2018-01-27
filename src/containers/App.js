import React, { Component } from 'react';
//import { BrowserRouter as Router, Route} from 'react-router-dom';
//import NavBar from '../components/NavBar';
import Jokes from './Jokes';
//import ChocolatesPage from './ChocolatesPage';

import './App.css';

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      jokes: []
    }
  }

  componentDidMount(){
    fetch(`${API_URL}/jokes`)
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
