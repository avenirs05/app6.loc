// React, Redux, Router 
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Switch, Route, NavLink } from "react-router-dom"
import { withRouter } from "react-router"

// React Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

// Actions
import { getRealtiesAsync } from '../actions/getRealtiesAsync'
import { getFeedbacksAsync } from '../actions/getFeedbacksAsync'
import { getImagesAsync } from '../actions/getImagesAsync'
import { setFirstLoadingTrueAC, setFirstLoadingFalseAC } from '../actions/ac/flagsAC'

// Components
import RealtiesPage from './RealtiesPage'
import FeedbacksPage from './FeedbacksPage'
import ImagesPage from './ImagesPage'
import RealtyShowPage from './RealtyShowPage'
import FeedbackCreatePage from './FeedbackCreatePage'
import FeedbackShowPage from './FeedbackShowPage'
import RealtyCreatePage from './RealtyCreatePage'
import RealtyEditPage from './RealtyEditPage'
import FeedbackEditPage from './FeedbackEditPage'
import NavbarContainer from './NavbarContainer'
import Test from './Test'

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
    this.props.getRealties()
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
                  className={NavLinkCss.main + ' ' + (this.props.location.pathname === '/' ? NavLinkCss.active : '')}
                  activeClassName={NavLinkCss.active}
                  onClick={this.props.getRealties}
                  ref={this.realtiesMenuItem}
                  onMouseOver={this.makeCursorNotPointerIfActive.bind(this, this.realtiesMenuItem)}>
                    Объекты
                </NavLink>
                <NavLink to="/feedbacks"
                  className={NavLinkCss.main}
                  activeClassName={NavLinkCss.active}
                  onClick={this.props.getFeedbacks}
                  ref={this.feedbacksMenuItem}
                  onMouseOver={this.makeCursorNotPointerIfActive.bind(this, this.feedbacksMenuItem)}>
                    Отзывы
                </NavLink>
                <NavLink to="/images"
                  className={NavLinkCss.main}
                  activeClassName={NavLinkCss.active}
                  onClick={this.props.getImages}
                  ref={this.imagesMenuItem}
                  onMouseOver={this.makeCursorNotPointerIfActive.bind(this, this.imagesMenuItem)}>
                    Изображения
                </NavLink>
              </ListGroup>
            </Col>
            <Col>
              <Switch>
                <Route children={<RealtiesPage />} exact path="/" />
                <Route children={<RealtiesPage />} exact path="/realties" />
                <Route children={<RealtyCreatePage />} exact path="/realties/create" />
                <Route children={<RealtyShowPage />} exact path="/realties/:id" />
                <Route children={<RealtyEditPage />} exact path="/realties/:id/edit" />
                <Route children={<FeedbacksPage />} exact path="/feedbacks" />
                <Route children={<FeedbackCreatePage />} exact path="/feedbacks/create" />
                <Route children={<FeedbackShowPage />} exact path="/feedbacks/:id" />
                <Route children={<FeedbackEditPage />} exact path="/feedbacks/:id/edit" />
                <Route children={<ImagesPage />} exact path="/images" />
                <Route children={<Test />} exact path="/test" />
              </Switch>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}


const mapStateToProps = state => ({
  isFirstLoading: state.isFirstLoading,
})


const mapDispatchToProps = dispatch => ({
  getRealties() {
    dispatch(getRealtiesAsync())
  },
  getFeedbacks() {
    dispatch(getFeedbacksAsync())
  },
  getImages() {
    dispatch(getImagesAsync())
  },
  setFirstLoadingFalse() {
    dispatch(setFirstLoadingFalseAC())
  },
  setFirstLoadingTrue() {
    dispatch(setFirstLoadingTrueAC())
  },
})


export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(App)