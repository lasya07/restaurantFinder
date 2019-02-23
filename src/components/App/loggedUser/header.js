import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class LogHeader extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }


  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div style={{backgroundColor:'#353535'}}>
        <Navbar color="#353535" light expand="md">
          <NavbarBrand href="/home" style={{color: '#fffa8b'}}>WEBAPP</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              
              <NavItem>
                <NavLink href="/home" style={{color: '#fffa8b',borderStyle:'groove'}} >Logout</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar >
                <DropdownToggle nav caret style={{color: '#fffa8b'}}>
                  Settings
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    View Profile
                  </DropdownItem>
                  <DropdownItem>
                    Add Restaurant
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href = "/home">
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}