import React, { Component } from 'react';
import { connect } from 'react-redux';
import JokeCard from '../components/JokeCard';
import { getJokes } from '../actions/jokes';
import { Link } from 'react-router-dom';
import '../styles/Jokes.css';

class Jokes extends Component{

  componentDidMount(){
    this.props.getJokes()
  }

  render(){
    return(
        <div className="JokesContainer">
          <h1>Jokes</h1>
          {this.props.jokes.map(joke => <JokeCard key={joke.id} joke={joke} />)}
        </div>


    )
  }
}

const mapStateToProps = (state) => {
  return({
    jokes: state.jokes
  })
}

export default connect(mapStateToProps, { getJokes })(Jokes);
