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
import { contentUpdateAsync } from '../actions/contentUpdateAsync'

// Helpers
import { contentFields as f, muiFormLabelClass } from '../consts'
import { renderTextField } from './formHelpers'
import { validate } from './helpers' 

// Hooks
import { useClickByHotKey } from './hooks'
      

let ContentEditForm = props => {
  const { handleSubmit, pristine, submitting, contentUpdate } = props
  
  const updateBtn = useClickByHotKey('keydown', 'Escape')
 
  const submit = values => {
    contentUpdate(values)    
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
      
      {/* FAQ - Title */}
      <div><Field name={f.faq_title_ru.name} label={f.faq_title_ru.label} component={renderTextField} /></div> 
      <div><Field name={f.faq_title_en.name} label={f.faq_title_en.label} component={renderTextField} /></div>

      {/* FAQ - Areas - Titles */}
      <div><Field name={f.faq_areas_ru_title.name} label={f.faq_areas_ru_title.label} component={renderTextField} /></div>
      <div><Field name={f.faq_areas_en_title.name} label={f.faq_areas_en_title.label} component={renderTextField} /></div>
      
      {/* FAQ - Areas Bar Riviera */}
      <div><Field name={f.faq_areas_ru_bar_riviera_title.name} label={f.faq_areas_ru_bar_riviera_title.label} component={renderTextField} /></div>
      <div><Field name={f.faq_areas_en_bar_riviera_title.name} label={f.faq_areas_en_bar_riviera_title.label} component={renderTextField} /></div>
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
      
      {/* FAQ - Areas Budva Riviera */}
      <div><Field name={f.faq_areas_ru_budva_riviera_title.name} label={f.faq_areas_ru_budva_riviera_title.label} component={renderTextField} /></div>
      <div><Field name={f.faq_areas_en_budva_riviera_title.name} label={f.faq_areas_en_budva_riviera_title.label} component={renderTextField} /></div>
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

      {/* FAQ - Areas Boka Kotorska Bay */}
      <div><Field name={f.faq_areas_ru_boka_kotorska_bay_title.name} label={f.faq_areas_ru_boka_kotorska_bay_title.label} component={renderTextField} /></div>
      <div><Field name={f.faq_areas_en_boka_kotorska_bay_title.name} label={f.faq_areas_en_boka_kotorska_bay_title.label} component={renderTextField} /></div>
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

      {/* FAQ - Questions and Answers */}
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
  validate: validate('content')
})(ContentEditForm)


function mapStateToProps(state) {  
  return {    
    initialValues: {
      // Phone
      [f.phone_main.name]: state.content.phone_main,
      
      // Header Main
      [f.header_main_ru.name]: state.content.header_main !== undefined ? state.content.header_main.ru : '',
      [f.header_main_en.name]: state.content.header_main !== undefined ? state.content.header_main.en : '',

      // FAQ - Title
      [f.faq_title_ru.name]: state.content.faq !== undefined ? state.content.faq.title.ru : '',
      [f.faq_title_en.name]: state.content.faq !== undefined ? state.content.faq.title.en : '',
      
      // FAQ - Areas - Titles
      [f.faq_areas_ru_title.name]: state.content.faq !== undefined ? state.content.faq.areas.ru.title : '',
      [f.faq_areas_en_title.name]: state.content.faq !== undefined ? state.content.faq.areas.en.title : '',           
      
      // FAQ - Areas Bar Riviera
      [f.faq_areas_ru_bar_riviera_title.name]: state.content.faq !== undefined ? state.content.faq.areas.ru.bar_riviera.title : '',
      [f.faq_areas_en_bar_riviera_title.name]: state.content.faq !== undefined ? state.content.faq.areas.en.bar_riviera.title : '',
      [f.faq_areas_ru_bar_riviera_text.name]: state.content.faq !== undefined ? state.content.faq.areas.ru.bar_riviera.text : '',
      [f.faq_areas_en_bar_riviera_text.name]: state.content.faq !== undefined ? state.content.faq.areas.en.bar_riviera.text : '',
      
      // FAQ - Areas Budva Riviera
      [f.faq_areas_ru_budva_riviera_title.name]: state.content.faq !== undefined ? state.content.faq.areas.ru.budva_riviera.title : '',
      [f.faq_areas_en_budva_riviera_title.name]: state.content.faq !== undefined ? state.content.faq.areas.en.budva_riviera.title : '',      
      [f.faq_areas_ru_budva_riviera_text.name]: state.content.faq !== undefined ? state.content.faq.areas.ru.budva_riviera.text : '',
      [f.faq_areas_en_budva_riviera_text.name]: state.content.faq !== undefined ? state.content.faq.areas.en.budva_riviera.text : '',
      
      // FAQ - Areas Boka Kotorska Bay
      [f.faq_areas_ru_boka_kotorska_bay_title.name]: state.content.faq !== undefined ? state.content.faq.areas.ru.boka_kotorska_bay.title : '',
      [f.faq_areas_en_boka_kotorska_bay_title.name]: state.content.faq !== undefined ? state.content.faq.areas.en.boka_kotorska_bay.title : '',  
      [f.faq_areas_ru_boka_kotorska_bay_text.name]: state.content.faq !== undefined ? state.content.faq.areas.ru.boka_kotorska_bay.text : '',
      [f.faq_areas_en_boka_kotorska_bay_text.name]: state.content.faq !== undefined ? state.content.faq.areas.en.boka_kotorska_bay.text : '', 
      
      // FAQ - Questions and Answers
      [f.faq_quest_answ_ru.name]: state.content.faq !== undefined ? state.content.faq.quest_answ.ru : '',
      [f.faq_quest_answ_en.name]: state.content.faq !== undefined ? state.content.faq.quest_answ.en : '',
      
      // Contact Page
      [f.contact_page_ru.name]: state.content.contact_page !== undefined ? state.content.contact_page.ru : '', 
    },
    enableReinitialize: true,    
  }
}

function mapDispatchToProps(dispatch) {
  return {
    contentUpdate(values) {        
      dispatch(contentUpdateAsync(values))      
    },
  }
}


export default compose(connect(mapStateToProps, mapDispatchToProps)(ContentEditForm))