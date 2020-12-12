import React, { Component } from 'react';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import ListGroup from 'react-bootstrap/ListGroup'

import { getRealties } from '../actions/getRealties';


class App extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Container fluid>
          <Row>
            <Col xs={2}>
              <ListGroup as="ul" style={{ borderRadius: 0 }}>
                <ListGroup.Item onClick={ this.props.onGetRealties } action active>Объекты</ListGroup.Item>
                <ListGroup.Item action>Отзывы</ListGroup.Item>
                <ListGroup.Item action>Изображения</ListGroup.Item>
                <ListGroup.Item action>Языки</ListGroup.Item>
                <ListGroup.Item action>Контент</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default connect(
  state => ({}),  
  dispatch => ({
    onGetRealties() {
      dispatch(getRealties());
    }
  })
)(App);
