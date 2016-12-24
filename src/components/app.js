import React, { PropTypes } from 'react';
import Header from '../containers/header'; // eslint-disable-line no-unused-vars

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header currentPath={ this.props.location.pathname }/>
        <div id="page">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  location:  PropTypes.object.isRequired,
};

export default App;
