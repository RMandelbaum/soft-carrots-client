import React from 'react';
import { Link } from 'react-router-dom';

const JokeInfo = ({joke}) =>(
    <Link to {`/jokes/${joke.id}`} exact >
      <div key={joke.id} className="JokeCard">
            <h3>''{joke.description}''</h3>
            <p>Submitted By: {joke.author}</p>
            <p>Category: {joke.category}</p>
            <img className="JokeImage" src={joke.img_url} alt="Ahh No Funny Pic :(" />
            <p>Rating: {joke.rating}</p>
      </div>
    </Link>

  )


export default JokeInfo;
