// React, Redux, Router 
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux'
import { NavLink, withRouter } from "react-router-dom"

//Redux Form
import { Field, reduxForm } from 'redux-form'

// Components
import EditForm from './EditForm';

// React Bootstrap
import Button from 'react-bootstrap/Button'

// Actions
import { realtyEditAction } from '../actions/realtyEditAction'
import { realtyStoreAction } from '../actions/realtyStoreAction'


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
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onGetRealtyEdit(id) {
      dispatch(realtyEditAction(id))
    },
    onStoreRealty(values) {      
      dispatch(realtyStoreAction(values))
    },
  }
}


export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(RealtyEdit)