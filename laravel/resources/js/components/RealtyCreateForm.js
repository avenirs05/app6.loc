import React, { useEffect, useRef } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import ReactMDE from 'redux-forms-markdown-editor'

// React Bootstrap
import Button from 'react-bootstrap/Button'

// Actions
import { realtyCreateAsync } from '../actions/realtyCreateAsync'

// Components
import FileInput from './FileInput';

// Helpers
import { renderTextField,  
         renderSelectField } from './formHelpers'

// Css Modules
import FormCss from './css/Form.module.css'

// Helpers
import { realtyFields as f } from '../consts'
import { getModelFieldsList } from '../script'

const validate = values => {
  const errors = {}
  const requiredFields = getModelFieldsList(f)

  requiredFields.forEach(field => {
    if (!values[field] && (field === 'description_ru' || field === 'description_en')) {
      errors[field] = eval(<span className={FormCss.error_text}>Описание — обязательное поле!</span>);
    } 
    else if (!values[field]) {
      errors[field] = 'Обязательное поле'
    }
  })   

  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) { 
    errors.email = 'Недействительный email'
  }
  if (String(values.booking_mark)[1] !== '.' || String(values.booking_mark).length > 3) {
    errors.booking_mark = "1 знак до запятой и 1 знак после запятой: 9.3 или 7.0. Разделитель - точка, а не запятая."
  }

  return errors
}

let RealtyCreateForm = props => {
  const { handleSubmit, pristine, submitting, classes, handleRealtyCreate, formDataImages } = props

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
    handleRealtyCreate(values, formDataImages)
  }

  const muiFormLabelClass = "MuiFormLabel-root MuiInputLabel-root MuiInputLabel-animated MuiInputLabel-shrink MuiFormLabel-filled"

  return (
    <form className={FormCss.form} onSubmit={handleSubmit(submit)} encType="multipart/form-data">
      <div><Field name={f.name.name} label={f.name.label} component={renderTextField} /></div>
      <div>
        <Field name={f.visibility.name} label={f.visibility.label} classes={classes} component={renderSelectField}>     
            <option value={f.visibility.options.published}>{f.visibility.options.published}</option>          
            <option value={f.visibility.options.hidden}>{f.visibility.options.hidden}</option>         
        </Field>
      </div>
      <div><Field name={f.subname_ru.name} label={f.subname_ru.label} component={renderTextField} /></div>
      <div><Field name={f.subname_en.name} label={f.subname_en.label} component={renderTextField} /></div>
      <div>
        <Field name={f.type_ru.name} label={f.type_ru.label} classes={classes} component={renderSelectField}>          
          <option value={f.type_ru.options.apartment}>
            {f.type_ru.options.apartment}
          </option>          
          <option value={f.type_ru.options.villa}>
            {f.type_ru.options.villa}
          </option>         
        </Field>
      </div>
      <div>
        <Field name={f.type_en.name} label={f.type_en.label} classes={classes} component={renderSelectField}>          
          <option value={f.type_en.options.apartment}>
            {f.type_en.options.apartment}
          </option>          
          <option value={f.type_en.options.villa}>
            {f.type_en.options.villa}
          </option>         
        </Field>
      </div>
      <div><Field name={f.country_ru.name} label={f.country_ru.label} component={renderTextField} /></div>
      <div><Field name={f.country_en.name} label={f.country_en.label} component={renderTextField} /></div>
      <div><Field name={f.area_ru.name} label={f.area_ru.label} component={renderTextField} /></div>
      <div><Field name={f.area_en.name} label={f.area_en.label} component={renderTextField} /></div>
      <div><Field name={f.city_ru.name} label={f.city_ru.label} component={renderTextField} /></div>
      <div><Field name={f.city_en.name} label={f.city_en.label} component={renderTextField} /></div>
      <div><Field name={f.view_ru.name} label={f.view_ru.label} component={renderTextField} /></div>
      <div><Field name={f.view_en.name} label={f.view_en.label} component={renderTextField} /></div>
      <div><Field name={f.transfer_payment_ru.name} label={`${f.transfer_payment_ru.label}. Текстовое поле. Можно писать и текст`} component={renderTextField} /></div>
      <div><Field name={f.transfer_payment_en.name} label={`${f.transfer_payment_en.label}. Текстовое поле. Можно писать и текст`} component={renderTextField} /></div>
      <div><Field name={f.internet_payment_ru.name} label={`${f.internet_payment_ru.label}. Текстовое поле. Можно писать и текст`} component={renderTextField} /></div>
      <div><Field name={f.internet_payment_en.name} label={`${f.internet_payment_en.label}. Текстовое поле. Можно писать и текст`} component={renderTextField} /></div>
      <div><Field name={f.parking_payment_ru.name} label={`${f.parking_payment_ru.label}. Текстовое поле. Можно писать и текст`} component={renderTextField} /></div>
      <div><Field name={f.parking_payment_en.name} label={`${f.parking_payment_en.label}. Текстовое поле. Можно писать и текст`} component={renderTextField} /></div>
      <div>
        <label className={muiFormLabelClass} data-shrink="true">
          {f.description_ru.label}
        </label>
        <Field name={f.description_ru.name} component={ReactMDE} placeholder={f.description_ru.label} />
      </div>
      <div className="mt-4">
        <label className={muiFormLabelClass} data-shrink="true">
          {f.description_en.label}
        </label>
        <Field name={f.description_en.name} component={ReactMDE} placeholder={f.description_en.label} />
      </div>
      <div><Field name={f.map_html.name} label={f.map_html.label} component={renderTextField} /></div>
      <div><Field name={f.square.name} label={f.square.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.bedrooms.name} label={f.bedrooms.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.capacity.name} label={f.capacity.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.price.name} label={f.price.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.price_line_through.name} label={f.price_line_through.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.price_jan.name} label={f.price_jan.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.price_feb.name} label={f.price_feb.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.price_mar.name} label={f.price_mar.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.price_apr.name} label={f.price_apr.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.price_may.name} label={f.price_may.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.price_jun.name} label={f.price_jun.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.price_jul.name} label={f.price_jul.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.price_aug.name} label={f.price_aug.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.price_sep.name} label={f.price_sep.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.price_oct.name} label={f.price_oct.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.price_nov.name} label={f.price_nov.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.price_dec.name} label={f.price_dec.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.price_oct_apr.name} label={f.price_oct_apr.label} type="number" component={renderTextField} /></div>
      <div>
        <Field 
          name={f.booking_mark.name} 
          label={f.booking_mark.label}           
          component={renderTextField} 
          InputProps={{
            inputProps: {
              step: 0.1,
              inputMode: "numeric",
              type: "number"
            }
          }}
        />
      </div>
      <div><Field name={f.dist_sea.name} label={f.dist_sea.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.dist_tivat.name} label={f.dist_tivat.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.dist_podg.name} label={f.dist_podg.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.discount.name} label={f.discount.label} type="number" component={renderTextField} /></div>      
      <div className="mb-4">        
        <label className={muiFormLabelClass} data-shrink="true">
          {f.main_image.label}
        </label>        
        <Field component={FileInput} 
               name={f.main_image.name} 
               imgType="main_image_create" 
               multiple={false} 
               saveBtnRef={createBtn.current}/>
      </div> 
      <div className="mb-4">        
        <label className={muiFormLabelClass} data-shrink="true">
          {f.thumbnails.label}
        </label>        
        <Field component={FileInput} 
               name={f.thumbnails.name} 
               imgType="thumbnails_create" 
               multiple={true} 
               saveBtnRef={createBtn.current} />
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


RealtyCreateForm = reduxForm({
  form: 'createRealty',
  validate
})(RealtyCreateForm)


function mapStateToProps(state) {  
  return {
    formDataImages: state.formDataImages,
    initialValues: {
      [f.visibility.name]: f.visibility.default,
      [f.subname_ru.name]: f.subname_ru.default,
      [f.subname_en.name]: f.subname_en.default,
      [f.type_ru.name]: f.type_ru.default,
      [f.type_en.name]: f.type_en.default,
      [f.country_ru.name]: f.country_ru.default,
      [f.country_en.name]: f.country_en.default,
      [f.area_ru.name]: f.area_ru.default,
      [f.area_en.name]: f.area_en.default,
      [f.city_ru.name]: f.city_ru.default,
      [f.city_en.name]: f.city_en.default,
      [f.view_ru.name]: f.view_ru.default,
      [f.view_en.name]: f.view_en.default,
      [f.transfer_payment_ru.name]: f.transfer_payment_ru.default,
      [f.transfer_payment_en.name]: f.transfer_payment_en.default,
      [f.internet_payment_ru.name]: f.internet_payment_ru.default,
      [f.internet_payment_en.name]: f.internet_payment_en.default,
      [f.parking_payment_ru.name]: f.parking_payment_ru.default,
      [f.parking_payment_en.name]: f.parking_payment_en.default,
      [f.description_ru.name]: f.description_ru.default,   
      [f.description_en.name]: f.description_en.default,   
      [f.map_html.name]: f.map_html.default,
      [f.square.name]: f.square.default,
      [f.bedrooms.name]: f.bedrooms.default,
      [f.capacity.name]: f.capacity.default,
      [f.price.name]: f.price.default,
      [f.price_line_through.name]: f.price_line_through.default,
      [f.price_jan.name]: f.price_jan.default,
      [f.price_feb.name]: f.price_feb.default,
      [f.price_mar.name]: f.price_mar.default,
      [f.price_apr.name]: f.price_apr.default,
      [f.price_may.name]: f.price_may.default,
      [f.price_jun.name]: f.price_jun.default,
      [f.price_jul.name]: f.price_jul.default,
      [f.price_aug.name]: f.price_aug.default,
      [f.price_sep.name]: f.price_sep.default,
      [f.price_oct.name]: f.price_oct.default,
      [f.price_nov.name]: f.price_nov.default,
      [f.price_dec.name]: f.price_dec.default,
      [f.price_oct_apr.name]: f.price_oct_apr.default,
      [f.booking_mark.name]: f.booking_mark.default,
      [f.dist_sea.name]: f.dist_sea.default,
      [f.dist_tivat.name]: f.dist_tivat.default,
      [f.dist_podg.name]: f.dist_podg.default,
      [f.discount.name]: f.discount.default,
    },
    enableReinitialize: true,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleRealtyCreate(values, formDataImages) {
      dispatch(realtyCreateAsync(values, formDataImages))
    },
  }
}


export default compose(connect(mapStateToProps, mapDispatchToProps)(RealtyCreateForm))
