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
import { getRealties } from '../actions/getRealties';
import { getFeedbacks } from '../actions/getFeedbacks';
import { getImages } from '../actions/getImages';
import { setFirstLoadingTrueAction } from '../actions/setFirstLoadingTrue';
import { setFirstLoadingFalseAction } from '../actions/setFirstLoadingFalse';

// Components
import Realties from './Realties';
import Feedbacks from './Feedbacks';
import Images from './Images';
import Realty from './Realty';
import NavbarContainer from './NavbarContainer';
import Test from './Test';

// Css Modules
import NavLinkCss from './css/NavLink.module.css';
import ListGroupCss from './css/ListGroup.module.css';

// My scripts
import { getPath } from '../script'

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
    //console.log(route('realties.index'));
    
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
                <NavLink to={getPath(route('realties.index'))}
                  className={NavLinkCss.main + ' ' + (this.props.isFirstLoading ? NavLinkCss.active : '')}
                  activeClassName={NavLinkCss.active}
                  onClick={this.props.onGetRealties}
                  ref={this.realtiesMenuItem}
                  onMouseOver={this.makeCursorNotPointerIfActive.bind(this, this.realtiesMenuItem)}>
                  Объекты
                </NavLink>
                <NavLink to={getPath(route('feedbacks.index'))}
                  className={NavLinkCss.main}
                  activeClassName={NavLinkCss.active}
                  onClick={this.props.onGetFeedbacks}
                  ref={this.feedbacksMenuItem}
                  onMouseOver={this.makeCursorNotPointerIfActive.bind(this, this.feedbacksMenuItem)}>
                  Отзывы
                </NavLink>
                <NavLink to={getPath(route('images.index'))}
                  className={NavLinkCss.main}
                  activeClassName={NavLinkCss.active}
                  onClick={this.props.onGetImages}
                  ref={this.imagesMenuItem}
                  onMouseOver={this.makeCursorNotPointerIfActive.bind(this, this.imagesMenuItem)}>
                  Изображения
                </NavLink>
                {/* <NavLink to="/admin/realties/4"
                  className={NavLinkCss.main}
                  activeClassName={NavLinkCss.active}
                  onClick={this.props.onGetTests}
                  >
                  Test
                </NavLink> */}
              </ListGroup>
            </Col>
            <Col>
              <Switch>
                <Route children={<Realties />} exact path={getPath(route('admin.index'))} />
                <Route children={<Realties />} exact path={getPath(route('realties.index'))} />
                <Route children={<Realty />} exact path={getPath(route('realties.index') + '/:id')} />
                <Route children={<Feedbacks />} exact path={getPath(route('feedbacks.index'))} />
                <Route children={<Images />} exact path={getPath(route('images.index'))} />
                <Route children={<Test />} exact path="/admin/test" />
              </Switch>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}


function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isFirstLoading: state.isFirstLoading,
  }
}


function mapDispatchToProps(dispatch) {
  return {
    onGetRealties() {
      dispatch(getRealties())
    },
    onGetFeedbacks() {
      dispatch(getFeedbacks())
    },
    onGetImages() {
      dispatch(getImages())
    },
    setFirstLoadingFalse() {
      dispatch(setFirstLoadingFalseAction())
    },
    setFirstLoadingTrue() {
      dispatch(setFirstLoadingTrueAction())
    },
    onGetTests() {
      console.log('test');
    },
  }
}


export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(App)