import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

// React Bootstrap
import Button from 'react-bootstrap/Button'

// Actions
import { feedbackCreateAsync } from '../actions/feedbackCreateAsync'

// Css Modules
import FormCss from './css/Form.module.css'

// Helpers
import { renderTextField, renderTextArea } from './formHelpers'
import { feedbackFields as f, muiFormLabelClass } from '../consts'
import { getFieldsForCreateFormAsDefault as getInitFields } from '../script'
import { validate } from './helpers' 

// Hooks
import { useClickByHotKey } from './hooks'


let FeedbackCreateForm = props => {
  const { handleSubmit, pristine, submitting, handleFeedbackCreate } = props

  const createBtn = useClickByHotKey('keydown', 'Escape')
  
  function submit(values) {     
    handleFeedbackCreate(values)
  }

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
  validate: validate('feedback')
})(FeedbackCreateForm)


function mapStateToProps(state) {  
  return {
    formDataImages: state.formDataImages,
    initialValues: getInitFields(f, 'inCreateFormAsDefault'),
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
