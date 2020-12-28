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
    // print the form values to the console
    //console.log(values)
  }

  componentDidMount() {
    this.props.onGetRealtyEdit(this.props.match.params.id)
    //console.log(this.props);    
  }

  componentDidUpdate() {
    console.log(this.props); 
    //console.log(this.props.form.contact.values);    
  }

  render() {
    return (      
      <>
        <NavLink to="/realties">
          <Button variant="secondary" className="mt-3 mb-4">Назад</Button>
        </NavLink> 
        <div>Hello</div>
        <EditForm onSubmit={this.submit}/>

        {/* <p><b>Название объекта:</b> {this.props.realtyEdit.name} </p> 
        <p><b>Описание краткое:</b> {this.props.realtyEdit.subname_ru}</p>  */}
        <NavLink to="/realties">
         <Button variant="secondary" className="mt-4">Назад</Button>
       </NavLink> 
      </>
    )
  }
}  

function mapStateToProps(state) {
  return {
    //realtyEdit: state.realtyEdit,
    // form: state.form,
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