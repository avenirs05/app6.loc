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
import { realtyCreateAction } from '../actions/realtyCreateAction'
//import { realtyUpdateAction } from '../actions/realtyUpdateAction'
import { getRealtiesAction } from '../actions/getRealtiesAction'


class RealtyCreate extends Component {
  constructor(props) {
    super(props)
  }
  
  submit(values) {
    this.props.onRealtyCreate(values)   
  }

  // componentDidUpdate() {
  //   if (this.props.isJustCreatedRealty) {
  //     this.props.onGetRealties(this.props.currentPage)
  //   }
  // }

  render() {     
    return ( 
      this.props.isJustCreatedRealty ? 
      <Redirect to="/realties" /> :
      <>
        <NavLink to="/realties">
          <Button size="sm" variant="outline-secondary" className="mt-3 mb-3">Назад</Button>
        </NavLink> 
        <h3 className="mt-3 mb-4">Добавление объекта</h3> 
        <CreateRealtyForm onSubmit={this.submit.bind(this)}/>
      </>
    )  
  }
}  

function mapStateToProps(state) {
  return {
    // realtyCreate: state.realtyCreate,
    // realtyUpdate: state.realtyUpdate,
    currentPage: state.realties.currentPage,
    // isAlertUpdateVisible: state.isAlertUpdateVisible,
    isJustCreatedRealty: state.isJustCreatedRealty
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onRealtyCreate(values) {
      dispatch(realtyCreateAction(values))
    },
    onGetRealties(pageNumber) {
      dispatch(getRealtiesAction(pageNumber))
    },
    // onStoreRealty(values) {      
    //   dispatch(realtyUpdateAction(values, this.currentPage))      
    // },
  }
}


export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(RealtyCreate)