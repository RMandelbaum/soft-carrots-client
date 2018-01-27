import React from 'react';
import './Jokes.css'
//import { getJokes } from '../actions/jokes';

const Jokes = (props) => {

  // componentDidMount(){
  //   this.props.getJokes()
  // }
  return(
      <div className="JokesContainer">
        <h1>Jokes</h1>
        {props.jokes.map(joke =>
          <div key={joke.id} className="JokeCard">
            <h3>''{joke.description}''</h3>
            <p>Submitted By: {joke.author}</p>
            <p>Category: {joke.category}</p>
            <img src={joke.img_url} alt="Ahh No Funny Pic :(" />
            <p>Rating: {joke.rating}</p>
          </div>
        )}
      </div>
  )
  }

export default Jokes;
