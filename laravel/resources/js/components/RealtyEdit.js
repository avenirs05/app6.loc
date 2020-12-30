// React, Redux, Router 
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux'
import { NavLink, withRouter, Redirect } from "react-router-dom"

//Redux Form
import { Field, reduxForm } from 'redux-form'

// Components
import EditForm from './EditForm';

// React Bootstrap
import Button from 'react-bootstrap/Button'

// Actions
import { realtyEditAction } from '../actions/realtyEditAction'
import { realtyStoreAction } from '../actions/realtyStoreAction'
import { getRealtiesAction } from '../actions/getRealtiesAction'
import { setBtnUpdateRealtyClickedTrueAction } from '../actions/setBtnUpdateRealtyClickedTrueAction'


class RealtyEdit extends Component {
  constructor(props) {
    super(props)
  }
  
  submit(values) {
    this.props.onStoreRealty(values)     
  }

  componentDidMount() {   
    this.props.onGetRealtyEdit(this.props.match.params.id)     
  }

  render() {     
      return ( 
          this.props.isBtnUpdateRealtyClicked ? 
          <Redirect to="/realties" /> :
        <>
          <NavLink to="/realties">
            <Button size="sm" variant="outline-secondary" className="mt-3 mb-3">Назад</Button>
          </NavLink> 
          <h3 className="mt-3 mb-4">{this.props.realtyEdit.name}</h3> 
          <EditForm onSubmit={this.submit.bind(this)}/>
        </>
      )  
  }
}  

function mapStateToProps(state) {
  return {
    realtyEdit: state.realtyEdit,
    realtyStore: state.realtyStore,
    currentPage: state.realties.currentPage,
    isBtnUpdateRealtyClicked: state.isBtnUpdateRealtyClicked
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onGetRealtyEdit(id) {
      dispatch(realtyEditAction(id))
    },
    onGetRealties(pageNumber) {
      dispatch(getRealtiesAction(pageNumber))
    },
    onStoreRealty(values) {      
      dispatch(realtyStoreAction(values, this.currentPage))      
    },
    setBtnUpdateRealtyClickedTrue() {
      dispatch(setBtnUpdateRealtyClickedTrueAction())
    }
  }
}


export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(RealtyEdit)