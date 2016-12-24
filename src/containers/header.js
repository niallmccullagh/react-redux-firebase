import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Authenticated from '../components/header/authenticated'; // eslint-disable-line no-unused-vars
import Unauthenticated from '../components/header/unauthenticated'; // eslint-disable-line no-unused-vars
import * as authenticationActions from '../actions/authenticationActions';

class Header extends React.Component {


  // Constructor to initialise state and to call our bind functions
  constructor(props, context) {
    super(props, context);
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser(id) {
    event.preventDefault();
    this.props.actions.logoutUser(id);
  }

  render() {
    const { loggedInUser } = this.props;
    const isLoggedIn = this.props.loggedInUser && this.props.loggedInUser.id !== undefined;
    const { currentPath } = this.props;

    if(isLoggedIn) {
      return (
        <Authenticated
          currentPath={currentPath}
          loggedInUser={loggedInUser}
          onClickLogout={this.logoutUser}
        />
      );
    }else{
      return <Unauthenticated
        currentPath={currentPath}
      />
    }
  }
}

Header.propTypes = {
  actions: PropTypes.object.isRequired,
  loggedInUser: PropTypes.object,
  currentPath: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  const loggedInUser = state.loggedInUser;

  return {
    loggedInUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authenticationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
