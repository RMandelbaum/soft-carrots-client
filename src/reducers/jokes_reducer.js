export default (state = [], action) => {
  let idx;
  let joke;

  switch(action.type){
    case 'GET_JOKES_SUCCESS':
        return action.jokes;

    case 'REMOVE_JOKE':
        return state.filter(joke => joke.id !== action.joke.id)

    case 'UPVOTE_JOKE':
        idx = state.findIndex(joke => joke.id === action.jokeId);
        joke = state[idx];

        return [...state.slice(0,idx),Object.assign({}, joke, { rating: joke.rating += 1}), ...state.slice(idx + 1)]


      case 'DOWNVOTE_JOKE':
        idx = state.findIndex(joke => joke.id === action.jokeId);
        joke = state[idx];

        if (joke.rating > 1)
        return [...state.slice(0,idx),Object.assign({}, joke, { rating: joke.rating -= 1}), ...state.slice(idx + 1)]


    default:
        return state;
}
}
