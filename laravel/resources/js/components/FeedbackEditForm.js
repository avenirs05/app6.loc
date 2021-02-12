import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

// React Bootstrap
import Button from 'react-bootstrap/Button'

// Css Modules
import FormCss from './css/Form.module.css'

// Actions
import { feedbackUpdateAsync } from '../actions/feedbackUpdateAsync'

// Helpers
import { feedbackFields as f, muiFormLabelClass } from '../consts'
import { renderTextField, renderTextArea } from './formHelpers'
import { validate } from './helpers' 

// Hooks
import { useClickByHotKey } from './hooks'
      

let FeedbackEditForm = props => {
  const { handleSubmit, pristine, submitting, feedbackUpdate } = props
  
  const updateBtn = useClickByHotKey('keydown', 'Escape')
 
  const submit = values => {
    feedbackUpdate(values)    
  }

  return (    
    <form className={FormCss.form} onSubmit={handleSubmit(submit)} >
      <div><Field name={f.author.name} label={f.author.label} component={renderTextField} /></div>
      <div><Field name={f.realty_name.name} label={f.realty_name.label} component={renderTextField} disabled/></div> 
      <div><Field name={f.realty_id.name} label={f.realty_id.label} component={renderTextField} /></div>
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
        <Button ref={updateBtn} variant="primary" type="submit" disabled={pristine || submitting}>Сохранить</Button>
      </div>
    </form>
  )
}


FeedbackEditForm = reduxForm({
  form: 'FeedbackEditForm',
  validate: validate('feedback')
})(FeedbackEditForm)


function mapStateToProps(state) {  
  return {
    initialValues: state.feedbackEdit,
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


export default compose(connect(mapStateToProps, mapDispatchToProps)(FeedbackEditForm))