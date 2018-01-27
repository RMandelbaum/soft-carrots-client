import React from 'react';

const JokeInfo = ({joke}) =>(
      <div key={joke.id} className="JokeCard">
            <h3>''{joke.description}''</h3>
            <p>Submitted By: {joke.author}</p>
            <p>Category: {joke.category}</p>
            <img className="JokeImage" src={joke.img_url} alt="Ahh No Funny Pic :(" />
            <p>Rating: {joke.rating}</p>
      </div>

  )


export default JokeInfo;
