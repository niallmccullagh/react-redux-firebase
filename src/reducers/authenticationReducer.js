import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authentication(state = initialState.authentication, action) {
  switch (action.type) {
    case types.AUTH_USER:
        return {
          isAuthenticated: true,
          user: action.user,
          error: null
        };
    case types.SIGN_OUT_USER:
      return {
        isAuthenticated: false,
        user: null,
        error: null
      };
    case types.AUTH_ERROR:
      return {
        isAuthenticated: false,
        user: null,
        error: action.payload.message
      };
    default:
      return state;
  }
}
