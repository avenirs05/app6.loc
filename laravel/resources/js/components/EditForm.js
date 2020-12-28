import React, { Component } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'


let EditForm = props => {
  return (    
    <form onSubmit={props.handleSubmit}>
      <div>
        <label htmlFor="name">Название объекта</label>
        <Field name="name" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="subname_ru">Описание краткое</label>
        <Field name="subname_ru" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="price">Цена</label>
        <Field name="price" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}



EditForm = reduxForm({
  form: 'edit',
})(EditForm)



function mapStateToProps(state) {
  return {
    initialValues: state.realtyEdit,
    enableReinitialize : true
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default compose(connect(mapStateToProps, mapDispatchToProps)(EditForm))
