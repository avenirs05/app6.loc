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
import { realtyEditAction } from '../actions/realtyEditAction'
import { realtyUpdateAction } from '../actions/realtyUpdateAction'
import { getRealtiesAsync } from '../actions/getRealtiesAsync'


class RealtyEdit extends Component {
  constructor(props) {
    super(props)
  }
  
  submit(values) {
    this.props.onUpdateRealty(values, this.props.fileList)    
  }

  componentDidMount() {   
    this.props.onRealtyEdit(this.props.match.params.id)     
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
    fileList: state.fileList,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onRealtyEdit(id) {
      dispatch(realtyEditAction(id))
    },
    getRealties(pageNumber) {
      dispatch(getRealtiesAsync(pageNumber))
    },
    onUpdateRealty(values, fileList) {    
      dispatch(realtyUpdateAction(values, fileList))      
    },
  }
}


export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(RealtyEdit)