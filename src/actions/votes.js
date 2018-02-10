const JOKES_API = process.env.REACT_APP_API_URL;

export const updateJoke = (jokeId, rating, state) => {
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
         .then((joke) => {

           dispatch( {
             type: 'SAVE_RATING',
             jokeId: joke.id
             //joke: joke
           })
         })
         //.then(handleVote(state, jokeId))

      //    .then(joke) => {
      //      dispatch( {type: 'UPVOTE_JOKE',
      //                 jokeId: jokeId
      //
      //                })
      // })
 }
 }

const handleVote = (state, jokeId) => {
  if (state === "upvote"){
    upvoteJoke(jokeId)
  }else {
    downvoteJoke(jokeId)
  }

}

export const upvoteJoke = (jokeId) => {
  return {
    type: 'UPVOTE_JOKE',
    jokeId
   }
 }

export const downvoteJoke = (jokeId) => {
  return {
    type: 'DOWNVOTE_JOKE',
    jokeId
   }
 }
