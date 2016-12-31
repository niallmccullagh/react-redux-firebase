import { combineReducers } from 'redux';
import authentication from './authenticationReducer';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  form,
  authentication,
});

export default rootReducer;
