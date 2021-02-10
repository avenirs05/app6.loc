// React, Redux, Router 
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux'
import { NavLink, withRouter, Redirect } from "react-router-dom"

// Components
import FeedbackCreateForm from './FeedbackCreateForm';

// React Bootstrap
import Button from 'react-bootstrap/Button'


class FeedbackCreatePage extends Component {
  constructor(props) {
    super(props)
  }
 
  render() {     
    return ( 
      this.props.isJustCreatedResource ? 
      <Redirect to="/feedbacks" /> :
      <>
        <NavLink to="/feedbacks">
          <Button size="sm" variant="outline-secondary" className="mt-3 mb-3">Назад</Button>
        </NavLink> 
        <h3 className="mt-3 mb-4">Добавление отзыва</h3> 
        <FeedbackCreateForm />
      </>
    )  
  }
}  

function mapStateToProps(state) {
  return {
    isJustCreatedResource: state.isJustCreatedResource
  }
}

function mapDispatchToProps(dispatch) { return {} }


export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(FeedbackCreatePage)