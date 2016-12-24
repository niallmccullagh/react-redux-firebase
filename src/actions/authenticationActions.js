import {browserHistory} from 'react-router';
import UserApi from '../api/mockUserApi';
import * as types from './actionTypes';

export function signInUserSuccess(user) {
  return { type: types.USER_SIGN_IN_SUCCESS, user };
}

export function signOutUser() {
  return { type: types.SIGN_OUT_USER };
}

export function signInUser(creds, returnUrl) {
  return dispatch => {
    return UserApi.getUserByEmail(creds.email).then(user => {
      dispatch(signInUserSuccess(user));
    }).then(() => {
      browserHistory.push(returnUrl);
    })
      .catch(error => {
        throw(error);
      });

  };
}
export function logoutUser() {
  return dispatch => {
    dispatch(signOutUser());
    browserHistory.push('/login');
  };
}
