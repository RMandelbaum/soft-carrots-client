import React, { Component } from 'react';
import { getJokes } from '../actions/jokes';
import { upvoteJoke, downvoteJoke  } from '../actions/votes';
import { connect } from 'react-redux';
import JokeCard from './JokeCard';


function shuffleArray(jokeArray){
  let i = jokeArray.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = jokeArray[i];
    jokeArray[i] = jokeArray[j];
    jokeArray[j] = temp;
   }
   return jokeArray;
 }

class Random extends Component {

  componentDidMount(){
    this.props.getJokes()
    }

  render() {
    const shuffledJokes = shuffleArray(this.props.jokes);


    return (
      <ul>
        {shuffledJokes.map((joke, idx) => {
          return (
            <JokeCard
              key={joke.id}
              joke={joke}
              upvoteJoke={upvoteJoke}
              downvoteJoke={downvoteJoke}
            />
          );
        })}
      </ul>
    );
  }
}
const mapStateToProps = (state) => {
  return({
    jokes: state.jokes
  })
}

export default connect(mapStateToProps, {getJokes, upvoteJoke, downvoteJoke})(Random);
