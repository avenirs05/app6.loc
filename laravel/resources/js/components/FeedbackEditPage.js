// React, Redux, Router 
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux'
import { NavLink, withRouter, Redirect } from "react-router-dom"

// Components
import FeedbackEditForm from './FeedbackEditForm';

// React Bootstrap
import Button from 'react-bootstrap/Button'

// Actions
import { feedbackEditAsync } from '../actions/feedbackEditAsync'


class FeedbackEditPage extends Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {   
    this.props.feedbackEdit(this.props.match.params.id)            
  }

  render() {     
    return ( 
      this.props.isJustUpdatedResource ? 
      <Redirect to="/feedbacks" /> :
      <>
        <NavLink to="/feedbacks">
          <Button size="sm" variant="outline-secondary" className="mt-3 mb-3">Назад</Button>
        </NavLink> 
        <h3 className="mt-3 mb-4">Редактирование отзыва {this.props.feedbackEdit.author}</h3> 
        <FeedbackEditForm />
      </>
    )  
  }
}  

function mapStateToProps(state) {
  return {
    feedbackEdit: state.feedbackEdit,
    isJustUpdatedResource: state.isJustUpdatedResource,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    feedbackEdit(id) {
      dispatch(feedbackEditAsync(id))
    },
  }
}


export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(FeedbackEditPage)