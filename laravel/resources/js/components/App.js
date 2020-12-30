// React, Redux, Router 
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Switch, Route, NavLink, useParams } from "react-router-dom";
import { withRouter } from "react-router";

// React Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'

// Actions
import { getRealtiesAction } from '../actions/getRealtiesAction';
import { getFeedbacksAction } from '../actions/getFeedbacksAction';
import { getImagesAction } from '../actions/getImagesAction';
import { setFirstLoadingTrueAction } from '../actions/setFirstLoadingTrueAction';
import { setFirstLoadingFalseAction } from '../actions/setFirstLoadingFalseAction';

// Components
import Realties from './Realties';
import Feedbacks from './Feedbacks';
import Images from './Images';
import RealtyShow from './RealtyShow';
import RealtyEdit from './RealtyEdit';
import NavbarContainer from './NavbarContainer';
import Test from './Test';

// Css Modules
import NavLinkCss from './css/NavLink.module.css';
import ListGroupCss from './css/ListGroup.module.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.imagesMenuItem = React.createRef()
    this.feedbacksMenuItem = React.createRef()
    this.realtiesMenuItem = React.createRef()
  }

  componentDidMount() {
    this.props.onGetRealties()
    this.props.setFirstLoadingTrue()
  }

  componentWillUpdate() {
    this.props.setFirstLoadingFalse()
  }

  makeCursorNotPointerIfActive(el) {
    if (el.current.className.match(/active/)) {
      el.current.style.cursor = 'text'
    } else el.current.style.cursor = 'pointer'
  }

  render() {
    return (
      <>
        <NavbarContainer />
        <Container fluid>
          <Row>
            <Col xs={2} style={{ paddingLeft: 0 }}>
              <ListGroup as="div" className={ListGroupCss.main}>
                <NavLink to="/realties"
                  className={NavLinkCss.main + ' ' + (this.props.isFirstLoading ? NavLinkCss.active : '')}
                  activeClassName={NavLinkCss.active}
                  onClick={this.props.onGetRealties}
                  ref={this.realtiesMenuItem}
                  onMouseOver={this.makeCursorNotPointerIfActive.bind(this, this.realtiesMenuItem)}>
                  Объекты
                </NavLink>
                <NavLink to="/feedbacks"
                  className={NavLinkCss.main}
                  activeClassName={NavLinkCss.active}
                  onClick={this.props.onGetFeedbacks}
                  ref={this.feedbacksMenuItem}
                  onMouseOver={this.makeCursorNotPointerIfActive.bind(this, this.feedbacksMenuItem)}>
                  Отзывы
                </NavLink>
                <NavLink to="/images"
                  className={NavLinkCss.main}
                  activeClassName={NavLinkCss.active}
                  onClick={this.props.onGetImages}
                  ref={this.imagesMenuItem}
                  onMouseOver={this.makeCursorNotPointerIfActive.bind(this, this.imagesMenuItem)}>
                  Изображения
                </NavLink>
              </ListGroup>
            </Col>
            <Col>
              <Switch>
                <Route children={<Realties />} exact path="/" />
                <Route children={<Realties />} exact path="/realties" />
                <Route children={<RealtyShow />} exact path="/realties/:id" />
                <Route children={<RealtyEdit />} exact path="/realties/:id/edit" />
                <Route children={<Feedbacks />} exact path="/feedbacks" />
                <Route children={<Images />} exact path="/images" />
                <Route children={<Test />} exact path="/test" />
              </Switch>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}


function mapStateToProps(state) {
  return {
    isFirstLoading: state.isFirstLoading,
  }
}


function mapDispatchToProps(dispatch) {
  return {
    onGetRealties() {
      dispatch(getRealtiesAction())
    },
    onGetFeedbacks() {
      dispatch(getFeedbacksAction())
    },
    onGetImages() {
      dispatch(getImagesAction())
    },
    setFirstLoadingFalse() {
      dispatch(setFirstLoadingFalseAction())
    },
    setFirstLoadingTrue() {
      dispatch(setFirstLoadingTrueAction())
    },
    onGetTests() {
      //console.log('test');
    },
  }
}


export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(App)