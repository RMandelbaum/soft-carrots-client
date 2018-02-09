const JOKES_API = process.env.REACT_APP_API_URL;

export const upvoteJoke = (joke, jokeId, rating) => {
  debugger
  return dispatch => {
   return fetch(`${JOKES_API}/jokes/${jokeId}`, {
           method: "PATCH",
           headers: {
             'Content-Type': 'application/json'
           },
           body: JSON.stringify({rating: rating})
         })
         .then(response => response.json())
         .then(rating, joke, jokeId => {
           dispatch( {
             type: 'SAVE_RATING',
             rating: rating,
             joke: joke,
             jokeId: jokeId
           })
         })
         .then((joke,rating) => {
           dispatch( {type: 'UPVOTE_JOKE',
                      joke: joke,
                      jokeId: jokeId,
                      rating: rating
                     })
      })
 }
 }


export const downvoteJoke = (jokeId) => {
  return {
    type: 'DOWNVOTE_JOKE',
    jokeId
   }
 }
