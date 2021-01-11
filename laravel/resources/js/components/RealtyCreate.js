// React, Redux, Router 
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux'
import { NavLink, withRouter, Redirect } from "react-router-dom"

// Components
import CreateForm from './CreateForm';

// React Bootstrap
import Button from 'react-bootstrap/Button'

// Actions
import { realtyCreateAction } from '../actions/realtyCreateAction'
import { realtyUpdateAction } from '../actions/realtyUpdateAction'
import { getRealtiesAction } from '../actions/getRealtiesAction'


class RealtyCreate extends Component {
  constructor(props) {
    super(props)
  }
  
  submit(values) {
    this.props.onRealtyCreate(values)   
  }

  componentDidMount() { }

  render() {     
    return ( 
      <>
        <NavLink to="/realties">
          <Button size="sm" variant="outline-secondary" className="mt-3 mb-3">Назад</Button>
        </NavLink> 
        <h3 className="mt-3 mb-4">Добавление объекта</h3> 
        <CreateForm onSubmit={this.submit.bind(this)}/>
      </>
    )  
  }
}  

function mapStateToProps(state) {
  return {
    // realtyCreate: state.realtyCreate,
    // realtyUpdate: state.realtyUpdate,
    // currentPage: state.realties.currentPage,
    // isAlertUpdateVisible: state.isAlertUpdateVisible,
    // isJustUpdatedRealty: state.isJustUpdatedRealty
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onRealtyCreate(values) {
      //console.log('create clicked')
      dispatch(realtyCreateAction(values))
    },
    // onGetRealties(pageNumber) {
    //   dispatch(getRealtiesAction(pageNumber))
    // },
    // onStoreRealty(values) {      
    //   dispatch(realtyUpdateAction(values, this.currentPage))      
    // },
  }
}


export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(RealtyCreate)