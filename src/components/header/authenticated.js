import React, { PropTypes } from 'react';
/*eslint-disable no-unused-vars*/
import { Link, IndexLink } from 'react-router';
import { Glyphicon, Nav, NavDropdown, Navbar, NavItem, MenuItem } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';
/*eslint-enable no-unused-vars*/

class HeaderLayout extends React.Component {

  render() {
    const { displayName } = this.props;
    const { onClickLogout } = this.props;
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
            <NavDropdown eventKey={'User'} title={displayName} id="basic-nav-dropdown">
              <IndexLinkContainer to="/profile">
                <NavItem eventKey={'/profile'}>Profile</NavItem>
              </IndexLinkContainer>
              <MenuItem eventKey={'User:Logout'} onClick={onClickLogout}>Logout</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

HeaderLayout.propTypes = {
  displayName: PropTypes.string.isRequired,
  onClickLogout: PropTypes.func.isRequired,
  currentPath: PropTypes.string.isRequired,
};

export default HeaderLayout;
