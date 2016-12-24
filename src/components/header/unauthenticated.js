import React, { PropTypes } from 'react';
/*eslint-disable no-unused-vars*/
import { Link, IndexLink } from 'react-router';
import { Glyphicon, Nav, NavDropdown, Navbar, NavItem, MenuItem } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';
/*eslint-enable no-unused-vars*/

class HeaderLayout extends React.Component {

  render() {
    const { currentPath } = this.props;

    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            My App
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav activeKey={currentPath}>
            <IndexLinkContainer to="/about">
                <NavItem eventKey={'/about'}>About</NavItem>
              </IndexLinkContainer>
          </Nav>
          <Nav pullRight>
             <IndexLinkContainer to="/login">
              <MenuItem eventKey={3.1}>Login</MenuItem>
            </IndexLinkContainer>
            <IndexLinkContainer to="/signup">
             <MenuItem eventKey={3.1}>Signup</MenuItem>
           </IndexLinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

HeaderLayout.propTypes = {
  currentPath: PropTypes.string.isRequired,
};

export default HeaderLayout;
