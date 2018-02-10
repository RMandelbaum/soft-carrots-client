const JOKES_API = process.env.REACT_APP_API_URL;

const updateJoke = (jokeId, state) => {
  debugger
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

export const saveVote = (jokeId, rating, state) => {
  debugger
     updateJoke(jokeId, state);
    debugger
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
                     debugger
                     dispatch( {
                       type: 'SAVE_RATING',
                       jokeId: joke.id,
                     })
                   })
                 }
           }

// export function upvoteJoke (jokeId, rating, state){
//    return dispatch => {
//      return saveVote().then(
//        jokeId => dispatch(upVote(jokeId)))
//   }
// }

// export const downvoteJoke = (state, jokeId, dispatch) => {
//   return saveVote().then( jokeId => dispatch(downVote))
// }
//
// const upVote = (jokeId) => {
//  return {
//    type: 'UPVOTE_JOKE',
//    jokeId
//   }
// }
//
//  const downVote = (jokeId) => {
//   return {
//     type: 'DOWNVOTE_JOKE',
//     jokeId
//    }
//  }

//
//   debugger
// }

// export const updateJoke = (jokeId, rating, state) => {
//   debugger
//   if (state === "upvote"){
//     upvoteJoke(jokeId)
//   }else {
//     downvoteJoke(jokeId)
//   }
//   debugger
//   return dispatch => {
//    return fetch(`${JOKES_API}/jokes/${jokeId}`, {
//            method: "PATCH",
//            headers: {
//              'Content-Type': 'application/json'
//            },
//            body: JSON.stringify({rating: rating})
//          })
//          .then(response => response.json())
//          .then((joke) => {
//
//            dispatch( {
//              type: 'SAVE_RATING',
//              jokeId: joke.id
//              //joke: joke
//            })
//          })
//          //.then(handleVote(state, jokeId))
//
//       //    .then(joke) => {
//       //      dispatch( {type: 'UPVOTE_JOKE',
//       //                 jokeId: jokeId
//       //
//       //                })
//       // })
//  }
//  }


// //
