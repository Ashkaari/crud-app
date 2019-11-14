import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import user from './reducers/user';
import patients from './reducers/patients';

import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({ user, patients });
const composeEnhancers =
  process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export default function configureStore(initialState = {}) {
  return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(ReduxThunk)));
}
