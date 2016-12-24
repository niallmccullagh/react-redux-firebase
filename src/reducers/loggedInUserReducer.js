import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function users(state = initialState.loggedInUser, action) {
  switch (action.type) {
    case types.USER_SIGN_IN_SUCCESS:
      return action.user;
    case types.SIGN_OUT_USER:
      return null;
    default:
      return state;
  }
}
