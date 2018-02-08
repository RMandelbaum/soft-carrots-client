import React, { Component } from 'react';
import { connect } from 'react-redux';
import JokeCard from '../components/JokeCard';
import { getJokes } from '../actions/jokes';
import { upvoteJoke, downvoteJoke, saveVote  } from '../actions/votes';
import '../styles/Jokes.css';
import Pagination from '../components/Pagination';

class Jokes extends Component{

  render(){
      const { jokes, upvoteJoke, downvoteJoke, saveVote } = this.props;

         return(
           <div className="JokesContainer">
             {jokes.map(joke => <JokeCard key={joke.id}
                  upvoteJoke={upvoteJoke}
                  downvoteJoke={downvoteJoke}
                  saveVote={saveVote}
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
