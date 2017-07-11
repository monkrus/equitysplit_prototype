import React from 'react'
import { Navbar } from 'react-bootstrap'

export default function Footer(props) {
    return (
      <Navbar inverse fixedBottom>
        <Navbar.Text>
          &copy; 2017 Cohesive Bits Inc.
        </Navbar.Text>
      </Navbar>
    )
}
