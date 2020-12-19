// React, Redux, Router 
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Switch, Route, NavLink } from "react-router-dom";
import { withRouter } from "react-router";

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
import { getFeedbacks } from '../actions/getFeedbacks';
import { setFirstLoadingTrueAction } from '../actions/setFirstLoadingTrue';
import { setFirstLoadingFalseAction } from '../actions/setFirstLoadingFalse';

// Components
import Realties from './Realties';
import Feedbacks from './Feedbacks';
import PaginationContainer from './PaginationContainer';


// Css Modules
import NavLinkCss from './css/NavLink.module.css';
import ListGroupCss from './css/ListGroup.module.css';

// My scripts
import { getPath } from '../script'
import { getTotalPagesForPagination } from '../script'


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
                <NavLink to={getPath(route('realties.index'))}
                  className={NavLinkCss.main + ' ' + (this.props.isFirstLoading ? NavLinkCss.first : '')}
                  activeClassName={NavLinkCss.active}
                  onClick={this.props.onGetRealties}>
                  Объекты
                </NavLink>
                <NavLink to={getPath(route('feedbacks.index'))}
                  className={NavLinkCss.main}
                  activeClassName={NavLinkCss.active}
                  onClick={this.props.onGetFeedbacks}>
                  Отзывы
                </NavLink>
              </ListGroup>
            </Col>
            <Col>
              <Switch>
                <Route exact path={getPath(route('admin.index'))}>                 
                  <Realties />
                </Route>
                <Route exact path={getPath(route('realties.index'))}>                 
                  <Realties />
                </Route>
                <Route exact path={getPath(route('feedbacks.index'))}>                 
                  <Feedbacks feedbacks={this.props.feedbacks}/>
                </Route>
              </Switch>
              <PaginationContainer /> 
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}


function mapStateToProps(state) {
  return {
    feedbacks: state.feedbacks,
    isFirstLoading: state.isFirstLoading,
  }
}


function mapDispatchToProps(dispatch) {
  return {
    onGetRealties() {
      dispatch(getRealties())
    },
    onGetFeedbacks() {
      dispatch(setFirstLoadingFalseAction())
      dispatch(getFeedbacks())  
    },
    setFirstLoadingFalse() {
      dispatch(setFirstLoadingFalseAction())
    },
    setFirstLoadingTrue() {
      dispatch(setFirstLoadingTrueAction())
    }
  }
}


export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(App)