import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
//css imports
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCookies } from 'react-cookie';

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken, removeToken] = useCookies(['jwt-token'])


  const toggle = () => setIsOpen(!isOpen);
  useEffect(() => {

  }, [])

  return (
    <div  >
      <Navbar {...props} >
        <NavbarBrand
          id='title'>
          <Link to='/'>Shop Cart</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>

            <UncontrolledDropdown nav inNavbar style={{ marginRight: '2rem' }}>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Cart</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  { token['jwt-token']? <Link to='/signin'
                    onClick={() => {
                      removeToken('jwt-token')
                    }}> Logout</Link> : <Link to='/signin'>Signin</Link>}
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavbarText>Username</NavbarText>
          </Nav>

        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;