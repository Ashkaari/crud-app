import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import types from '../models/reduxActions';

const rootReducer = combineReducers({ user });
const composeEnhancers =
  process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export default function configureStore(initialState = {}) {
  return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(ReduxThunk)));
}

function user(state = {}, action) {
  switch (action.types) {
    case types.USER_LOGIN: {
      return {
        ...state,
        user: action.payload,
      };
    }

    default:
      return state;
  }
}
