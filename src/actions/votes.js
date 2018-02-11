const JOKES_API = process.env.REACT_APP_API_URL;

const updateJoke = (jokeId, state) => {

   if (state === "upvote"){
     return {
        type: 'UPVOTE_JOKE',
        jokeId
       }
  } else {
     return {
      type: 'DOWNVOTE_JOKE',
      jokeId
      }
   }

 }

export const saveVote = (jokeId, rating, state ) => {

      updateJoke(jokeId, state);

       return (dispatch) => {
             return fetch(`${JOKES_API}/jokes/${jokeId}`, {
                     method: "PATCH",
                     headers: {
                       'Content-Type': 'application/json'
                     },
                     body: JSON.stringify({rating: rating})
                   })
                   .then(response => response.json())
                   .then((joke) => {

                     dispatch({

                       type: 'SAVE_RATING',
                       joke: joke,
                       })
                     })

           }

       }
   
