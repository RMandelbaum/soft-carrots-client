import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { deleteJoke } from '../actions/jokes';
import JokeInfo from '../components/JokeInfo';
import JokeComments from '../components/JokeComments';
class JokeShow extends Component{

    handleOnClick = (event,jokeID, history) =>{
        event.preventDefault();
        deleteJoke(jokeID,history);
    }

    render(){
        const { joke, history } = this.props;
        return(
            <div className="JokeShow">
              <Button onClick={(e) => this.handleOnClick(e, joke.id, history)} bsStyle="danger">Delete { joke.first_name} </Button>
              <JokeInfo joke = {joke} />
              <JokeComments joke= {joke} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const joke = state.jokes.find(joke => String(joke.id) === ownProps.match.params.id)
    if (joke){
        return {joke: joke}
    }else{
        return { joke: {}}
    }
}


export default connect(mapStateToProps,{deleteJoke})(JokeShow);
