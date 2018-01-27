import React from 'react';
// import { Link } from 'react-router-dom';
import '../styles/Jokes.css';

const JokeCard = ({joke, upvoteJoke, downvoteJoke }) =>(
    // <Link to={`/jokes/${joke.id}`} exact >
        <div key={joke.id} className="JokeCard">
          <h3>''{joke.description}''</h3>
          <p>Submitted By: {joke.author}</p>
          <p>Category: {joke.category}</p>
          <img className="JokeImage" src={joke.img_url} alt="Ahh No Funny Pic :(" />
          <p>Rating: {joke.rating}</p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => upvoteJoke(joke.id)}
              >
                Upvote
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => downvoteJoke(joke.id)}

              >
                Downvote
              </button>

        </div>
    // </Link>
)

export default JokeCard;
