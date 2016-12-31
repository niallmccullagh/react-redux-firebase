import {browserHistory} from 'react-router';
import Firebase from 'firebase';
import * as types from './actionTypes';
import {config} from '../config';


Firebase.initializeApp(config);

export function signOutUser() {
  return { type: types.SIGN_OUT_USER };
}

export function authUser(user) {
  return { type: types.AUTH_USER, user };
}

export function authError(error) {
  return { type: types.AUTH_ERROR, payload: error };
}

export function logoutUser() {
  return dispatch => {
    Firebase.auth().signOut().then(function() {
      dispatch(signOutUser());
    });
    browserHistory.push('/login');
  };
}


export function signUpUser(credentials, returnUrl) {
  return function(dispatch) {
    Firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch(authUser());
        browserHistory.push(returnUrl);
      })
      .catch(error => {
        dispatch(authError(error));
      });
  }
}

export function signInUser(credentials, returnUrl) {
  return function(dispatch) {
    Firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch(authUser());
        browserHistory.push(returnUrl);
      })
      .catch(error => {
        dispatch(authError(error));
      });
  }
}

export function verifyAuth() {
  return function (dispatch) {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const x = {
          email: user.email
        }
        dispatch(authUser(x));
      } else {
        dispatch(signOutUser());
      }
    });
  }
}
