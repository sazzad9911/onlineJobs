import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Collapse
} from "shards-react";

export default class NavExample extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      dropdownOpen: false,
      collapseOpen: false
    };
  }

  toggleDropdown() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen: !this.state.dropdownOpen
      }
    });
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    });
  }

  render() {
    return (
      <Navbar type="dark" theme="primary" style={{width:'100%'}} expand='md'>
        <NavbarBrand href="#">Online Jobs</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />

        <Collapse open={this.state.collapseOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink active={false} href="#">
                Part Time
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" >
                Full Time
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" >
                My Account
              </NavLink>
            </NavItem>
            <Dropdown
              open={this.state.dropdownOpen}
              toggle={this.toggleDropdown}
            >
              <DropdownToggle nav caret>
                Guide Line
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Quick Start</DropdownItem>
                <DropdownItem>About US</DropdownItem>
                <DropdownItem>Our Policies</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>

          <Nav navbar className="ml-auto">
            <InputGroup size="sm" seamless>
              <InputGroupAddon type="prepend">
                <InputGroupText>
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroupText>
              </InputGroupAddon>
              <FormInput className="border-0" placeholder="Search..." />
            </InputGroup>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}