import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Link, withRouter } from 'react-router-dom'
import { Navbar, Nav, NavItem, Image, NavDropdown, MenuItem } from 'react-bootstrap'
import { logoutUser } from '../actions/authentication'
import logo from '../images/full_cb_logo_rounded.png'

class Header extends Component {

    handleLogout = (e) => {
      e.preventDefault()
      //this.props.history.push('/')
      this.props.dispatch(push('/'))
      this.props.dispatch(logoutUser())
    }

    render(){
      const styles = {
        navbar : {
          minHeight: '60px'
        },
        logo : {
          height:'35px'
        }
      }

      const {authentication, user, dispatch} = this.props
      const isLoggedIn = authentication.authenticated
      const userName = `${user.info.firstName} ${user.info.lastName}`

      let logInOut = null
      if(isLoggedIn) {
        logInOut =
          <NavDropdown eventKey={1} title={userName} id="user-nav-dropdown">
          	<MenuItem eventKey={1.1} onClick={this.handleLogout}>Logout</MenuItem>
          </NavDropdown>
        dispatch(push('/user'))
        //this.props.history.push('/user')
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
}

function mapStateToProps(state) {
  const { authentication, user } = state
  return {authentication, user }
}

export default connect(mapStateToProps)(Header)
