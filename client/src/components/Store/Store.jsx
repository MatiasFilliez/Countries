import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../Reducer/Reducer';

const composeEnhacer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose

const store = createStore(
    rootReducer,
    composeEnhacer(applyMiddleware(thunk))
);

export default store;

