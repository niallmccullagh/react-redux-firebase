import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore() {
  return createStore(
    rootReducer,
    {},
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}
