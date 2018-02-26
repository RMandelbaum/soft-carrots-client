import React, { Component } from 'react';
import { connect } from 'react-redux';
import JokeCard from '../components/JokeCard';
import { getJokes } from '../actions/jokes';
import {saveVote  } from '../actions/votes';
import '../styles/Jokes.css';

class Jokes extends Component{
  componentDidMount(){
    this.props.getJokes()
  }

  render(){
      const { jokes, saveVote} = this.props;

         return(
           <div className="JokesContainer">
             {jokes.map(joke =>
               <JokeCard key={joke.id}
                         saveVote={saveVote}
                         joke={joke}
                          />)}
        </div>
    )

  }


}



const mapStateToProps = (state) => {
  return({
    jokes: state.jokes
  })
}

export default connect(mapStateToProps, { getJokes, saveVote })(Jokes);
