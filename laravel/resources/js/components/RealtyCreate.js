// React, Redux, Router 
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux'
import { NavLink, withRouter, Redirect } from "react-router-dom"

// Components
import CreateRealtyForm from './CreateRealtyForm';

// React Bootstrap
import Button from 'react-bootstrap/Button'

// Actions
import { getRealtiesAction } from '../actions/getRealtiesAction'


class RealtyCreate extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }
 
  submit(values) {  
    this.props.onRealtyCreate(values)
  }

  render() {     
    return ( 
      this.props.isJustCreatedRealty ? 
      <Redirect to="/realties" /> :
      <>
        <NavLink to="/realties">
          <Button size="sm" variant="outline-secondary" className="mt-3 mb-3">Назад</Button>
        </NavLink> 
        <h3 className="mt-3 mb-4">Добавление объекта</h3> 
        <CreateRealtyForm />
      </>
    )  
  }
}  

function mapStateToProps(state) {
  return {
    currentPage: state.realties.currentPage,
    isJustCreatedRealty: state.isJustCreatedRealty
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onGetRealties(pageNumber) {
      dispatch(getRealtiesAction(pageNumber))
    },
  }
}


export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(RealtyCreate)