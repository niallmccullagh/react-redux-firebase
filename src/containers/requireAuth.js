import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Firebase from 'firebase';

export default function(WrappedComponent) { // eslint-disable-line no-unused-vars
  class Auth extends React.Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        let hasLocalStorageUser = false;

        for (let key in localStorage) {
          if (key.startsWith("firebase:authUser:")) {
            hasLocalStorageUser = true;
          }
        }

        if (!hasLocalStorageUser) {
          browserHistory.push('/login');
        }else{
          Firebase.auth().onAuthStateChanged(user => {
            if (!user) {
              browserHistory.push('/login');
            }
          });
        }
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.authentication !== undefined && state.authentication.isAuthenticated};
  }

  return connect(mapStateToProps)(Auth);
}
