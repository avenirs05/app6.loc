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
  
  async componentDidMount() {   
    //this.props.feedbackEdit(this.props.match.params.id)      
    const response = await axios.get(route('content.get'));   
    console.log(response.data.phone_main);
       
  }

  render() {     
    return ( 
      <>
        <h3 className="mt-3 mb-4">Редактирование контента</h3> 
        {/* <FeedbackEditForm /> */}
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
    // feedbackEdit(id) {
    //   dispatch(feedbackEditAsync(id))
    // },
  }
}


export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(FeedbackEditPage)