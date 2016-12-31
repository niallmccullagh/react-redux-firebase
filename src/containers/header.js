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
    const { authentication } = this.props;
    const isLoggedIn = authentication && authentication.isAuthenticated;
    const { currentPath } = this.props;

    if(isLoggedIn) {
      const displayName = (authentication.user) ? authentication.user.email : "";
      return (
        <Authenticated
          currentPath={currentPath}
          displayName={displayName}
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
  authentication: PropTypes.object,
  currentPath: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  const authentication = state.authentication;

  return {
    authentication
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authenticationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
