
function shuffleArray(jokeArray){
  let i = jokeArray.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = jokeArray[i];
    jokeArray[i] = jokeArray[j];
    jokeArray[j] = temp;
   }
   return jokeArray;
 }

export default (state = [], action) => {
  let idx;
  let joke;


  switch(action.type){
    case 'GET_JOKES_SUCCESS':
        return action.jokes;

    case 'ADD_NEW_JOKE':
      return state.concat(action.joke);

    case 'REMOVE_JOKE':
        return state.filter(joke => joke.id !== action.joke.id)

    case 'UPVOTE_JOKE':
        idx = state.findIndex(joke => joke.id === action.jokeId);
        joke = state[idx];
        return [...state.slice(0,idx),Object.assign({}, joke, { rating: joke.rating += 1}), ...state.slice(idx + 1)]

    case 'DOWNVOTE_JOKE':
      idx = state.findIndex(joke => joke.id === action.jokeId);
      joke = state[idx];

      if (joke.rating > 0)
        return [...state.slice(0,idx),Object.assign({}, joke, { rating: joke.rating -= 1}), ...state.slice(idx + 1)]
      else{
        return [...state.slice(0,idx),Object.assign({}, joke, { rating: joke.rating = 0}), ...state.slice(idx + 1)]
      }

    case 'SAVE_RATING':
      idx = state.findIndex(joke => joke.id === action.joke.id);
      joke = state[idx];

      if (joke.rating > 0){
        return state.map(joke => (joke.id === action.joke.id) ? {...joke, rating: action.joke.rating} : joke);
      } else {
        return state.map(joke => (joke.id === action.joke.id) ? {...joke, rating: 0} : joke);
      }
    case 'RANDOM_JOKE':
      return shuffleArray(action.jokes)

  default:
      return state;
    }
}
