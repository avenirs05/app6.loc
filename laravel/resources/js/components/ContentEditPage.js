// React, Redux, Router 
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux'
import { withRouter } from "react-router-dom"

// Components
import ContentEditForm from './ContentEditForm';

// Actions
import { getContentAsync } from '../actions/getContentAsync'


class ContentEditPage extends Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {   
    this.props.getContent()       
  }

  render() {     
    return ( 
      <>
        <h3 className="mt-3 mb-4">Редактирование контента</h3> 
        <ContentEditForm />
      </>
    )  
  }
}  

function mapStateToProps(state) {
  return {
    isJustUpdatedResource: state.isJustUpdatedResource,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getContent() {
      dispatch(getContentAsync())  
    }
  }
}


export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(ContentEditPage)