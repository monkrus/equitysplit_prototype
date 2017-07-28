import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Grid, FormGroup, Row, Col, FormControl, ControlLabel, Button, Image } from 'react-bootstrap'
import { loginUser, loginUserAndGetUserInfo } from '../actions/authentication'
import loginImg from '../images/teamwork.jpg'
import { API_URL } from '../const.js'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {email:'', password:''}
    };
  }

  handleChange = (e) => {
    const name = e.target.name
    const credentials = this.state.credentials
    credentials[name] = e.target.value
    this.setState({ credentials: credentials})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    //this.props.dispatch(loginUser(this.state.credentials));
    this.props.dispatch(loginUserAndGetUserInfo(this.state.credentials));
  }

  render(){
    return (
      <div>
        <Row>
          <Col md={6}>
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="formEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Email
                </Col>
                <Col sm={10}>
                  <FormControl type="email" name="email" placeholder="Email" value={this.state.credentials.email} onChange={this.handleChange} required />
                </Col>
              </FormGroup>

              <FormGroup controlId="formPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Password
                </Col>
                <Col sm={10}>
                  <FormControl type="password" name="password" placeholder="Password" value={this.state.credentials.password} onChange={this.handleChange} required />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit">
                    Log in
                  </Button>
                </Col>
              </FormGroup>
            </form>
          </Col>
          <Col md={6}>
            <Image src={loginImg} responsive rounded />
          </Col>
        </Row>
      </div>
    )
  }
}

export default connect()(Login);
