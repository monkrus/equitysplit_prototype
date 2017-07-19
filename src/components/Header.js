import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Link, withRouter } from 'react-router-dom'
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap'
import logo from '../images/full_cb_logo_rounded.png'

function Header({authentication, user, dispatch}) {
    const styles = {
      navbar : {
        minHeight: '60px'
      },
      logo : {
        height:'35px'
      }
    };

    const isLoggedIn = authentication.authenticated
    const userName = `${user.info.firstName} ${user.info.lastName}`

    let logInOut = null
    if(isLoggedIn) {
      logInOut = <NavItem eventKey={1}><Link to="/logout">{userName}</Link></NavItem>
      dispatch(push('/user'))
    } else {
      logInOut = <NavItem eventKey={1}><Link to="/login">Log In</Link></NavItem>
    }
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
            {logInOut}
            <NavItem eventKey={2}><Link to="/signup">Sign Up</Link></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

function mapStateToProps(state) {
  const { authentication, user } = state
  return {authentication, user }
}

export default connect(mapStateToProps)(Header)
