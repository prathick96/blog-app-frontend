import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarText
} from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavLink className="navbar-brand" to="/">
          Blog
        </NavLink>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/authors"
              >
                Authors
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/add-post"
              >
                Add New Post
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>{""}</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
