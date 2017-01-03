import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authentication from './authenticationReducer';
import profile from './profileReducer';

const rootReducer = combineReducers({
  form,
  authentication,
  profile
});

export default rootReducer;
