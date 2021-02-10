// React, Redux, Router 
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux'
import { NavLink, withRouter, Redirect } from "react-router-dom"

// Components
import RealtyCreateForm from './RealtyCreateForm';

// React Bootstrap
import Button from 'react-bootstrap/Button'


class RealtyCreatePage extends Component {
  constructor(props) {
    super(props)
  }
 
  render() {     
    return ( 
      this.props.isJustCreatedResource ? 
      <Redirect to="/realties" /> :
      <>
        <NavLink to="/realties">
          <Button size="sm" variant="outline-secondary" className="mt-3 mb-3">Назад</Button>
        </NavLink> 
        <h3 className="mt-3 mb-4">Добавление объекта</h3> 
        <RealtyCreateForm />
      </>
    )  
  }
}  

function mapStateToProps(state) {
  return {
    isJustCreatedResource: state.isJustCreatedResource
  }
}

function mapDispatchToProps(dispatch) { return {} }


export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(RealtyCreatePage)