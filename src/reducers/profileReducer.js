import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authentication(state = initialState.profile, action) {
  switch (action.type) {
    case types.PROFILE_UPDATED:
    case types.PROFILE_FETCHED:
        return action.profile;
    case types.PROFILE_ERROR:
        return {
          error: action.payload.message
        }
    case types.SIGN_OUT_USER:
      return null;
    default:
      return state;
  }
}
