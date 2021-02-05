import React, { useEffect, useRef } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import ReactMDE from 'redux-forms-markdown-editor'

// React Bootstrap
import Button from 'react-bootstrap/Button'

// Actions
import { feedbackCreateAsync } from '../actions/feedbackCreateAsync'

// Helpers
import { renderTextField, renderTextArea } from './formHelpers'

// Css Modules
import FormCss from './css/Form.module.css'

// Helpers
import { feedbackFields as f } from '../consts'
import { getModelFieldsList } from '../script'

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

let FeedbackCreateForm = props => {
  const { handleSubmit, pristine, submitting, classes, handleFeedbackCreate, formDataImages } = props

  const createBtn = useRef()
  useEffect(() => {     
    let listenerSaveKeydown = document.addEventListener('keydown', function(event) {
      if (event.key == 'Escape') {
        createBtn.current.click() 
      }     
    })
    return () => { 
      removeEventListener('keydown', listenerSaveKeydown) 
    }
  }, [])
  
  function submit(values) {     
    handleFeedbackCreate(values)
  }

  const muiFormLabelClass = "MuiFormLabel-root MuiInputLabel-root MuiInputLabel-animated MuiInputLabel-shrink MuiFormLabel-filled"

  return (
    <form className={FormCss.form} onSubmit={handleSubmit(submit)}>
      <div><Field name={f.author.name} label={f.author.label} component={renderTextField} /></div>
      <div><Field name={f.realty_id.name} label={f.realty_id.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.date.name} label={f.date.label} type="date" component={renderTextField} /></div>
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
        <Button className="mb-4" 
                ref={createBtn} 
                variant="primary" 
                type="submit"                 
                disabled={pristine || submitting}>
                Создать
        </Button>
      </div>
    </form>
  )
}


FeedbackCreateForm = reduxForm({
  form: 'createFeedback',
  validate
})(FeedbackCreateForm)


function mapStateToProps(state) {  
  return {
    formDataImages: state.formDataImages,
    initialValues: {
      [f.author.name]: f.author.default,
      [f.realty_id.name]: f.realty_id.default,
      [f.date.name]: f.date.default,
      [f.text.name]: f.text.default,
    },
    enableReinitialize: true,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleFeedbackCreate(values) {     
      dispatch(feedbackCreateAsync(values))
    },
  }
}


export default compose(connect(mapStateToProps, mapDispatchToProps)(FeedbackCreateForm))
