import React, {useState, useContext} from 'react';
import {
    Nav, NavItem, NavLink, NavbarText, 
    Collapse, Navbar, NavbarToggler, NavbarBrand
} from 'reactstrap';
import {Link} from 'react-router-dom';
import {UserContext} from '../Context/UserContext';

const Header = () => {
    const context = useContext(UserContext);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <Navbar color="info" light expand="md">
            <NavbarBrand>
                <Link to="/" className="text-white">
                    GitFire app
                </Link>
            </NavbarBrand>
            <NavbarText className="text-white">
            {context.user?.email ? context.user.email : ""}
            </NavbarText>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {context.user ? (
                <NavItem>
                  <NavLink
                    onClick={() => {
                      context.setUser(null);
                    }}
                    className="text-white"
                  >
                    Logout
                  </NavLink>
                </NavItem>
              ) : (
                <>
                  <NavItem>
                    <NavLink tag={Link} id="RouterNavLink"  to="/signUp" className="text-white">
                      SignUp
                    </NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink tag={Link} id="RouterNavLink"  to="/signIn" className="text-white">
                      SignIn
                    </NavLink>
                  </NavItem>
                </>
              )}
            </Nav>
          </Collapse>    
        </Navbar>
    );
};

export default Header;