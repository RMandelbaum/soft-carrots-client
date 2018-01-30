import React, { Component } from 'react';
import { connect } from 'react-redux';
import JokeCard from '../components/JokeCard';
import { getJokes, upvoteJoke, downvoteJoke } from '../actions/jokes';
import '../styles/Jokes.css';
import Pagination from '../components/Pagination';

class Jokes extends Component{

  componentDidMount(){
    this.props.getJokes()

  }
debugger
  render(){
      const { jokes, upvoteJoke, downvoteJoke } = this.props;
        debugger
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

export default connect(mapStateToProps, { getJokes, upvoteJoke, downvoteJoke })(Jokes);
