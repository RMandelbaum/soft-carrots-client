import React from 'react';

const JokeComments = ({joke}) =>(
      <div key={joke.id} className="JokeCard">
            <h3>Comments:</h3>
            <p>{joke.comments.map(comment => {
              <p>comment.description</p>

            })}</p>
      </div>

  )


export default JokeComments;
