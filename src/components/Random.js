import React, { Component } from 'react';
import { getJokes } from '../actions/jokes';
import { saveVote  } from '../actions/votes';
import { connect } from 'react-redux';
import { getJokesRandom} from '../actions/jokes'
import JokeCard from './JokeCard';

//
// function shuffleArray(jokeArray){
//   let i = jokeArray.length - 1;
//   for (; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     const temp = jokeArray[i];
//     jokeArray[i] = jokeArray[j];
//     jokeArray[j] = temp;
//    }
//    return jokeArray;
//  }

class Random extends Component {

  componentDidMount(){

    this.props.getJokesRandom()

    }



  render() {
    const { jokes, saveVote} = this.props;

    return (
      <ul>
        {jokes.map((joke, idx) => {
          return (
            <JokeCard
              key={joke.id}
              joke={joke}
              saveVote={saveVote}

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

export default connect(mapStateToProps, {saveVote, getJokesRandom })(Random);
