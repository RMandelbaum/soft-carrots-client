const JOKES_API = process.env.REACT_APP_API_URL;

export const upvoteJoke = (joke, jokeId, rating) => {

  return dispatch => {
   return fetch(`${JOKES_API}/jokes`, {
           method: "POST",
           headers: {
             'Content-Type': 'application/json'
           },
           body: JSON.stringify({joke: joke})
         })
         .then(response => response.json())
         .then( joke => {
           dispatch( {
             type: 'SAVE_RATING',
             jokeId: jokeId,
             rating: rating
           })
         })
         .then(jokeId => {
           dispatch( {type: 'UPVOTE_JOKE',
                     jokeId
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
