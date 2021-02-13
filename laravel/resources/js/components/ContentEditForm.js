import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

// React Bootstrap
import Button from 'react-bootstrap/Button'

// Css Modules
import FormCss from './css/Form.module.css'

// Actions
//import { feedbackUpdateAsync } from '../actions/feedbackUpdateAsync'

// Helpers
import { contentFields as f, muiFormLabelClass } from '../consts'
import { renderTextField, renderTextArea } from './formHelpers'
import { validate } from './helpers' 

// Hooks
import { useClickByHotKey } from './hooks'
      

let ContentEditForm = props => {
  const { handleSubmit, pristine, submitting, feedbackUpdate } = props
  //let x = null;
  
  const updateBtn = useClickByHotKey('keydown', 'Escape')
 
  const submit = values => {
    feedbackUpdate(values)    
  }

  useEffect(() => {
    //props.initialize(props.initialValues)
    //typeof state.content.content.phone_main !== undefined ? :,
    //console.log(store.getState())
  }, [])

  return (    
    <form className={FormCss.form} onSubmit={handleSubmit(submit)} >
      <div><Field name={f.phone_main.name} label={f.phone_main.label} component={renderTextField} /></div>
      <div><Field name={f.header_main_ru.name} label={f.header_main_ru.label} component={renderTextField} /></div> 
      {/* <div><Field name={f.header_main_en.name} label={f.header_main_en.label} component={renderTextField} /></div> */}
      {/* <div><Field name={f.date.name} label={f.date.label} type="date" component={renderTextField} /></div>
      <div>
        <Field name={f.text.name} 
               label={f.text.label} 
               labelClassName={muiFormLabelClass}
               textareaClassName={FormCss.textarea}
               component={renderTextArea} 
               rows="10" 
               cols="40" />
      </div> */}
      <div>
        <Button ref={updateBtn} variant="primary" type="submit" disabled={pristine || submitting}>Сохранить</Button>
      </div>
    </form>
  )
}


ContentEditForm = reduxForm({
  form: 'ContentEditForm',
  validate: validate('feedback')
})(ContentEditForm)


function mapStateToProps(state) {  
  return {    
    initialValues: {
      phone_main: state.content.content.phone_main,
      header_main_ru: state.content.content.header_main !== undefined ? state.content.content.header_main.ru : '',
    },
    enableReinitialize: true,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    feedbackUpdate(values) {   
      dispatch(feedbackUpdateAsync(values))      
    },
  }
}


export default compose(connect(mapStateToProps, mapDispatchToProps)(ContentEditForm))