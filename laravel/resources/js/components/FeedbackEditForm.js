import React, { useEffect, useRef } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import ReactMDE from 'redux-forms-markdown-editor'

// React Bootstrap
import Button from 'react-bootstrap/Button'

// Css Modules
import FormCss from './css/Form.module.css'

// Actions
import { feedbackUpdateAsync } from '../actions/feedbackUpdateAsync'

// Helpers
import { feedbackFields as f } from '../consts'
import { renderTextField, 
         renderTextArea, 
         renderSelectField,
         toggleOption } from './formHelpers'
import { getModelFieldsList } from '../script' 


const muiFormLabelClass = 'MuiFormLabel-root MuiInputLabel-root MuiInputLabel-animated MuiInputLabel-shrink MuiFormLabel-filled'

const validate = values => {
  const errors = {}
  const requiredFields = getModelFieldsList(f)
 
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = eval(<span className={FormCss.error_text}>Обязательное поле!</span>)
    }
  })   

  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) { 
    errors.email = 'Недействительный email'
  }

  return errors
}
        

let FeedbackEditForm = props => {
  const { handleSubmit, 
          pristine, 
          submitting, 
          classes, 
          feedbackEdit, 
          handleFeedbackUpdate } = props
  
  const updateBtn = useRef()
  useEffect(() => {     
    let listenerSaveKeydown = document.addEventListener('keydown', function(event) {
      if (event.key == 'Escape') { 
        updateBtn.current.click()
      }      
    })
    return () => { removeEventListener('keydown', listenerSaveKeydown) }
  }, [])

 
  const submit = values => {
    handleFeedbackUpdate(values)    
  }


  return (    
    <form className={FormCss.form} onSubmit={handleSubmit(submit)} encType="multipart/form-data">
      <div><Field name={f.author.name} label={f.author.label} component={renderTextField} /></div>
      <div><Field name={f.realty_name.name} label={f.realty_name.label} component={renderTextField} disabled/></div> 
      <div><Field name={f.realty_id.name} label={f.realty_id.label} component={renderTextField} /></div>
      <div><Field name={f.date.name} label={f.date.label} component={renderTextField} /></div>
      <div>
        <Field name={f.text.name} 
               label={f.text.label} 
               labelClassName={muiFormLabelClass}
               textareaClassName={FormCss.textarea}
               component={renderTextArea} 
               rows="10" 
               cols="40" />
      </div>
      <div>
        <Button ref={updateBtn} variant="primary" type="submit" disabled={pristine || submitting}>Сохранить</Button>
      </div>
    </form>
  )
}


FeedbackEditForm = reduxForm({
  form: 'FeedbackEditForm',
  validate
})(FeedbackEditForm)


function mapStateToProps(state) {  
  return {
    initialValues: state.feedbackEdit,
    enableReinitialize: true,
    feedbackEdit: state.feedbackEdit
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleFeedbackUpdate(values) {    
      dispatch(feedbackUpdateAsync(values))      
    },
  }
}


export default compose(connect(mapStateToProps, mapDispatchToProps)(FeedbackEditForm))