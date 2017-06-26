import React from 'react'
import { Grid, FormGroup, Row, Col, FormControl, ControlLabel, Button, Image } from 'react-bootstrap'
import loginImg from '../images/teamwork.jpg'

export default function Login(props) {
    return (
      <Grid>
        <Row>
          <Col md={6}>
            <form>
              <FormGroup controlId="formEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Email
                </Col>
                <Col sm={10}>
                  <FormControl type="email" placeholder="Email" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Password
                </Col>
                <Col sm={10}>
                  <FormControl type="password" placeholder="Password" />
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
      </Grid>
    )
}
