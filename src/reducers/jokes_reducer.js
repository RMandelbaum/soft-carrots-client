export default (state = [], action) => {
    switch(action.type){
        case 'GET_JOKES_SUCCESS':
            return action.jokes;
        case 'REMOVE_JOKE':
            return state.filter(joke => joke.id !== action.joke.id)
        default:
            return state;
    }
}
