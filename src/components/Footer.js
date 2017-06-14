import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap'

export default class Header extends Component {
  render() {
    return (
    <Navbar inverse fixedBottom>
      <Navbar.Text>
        &copy; 2017 Cohesive Bits Inc.
      </Navbar.Text>
    </Navbar>
    )
  }
}
