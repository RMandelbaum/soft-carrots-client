import React, { Component } from 'react';
import { connect } from 'react-redux';
import JokeCard from '../components/JokeCard';
import { getJokes } from '../actions/jokes';
import { upvoteJoke, downvoteJoke  } from '../actions/votes';
import '../styles/Jokes.css';
import Pagination from '../components/Pagination';

class Jokes extends Component{

  render(){
      const { jokes, upvoteJoke, downvoteJoke } = this.props;

         return(
           <div className="JokesContainer">
             {jokes.map(joke => <JokeCard key={joke.id}
                  upvoteJoke={upvoteJoke}
                  downvoteJoke={downvoteJoke}
                  joke={joke} />)}
            <Pagination />
        </div>


    )
  }
}

const mapStateToProps = (state) => {
  return({
    jokes: state.jokes
  })
}

export default connect(null, { getJokes, upvoteJoke, downvoteJoke })(Jokes);
