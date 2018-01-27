import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import jokes from './reducers/jokes_reducer'
import jokeFormData from './reducers/jokeFormData';
import errors from './reducers/errors_reducer';

const reducers = combineReducers({jokes, jokeFormData, errors})
const middleware = [thunk];

export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)
);
