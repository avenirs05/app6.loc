// React, Redux, Router 
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux'
import { NavLink, withRouter, Redirect } from "react-router-dom"

// Components
import EditRealtyForm from './EditRealtyForm';

// React Bootstrap
import Button from 'react-bootstrap/Button'

// Actions
import { realtyEditAsync } from '../actions/realtyEditAsync'
import { realtyUpdateAsync } from '../actions/realtyUpdateAsync'


class RealtyEdit extends Component {
  constructor(props) {
    super(props)
  }
  
  submit(values) {
    this.props.handleRealtyUpdate(values, this.props.formDataImages)    
  }

  componentDidMount() {   
    this.props.handleRealtyEdit(this.props.match.params.id)        
  }

  render() {     
    return ( 
      this.props.isJustUpdatedRealty ? 
      <Redirect to="/realties" /> :
      <>
        <NavLink to="/realties">
          <Button size="sm" variant="outline-secondary" className="mt-3 mb-3">Назад</Button>
        </NavLink> 
        <h3 className="mt-3 mb-4">{this.props.realtyEdit.name}</h3> 
        <EditRealtyForm onSubmit={this.submit.bind(this)} />
      </>
    )  
  }
}  

function mapStateToProps(state) {
  return {
    realtyEdit: state.realtyEdit,
    realtyUpdate: state.realtyUpdate,
    currentPage: state.realties.currentPage,
    isAlertUpdateVisible: state.isAlertUpdateVisible,
    isJustUpdatedRealty: state.isJustUpdatedRealty,
    formDataImages: state.formDataImages,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleRealtyEdit(id) {
      dispatch(realtyEditAsync(id))
    },
    handleRealtyUpdate(values, formDataImages) {    
      dispatch(realtyUpdateAsync(values, formDataImages))      
    },
  }
}


export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(RealtyEdit)