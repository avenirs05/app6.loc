import React, { Component } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { NavLink } from "react-router-dom"

// React Bootstrap
import Button from 'react-bootstrap/Button'

// Material UI
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'

// Css Modules
import FormCss from './css/Form.module.css'

const validate = values => {
  const errors = {}
  const requiredFields = [
    'name',
    'subname_ru'
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Обязательное поле'
    }
  })

  return errors
}


const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
    <TextField
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      fullWidth
      {...input}
      {...custom}
    />
  )

  
let EditForm = props => {
  const { handleSubmit, pristine, reset, submitting, classes } = props

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <Field
          name="name"
          component={renderTextField}
          label="Название"
        />
      </div>
      <div className="mb-4">
        <Field
          name="subname_ru"
          component={renderTextField}
          label="Описание краткое"
        />
      </div>
      <div className="mb-4">
        <Button variant="primary" type="submit" disabled={pristine || submitting}>Сохранить</Button>
      </div>
    </form>
  )
}


EditForm = reduxForm({
  form: 'edit',
  validate
})(EditForm)


function mapStateToProps(state) {
  return {
    initialValues: state.realtyEdit,
    enableReinitialize: true
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}


export default compose(connect(mapStateToProps, mapDispatchToProps)(EditForm))
