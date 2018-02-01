import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from '../components/NavBar';
import Jokes from './Jokes';
import Home from '../components/Home';
import Random from '../components/Random';
import JokeForm from './JokeForm';
import About from '../components/About';
import { getJokes } from '../actions/jokes';
import { Link } from 'react-router-dom';
import '../styles/App.css';

class App extends Component {

  componentDidMount(){
    this.props.getJokes()
  }


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
            <Route exact path = '/about' component = {About} />
            <Route exact path = '/random' component = {Random} />
            <Route exact path = '/jokes' render = {() => (<Jokes jokes={this.props.jokes} />)} />
            <Route exact path = '/jokes/new' component = {JokeForm} />
           </Switch>
        </div>
     </Router>

    );
  }


}

const mapStateToProps = state => {
  return {
    jokes: state.jokes
    }
  }

export default connect(mapStateToProps, { getJokes })(App);
