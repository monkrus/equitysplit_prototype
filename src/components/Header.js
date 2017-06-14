import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap'
import logo from '../images/full_cb_logo_rounded.png'

export default class Header extends Component {
  render() {
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
            <a href="#"><Image style={styles.logo} src={logo}/></a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Sign In</NavItem>
          <NavItem eventKey={2} href="#">Sign Up</NavItem>
        </Nav>
      </Navbar>
    )
  }
}
