import { resetJokeForm } from './jokesForm';

const API_URL = process.env.REACT_APP_API_URL;

export const setJokes = jokes => {
    return{
        type: 'GET_JOKES_SUCCESS',
        jokes
    }
}

export const getJokes = () => {
    return dispatch => {
        return fetch(`${API_URL}/jokes`)

        .then(response => response.json())
        .then(jokes => dispatch(setJokes(jokes)))
        .catch(error => console.log(error))
    }
}

export const removeJoke = joke => {
  return {
    type: 'REMOVE_JOKE',
    joke
  }
}

export const createJoke = (joke, routerHistory) => {
    return dispatch => {
      return fetch(`${API_URL}/jokes`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({joke: joke})
      })
      .then(handleErrors)
      .then(response => response.json())
      .then(joke => {
        dispatch(resetJokeForm())
        routerHistory.replace(`/jokes`)
      })
      .catch(error => {
        dispatch({type: 'ERROR'})
        routerHistory.replace(`/jokes/new`)
       })
    }
  }

  function handleErrors(response){
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  export const deleteJoke = (jokeID, routerHistory) => {
    const request = new Request(`${API_URL}/jokes/${jokeID}`, {
      method: 'DELETE'
    });

    return fetch(request).then(response =>{
      removeJoke(jokeID);
      routerHistory.replace('/jokes');
    }).catch(error =>{
      return error;
    });
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
