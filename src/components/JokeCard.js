import React from 'react';
import '../styles/Jokes.css';

const JokeCard = ({joke, upvoteJoke, downvoteJoke }) =>(
        <div key={joke.id} className="JokeCard">
          <h3>''{joke.description}''</h3>
          <p>Submitted By: {joke.author}</p>
          <p>Category: {joke.category}</p>
          <img className="JokeImage" src={joke.img_url} alt="Ahh No Funny Pic :(" />
          <br />
          <br />
          <img className="UpVote"
            src="https://cdn3.iconfinder.com/data/icons/basicolor-votting-awards/24/210_vote_like_up_upvote-512.png"
            onClick={() => upvoteJoke(joke.id)}
            alt="upvote"
           />
          <img className="DownVote"
              src="https://cdn3.iconfinder.com/data/icons/minicons-for-web-sites/24/minicons-90-128.png"
              onClick={() => downvoteJoke(joke.id)}
              alt="downvote"
            />
          <h3>Votes: {joke.rating}</h3>

        </div>
    // </Link>
)

export default JokeCard;
