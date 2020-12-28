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
import { getRealtyEdit } from '../actions/getRealtyEdit'


class RealtyEdit extends Component {
  constructor(props) {
    super(props)
  }
  
  submit(values) {
    console.log(values)
  }

  componentDidMount() {
    this.props.onGetRealtyEdit(this.props.match.params.id) 
  }

  render() {
    return (      
      <>
        <NavLink to="/realties">
          <Button size="sm" variant="outline-secondary" className="mt-3 mb-5">Назад</Button>
        </NavLink> 
        <EditForm onSubmit={this.submit}/>
      </>
    )
  }
}  

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {
    onGetRealtyEdit(id) {
      dispatch(getRealtyEdit(id))
    },
  }
}

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(RealtyEdit)