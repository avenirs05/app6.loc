// Libs
import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import ReactMDE from 'redux-forms-markdown-editor'

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
  
  const updateBtn = useClickByHotKey('keydown', 'Escape')
 
  const submit = values => {
    feedbackUpdate(values)    
  }

  useEffect(() => {
  }, [])

  const textAreaStyle = { height: '10em' }
  const faqStyle = { height: '50em' }

  return (    
    <form className={FormCss.form} onSubmit={handleSubmit(submit)} >
      {/* Phone */}
      <div><Field name={f.phone_main.name} label={f.phone_main.label} component={renderTextField} /></div>
      
      {/* Header Main */}
      <div><Field name={f.header_main_ru.name} label={f.header_main_ru.label} component={renderTextField} /></div> 
      <div><Field name={f.header_main_en.name} label={f.header_main_en.label} component={renderTextField} /></div>
      
      {/* Areas - Titles */}
      <div><Field name={f.faq_areas_ru_title.name} label={f.faq_areas_ru_title.label} component={renderTextField} /></div>
      <div><Field name={f.faq_areas_en_title.name} label={f.faq_areas_en_title.label} component={renderTextField} /></div>
      <div><Field name={f.faq_areas_ru_bar_riviera_title.name} label={f.faq_areas_ru_bar_riviera_title.label} component={renderTextField} /></div>
      <div><Field name={f.faq_areas_en_bar_riviera_title.name} label={f.faq_areas_en_bar_riviera_title.label} component={renderTextField} /></div>
      <div><Field name={f.faq_areas_ru_budva_riviera_title.name} label={f.faq_areas_ru_budva_riviera_title.label} component={renderTextField} /></div>
      <div><Field name={f.faq_areas_en_budva_riviera_title.name} label={f.faq_areas_en_budva_riviera_title.label} component={renderTextField} /></div>
      <div><Field name={f.faq_areas_ru_boka_kotorska_bay_title.name} label={f.faq_areas_ru_boka_kotorska_bay_title.label} component={renderTextField} /></div>
      <div><Field name={f.faq_areas_en_boka_kotorska_bay_title.name} label={f.faq_areas_en_boka_kotorska_bay_title.label} component={renderTextField} /></div>
      
      {/* Areas Bar Riviera Text */}
      <div className="mb-4">
        <label className={muiFormLabelClass} data-shrink="true">
          {f.faq_areas_ru_bar_riviera_text.label}
        </label>
        <Field name={f.faq_areas_ru_bar_riviera_text.name} 
               textAreaStyle={textAreaStyle} 
               component={ReactMDE} 
               placeholder={f.faq_areas_ru_bar_riviera_text.label} />
      </div>      
      <div className="mb-4">
        <label className={muiFormLabelClass} data-shrink="true">
          {f.faq_areas_en_bar_riviera_text.label}
        </label>
        <Field name={f.faq_areas_en_bar_riviera_text.name} 
               textAreaStyle={textAreaStyle} 
               component={ReactMDE} 
               placeholder={f.faq_areas_en_bar_riviera_text.label} />
      </div>
      
      {/* Areas Budva Riviera Text */}
      <div className="mb-4">
        <label className={muiFormLabelClass} data-shrink="true">
          {f.faq_areas_ru_budva_riviera_text.label}
        </label>
        <Field name={f.faq_areas_ru_budva_riviera_text.name} 
               textAreaStyle={textAreaStyle} 
               component={ReactMDE} 
               placeholder={f.faq_areas_ru_budva_riviera_text.label} />
      </div>      
      <div className="mb-4">
        <label className={muiFormLabelClass} data-shrink="true">
          {f.faq_areas_en_budva_riviera_text.label}
        </label>
        <Field name={f.faq_areas_en_budva_riviera_text.name} 
               textAreaStyle={textAreaStyle} 
               component={ReactMDE} 
               placeholder={f.faq_areas_en_budva_riviera_text.label} />
      </div>

      {/* Areas Boka Kotorska Bay Text */}
      <div className="mb-4">
        <label className={muiFormLabelClass} data-shrink="true">
          {f.faq_areas_ru_boka_kotorska_bay_text.label}
        </label>
        <Field name={f.faq_areas_ru_boka_kotorska_bay_text.name} 
               textAreaStyle={textAreaStyle} 
               component={ReactMDE} 
               placeholder={f.faq_areas_ru_boka_kotorska_bay_text.label} />
      </div>    
      <div className="mb-4">
        <label className={muiFormLabelClass} data-shrink="true">
          {f.faq_areas_en_boka_kotorska_bay_text.label}
        </label>
        <Field name={f.faq_areas_en_boka_kotorska_bay_text.name} 
               textAreaStyle={textAreaStyle} 
               component={ReactMDE} 
               placeholder={f.faq_areas_en_boka_kotorska_bay_text.label} />
      </div>

      {/* Contact Page */}
      <div className="mb-4">
        <label className={muiFormLabelClass} data-shrink="true">
          {f.contact_page_ru.label}
        </label>
        <Field name={f.contact_page_ru.name} 
               textAreaStyle={textAreaStyle} 
               component={ReactMDE} 
               placeholder={f.contact_page_ru.label} />
      </div>

      {/* Questions and Answers */}
      <div className="mb-4">
        <label className={muiFormLabelClass} data-shrink="true">
          {f.faq_quest_answ_ru.label}
        </label>
        <Field name={f.faq_quest_answ_ru.name} 
               textAreaStyle={faqStyle} 
               component={ReactMDE} 
               placeholder={f.faq_quest_answ_ru.label} />
      </div>
      <div className="mb-4">
        <label className={muiFormLabelClass} data-shrink="true">
          {f.faq_quest_answ_en.label}
        </label>
        <Field name={f.faq_quest_answ_en.name} 
               textAreaStyle={faqStyle} 
               component={ReactMDE} 
               placeholder={f.faq_quest_answ_en.label} />
      </div>

      <div>
        <Button ref={updateBtn} 
                variant="primary" 
                type="submit" 
                disabled={pristine || submitting}>
          Сохранить
        </Button>
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
      phone_main: state.content.phone_main,
      header_main_ru: state.content.header_main !== undefined ? state.content.header_main.ru : '',
      header_main_en: state.content.header_main !== undefined ? state.content.header_main.en : '',
      faq_areas_ru_title: state.content.faq !== undefined ? state.content.faq.areas.ru.title : '',
      faq_areas_en_title: state.content.faq !== undefined ? state.content.faq.areas.en.title : '',
      faq_areas_ru_bar_riviera_title: state.content.faq !== undefined ? state.content.faq.areas.ru.bar_riviera.title : '',
      faq_areas_en_bar_riviera_title: state.content.faq !== undefined ? state.content.faq.areas.en.bar_riviera.title : '',      
      faq_areas_ru_budva_riviera_title: state.content.faq !== undefined ? state.content.faq.areas.ru.budva_riviera.title : '',
      faq_areas_en_budva_riviera_title: state.content.faq !== undefined ? state.content.faq.areas.en.budva_riviera.title : '',      
      faq_areas_ru_boka_kotorska_bay_title: state.content.faq !== undefined ? state.content.faq.areas.ru.boka_kotorska_bay.title : '',
      faq_areas_en_boka_kotorska_bay_title: state.content.faq !== undefined ? state.content.faq.areas.en.boka_kotorska_bay.title : '',      
      faq_areas_ru_bar_riviera_text: state.content.faq !== undefined ? state.content.faq.areas.ru.bar_riviera.text : '',
      faq_areas_en_bar_riviera_text: state.content.faq !== undefined ? state.content.faq.areas.en.bar_riviera.text : '',
      faq_areas_ru_budva_riviera_text: state.content.faq !== undefined ? state.content.faq.areas.ru.budva_riviera.text : '',
      faq_areas_en_budva_riviera_text: state.content.faq !== undefined ? state.content.faq.areas.en.budva_riviera.text : '',
      faq_areas_ru_boka_kotorska_bay_text: state.content.faq !== undefined ? state.content.faq.areas.ru.boka_kotorska_bay.text : '',
      faq_areas_en_boka_kotorska_bay_text: state.content.faq !== undefined ? state.content.faq.areas.en.boka_kotorska_bay.text : '', 
      contact_page_ru: state.content.contact_page !== undefined ? state.content.contact_page.ru : '', 
      faq_quest_answ_ru: state.content.faq !== undefined ? state.content.faq.quest_answ.ru : '',
      faq_quest_answ_en: state.content.faq !== undefined ? state.content.faq.quest_answ.en : '',
    },
    enableReinitialize: true,    
  }
}

function mapDispatchToProps(dispatch) {
  return {
    feedbackUpdate(values) {   
      //dispatch(feedbackUpdateAsync(values))      
    },
  }
}


export default compose(connect(mapStateToProps, mapDispatchToProps)(ContentEditForm))