import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap'
import logo from '../images/full_cb_logo_rounded.png'

export default function Header(props) {
    const styles = {
      navbar : {
        minHeight: '60px'
      },
      logo : {
        height:'35px'
      }
    };

    return (
      <Navbar style={styles.navbar}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"><Image style={styles.logo} src={logo}/></Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1}><Link to="/login">Log In</Link></NavItem>
            <NavItem eventKey={2}>Sign Up</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}
