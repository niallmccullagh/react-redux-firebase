import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export default function(WrappedComponent) { // eslint-disable-line no-unused-vars
  class Auth extends React.Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        browserHistory.push('/login');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.loggedInUser !== undefined && state.loggedInUser.id !== undefined};
  }

  return connect(mapStateToProps)(Auth);
}
