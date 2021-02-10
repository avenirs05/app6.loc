// React, Redux, Router 
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux'
import { NavLink, withRouter, Redirect } from "react-router-dom"

// Components
import RealtyEditForm from './RealtyEditForm';

// React Bootstrap
import Button from 'react-bootstrap/Button'

// Actions
import { realtyEditAsync } from '../actions/realtyEditAsync'


class RealtyEditPage extends Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {   
    this.props.handleRealtyEdit(this.props.match.params.id)        
  }

  render() {     
    return ( 
      this.props.isJustUpdatedResource ? 
      <Redirect to="/realties" /> :
      <>
        <NavLink to="/realties">
          <Button size="sm" variant="outline-secondary" className="mt-3 mb-3">Назад</Button>
        </NavLink> 
        <h3 className="mt-3 mb-4">{this.props.realtyEdit.name}</h3> 
        <RealtyEditForm />
      </>
    )  
  }
}  

function mapStateToProps(state) {
  return {
    realtyEdit: state.realtyEdit,
    isJustUpdatedResource: state.isJustUpdatedResource,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleRealtyEdit(id) {
      dispatch(realtyEditAsync(id))
    },
  }
}


export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(RealtyEditPage)