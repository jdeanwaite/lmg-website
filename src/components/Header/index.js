import React from 'react';
import Link from 'gatsby-link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import './header.scss';

class Header extends React.Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  close = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    return (
      <div>
        <Navbar color="primary" dark expand="md">
          <div className="container">
            <Link className="navbar-brand" to="/" onClick={this.close}>
              Learn My Gospel
            </Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#about" onClick={this.close}>
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#support" onClick={this.close}>
                    Support
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://www.iubenda.com/privacy-policy/64047423" target="_blank">
                    Privacy Policy
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
export default Header;
