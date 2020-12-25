// React, Redux, Router 
import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { NavLink, withRouter } from "react-router-dom"

// React Bootstrap
import Button from 'react-bootstrap/Button'

// Actions
import { getRealtyEdit } from '../actions/getRealtyEdit'


class RealtyEdit extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.onGetRealtyEdit(this.props.match.params.id)
  }

  render() {
    return (      
      <>
        <NavLink to="/realties">
          <Button variant="secondary" className="mt-3 mb-4">Назад</Button>
        </NavLink> 
        <p><b>Название объекта:</b> {this.props.realtyEdit.name} </p> 
        <p><b>Описание краткое:</b> {this.props.realtyEdit.subname_ru}</p> 
        <NavLink to="/realties">
         <Button variant="secondary" className="mt-4">Назад</Button>
       </NavLink> 
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
      dispatch(getRealtyEdit(id))
    },
  }
}

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(RealtyEdit)