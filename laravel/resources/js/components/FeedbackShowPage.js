// React, Redux, Router 
import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { NavLink, withRouter } from "react-router-dom"

// React Bootstrap
import Button from 'react-bootstrap/Button'

// Actions
import { feedbackShowAsync } from '../actions/feedbackShowAsync'

// Helpers
import { feedbackFields as f } from '../consts'


const FeedbackShowPage = props => {
  useEffect(() => {
    props.feedbackShow(props.match.params.id)
  }, [])  

  return (      
    <>
      <NavLink to="/feedbacks">
        <Button size="sm" variant="outline-secondary" className="mt-3 mb-3">Назад</Button>
      </NavLink> 
      <p><b>{f.date.label}:</b> {props.feedbackShow.date}</p> 
      <p><b>{f.realty.label}:</b> {props.feedbackShow.realty.name}</p> 
      <p><b>{f.author.label}:</b> {props.feedbackShow.author}</p> 
      <p>{props.feedbackShow.text}</p>          
      
      <NavLink to="/feedbacks">
        <Button size="sm" variant="outline-secondary" className="mt-3 mb-5">Назад</Button>
      </NavLink> 
    </>
  )
  
}  

function mapStateToProps(state) {
  return {
    feedbackShow: state.feedbackShow,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    feedbackShow(id) {     
      dispatch(feedbackShowAsync(id))
    },
  }
}

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(FeedbackShowPage)