import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

// React Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import ListGroup from 'react-bootstrap/ListGroup'

// Actions
import { getRealties } from '../actions/getRealties';

// Constants
import { SET_FIRST_LOADING_FALSE } from '../actions/consts';
import { SET_FIRST_LOADING_TRUE } from '../actions/consts';

// My components
import Feedback from './Feedback';

// Css modules
import AppCss from './css/App.module.css';
import NavLinkCss from './css/NavLink.module.css';
import ListGroupCss from './css/ListGroup.module.css';

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}


class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.onGetRealties()
    this.props.setFirstLoadingTrue()
  }

  render() {
    return (
      <>
        <Router>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
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
              <Col xs={2} style={{ paddingLeft: 0 }}>
                <ListGroup as="div" className={ListGroupCss.main}>
                  <NavLink to="/admin/realties"
                    className={NavLinkCss.main + ' ' + (this.props.isFirstLoading ? NavLinkCss.first : '')}
                    activeClassName={NavLinkCss.active}
                    onClick={this.props.onGetRealties}>
                    Объекты
                  </NavLink>

                  <NavLink to="/admin/feedbacks"
                    className={NavLinkCss.main}
                    activeClassName={NavLinkCss.active}
                    onClick={this.props.setFirstLoadingFalse}>
                    Отзывы
                  </NavLink>
                </ListGroup>

              </Col>
              <Col>
                {/* <div>
                  { 
                    this.props.realties.length > 0 ? 
                      this.props.realties.map((realty, index) => <p key={index}>{realty.name}</p>) : 
                      'Объектов нет' 
                  }
                </div>               */}
                <Switch>
                  <Route path="/admin/realties">
                    <About />
                  </Route>
                  <Route path="/admin/feedbacks">
                    <Users />
                  </Route>
                </Switch>
              </Col>
            </Row>
          </Container>
        </Router>
      </>
    );
  }
}

export default connect(
  state => ({
    realties: state.realties,
    isFirstLoading: state.isFirstLoading,
  }),
  dispatch => ({
    onGetRealties() {
      dispatch(getRealties())
    },
    setFirstLoadingFalse() {
      dispatch({ type: SET_FIRST_LOADING_FALSE, firstLoading: false })
    },
    setFirstLoadingTrue() {
      dispatch({ type: SET_FIRST_LOADING_TRUE, firstLoading: true })
    }
  })
)(App);
