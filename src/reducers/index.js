import { combineReducers } from 'redux';
import loggedInUser from './loggedInUserReducer';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  form,
  loggedInUser,
});

export default rootReducer;
