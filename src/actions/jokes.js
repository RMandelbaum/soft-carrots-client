import { resetJokeForm } from './jokesForm';

const JOKES_API = process.env.REACT_APP_API_URL;

export const setJokes = jokes => {
    return{
        type: 'GET_JOKES_SUCCESS',
        jokes
    }
}

export const getJokes = () => {
    return dispatch => {
        return fetch(`${JOKES_API}/jokes`)

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
      return fetch(`${JOKES_API}/jokes`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({joke: joke})
      })
      .then(handleErrors)
      .then(response => response.json())
      .then(joke => {
        dispatch( {type: 'ADD_NEW_JOKE',
                  joke: joke
                  })

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
