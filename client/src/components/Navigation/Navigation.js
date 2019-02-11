import React from "react";
import{
 Navbar,
 NavbarBrand,
 Nav,
 NavItem,
 NavLink
} from "reactstrap";
import "./Navigation.css";

const Navigation = () => (
    <Navbar>
      <div className="container">
      <NavbarBrand href="/">
      </NavbarBrand>

      <Nav navbar>
        <NavItem >
          <NavLink href="">Do something</NavLink>
        </NavItem>
      </Nav>
      </div>
    </Navbar>
);

export default Navigation;