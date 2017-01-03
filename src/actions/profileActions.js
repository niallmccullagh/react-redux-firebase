import {browserHistory} from 'react-router';
import Firebase from 'firebase';
import * as types from './actionTypes';

export function profileUpdated(profile) {
  return { type: types.PROFILE_UPDATED, profile };
}

export function profileFetched(profile) {
  return { type: types.PROFILE_FETCHED, profile };
}

export function profileError(error) {
  return { type: types.PROFILE_ERROR, payload: error };
}

export function updateProfile(profile, redirectTo) {
  return function(dispatch) {
    const currentUser = Firebase.auth().currentUser;

    const updatedProfile = {
      name: profile.name,
      addressline1: profile.addressline1,
      postalcode: profile.postalcode,
      email: currentUser.email
    };

    Firebase.database().ref('users/' + currentUser.uid).update(updatedProfile);

    dispatch(profileUpdated(updatedProfile));

    browserHistory.push(redirectTo);
  }
}

export function loadProfile(){
  return function(dispatch){
    const unsubscribe = Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        Firebase.database().ref('/users/' + user.uid)
          .once('value')
          .then(function(snapshot) {
            dispatch(profileFetched(snapshot.val()));
        });
        unsubscribe();
      }
    }
    );
  }
}
