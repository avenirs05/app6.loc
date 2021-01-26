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
import { validate, 
         renderTextField,  
         renderSelectField } from './formHelpers'

// Css Modules
import FormCss from './css/Form.module.css'

// Helpers
import { realtyFields as f } from '../consts'

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
        <Field name="type_ru" label={f.type_ru.label} classes={classes} component={renderSelectField}>          
          <option value={f.type_ru.options.apartment}>
            {f.type_ru.options.apartment}
          </option>          
          <option value={f.type_ru.options.villa}>
            {f.type_ru.options.villa}
          </option>         
        </Field>
      </div>
      <div>
        <Field name="type_en" label={f.type_en.label} classes={classes} component={renderSelectField}>          
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
        <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-animated MuiInputLabel-shrink MuiFormLabel-filled" data-shrink="true">
          {f.description_ru.label}
        </label>
        <Field name={f.description_ru.name} component={ReactMDE} placeholder={f.description_ru.label} />
      </div>
      <div className="mt-4">
        <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-animated MuiInputLabel-shrink MuiFormLabel-filled" data-shrink="true">
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
        <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-animated MuiInputLabel-shrink MuiFormLabel-filled" data-shrink="true">
          {f.main_image.label}
        </label>        
        <Field component={FileInput} name={f.main_image.name} imgType="main_image_create" multiple={false} />
      </div> 
      <div className="mb-4">        
        <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-animated MuiInputLabel-shrink MuiFormLabel-filled" data-shrink="true">
          {f.thumbnails.label}
        </label>        
        <Field component={FileInput} name={f.thumbnails.name} imgType="thumbnails_create" multiple={true}/>
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
      [f.visibility.name]: 'опубликовано',
      subname_ru: 'subname_ru',
      subname_en: 'subname_en',
      type_ru: 'апартамент',
      type_en: 'apartment',
      country_ru: 'Черногория',
      country_en: 'Montenegro',
      area_ru: 'Будванская ривьера',
      area_en: 'Budva Riviera',
      city_ru: 'Будва',
      city_en: 'Budva',
      view_ru: 'на море',
      view_en: 'sea',
      transfer_payment_ru: 'бесплатный',
      transfer_payment_en: 'free',
      internet_payment_ru: 'бесплатный',
      internet_payment_en: 'free',
      parking_payment_ru: 'бесплатный',
      parking_payment_en: 'free',
      description_ru: 'description_ru',   
      description_en: 'description_en',   
      map_html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.3632492036777!2d18.867321315101165!3d42.292113947382965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDE3JzMxLjYiTiAxOMKwNTInMTAuMiJF!5e0!3m2!1sru!2sru!4v1507902217396" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>',
      square: 10,
      bedrooms: 11,
      capacity: 12,
      price: 13,
      price_line_through: 14,
      price_jan: 15,
      price_feb: 16,
      price_mar: 17,
      price_apr: 18,
      price_may: 19,
      price_jun: 20,
      price_jul: 21,
      price_aug: 22,
      price_sep: 23,
      price_oct: 24,
      price_nov: 25,
      price_dec: 26,
      price_oct_apr: 27,
      booking_mark: 7.1,
      dist_sea: 28,
      dist_tivat: 29,
      dist_podg: 30,
      discount: 1,
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
