import React, { Component } from 'react';
import { connect } from 'react-redux';
import JokeCard from '../components/JokeCard';
import { getJokes, upvoteJoke, downvoteJoke } from '../actions/jokes';
import { Link } from 'react-router-dom';
import '../styles/Jokes.css';

class Jokes extends Component{

  componentDidMount(){
    this.props.getJokes()
  }

  render(){
      const { jokes, upvoteJoke, downvoteJoke } = this.props;
    return(
        <div className="JokesContainer">
          <h1>Jokes</h1>
          {jokes.map(joke => <JokeCard key={joke.id}
            upvoteJoke={upvoteJoke}
            downvoteJoke={downvoteJoke}
            joke={joke} />)}
        </div>


    )
  }
}

const mapStateToProps = (state) => {
  return({
    jokes: state.jokes
  })
}

export default connect(mapStateToProps, { getJokes, upvoteJoke, downvoteJoke })(Jokes);
